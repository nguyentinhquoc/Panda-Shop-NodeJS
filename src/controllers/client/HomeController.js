import productsModel from '../../models/productsModel';

var home = (req, res) => {
    Promise.all([
            productsModel.top10New(),
            productsModel.top10Sale(),
        ])
        .then(([top10New, top10Sale]) => {
            res.render('client/home', {
                top10New: top10New,
                top10Sale: top10Sale,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
}
module.exports = {
    home
}