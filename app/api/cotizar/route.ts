import { NextResponse } from "next/server";

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

const BASE_ADDRESS =
  "Mansilla 967, Boulogne Sur Mer, San Isidro, Buenos Aires, Argentina";

const MENUS_ASADO = ["Menú La Fragua", "Menú Tradición", "Menú Tango"] as const;

type Servicio = "asado" | "pizzas";
type Turno = "mediodia" | "noche";

function getDistanceRecargo(distanceKm: number) {
  if (distanceKm <= 20) return 0;
  return Math.floor((distanceKm - 1) / 20) * 0.05;
}

function getPizzaVolumeRecargo(personas: number) {
  if (personas <= 20) return 0;
  return Math.floor((personas - 1) / 20) * 0.15;
}

async function geocodeAddress(address: string) {
  if (!MAPBOX_TOKEN) {
    throw new Error("Falta MAPBOX_TOKEN en .env.local");
  }

  const endpoint = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
    address
  )}&limit=1&language=es&country=AR&access_token=${MAPBOX_TOKEN}`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudo geocodificar la dirección.");
  }

  const data = await response.json();
  const feature = data?.features?.[0];

  if (!feature?.geometry?.coordinates) {
    throw new Error("No se encontró una ubicación válida para esa dirección.");
  }

  const [lng, lat] = feature.geometry.coordinates as [number, number];

  return {
    lng,
    lat,
    fullAddress: feature.properties?.full_address || address,
  };
}

async function getDrivingDistanceKm(
  origin: { lng: number; lat: number },
  destination: { lng: number; lat: number }
) {
  if (!MAPBOX_TOKEN) {
    throw new Error("Falta MAPBOX_TOKEN en .env.local");
  }

  const coordinates = `${origin.lng},${origin.lat};${destination.lng},${destination.lat}`;
  const endpoint = `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates}?geometries=geojson&overview=false&steps=false&access_token=${MAPBOX_TOKEN}`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No se pudo calcular la ruta.");
  }

  const data = await response.json();
  const route = data?.routes?.[0];

  if (!route?.distance) {
    throw new Error("No se pudo calcular la distancia.");
  }

  return route.distance / 1000;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      servicio,
      personas,
      fecha,
      direccionEvento,
      menuAsado,
      variedadesPizza,
      nombre,
      telefono,
      mail,
      evento,
      turno,
    } = body as {
      servicio: Servicio;
      personas: number;
      fecha: string;
      direccionEvento: string;
      menuAsado?: string;
      variedadesPizza?: string[];
      nombre: string;
      telefono: string;
      mail: string;
      evento: string;
      turno: Turno;
    };

    if (!servicio || !["asado", "pizzas"].includes(servicio)) {
      return NextResponse.json({ error: "Servicio inválido." }, { status: 400 });
    }

    if (!Number.isFinite(personas) || personas <= 0) {
      return NextResponse.json(
        { error: "Cantidad de personas inválida." },
        { status: 400 }
      );
    }

    if (servicio === "asado" && personas < 15) {
      return NextResponse.json(
        { error: "El mínimo para asado es de 15 personas." },
        { status: 400 }
      );
    }

    if (servicio === "pizzas" && personas < 10) {
      return NextResponse.json(
        { error: "El mínimo para pizzas es de 10 personas." },
        { status: 400 }
      );
    }

    if (!fecha || !direccionEvento || !nombre || !telefono || !mail || !evento || !turno) {
      return NextResponse.json(
        { error: "Faltan completar campos obligatorios." },
        { status: 400 }
      );
    }

    if (servicio === "asado") {
      if (!menuAsado || !MENUS_ASADO.includes(menuAsado as (typeof MENUS_ASADO)[number])) {
        return NextResponse.json(
          { error: "Menú de asado inválido." },
          { status: 400 }
        );
      }
    }

    if (servicio === "pizzas") {
      if (!Array.isArray(variedadesPizza) || variedadesPizza.length === 0) {
        return NextResponse.json(
          { error: "Tenés que elegir al menos una variedad." },
          { status: 400 }
        );
      }

      if (variedadesPizza.length > 4) {
        return NextResponse.json(
          { error: "Podés elegir hasta 4 variedades." },
          { status: 400 }
        );
      }
    }

    const origin = await geocodeAddress(BASE_ADDRESS);
    const destination = await geocodeAddress(direccionEvento);
    const distanceKm = await getDrivingDistanceKm(origin, destination);

    const recargoDistancia = getDistanceRecargo(distanceKm);

    let subtotal = 0;
    let total = 0;
    let pizzasTotales = 0;
    let recargoVolumen = 0;

    if (servicio === "asado") {
      subtotal = personas * 1000;
      total = subtotal * (1 + recargoDistancia);
    } else {
      pizzasTotales = personas * 0.75;
      subtotal = pizzasTotales * 100;
      recargoVolumen = getPizzaVolumeRecargo(personas);
      total = subtotal * (1 + recargoDistancia + recargoVolumen);
    }

    return NextResponse.json({
      ok: true,
      servicio,
      personas,
      fecha,
      evento,
      turno,
      direccionEvento: destination.fullAddress,
      distanceKm,
      recargoDistancia,
      recargoVolumen,
      subtotal,
      total,
      pizzasTotales,
      menuAsado: servicio === "asado" ? menuAsado : null,
      variedadesPizza: servicio === "pizzas" ? variedadesPizza : [],
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Ocurrió un error inesperado.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}