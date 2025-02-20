import { ContactsType } from './contact';
import { CountryType } from './country';
import { PartnertagType } from './partnertag';
import { SubscriptionType } from './subscription';
import { WorkgroupType } from './workgroup';

export type CompanyTypeType = {
  id?: number;
  type?: string;
};

type BaseCompanyType = {
  acronym?: string;
  address1?: string;
  address2?: string;
  billingId?: string;
  city?: string;
  contacts?: ContactsType[];
  createdAt?: string;
  deletedAt?: string;
  enabled?: boolean;
  erpId?: string;
  id?: number;
  internalReference?: string;
  locked?: boolean;
  name?: string;
  partnerRef?: string;
  partnerTags?: PartnertagType[];
  phone?: string;
  resellerId?: number;
  state?: string;
  vatNumber?: string;
  workgroup?: WorkgroupType;
  zip?: string;
};

export type EndCustomerType = BaseCompanyType & {
  partner?: PartnerType;
};

type CountableType = {
  id?: number;
  total?: number;
};

export type PartnerType = BaseCompanyType & {
  contactsCount?: CountableType;
  country?: CountryType;
  customersCount?: CountableType;
  ordersCount?: CountableType;
  ordersNeedCount?: CountableType;
  reportsCount?: CountableType;
  subscriptions?: SubscriptionType[];
  subscriptionsCount?: CountableType;
  subscriptionsPendingCount?: CountableType;
  type?: CompanyTypeType;
};

export type ArrowCompanyType = Omit<BaseCompanyType, 'partnerTags'> & {
  subscriptions?: SubscriptionType[];
};
