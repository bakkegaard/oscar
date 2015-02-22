var application_js= {};

application_js.convert_result = function (result) {
    current_cat = result[0].kategori;
    res = {};
    temp = [];
    for(var i = 0; i < result.length; i++) {
        if(current_cat != result[i].kategori) {
            res[current_cat] = temp;
            current_cat = result[i].kategori;
            temp = [];
            temp.push(result[i]);
        }
        else {
            temp.push(result[i]);
        }
    }
    return res;
}

module.exports = application_js;

