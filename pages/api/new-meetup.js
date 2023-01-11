// /api/new-meetup <- api url
function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        const { title, image, address, description } = data;
        // store them in DB
    }
}
export default handler;