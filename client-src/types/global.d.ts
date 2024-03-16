declare namespace google {
  namespace accounts {
    namespace id {
      function initialize(config: any): void;
      function prompt(): void;
      function renderButton(container: Element, options: any): void;
    }
  }
}

interface CsClient {
  signIn: (response: any) => Promise<void>;
  signOut: () => Promise<void>;
  getPermissions: () => Promise<any>;
}


interface Window {
  csClient: CsClient;
}
