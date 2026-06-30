/*
    Resolvé las 10 funciones declaradas en este archivo con el menor código posible, aprovechando las ventajas de las funciones de orden superior y la sintaxis de ES6 con JavaScript.

    En el archivo 'data.js' se encuentra una variable global que contiene un array de países sudamericanos. Tené en cuenta la estructura de cada objeto país para resolver lo pedido.
*/

// Función de ejemplo, operando sobre la variable 'data' declarada en el archivo homónimo
const cantPaises = () => data.length;

// 1
const imprimirPaises = () => {
    /* Debe imprimir la info de todos los países (solo su nombre común y su capital) */
    data.map(
        (objPais) => {
            console.log ( 
                { 
                    nombre: objPais.name.common, 
                    capital: objPais.capital
                }  
            )
        }
    );
}

// 2
const nombresDePaises = () => {
    /* Debe retornar un array con los nombres oficiales de cada país */
    return data.reduce((nombresVec, objPais) =>
        {
            nombresVec.push(objPais.name.official);
            return nombresVec;
        }, []
    );
}

// 3
const nombresDeCapitales = () => {
    /* Debe retornar un array con los nombres de las capitales de cada país */
    return data.reduce((vecNomsCapitales, objPais) =>
        {
            vecNomsCapitales.push(objPais.capital);
            return vecNomsCapitales;
        }, []
    );
}

// 4
const poblacionTotal = () => {
    /* Debe retornar la población total de Sudamérica */
    return data.reduce((acuPoblacion, objPais) =>
        {
            acuPoblacion += objPais.population;
            return acuPoblacion;
        }, 0
    );
}

// 5
const poblacionTotalMundialSinSud = (poblMundial) => {
    /* Debe retornar la población total mundial (llega por parámetro) sin reutilizar la función 'poblacionTotal', más bien restando sucesivamente la población de cada país a la población mundial */
    return data.filter((objPais) => 
            (!objPais.continents.includes("South America"))
        ).reduce((acuPoblacion, objPais) =>
            {
                acuPoblacion += objPais.population;
                return acuPoblacion;
            }, 0
    );
}

// 6
const todosEmpiezanLosLunes = () => {
    /* Debe retornar si todos los países inician la semana los días lunes (monday) */
    return data.reduce((boolTodos ,objPais) => 
        {
            const empiezaLunes = objPais.startOfWeek == "monday";
            boolTodos = boolTodos && empiezaLunes;
            return boolTodos;
        }, true
    );
}

// 7
const algunoNoConducePorLaDerecha = () => {
    /* Debe retornar si en alguno de los países no se conduce por la derecha (right) */
    return data.reduce((boolTodos ,objPais) => 
        {
            const conduceXDerecha = objPais.car.side == "right";
            boolTodos = boolTodos && conduceXDerecha;
            return boolTodos;
        }, true
    );
}

// 8
const cualesNoConducenPorLaDerecha = () => {
    /* Debe retornar a los países donde no se conduce por la derecha (right) */
    return data.filter((objPais) => (objPais.car.side != "right"));
}

// 9
const cualesNoConducenPorLaDerechaSimpl = () => {
    /* Debe retornar solo los nombres comunes de los países donde no se conduce por la derecha (right) */
        return data.filter((objPais) => (objPais.car.side != "right")
        ).map((objPais) => objPais.name.common)

}

// 10
const paisesQueLimitanConArgentina = () => {
    /* Debe retornar solo los nombres comunes de los países que limitan con Argentina */
    /* WARNING: Hay países que no tienen esa info. A tenerlo en cuenta para evitar errores */
    return data.filter((objPais) => (objPais.borders?.includes("ARG"))
        ).map((objPais) => objPais.name.common);
}