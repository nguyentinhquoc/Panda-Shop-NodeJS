import variantsModel from '../../models/variantsModel';
import productsModel from '../../models/productsModel';
import categoriesModel from '../../models/categoriesModel';
import accountModel from '../../models/accountModel';
import detaiOrderModel from '../../models/detaiOrderModel';
import uploadImg from '../../configs/uploadImages';


var HomeAdmin = (req, res) => {
    Promise.all([
            productsModel.countProductDash(),
            productsModel.countCategoryDash(),
            accountModel.accountTop7New(),
            productsModel.top10Sale(),
            detaiOrderModel.DetailOrderAdminDate()
        ])
        .then(([countProductDash, countCategoryDash, accountTop7New, top10Sale, DetailOrderAdminDate]) => {
            res.render('admin/home', {
                countProductDash: countProductDash,
                countCategoryDash: countCategoryDash,
                accountTop7New: accountTop7New,
                top10Sale: top10Sale,
                DetailOrderAdminDate: DetailOrderAdminDate
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
};
module.exports = {
    HomeAdmin,
}