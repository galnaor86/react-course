class AppConfig {
    private urlPrefix = 'http://localhost:3030/api/';

    public productsUrl = `${this.urlPrefix}products`
    public employeesUrl = `${this.urlPrefix}employees`
}

const appConfig = new AppConfig();

export default appConfig;