import { buildUseCases } from "./composition";
import { createAcervoTables } from "./modules/acervo";
import { createAutoriaTables } from "./modules/autoria";
import { createCirculacaoTables } from "./modules/circulacao";
import { createServer } from "./server";

createAutoriaTables();
createAcervoTables();
createCirculacaoTables();

const server = createServer(buildUseCases());

console.log(`Servidor executando em http://localhost:${server.port}`);
