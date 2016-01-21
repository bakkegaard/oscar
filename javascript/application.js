var application_js= {};

application_js.convert_result = function (result) {
    var current_cat = result[0].category;
    var res = {};
    var temp = [];
    for(var i = 0; i < result.length; i++) {
        if(current_cat != result[i].category) {
            res[current_cat] = temp;
            current_cat = result[i].category;
            temp = [];
            temp.push(result[i]);
        }
        else {
            temp.push(result[i]);
        }
    }
    res[current_cat] = temp;
    return res
};

module.exports = application_js;
