const punto_de_venta = {};
const puntos_de_venta = [];

punto_de_venta["Nombre"];
punto_de_venta["NumeroPuntoDeVenta"];
punto_de_venta["Direccion"];
punto_de_venta["Telefono"];


function cargar_puntos_de_venta() {
    punto_de_venta.Nombre = "DISTRIBUIDORA 1";
    punto_de_venta.NumeroPuntoDeVenta = 1;
    punto_de_venta.Direccion = "Avenida Siempreviva 2041";
    punto_de_venta.Telefono = "4912-8274";
    puntos_de_venta.push (
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 2";
    punto_de_venta.NumeroPuntoDeVenta = 2;
    punto_de_venta.Direccion = "Avenida Caseros 928";
    punto_de_venta.Telefono = "4911-9287";
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 3";
    punto_de_venta.NumeroPuntoDeVenta = 3;
    punto_de_venta.Direccion = "Avenida Corrientes 1982";
    punto_de_venta.Telefono = "4912-5291";
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 4";
    punto_de_venta.NumeroPuntoDeVenta = 4;
    punto_de_venta.Direccion = "Avenida La Plata 421";
    punto_de_venta.Telefono = "4912-1234";
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono
        }
    );

    punto_de_venta.Nombre = "FALOPIN 5";
    punto_de_venta.NumeroPuntoDeVenta = 5;
    punto_de_venta.Direccion = "Avenida Saenz 583";
    punto_de_venta.Telefono = "4912-4321";
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono
        }
    );
}

cargar_puntos_de_venta();