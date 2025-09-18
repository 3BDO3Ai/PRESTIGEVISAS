import contentData from './content.json';

// Type definitions for our content structure
export interface ContentType {
  hero: {
    title: string;
    subtitle: string;
    provider: string;
    service: string;
    transfer: string;
    noGuarantor: string;
  };
  header: {
    navigation: {
      home: string;
      products: string;
      about: string;
      contact: string;
    };
  };
  priceList: {
    title: string;
    description: string;
    headers: {
      productValue: string;
      transferAmount: string;
      firstPayment: string;
      select: string;
    };
    buttons: {
      select: string;
      selected: string;
    };
    selectedValue: {
      title: string;
      productValue: string;
      transferAmount: string;
      firstPayment: string;
    };
  };
  calculator: {
    providerSelection: {
      title: string;
      tabby: string;
      tamara: string;
    };
    firstPayment: {
      title: string;
      yes: string;
      no: string;
    };
    form: {
      customerName: string;
      customerNamePlaceholder: string;
      productValue: string;
      currency: string;
    };
    summary: {
      provider: string;
      firstPaymentStatus: string;
      firstPaymentAmount: string;
      transferAmount: string;
    };
    importantNotes: string;
    orderSummary: {
      name: string;
      amount: string;
      monthlyInstallment: string;
      installmentsCount: string;
    };
    submitButton: string;
    summaryLabels: {
      transferAmountRequired: string;
      monthlyInstallment: string;
      totalInstallments: string;
      monthsCount: string;
    };
    defaultNotes: string;
    validationMessage: string;
    whatsappTemplate: {
      header: string;
      name: string;
      amount: string;
      installmentsCount: string;
      monthlyInstallment: string;
      transferAmount: string;
      monthsUnit: string;
    };
  };
  priceData: Array<{
    productValue: number;
    transferAmount: number;
    firstPayment: number;
  }>;
  features: {
    title: string;
    subtitle: string;
    cards: {
      commitment: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
  };
  faq: {
    questions: {
      downPayment: {
        question: string;
        answer: string;
      };
      installments: {
        question: string;
        answer: string;
      };
      transfer: {
        question: string;
        answer: string;
      };
    };
  };
  footer: {
    company: {
      name: string;
      description: string;
    };
    quickLinks: {
      title: string;
      home: string;
      products: string;
      howItWorks: string;
      faq: string;
    };
    contact: {
      title: string;
      whatsapp: string;
      phone: string;
      email: string;
      emailAddress: string;
      address: string;
      addressValue: string;
      contactButton: string;
    };
    legal: {
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
  common: {
    currency: string;
    yes: string;
    no: string;
    select: string;
    selected: string;
    name: string;
    amount: string;
    submit: string;
    close: string;
    back: string;
    next: string;
  };
}

export function useContent(): ContentType {
  return contentData as ContentType;
}
