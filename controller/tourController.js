const tourModel = require('./../model/tourModel');

exports.getAllTours = async (req, res, next) => {
    try {
        const Tours = await tourModel.find();
        // console.log(Tours[0]);
        res.status(200).render('AllTours', { Tours });
    }
    catch (err) {
        console.log('error occured :(');
        res.status(500).json({
            status: "Fail",
            "EroorMessage": err
        })
    }

}



exports.getTour = async (req, res, next) => {
    try {
        const Tour = await tourModel.findById(req.params.id);
        let arr = Array(3);
        let flag = false
        arr[0] = (Tour.Ranking + 1) % 15;
        arr[1] = (Tour.Ranking + 2) % 15;
        arr[2] = (Tour.Ranking + 3) % 15;
        arr = arr.map(el => {
            if (el == 0 || flag)
                flag = true
            return el + 1;
            return el;
        })
        const Tours = await tourModel.find({ 'Ranking': arr });
        // console.log(Tours, arr);
        res.status(200).render('SingleTour', { Tour, Tours })
    }
    catch (err) {
        console.log('error occured :(');
        res.status(500).json({
            status: "Fail",
            "EroorMessage": err
        })
    }
}

exports.getTopTwoRoutes = async (req, res, next) => {
    try {
        let Tour = await tourModel.find({ 'Ranking': [1, 2] });
        // Tour.push(await tourModel.findOne({ 'Ranking': 2 }))
        res.status(200).render('AllTours');
    }
    catch (err) {
        console.log('error occured :(');
        // console.log(err);
        res.status(500).json({
            status: "Fail",
            "EroorMessage": err
        })
    }
}

exports.index = async (req, res, next) => {
    try {
        const Tours = await tourModel.find({ 'Ranking': [1, 2, 3] })
        console.log(Tours);
        res.status(200).render('index', { Tours });
    }
    catch (err) {
        console.log('error occured :(');
        // console.log(err);
        res.status(500).json({
            status: "Fail",
            "EroorMessage": err
        })
    }
}