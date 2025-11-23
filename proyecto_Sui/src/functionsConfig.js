export const FUNCTIONS = [
    {
        titulo: "Ver Nombre del Clan",
        descripcion: "Consultar el nombre registrado del clan de Warzone",
        nombreFuncion: "ver_nombre",
        soloLectura: "1",
        inputs: []
    },

    {
        titulo: "Registrar Nuevo Jugador",
        descripcion: "Agregar un nuevo jugador al clan con rango inicial Recluta.",
        nombreFuncion: "agregar_cliente",
        soloLectura: "0",
        inputs: [
            { name: "nombre_cliente", type: "string", label: "Gamertag del Jugador" },
            { name: "direccion_facturacion", type: "string", label: "Región/Server" },
            { name: "ano_de_registro", type: "u8", label: "Temporada de Ingreso (ej. 6)" },
            { name: "id_cliente", type: "u16", label: "ID Único de Jugador" }
        ]
    },
    {
        titulo: "Agregar Especialización",
        descripcion: "Añadir una especialización o loadout al perfil del jugador.",
        nombreFuncion: "agregar_servicio",
        soloLectura: "0",
        inputs: [
            { name: "id_cliente", type: "u16", label: "ID del Jugador" },
            { name: "servicio", type: "string", label: "Especialización/Loadout" }
        ]
    },
    {
        titulo: "Ascender a Rango Élite",
        descripcion: "Promover jugador a rango Élite (beneficios de clan).",
        nombreFuncion: "cambiar_nivel_a_oro",
        soloLectura: "0",
        inputs: [
            { name: "id_cliente", type: "u16", label: "ID del Jugador" }
        ]
    },
    {
        titulo: "Consultar Beneficios de Rango",
        descripcion: "Ver beneficios disponibles según el rango del jugador",
        nombreFuncion: "aplicar_descuento",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID del Jugador"}
        ]
    },
    {
        titulo: "Estadísticas del Jugador",
        descripcion: "Ver estadísticas y perfil completo del jugador",
        nombreFuncion: "ver_estado_cliente",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID del Jugador"}
        ]
    },
    {
        titulo: "Expediente Completo",
        descripcion: "Consultar toda la información del jugador",
        nombreFuncion: "retornar_todo",
        soloLectura: "1",
        inputs: [
            {name: "id_cliente", type:"u16", label: "ID del Jugador"}
        ]
    }
];