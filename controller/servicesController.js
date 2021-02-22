class ServicesController {
  
  constructor() {}
  //services
  index(request, response) {
    response.status(200).json({ msn: "HOLA MUNDO DESDE REST" });
  };

  test(request,response){
    const data = request.body;
    request.body["msn"] = "Por el servidor";
    response.status(200).json(data);
  }

  divisa(request, response){
    var divisa = {
      CAD: 1.3256384622,
      HKD: 7.8401345088,
      ISK: 124.6932654731,
      PHP: 52.1294192493,
      DKK: 6.7855130419,
      HUF: 304.6169226575,
      CZK: 23.5135872035,
      GBP: 0.8011724075,
      RON: 4.3155503045,
      SEK: 9.7030809779,
      IDR: 14112.4965918386,
      INR: 70.9474688721,
      BRL: 4.1587748796,
      RUB: 63.6425520313,
      HRK: 6.7290738889,
      JPY: 107.6524584204,
      THB: 30.5643915296,
      CHF: 0.988639462,
      EUR: 0.9088430428,
      MYR: 4.1814959556,
      BGN: 1.7775152231,
      TRY: 5.6850858857,
      CNY: 7.1070617104,
      NOK: 9.0179950922,
      NZD: 1.583931655,
      ZAR: 14.868581296,
      USD: 1,
      MXN: 19.4398800327,
      SGD: 1.3764427883,
      AUD: 1.471326002,
      ILS: 3.5040443515,
      KRW: 1193.9107516132,
      PLN: 3.9819140234,
      BO: 6.96
      };
    const data = request.body;
    let value=data["valor"];
    let DivOriginal = divisa[data["DO"]];
    let DivChange = divisa[data["DC"]];
    let result = (value/DivOriginal)/DivChange;
    response.status(200).json("el cambio es "+result);
  }

  interes(request, response){
    const data = request.body;
    let monto = data["monto"];
    let interes = data["interes"];
    let tiempo = data["tiempo"];
    let pago = monto*(interes/100)*tiempo;
    response.status(200).json("El monto a pagar: "+pago);
  }
}
export default ServicesController;
