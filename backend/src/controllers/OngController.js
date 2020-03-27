const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};


/**
 * Metodo Http:
 * Get quando Busca ou listar uma informação do back-end.
 * Post: Criar uma informação no back-end.
 * Put: Altera uma informação no back-end.
 * Delete: Deletar uma informção no back-end 
 * 
 * Tipos de Parâmetro
 * Query Params: Parâmetro nomeados enviado na rota após o simbolo de interrogação (?) {Filtros, paginação} 
 * Rote Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */