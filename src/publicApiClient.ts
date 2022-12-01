import { AbstractClient } from './abstractClient';
import { CheckDomainClient, WhoAmIClient } from './general';
import { LicensesClient } from './licenses';
import { SubscriptionsClient } from './subscriptions';
import { CustomersClient } from './customers';
import { OrdersClient } from './orders';
import { ContactClient } from './contact';
import { CampaignClient } from './campaign';
import { ConsumptionClient } from './consumption';
import { StandardsClient } from './security/standards/standardsClient';
import { RegisterClient } from './security';

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractClient {
  constructor() {
    super();
  }

  /**
   * Creates a new {@link CustomersClient} instance and returns it
   * @returns {@link CustomersClient}
   */
  public getCustomersClient(): CustomersClient {
    return new CustomersClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link WhoAmIClient} instance and returns it
   * @returns {@link WhoAmIClient}
   */
  public getWhoamiClient(): WhoAmIClient {
    return new WhoAmIClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link LicensesClient} instance and returns it
   * @returns {@link LicensesClient}
   */
  public getLicensesClient(): LicensesClient {
    return new LicensesClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link CheckDomainClient} instance and returns it
   * @returns {@link CheckDomainClient}
   */
  public getCheckDomainClient(): CheckDomainClient {
    return new CheckDomainClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link SubscriptionsClient} instance and returns it
   * @returns {@link SubscriptionsClient}
   */
  public getSubscriptionsClient(): SubscriptionsClient {
    return new SubscriptionsClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link OrdersClient} instance and returns it
   * @returns {@link OrdersClient}
   */
  public getOrdersClient(): OrdersClient {
    return new OrdersClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getContactClient(): ContactClient {
    return new ContactClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  /**
   * Creates a new {@link ContactClient} instance and returns it
   * @returns {@link ContactClient}
   */
  public getCampaignClient(): CampaignClient {
    return new CampaignClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  public getConsumptionClient(): ConsumptionClient {
    return new ConsumptionClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  public getSecurityStandardsClient(): StandardsClient {
    return new StandardsClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }

  public getSecurityRegisterClient(): RegisterClient {
    return new RegisterClient()
      .setUrl(this.url)
      .setApiKey(this.apiKey)
      .setHeaders(this.headers);
  }
}

export default PublicApiClient;
