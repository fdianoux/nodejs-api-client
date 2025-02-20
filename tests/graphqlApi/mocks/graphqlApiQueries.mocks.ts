import {
  ComparisonOperator,
  Direction,
  LogicalOperator,
  Queries,
  QueryModifier,
  SelectAllQueryType,
  SelectOneQueryType,
} from '../../../src/graphqlApi';

export const GRAPHQL_API_MOCK_URL = 'http://security.localhost';

export const SELECT_ALL_END_CUSTOMER_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'deletedAt',
                operator: ComparisonOperator.IS_NULL,
              },
            ],
          },
          {
            items: [
              {
                name: 'locked',
                operator: ComparisonOperator.IS_NULL,
              },
              {
                name: 'locked',
                value: ['1'],
                operator: ComparisonOperator.DIFFERENT,
              },
            ],
            logicalOperator: LogicalOperator.OR,
          },
        ],
      },
      exclusionFilters: {
        groups: [
          {
            items: [
              {
                name: 'partnertags.label',
                value: ['TIER2'],
                operator: ComparisonOperator.EQUALS,
              },
            ],
          },
        ],
      },
      aggregatorFilter: ['id'],
      pagination: {
        page: 1,
        perPage: 20,
      },
      queryModifier: QueryModifier.DISTINCT,
      sort: [
        {
          name: 'name',
          direction: Direction.ASC,
        },
        {
          name: 'createdAt',
          direction: Direction.DESC,
        },
      ],
    },
    data: {
      endCustomer: {
        acronym: true,
        address1: true,
        address2: true,
        billingId: true,
        city: true,
        contacts: {
          id: true,
          active: true,
          communicationEmail: true,
          effectiveDate: true,
          email: true,
          erpId: true,
          firstname: true,
          lastname: true,
          locked: true,
          phone: true,
          status: true,
          tseAccountStatus: true,
          username: true,
          type: {
            id: true,
            name: true,
          },
          role: {
            id: true,
            name: true,
          },
        },
        createdAt: true,
        deletedAt: true,
        enabled: true,
        erpId: true,
        id: true,
        internalReference: true,
        locked: true,
        name: true,
        partner: {
          acronym: true,
          country: {
            code2: true,
            code3: true,
            id: true,
            lat: true,
            lng: true,
            name: true,
            phoneCode: true,
          },
          id: true,
          partnerRef: true,
          workgroup: {
            code: true,
            id: true,
            name: true,
          },
          partnerTags: {
            id: true,
            label: true,
            description: true,
            createdAt: true,
          },
        },
        partnerRef: true,
        partnerTags: {
          createdAt: true,
          description: true,
          id: true,
          label: true,
        },
        phone: true,
        state: true,
        vatNumber: true,
        zip: true,
      },
    },

    errors: {
      code: true,
      message: true,
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
      totalPages: true,
    },
  },
};

export const SELECT_ALL_END_CUSTOMER_GQL =
  '{selectAll (filters: {groups: [{items: [{name: "deletedAt", operator: "IS_NULL"}]}, {items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "DIFFERENT"}], logicalOperator: "OR"}]}, exclusionFilters: {groups: [{items: [{name: "partnertags.label", value: ["TIER2"], operator: "EQUALS"}]}]}, aggregatorFilter: ["id"], pagination: {page: 1, perPage: 20}, queryModifier: "DISTINCT", sort: [{name: "name", direction: "ASC"}, {name: "createdAt", direction: "DESC"}]) { data { endCustomer { acronym address1 address2 billingId city contacts { id active communicationEmail effectiveDate email erpId firstname lastname locked phone status tseAccountStatus username type { id name } role { id name } } createdAt deletedAt enabled erpId id internalReference locked name partner { acronym country { code2 code3 id lat lng name phoneCode } id partnerRef workgroup { code id name } partnerTags { id label description createdAt } } partnerRef partnerTags { createdAt description id label } phone state vatNumber zip } } errors { code message } pagination { currentPage perPage previous next total totalPage totalPages } }}';

export const SELECT_ALL_PARTNERS_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'locked',
                operator: ComparisonOperator.IS_NULL,
              },
              {
                name: 'locked',
                value: ['1'],
                operator: ComparisonOperator.DIFFERENT,
              },
            ],
            logicalOperator: LogicalOperator.OR,
          },
          {
            items: [
              {
                name: 'id',
                value: [
                  'SELECT DISTINCT compcustomer_companyid_customer FROM COMPANY_CUSTOMER',
                ],
                exclusion: true,
              },
            ],
          },
        ],
      },
      aggregatorFilter: ['id'],
      pagination: {
        page: 1,
        perPage: 4,
      },
      sort: [
        {
          name: 'id',
          direction: Direction.ASC,
        },
      ],
    },
    data: {
      partner: {
        id: true,
        partnerTags: {
          id: true,
          label: true,
          description: true,
          createdAt: true,
        },
        workgroup: {
          code: true,
        },
        enabled: true,
        subscriptionsPendingCount: {
          total: true,
        },
        subscriptionsCount: {
          total: true,
        },
        ordersCount: {
          total: true,
        },
        ordersNeedCount: {
          total: true,
        },
        contactsCount: {
          total: true,
        },
        customersCount: {
          total: true,
        },
        reportsCount: {
          total: true,
        },
        createdAt: true,
        name: true,
        contacts: {
          id: true,
          active: true,
          communicationEmail: true,
          effectiveDate: true,
          email: true,
          erpId: true,
          firstname: true,
          lastname: true,
          locked: true,
          phone: true,
          status: true,
          tseAccountStatus: true,
          username: true,
          type: {
            id: true,
            name: true,
          },
          role: {
            id: true,
            name: true,
          },
        },
        subscriptions: {
          id: true,
          localContact: {
            id: true,
            firstname: true,
            lastname: true,
            phone: true,
            email: true,
          },
          program: {
            id: true,
            internalName: true,
            name: true,
          },
        },
      },
    },

    errors: {
      code: true,
      message: true,
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
      totalPages: true,
    },
  },
};

export const SELECT_ALL_PARTNERS_GQL =
  '{selectAll (filters: {groups: [{items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "DIFFERENT"}], logicalOperator: "OR"}, {items: [{name: "id", value: ["SELECT DISTINCT compcustomer_companyid_customer FROM COMPANY_CUSTOMER"], exclusion: true}]}]}, aggregatorFilter: ["id"], pagination: {page: 1, perPage: 4}, sort: [{name: "id", direction: "ASC"}]) { data { partner { id partnerTags { id label description createdAt } workgroup { code } enabled subscriptionsPendingCount { total } subscriptionsCount { total } ordersCount { total } ordersNeedCount { total } contactsCount { total } customersCount { total } reportsCount { total } createdAt name contacts { id active communicationEmail effectiveDate email erpId firstname lastname locked phone status tseAccountStatus username type { id name } role { id name } } subscriptions { id localContact { id firstname lastname phone email } program { id internalName name } } } } errors { code message } pagination { currentPage perPage previous next total totalPage totalPages } }}';

export const SELECT_ONE_END_CUSTOMER_QUERY: SelectOneQueryType = {
  [Queries.SELECT_ONE]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'id',
                value: ['123'],
                operator: ComparisonOperator.EQUALS,
              },
            ],
          },
          {
            items: [
              {
                name: 'locked',
                operator: ComparisonOperator.IS_NULL,
              },
              {
                name: 'locked',
                value: ['1'],
                operator: ComparisonOperator.IS_NULL,
              },
            ],
            logicalOperator: LogicalOperator.OR,
          },
        ],
      },
      options: {
        skipPartition: true,
      },
    },
    data: {
      endCustomer: {
        acronym: true,
        address1: true,
        address2: true,
        billingId: true,
        city: true,
        createdAt: true,
        deletedAt: true,
        enabled: true,
        erpId: true,
        id: true,
        internalReference: true,
        locked: true,
        name: true,
        partner: {
          acronym: true,
          country: {
            code2: true,
            code3: true,
            id: true,
            lat: true,
            lng: true,
            name: true,
            phoneCode: true,
          },
          id: true,
          partnerRef: true,
          workgroup: {
            code: true,
            id: true,
            name: true,
          },
        },
        partnerRef: true,
        partnerTags: {
          createdAt: true,
          description: true,
          id: true,
          label: true,
        },
        phone: true,
        state: true,
        vatNumber: true,
        zip: true,
      },
    },
    errors: {
      code: true,
      message: true,
    },
  },
};

export const SELECT_ONE_END_CUSTOMER_GQL =
  '{selectOne (filters: {groups: [{items: [{name: "id", value: ["123"], operator: "EQUALS"}]}, {items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "IS_NULL"}], logicalOperator: "OR"}]}, options: {skipPartition: true}) { data { endCustomer { acronym address1 address2 billingId city createdAt deletedAt enabled erpId id internalReference locked name partner { acronym country { code2 code3 id lat lng name phoneCode } id partnerRef workgroup { code id name } } partnerRef partnerTags { createdAt description id label } phone state vatNumber zip } } errors { code message } }}';
