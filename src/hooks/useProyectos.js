import { useQuery } from "graphql-hooks";

const useProyectos = () => {
    const QUERY_PROYECTOS = `
            {
            allProyectos(orderBy: _createdAt_ASC) {
            nombre
            linkarepo
            linkasitio
            tecnologias
            }
        }
    `;
    

        const data = useQuery(QUERY_PROYECTOS);

            console.log("data exite");
            return data.allProyectos.map(proyecto => ({
                nombre: proyecto.titulo,
                id: proyecto.titulo,
                linkarepo: proyecto.linkarepo,
                linkasitio: proyecto.linkasitio,
                tecnologias: proyecto.tecnologias
            }));
            // guardarProducto(producto.data());
            // guardarConsultar(false);



    
    
}
 
export default useProyectos;