import variantsModel from '../../models/variantsModel';
import productsModel from '../../models/productsModel';
import categoriesModel from '../../models/categoriesModel';
import accountModel from '../../models/accountModel';
import detaiOrderModel from '../../models/detaiOrderModel';
import uploadImg from '../../configs/uploadImages';


var HomeAdmin = (req, res) => {
    Promise.all([
            detaiOrderModel.DetailOrderAdminDateTc(),
            detaiOrderModel.DetailOrderAdminDateTb(),
            productsModel.countProductDash(),
            productsModel.countCategoryDash(),
            accountModel.accountTop7(),
            productsModel.top10Sale(),
            detaiOrderModel.DetailOrderAdminDate(),
            accountModel.CountAccountAll(),
            accountModel.CountAccountOnline(),
        ])
        .then(([DetailOrderAdminDateTc, DetailOrderAdminDateTb, countProductDash, countCategoryDash, accountTop7, top10Sale, DetailOrderAdminDate, CountAccountAll, CountAccountOnline]) => {
            res.render('admin/home', {
                DetailOrderAdminDateTc: DetailOrderAdminDateTc,
                DetailOrderAdminDateTb: DetailOrderAdminDateTb,
                countProductDash: countProductDash,
                countCategoryDash: countCategoryDash,
                accountTop7: accountTop7,
                top10Sale: top10Sale,
                DetailOrderAdminDate: DetailOrderAdminDate,
                CountAccountAll: CountAccountAll,
                CountAccountOnline: CountAccountOnline,
            })
        })
        .catch((error) => {
            console.error('ERROR:', error);
        });
};
module.exports = {
    HomeAdmin,
}