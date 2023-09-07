class AppConfig {
    private urlPrefix = 'http://localhost:3030/api/';

    public productsUrl = `${this.urlPrefix}products`;
    public topProductsUrl = `${this.urlPrefix}products/top-three`;
    public outOfStockProductsUrl = `${this.urlPrefix}products/out-of-stock`;
    public employeesUrl = `${this.urlPrefix}employees`;
    public registerUrl = `${this.urlPrefix}register`;
    public loginUrl = `${this.urlPrefix}login`;
}

const appConfig = new AppConfig();

export default appConfig;