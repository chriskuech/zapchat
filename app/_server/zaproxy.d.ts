/**
 * This file (aside from this comment) was auto-generated with:
 *
 * ```sh
 * npx openapi-typescript \
 *   https://raw.githubusercontent.com/zaproxy/zap-api-docs/refs/heads/main/openapi.yaml \
 *   -o app/_server/zaproxy.d.ts
 * ```
 *
 * Note that much is missing but it is at parity with the docs.
 */

export interface paths {
  "/JSON/accessControl/action/scan/": {
    parameters: {
      query: {
        contextId: string;
        userId: string;
        scanAsUnAuthUser?: string;
        raiseAlert?: string;
        alertRiskLevel?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Starts an Access Control scan with the given context ID and user ID. (Optional parameters: user ID for Unauthenticated user, boolean identifying whether or not Alerts are raised, and the Risk level for the Alerts.) [This assumes the Access Control rules were previously established via ZAP gui and the necessary Context exported/imported.] */
    get: operations["accessControlActionScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/accessControl/action/writeHTMLreport/": {
    parameters: {
      query: {
        contextId: string;
        fileName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Generates an Access Control report for the given context ID and saves it based on the provided filename (path).  */
    get: operations["accessControlActionWriteHTMLreport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/accessControl/view/getScanProgress/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the Access Control scan progress (percentage integer) for the given context ID. */
    get: operations["accessControlViewGetScanProgress"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/accessControl/view/getScanStatus/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the Access Control scan status (description string) for the given context ID. */
    get: operations["accessControlViewGetScanStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/acsrf/action/addOptionToken/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds an anti-CSRF token with the given name, enabled by default */
    get: operations["acsrfActionAddOptionToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/acsrf/action/removeOptionToken/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the anti-CSRF token with the given name */
    get: operations["acsrfActionRemoveOptionToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/acsrf/action/setOptionPartialMatchingEnabled/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Define if ZAP should detect CSRF tokens by searching for partial matches. */
    get: operations["acsrfActionSetOptionPartialMatchingEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/acsrf/other/genForm/": {
    parameters: {
      query: {
        /** @description Define which request will be used */
        hrefId: string;
        /** @description Define the action URL to be used in the generated form */
        actionUrl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Generate a form for testing lack of anti-CSRF tokens - typically invoked via ZAP */
    get: operations["acsrfOtherGenForm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/acsrf/view/optionPartialMatchingEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Define if ZAP should detect CSRF tokens by searching for partial matches */
    get: operations["acsrfViewOptionPartialMatchingEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/acsrf/view/optionTokensNames/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the names of all anti-CSRF tokens */
    get: operations["acsrfViewOptionTokensNames"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/addAllowedResource/": {
    parameters: {
      query: {
        /** @description The regular expression of the allowed resource. */
        regex: string;
        /** @description If the allowed resource should be enabled or not. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds an allowed resource. */
    get: operations["ajaxSpiderActionAddAllowedResource"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/addExcludedElement/": {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
        /** @description The description of the excluded element. */
        description: string;
        /** @description The element to exclude. */
        element: string;
        /** @description The XPath of the element. */
        xpath?: string;
        /** @description The text of the element. */
        text?: string;
        /** @description The attribute name of the element. */
        attributeName?: string;
        /** @description The attribute value of the element. */
        attributeValue?: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds an excluded element to a context. */
    get: operations["ajaxSpiderActionAddExcludedElement"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/modifyExcludedElement/": {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
        /** @description The description of the excluded element. */
        description: string;
        /** @description The element to exclude. */
        element: string;
        /** @description The new description. */
        descriptionNew?: string;
        /** @description The XPath of the element. */
        xpath?: string;
        /** @description The text of the element. */
        text?: string;
        /** @description The attribute name of the element. */
        attributeName?: string;
        /** @description The attribute value of the element. */
        attributeValue?: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Modifies an excluded element of a context. */
    get: operations["ajaxSpiderActionModifyExcludedElement"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/removeAllowedResource/": {
    parameters: {
      query: {
        /** @description The regular expression of the allowed resource. */
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes an allowed resource. */
    get: operations["ajaxSpiderActionRemoveAllowedResource"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/removeExcludedElement/": {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
        /** @description The description of the excluded element. */
        description: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes an excluded element from a context. */
    get: operations["ajaxSpiderActionRemoveExcludedElement"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/scan/": {
    parameters: {
      query?: {
        /** @description The starting URL (needs to include the 'scheme'). */
        url?: string;
        /** @description A boolean (true/false) indicating whether or not the scan should be restricted to 'inScope' only resources (default value is false). */
        inScope?: string;
        /** @description The name for any defined context. If the value does not match a defined context then an error will occur. */
        contextName?: string;
        /** @description A boolean (true/false) indicating whether or not the crawl should be constrained to a specific path (default value is false). */
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Runs the AJAX Spider against a given target. */
    get: operations["ajaxSpiderActionScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/scanAsUser/": {
    parameters: {
      query: {
        /** @description The name for any defined context. If the value does not match a defined context then an error will occur. */
        contextName: string;
        /** @description The name of the user to be used when crawling. The "userName" should be previously defined on the context configuration. */
        userName: string;
        /** @description The starting URL (needs to include the 'scheme'). */
        url?: string;
        /** @description A boolean (true/false) indicating whether or not the crawl should be constrained to a specific path (default value is false). */
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Runs the AJAX Spider from the perspective of a User of the web application. */
    get: operations["ajaxSpiderActionScanAsUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setEnabledAllowedResource/": {
    parameters: {
      query: {
        /** @description The regular expression of the allowed resource. */
        regex: string;
        /** @description If the allowed resource should be enabled or not. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not an allowed resource is enabled. */
    get: operations["ajaxSpiderActionSetEnabledAllowedResource"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionBrowserId/": {
    parameters: {
      query: {
        /** @description The name of the browser to be used by the AJAX Spider. (See the Selenium add-on help for a list of supported browsers.) */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the configuration of the AJAX Spider to use one of the supported browsers. */
    get: operations["ajaxSpiderActionSetOptionBrowserId"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionClickDefaultElems/": {
    parameters: {
      query: {
        /** @description A boolean (true/false) indicating if only default elements such as 'a' 'button' 'input' should be clicked (default is true). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the the AJAX Spider will only click on the default HTML elements. */
    get: operations["ajaxSpiderActionSetOptionClickDefaultElems"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionClickElemsOnce/": {
    parameters: {
      query: {
        /** @description A boolean (true/false) indicating whether or not the AJAX Spider should only click on elements once. If this is set to false, the crawler will attempt to click multiple times; which is more rigorous but may take considerably more time (default is true). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description When enabled, the crawler attempts to interact with each element (e.g., by clicking) only once. */
    get: operations["ajaxSpiderActionSetOptionClickElemsOnce"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionEventWait/": {
    parameters: {
      query: {
        /** @description The time that the AJAX Spider should wait for each event (default is 1000 milliseconds). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the time to wait after an event (in milliseconds). For example: the wait delay after the cursor hovers over an element, in order for a menu to display, etc. */
    get: operations["ajaxSpiderActionSetOptionEventWait"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionMaxCrawlDepth/": {
    parameters: {
      query: {
        /** @description The maximum depth that the crawler should explore (zero means unlimited depth, default is 10). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum depth that the crawler can reach. */
    get: operations["ajaxSpiderActionSetOptionMaxCrawlDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionMaxCrawlStates/": {
    parameters: {
      query: {
        /** @description The maximum number of states that the AJAX Spider should explore (zero means unlimited crawl states, default is 0) */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum number of states that the crawler should crawl. */
    get: operations["ajaxSpiderActionSetOptionMaxCrawlStates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionMaxDuration/": {
    parameters: {
      query: {
        /** @description The maximum amount of time that the AJAX Spider is allowed to run (zero means unlimited running time, default is 60 minutes). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description The maximum time that the crawler is allowed to run. */
    get: operations["ajaxSpiderActionSetOptionMaxDuration"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionNumberOfBrowsers/": {
    parameters: {
      query: {
        /** @description The number of windows that the AJAX Spider can use. The more windows, the faster the process will be. However, more windows also means greater resource usage (CPU, Memory, etc), and could lead to concurrency issues depending on the app being explored (default is 1). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the number of windows to be used by AJAX Spider. */
    get: operations["ajaxSpiderActionSetOptionNumberOfBrowsers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionRandomInputs/": {
    parameters: {
      query: {
        /** @description A boolean (true/false) indicating whether or not random values should be use in form fields. Otherwise, empty values are submitted (default is true). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description When enabled, inserts random values into form fields. */
    get: operations["ajaxSpiderActionSetOptionRandomInputs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/setOptionReloadWait/": {
    parameters: {
      query: {
        /** @description The number of milliseconds the AJAX Spider should wait after a page is loaded (default is 1000). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the time to wait after the page is loaded before interacting with it. */
    get: operations["ajaxSpiderActionSetOptionReloadWait"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/action/stop/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Stops the AJAX Spider. */
    get: operations["ajaxSpiderActionStop"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/allowedResources/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the allowed resources. The allowed resources are always fetched even if out of scope, allowing to include necessary resources (e.g. scripts) from 3rd-parties. */
    get: operations["ajaxSpiderViewAllowedResources"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/excludedElements/": {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the excluded elements. The excluded elements are not clicked during crawling, for example, to prevent logging out. */
    get: operations["ajaxSpiderViewExcludedElements"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/fullResults/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the full crawled content detected by the AJAX Spider. Returns a set of values based on 'inScope' URLs, 'outOfScope' URLs, and 'errors' encountered during the last/current run of the AJAX Spider. */
    get: operations["ajaxSpiderViewFullResults"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/numberOfResults/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the number of resources found. */
    get: operations["ajaxSpiderViewNumberOfResults"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionBrowserId/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured browser to use for crawling. */
    get: operations["ajaxSpiderViewOptionBrowserId"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionClickDefaultElems/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured value for 'Click Default Elements Only', HTML elements such as 'a', 'button', 'input', all associated with some action or links on the page. */
    get: operations["ajaxSpiderViewOptionClickDefaultElems"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionClickElemsOnce/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the value configured for the AJAX Spider to know if it should click on the elements only once. */
    get: operations["ajaxSpiderViewOptionClickElemsOnce"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionEventWait/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the time to wait after an event (in milliseconds). For example: the wait delay after the cursor hovers over an element, in order for a menu to display, etc. */
    get: operations["ajaxSpiderViewOptionEventWait"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionMaxCrawlDepth/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured value for the max crawl depth. */
    get: operations["ajaxSpiderViewOptionMaxCrawlDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionMaxCrawlStates/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured value for the maximum crawl states allowed. */
    get: operations["ajaxSpiderViewOptionMaxCrawlStates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionMaxDuration/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured max duration of the crawl, the value is in minutes. */
    get: operations["ajaxSpiderViewOptionMaxDuration"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionNumberOfBrowsers/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured number of browsers to be used. */
    get: operations["ajaxSpiderViewOptionNumberOfBrowsers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionRandomInputs/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets if the AJAX Spider will use random values in form fields when crawling, if set to true. */
    get: operations["ajaxSpiderViewOptionRandomInputs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/optionReloadWait/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configured time to wait after reloading the page, this value is in milliseconds. */
    get: operations["ajaxSpiderViewOptionReloadWait"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/results/": {
    parameters: {
      query?: {
        /** @description The position (or offset) within the results to use as a starting position for the information returned. */
        start?: string;
        /** @description The number of results to return. */
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the current results of the crawler. */
    get: operations["ajaxSpiderViewResults"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ajaxSpider/view/status/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the current status of the crawler. Actual values are Stopped and Running. */
    get: operations["ajaxSpiderViewStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/addAlert/": {
    parameters: {
      query: {
        /** @description The ID of the message to which the alert should be associated. */
        messageId: string;
        /** @description The name of the alert. */
        name: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId: string;
        /** @description The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]). */
        confidenceId: string;
        /** @description The description to be set to the alert. */
        description: string;
        /** @description The name of the parameter applicable to the alert. */
        param?: string;
        /** @description The attack (ex: injected string) used by the scan rule. */
        attack?: string;
        /** @description Other information about the alert or test. */
        otherInfo?: string;
        /** @description The solution for the alert. */
        solution?: string;
        /** @description The reference details for the alert. */
        references?: string;
        /** @description The evidence associated with the alert. */
        evidence?: string;
        /** @description The CWE identifier associated with the alert. */
        cweId?: string;
        /** @description The WASC identifier associated with the alert. */
        wascId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Add an alert associated with the given message ID, with the provided details. (The ID of the created alert is returned.) */
    get: operations["alertActionAddAlert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/deleteAlert/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Deletes the alert with the given ID.  */
    get: operations["alertActionDeleteAlert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/deleteAlerts/": {
    parameters: {
      query?: {
        /** @description The name of the Context for which the alerts should be deleted. */
        contextName?: string;
        /** @description The highest URL in the Sites tree under which alerts should be deleted. */
        baseurl?: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Deletes all the alerts optionally filtered by URL which fall within the Context with the provided name, risk, or base URL. */
    get: operations["alertActionDeleteAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/deleteAllAlerts/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Deletes all alerts of the current session. */
    get: operations["alertActionDeleteAllAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/updateAlert/": {
    parameters: {
      query: {
        /** @description The ID of the alert to update. */
        id: string;
        /** @description The name of the alert. */
        name: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId: string;
        /** @description The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]). */
        confidenceId: string;
        /** @description The description to be set to the alert. */
        description: string;
        /** @description The name of the parameter applicable to the alert. */
        param?: string;
        /** @description The attack (ex: injected string) used by the scan rule. */
        attack?: string;
        /** @description Other information about the alert or test. */
        otherInfo?: string;
        /** @description The solution for the alert. */
        solution?: string;
        /** @description The reference details for the alert. */
        references?: string;
        /** @description The evidence associated with the alert. */
        evidence?: string;
        /** @description The CWE identifier associated with the alert. */
        cweId?: string;
        /** @description The WASC identifier associated with the alert. */
        wascId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Update the alert with the given ID, with the provided details. */
    get: operations["alertActionUpdateAlert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/updateAlertsConfidence/": {
    parameters: {
      query: {
        /** @description The IDs of the alerts to update (comma separated values). */
        ids: string;
        /** @description The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]). */
        confidenceId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Update the confidence of the alerts. */
    get: operations["alertActionUpdateAlertsConfidence"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/action/updateAlertsRisk/": {
    parameters: {
      query: {
        /** @description The IDs of the alerts to update (comma separated values). */
        ids: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Update the risk of the alerts. */
    get: operations["alertActionUpdateAlertsRisk"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/view/alert/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the alert with the given ID, the corresponding HTTP message can be obtained with the 'messageId' field and 'message' API method */
    get: operations["alertViewAlert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/view/alertCountsByRisk/": {
    parameters: {
      query?: {
        url?: string;
        recurse?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets a count of the alerts, optionally filtered as per alertsPerRisk */
    get: operations["alertViewAlertCountsByRisk"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/view/alerts/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
        riskId?: string;
        /** @description Optionally, the Context name which the Alerts' URLs are associated with. */
        contextName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the alerts raised by ZAP, optionally filtering by URL or riskId, and paginating with 'start' position and 'count' of alerts */
    get: operations["alertViewAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/view/alertsByRisk/": {
    parameters: {
      query?: {
        url?: string;
        recurse?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets a summary of the alerts, optionally filtered by a 'url'. If 'recurse' is true then all alerts that apply to urls that start with the specified 'url' will be returned, otherwise only those on exactly the same 'url' (ignoring url parameters) */
    get: operations["alertViewAlertsByRisk"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/view/alertsSummary/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets number of alerts grouped by each risk level, optionally filtering by URL */
    get: operations["alertViewAlertsSummary"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alert/view/numberOfAlerts/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the number of alerts, optionally filtering by URL or riskId */
    get: operations["alertViewNumberOfAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/addAlertFilter/": {
    parameters: {
      query: {
        contextId: string;
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a new alert filter for the context with the given ID.  */
    get: operations["alertFilterActionAddAlertFilter"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/addGlobalAlertFilter/": {
    parameters: {
      query: {
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a new global alert filter.  */
    get: operations["alertFilterActionAddGlobalAlertFilter"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/applyAll/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Applies all currently enabled Global and Context alert filters. */
    get: operations["alertFilterActionApplyAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/applyContext/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Applies all currently enabled Context alert filters. */
    get: operations["alertFilterActionApplyContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/applyGlobal/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Applies all currently enabled Global alert filters. */
    get: operations["alertFilterActionApplyGlobal"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/removeAlertFilter/": {
    parameters: {
      query: {
        contextId: string;
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes an alert filter from the context with the given ID. */
    get: operations["alertFilterActionRemoveAlertFilter"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/removeGlobalAlertFilter/": {
    parameters: {
      query: {
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a global alert filter. */
    get: operations["alertFilterActionRemoveGlobalAlertFilter"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/testAll/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tests all currently enabled Global and Context alert filters. */
    get: operations["alertFilterActionTestAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/testContext/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tests all currently enabled Context alert filters. */
    get: operations["alertFilterActionTestContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/action/testGlobal/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tests all currently enabled Global alert filters. */
    get: operations["alertFilterActionTestGlobal"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/view/alertFilterList/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the alert filters of the context with the given ID. */
    get: operations["alertFilterViewAlertFilterList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/alertFilter/view/globalAlertFilterList/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the global alert filters. */
    get: operations["alertFilterViewGlobalAlertFilterList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/addExcludedParam/": {
    parameters: {
      query: {
        name: string;
        type?: string;
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a new parameter excluded from the scan, using the specified name. Optionally sets if the new entry applies to a specific URL (default, all URLs) and sets the ID of the type of the parameter (default, ID of any type). The type IDs can be obtained with the view excludedParamTypes.  */
    get: operations["ascanActionAddExcludedParam"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/addScanPolicy/": {
    parameters: {
      query: {
        scanPolicyName: string;
        alertThreshold?: string;
        attackStrength?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionAddScanPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/clearExcludedFromScan/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the regexes of URLs excluded from the active scans. */
    get: operations["ascanActionClearExcludedFromScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/disableAllScanners/": {
    parameters: {
      query?: {
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables all scan rules of the scan policy with the given name, or the default if none given. */
    get: operations["ascanActionDisableAllScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/disableScanners/": {
    parameters: {
      query: {
        ids: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given. */
    get: operations["ascanActionDisableScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/enableAllScanners/": {
    parameters: {
      query?: {
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables all scan rules of the scan policy with the given name, or the default if none given. */
    get: operations["ascanActionEnableAllScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/enableScanners/": {
    parameters: {
      query: {
        ids: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables the scan rules with the given IDs (comma separated list of IDs) of the scan policy with the given name, or the default if none given. */
    get: operations["ascanActionEnableScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/excludeFromScan/": {
    parameters: {
      query: {
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a regex of URLs that should be excluded from the active scans. */
    get: operations["ascanActionExcludeFromScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/importScanPolicy/": {
    parameters: {
      query: {
        path: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports a Scan Policy using the given file system path. */
    get: operations["ascanActionImportScanPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/modifyExcludedParam/": {
    parameters: {
      query: {
        idx: string;
        name?: string;
        type?: string;
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Modifies a parameter excluded from the scan. Allows to modify the name, the URL and the type of parameter. The parameter is selected with its index, which can be obtained with the view excludedParams. */
    get: operations["ascanActionModifyExcludedParam"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/pause/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionPause"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/pauseAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionPauseAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/removeAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionRemoveAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/removeExcludedParam/": {
    parameters: {
      query: {
        idx: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a parameter excluded from the scan, with the given index. The index can be obtained with the view excludedParams. */
    get: operations["ascanActionRemoveExcludedParam"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/removeScan/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionRemoveScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/removeScanPolicy/": {
    parameters: {
      query: {
        scanPolicyName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionRemoveScanPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/resume/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionResume"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/resumeAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionResumeAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/scan/": {
    parameters: {
      query?: {
        url?: string;
        recurse?: string;
        inScopeOnly?: string;
        scanPolicyName?: string;
        method?: string;
        postData?: string;
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Runs the active scanner against the given URL or Context. Optionally, the 'recurse' parameter can be used to scan URLs under the given URL, the parameter 'inScopeOnly' can be used to constrain the scan to URLs that are in scope (ignored if a Context is specified), the parameter 'scanPolicyName' allows to specify the scan policy (if none is given it uses the default scan policy), the parameters 'method' and 'postData' allow to select a given request in conjunction with the given URL. */
    get: operations["ascanActionScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/scanAsUser/": {
    parameters: {
      query?: {
        url?: string;
        contextId?: string;
        userId?: string;
        recurse?: string;
        scanPolicyName?: string;
        method?: string;
        postData?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Active Scans from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details. */
    get: operations["ascanActionScanAsUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setEnabledPolicies/": {
    parameters: {
      query: {
        ids: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetEnabledPolicies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionAddQueryParam/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the active scanner should add a query param to GET requests which do not have parameters to start with. */
    get: operations["ascanActionSetOptionAddQueryParam"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionAllowAttackOnStart/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionAllowAttackOnStart"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionAttackPolicy/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionAttackPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionDefaultPolicy/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionDefaultPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionDelayInMs/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description This option has been superseded. Use the API rate limit endpoints in the 'network' component instead.
     */
    get: operations["ascanActionSetOptionDelayInMs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionHandleAntiCSRFTokens/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionHandleAntiCSRFTokens"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionHostPerScan/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionHostPerScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionInjectPluginIdInHeader/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scan rule that's sending the requests. */
    get: operations["ascanActionSetOptionInjectPluginIdInHeader"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionMaxAlertsPerRule/": {
    parameters: {
      query: {
        /** @description The maximum alerts. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum number of alerts that a rule can raise before being skipped. */
    get: operations["ascanActionSetOptionMaxAlertsPerRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionMaxChartTimeInMins/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionMaxChartTimeInMins"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionMaxResultsToList/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionMaxResultsToList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionMaxRuleDurationInMins/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionMaxRuleDurationInMins"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionMaxScanDurationInMins/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionMaxScanDurationInMins"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionMaxScansInUI/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionMaxScansInUI"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionPromptInAttackMode/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionPromptInAttackMode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionPromptToClearFinishedScans/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionPromptToClearFinishedScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionRescanInAttackMode/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionRescanInAttackMode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionScanHeadersAllRequests/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body. */
    get: operations["ascanActionSetOptionScanHeadersAllRequests"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionScanNullJsonValues/": {
    parameters: {
      query: {
        /** @description true to scan null values, false otherwise. */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the active scanner should scan null JSON values. */
    get: operations["ascanActionSetOptionScanNullJsonValues"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionShowAdvancedDialog/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionShowAdvancedDialog"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionTargetParamsEnabledRPC/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionTargetParamsEnabledRPC"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionTargetParamsInjectable/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionTargetParamsInjectable"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setOptionThreadPerHost/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetOptionThreadPerHost"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setPolicyAlertThreshold/": {
    parameters: {
      query: {
        id: string;
        alertThreshold: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetPolicyAlertThreshold"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setPolicyAttackStrength/": {
    parameters: {
      query: {
        id: string;
        attackStrength: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetPolicyAttackStrength"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setScannerAlertThreshold/": {
    parameters: {
      query: {
        id: string;
        alertThreshold: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetScannerAlertThreshold"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/setScannerAttackStrength/": {
    parameters: {
      query: {
        id: string;
        attackStrength: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionSetScannerAttackStrength"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/skipScanner/": {
    parameters: {
      query: {
        scanId: string;
        scannerId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Skips the scan rule using the given IDs of the scan and the scan rule. */
    get: operations["ascanActionSkipScanner"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/stop/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionStop"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/stopAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionStopAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/action/updateScanPolicy/": {
    parameters: {
      query: {
        scanPolicyName: string;
        alertThreshold?: string;
        attackStrength?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanActionUpdateScanPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/alertsIds/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the IDs of the alerts raised during the scan with the given ID. An alert can be obtained with 'alert' core view. */
    get: operations["ascanViewAlertsIds"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/attackModeQueue/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewAttackModeQueue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/excludedFromScan/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the regexes of URLs excluded from the active scans. */
    get: operations["ascanViewExcludedFromScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/excludedParamTypes/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the types of excluded parameters. For each type the following are shown: the ID and the name. */
    get: operations["ascanViewExcludedParamTypes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/excludedParams/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the parameters that are excluded. For each parameter the following are shown: the name, the URL, and the parameter type. */
    get: operations["ascanViewExcludedParams"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/messagesIds/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the IDs of the messages sent during the scan with the given ID. A message can be obtained with 'message' core view. */
    get: operations["ascanViewMessagesIds"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionAddQueryParam/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the active scanner should add a query parameter to GET request that don't have parameters to start with. */
    get: operations["ascanViewOptionAddQueryParam"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionAllowAttackOnStart/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionAllowAttackOnStart"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionAttackPolicy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionAttackPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionDefaultPolicy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionDefaultPolicy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionDelayInMs/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description This option has been superseded. Use the API rate limit endpoints in the 'network' component instead.
     */
    get: operations["ascanViewOptionDelayInMs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionExcludedParamList/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use view excludedParams instead.
     */
    get: operations["ascanViewOptionExcludedParamList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionHandleAntiCSRFTokens/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionHandleAntiCSRFTokens"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionHostPerScan/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionHostPerScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionInjectPluginIdInHeader/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the active scanner should inject the HTTP request header X-ZAP-Scan-ID, with the ID of the scan rule that's sending the requests. */
    get: operations["ascanViewOptionInjectPluginIdInHeader"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionMaxAlertsPerRule/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the maximum number of alerts that a rule can raise before being skipped. */
    get: operations["ascanViewOptionMaxAlertsPerRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionMaxChartTimeInMins/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionMaxChartTimeInMins"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionMaxResultsToList/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionMaxResultsToList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionMaxRuleDurationInMins/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionMaxRuleDurationInMins"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionMaxScanDurationInMins/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionMaxScanDurationInMins"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionMaxScansInUI/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionMaxScansInUI"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionPromptInAttackMode/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionPromptInAttackMode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionPromptToClearFinishedScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionPromptToClearFinishedScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionRescanInAttackMode/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionRescanInAttackMode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionScanHeadersAllRequests/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the HTTP Headers of all requests should be scanned. Not just requests that send parameters, through the query or request body. */
    get: operations["ascanViewOptionScanHeadersAllRequests"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionScanNullJsonValues/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the active scanner should scan null JSON values. */
    get: operations["ascanViewOptionScanNullJsonValues"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionShowAdvancedDialog/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionShowAdvancedDialog"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionTargetParamsEnabledRPC/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionTargetParamsEnabledRPC"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionTargetParamsInjectable/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionTargetParamsInjectable"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/optionThreadPerHost/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewOptionThreadPerHost"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/policies/": {
    parameters: {
      query?: {
        scanPolicyName?: string;
        policyId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewPolicies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/scanPolicyNames/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewScanPolicyNames"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/scanProgress/": {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewScanProgress"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/scanners/": {
    parameters: {
      query?: {
        scanPolicyName?: string;
        policyId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the scan rules, optionally, of the given scan policy or scanner policy/category ID. */
    get: operations["ascanViewScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/scans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ascan/view/status/": {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ascanViewStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/action/setAuthenticationMethod/": {
    parameters: {
      query: {
        contextId: string;
        authMethodName: string;
        authMethodConfigParams?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the authentication method for the context with the given ID. */
    get: operations["authenticationActionSetAuthenticationMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/action/setLoggedInIndicator/": {
    parameters: {
      query: {
        contextId: string;
        loggedInIndicatorRegex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the logged in indicator for the context with the given ID. */
    get: operations["authenticationActionSetLoggedInIndicator"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/action/setLoggedOutIndicator/": {
    parameters: {
      query: {
        contextId: string;
        loggedOutIndicatorRegex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the logged out indicator for the context with the given ID. */
    get: operations["authenticationActionSetLoggedOutIndicator"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/view/getAuthenticationMethod/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the name of the authentication method for the context with the given ID. */
    get: operations["authenticationViewGetAuthenticationMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/view/getAuthenticationMethodConfigParams/": {
    parameters: {
      query: {
        authMethodName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configuration parameters for the authentication method with the given name. */
    get: operations["authenticationViewGetAuthenticationMethodConfigParams"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/view/getLoggedInIndicator/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the logged in indicator for the context with the given ID. */
    get: operations["authenticationViewGetLoggedInIndicator"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/view/getLoggedOutIndicator/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the logged out indicator for the context with the given ID. */
    get: operations["authenticationViewGetLoggedOutIndicator"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authentication/view/getSupportedAuthenticationMethods/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the name of the authentication methods. */
    get: operations["authenticationViewGetSupportedAuthenticationMethods"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authorization/action/setBasicAuthorizationDetectionMethod/": {
    parameters: {
      query: {
        contextId: string;
        headerRegex?: string;
        bodyRegex?: string;
        statusCode?: string;
        logicalOperator?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the authorization detection method for a context as one that identifies un-authorized messages based on: the message's status code or a regex pattern in the response's header or body. Also, whether all conditions must match or just some can be specified via the logicalOperator parameter, which accepts two values: "AND" (default), "OR".   */
    get: operations["authorizationActionSetBasicAuthorizationDetectionMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/authorization/view/getAuthorizationDetectionMethod/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Obtains all the configuration of the authorization detection method that is currently set for a context. */
    get: operations["authorizationViewGetAuthorizationDetectionMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/automation/action/endDelayJob/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["automationActionEndDelayJob"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/automation/action/runPlan/": {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["automationActionRunPlan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/automation/view/planProgress/": {
    parameters: {
      query: {
        planId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["automationViewPlanProgress"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/downloadLatestRelease/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Downloads the latest release, if any  */
    get: operations["autoupdateActionDownloadLatestRelease"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/installAddon/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Installs or updates the specified add-on, returning when complete (i.e. not asynchronously) */
    get: operations["autoupdateActionInstallAddon"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/installLocalAddon/": {
    parameters: {
      query: {
        file: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionInstallLocalAddon"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionCheckAddonUpdates/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionCheckAddonUpdates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionCheckOnStart/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionCheckOnStart"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionDownloadNewRelease/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionDownloadNewRelease"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionInstallAddonUpdates/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionInstallAddonUpdates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionInstallScannerRules/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionInstallScannerRules"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionReportAlphaAddons/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionReportAlphaAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionReportBetaAddons/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionReportBetaAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/setOptionReportReleaseAddons/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateActionSetOptionReportReleaseAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/action/uninstallAddon/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Uninstalls the specified add-on  */
    get: operations["autoupdateActionUninstallAddon"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/installedAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Return a list of all of the installed add-ons */
    get: operations["autoupdateViewInstalledAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/isLatestVersion/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns 'true' if ZAP is on the latest version */
    get: operations["autoupdateViewIsLatestVersion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/latestVersionNumber/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the latest version number */
    get: operations["autoupdateViewLatestVersionNumber"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/localAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns a list with all local add-ons, installed or not. */
    get: operations["autoupdateViewLocalAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/marketplaceAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Return a list of all of the add-ons on the ZAP Marketplace (this information is read once and then cached) */
    get: operations["autoupdateViewMarketplaceAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/newAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Return a list of any add-ons that have been added to the Marketplace since the last check for updates */
    get: operations["autoupdateViewNewAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionAddonDirectories/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionAddonDirectories"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionCheckAddonUpdates/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionCheckAddonUpdates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionCheckOnStart/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionCheckOnStart"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionDayLastChecked/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionDayLastChecked"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionDayLastInstallWarned/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionDayLastInstallWarned"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionDayLastUpdateWarned/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionDayLastUpdateWarned"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionDownloadDirectory/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionDownloadDirectory"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionDownloadNewRelease/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionDownloadNewRelease"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionInstallAddonUpdates/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionInstallAddonUpdates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionInstallScannerRules/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionInstallScannerRules"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionReportAlphaAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionReportAlphaAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionReportBetaAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionReportBetaAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/optionReportReleaseAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["autoupdateViewOptionReportReleaseAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/autoupdate/view/updatedAddons/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Return a list of any add-ons that have been changed in the Marketplace since the last check for updates */
    get: operations["autoupdateViewUpdatedAddons"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/addHttpBreakpoint/": {
    parameters: {
      query: {
        string: string;
        location: string;
        match: string;
        inverse: string;
        ignorecase: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a custom HTTP breakpoint. The string is the string to match. Location may be one of: url, request_header, request_body, response_header or response_body. Match may be: contains or regex. Inverse (match) may be true or false. Lastly, ignorecase (when matching the string) may be true or false.   */
    get: operations["breakActionAddHttpBreakpoint"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/break/": {
    parameters: {
      query: {
        type: string;
        state: string;
        scope?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Controls the global break functionality. The type may be one of: http-all, http-request or http-response. The state may be true (for turning break on for the specified type) or false (for turning break off). Scope is not currently used. */
    get: operations["breakActionBreak"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/continue/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Submits the currently intercepted message and unsets the global request/response breakpoints */
    get: operations["breakActionContinue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/drop/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Drops the currently intercepted message */
    get: operations["breakActionDrop"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/removeHttpBreakpoint/": {
    parameters: {
      query: {
        string: string;
        location: string;
        match: string;
        inverse: string;
        ignorecase: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the specified breakpoint */
    get: operations["breakActionRemoveHttpBreakpoint"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/setHttpMessage/": {
    parameters: {
      query: {
        httpHeader: string;
        httpBody?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Overwrites the currently intercepted message with the data provided */
    get: operations["breakActionSetHttpMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/action/step/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Submits the currently intercepted message, the next request or response will automatically be intercepted */
    get: operations["breakActionStep"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/view/httpMessage/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP message currently intercepted (if any) */
    get: operations["breakViewHttpMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/view/isBreakAll/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns True if ZAP will break on both requests and responses */
    get: operations["breakViewIsBreakAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/view/isBreakRequest/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns True if ZAP will break on requests */
    get: operations["breakViewIsBreakRequest"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/break/view/isBreakResponse/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns True if ZAP will break on responses */
    get: operations["breakViewIsBreakResponse"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/client/action/reportEvent/": {
    parameters: {
      query: {
        eventJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["clientActionReportEvent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/client/action/reportObject/": {
    parameters: {
      query: {
        objectJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["clientActionReportObject"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/client/action/reportZestScript/": {
    parameters: {
      query: {
        scriptJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["clientActionReportZestScript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/client/action/reportZestStatement/": {
    parameters: {
      query: {
        statementJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["clientActionReportZestStatement"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/codedx/action/generateAndUpload/": {
    parameters: {
      query: {
        serverUrl: string;
        codeDxApiKey: string;
        projectId: string;
        fingerprint?: string;
        acceptPermanently?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["codedxActionGenerateAndUpload"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/codedx/action/uploadReport/": {
    parameters: {
      query: {
        filePath: string;
        serverUrl: string;
        codeDxApiKey: string;
        projectId: string;
        fingerprint?: string;
        acceptPermanently?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["codedxActionUploadReport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/codedx/view/generateReport/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["codedxViewGenerateReport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/excludeAllContextTechnologies/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Excludes all built in technologies from a context */
    get: operations["contextActionExcludeAllContextTechnologies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/excludeContextTechnologies/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        technologyNames: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Excludes technologies with the given names, separated by a comma, from a context */
    get: operations["contextActionExcludeContextTechnologies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/excludeFromContext/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Add exclude regex to context */
    get: operations["contextActionExcludeFromContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/exportContext/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        contextFile: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Exports the context with the given name to a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir. */
    get: operations["contextActionExportContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/importContext/": {
    parameters: {
      query: {
        contextFile: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports a context from a file. If a relative file path is specified it will be resolved against the "contexts" directory in ZAP "home" dir. */
    get: operations["contextActionImportContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/includeAllContextTechnologies/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Includes all built in technologies in to a context */
    get: operations["contextActionIncludeAllContextTechnologies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/includeContextTechnologies/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        technologyNames: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Includes technologies with the given names, separated by a comma, to a context */
    get: operations["contextActionIncludeContextTechnologies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/includeInContext/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Add include regex to context */
    get: operations["contextActionIncludeInContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/newContext/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Creates a new context with the given name in the current session */
    get: operations["contextActionNewContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/removeContext/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a context in the current session */
    get: operations["contextActionRemoveContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/setContextCheckingStrategy/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        /** @description One of EACH_RESP, EACH_REQ, EACH_REQ_RESP, POLL_URL */
        checkingStrategy: string;
        /** @description The URL for ZAP to poll, must be supplied if checkingStrategy = POLL_URL, otherwise ignored */
        pollUrl?: string;
        /** @description The POST data to supply to the pollUrl, option and only takes effect if checkingStrategy = POLL_URL */
        pollData?: string;
        /** @description Any additional headers that need to be added to the poll request, separated by '\n' characters, only takes effect if checkingStrategy = POLL_URL */
        pollHeaders?: string;
        /** @description An integer greater than zero, must be supplied if checkingStrategy = POLL_URL, otherwise ignored */
        pollFrequency?: string;
        /** @description One of REQUESTS, SECONDS, must be supplied if checkingStrategy = POLL_URL, otherwise ignored */
        pollFrequencyUnits?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Set the checking strategy for a context - this defines how ZAP checks that a request is authenticated */
    get: operations["contextActionSetContextCheckingStrategy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/setContextInScope/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        booleanInScope: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets a context to in scope (contexts are in scope by default) */
    get: operations["contextActionSetContextInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/action/setContextRegexs/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        incRegexs: string;
        excRegexs: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Set the regexs to include and exclude for a context, both supplied as JSON string arrays */
    get: operations["contextActionSetContextRegexs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/context/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description List the information about the named context */
    get: operations["contextViewContext"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/contextList/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description List context names of current session */
    get: operations["contextViewContextList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/excludeRegexs/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description List excluded regexs for context */
    get: operations["contextViewExcludeRegexs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/excludedTechnologyList/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the names of all technologies excluded from a context */
    get: operations["contextViewExcludedTechnologyList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/includeRegexs/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description List included regexs for context */
    get: operations["contextViewIncludeRegexs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/includedTechnologyList/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the names of all technologies included in a context */
    get: operations["contextViewIncludedTechnologyList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/technologyList/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the names of all built in technologies */
    get: operations["contextViewTechnologyList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/context/view/urls/": {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the URLs accessed through/by ZAP, that belong to the context with the given name. */
    get: operations["contextViewUrls"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/accessUrl/": {
    parameters: {
      query: {
        url: string;
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Convenient and simple action to access a URL, optionally following redirections. Returns the request sent and response received and followed redirections, if any. Other actions are available which offer more control on what is sent, like, 'sendRequest' or 'sendHarRequest'. */
    get: operations["coreActionAccessUrl"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/addProxyChainExcludedDomain/": {
    parameters: {
      query: {
        value: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionAddProxyChainExcludedDomain"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/clearExcludedFromProxy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the regexes of URLs excluded from the local proxies. */
    get: operations["coreActionClearExcludedFromProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/deleteAlert/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoint with the same name in the 'alert' component instead.
     */
    get: operations["coreActionDeleteAlert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/deleteAllAlerts/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoint with the same name in the 'alert' component instead.
     */
    get: operations["coreActionDeleteAllAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/deleteSiteNode/": {
    parameters: {
      query: {
        url: string;
        method?: string;
        postData?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Deletes the site node found in the Sites Tree on the basis of the URL, HTTP method, and post data (if applicable and specified).  */
    get: operations["coreActionDeleteSiteNode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/disableAllProxyChainExcludedDomains/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionDisableAllProxyChainExcludedDomains"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/disableClientCertificate/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionDisableClientCertificate"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/enableAllProxyChainExcludedDomains/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionEnableAllProxyChainExcludedDomains"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/enablePKCS12ClientCertificate/": {
    parameters: {
      query: {
        filePath: string;
        password: string;
        index?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionEnablePKCS12ClientCertificate"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/excludeFromProxy/": {
    parameters: {
      query: {
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a regex of URLs that should be excluded from the local proxies. */
    get: operations["coreActionExcludeFromProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/generateRootCA/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionGenerateRootCA"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/loadSession/": {
    parameters: {
      query: {
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Loads the session with the given name. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir. */
    get: operations["coreActionLoadSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/modifyProxyChainExcludedDomain/": {
    parameters: {
      query: {
        idx: string;
        value?: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionModifyProxyChainExcludedDomain"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/newSession/": {
    parameters: {
      query?: {
        name?: string;
        overwrite?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Creates a new session, optionally overwriting existing files. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir. */
    get: operations["coreActionNewSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/removeProxyChainExcludedDomain/": {
    parameters: {
      query: {
        idx: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionRemoveProxyChainExcludedDomain"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/runGarbageCollection/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["coreActionRunGarbageCollection"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/saveSession/": {
    parameters: {
      query: {
        /** @description The name (or path) of the session. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir. */
        name: string;
        /** @description If existing files should be overwritten, attempting to overwrite the files of the session already in use/saved will lead to an error ("already_exists"). */
        overwrite?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Saves the session. */
    get: operations["coreActionSaveSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/sendRequest/": {
    parameters: {
      query: {
        request: string;
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sends the HTTP request, optionally following redirections. Returns the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope. */
    get: operations["coreActionSendRequest"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setHomeDirectory/": {
    parameters: {
      query: {
        dir: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["coreActionSetHomeDirectory"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setMode/": {
    parameters: {
      query: {
        mode: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the mode, which may be one of [safe, protect, standard, attack] */
    get: operations["coreActionSetMode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionAlertOverridesFilePath/": {
    parameters: {
      query?: {
        filePath?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets (or clears, if empty) the path to the file with alert overrides. */
    get: operations["coreActionSetOptionAlertOverridesFilePath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionDefaultUserAgent/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionDefaultUserAgent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionDnsTtlSuccessfulQueries/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionDnsTtlSuccessfulQueries"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionHttpStateEnabled/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionHttpStateEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionMaximumAlertInstances/": {
    parameters: {
      query: {
        numberOfInstances: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum number of alert instances to include in a report. A value of zero is treated as unlimited. */
    get: operations["coreActionSetOptionMaximumAlertInstances"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionMergeRelatedAlerts/": {
    parameters: {
      query: {
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not related alerts will be merged in any reports generated. */
    get: operations["coreActionSetOptionMergeRelatedAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainName/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionProxyChainName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainPassword/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionProxyChainPassword"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainPort/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionProxyChainPort"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainPrompt/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionProxyChainPrompt"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainRealm/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionProxyChainRealm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainSkipName/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["coreActionSetOptionProxyChainSkipName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionProxyChainUserName/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionProxyChainUserName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionSingleCookieRequestHeader/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["coreActionSetOptionSingleCookieRequestHeader"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionTimeoutInSecs/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionTimeoutInSecs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionUseProxyChain/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionUseProxyChain"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionUseProxyChainAuth/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionUseProxyChainAuth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/setOptionUseSocksProxy/": {
    parameters: {
      query: {
        /** @description true if the SOCKS proxy should be used, false otherwise. */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreActionSetOptionUseSocksProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/shutdown/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Shuts down ZAP */
    get: operations["coreActionShutdown"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/action/snapshotSession/": {
    parameters: {
      query?: {
        name?: string;
        overwrite?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Snapshots the session, optionally with the given name, and overwriting existing files. If no name is specified the name of the current session with a timestamp appended is used. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir. */
    get: operations["coreActionSnapshotSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/fileDownload/": {
    parameters: {
      query: {
        /** @description The name of the file, may include subdirectories */
        fileName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Download a file from the transfer directory */
    get: operations["coreOtherFileDownload"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/fileUpload/": {
    parameters: {
      query: {
        /** @description The name of the file, may include subdirectories. */
        fileName: string;
        /** @description The contents of the file. */
        fileContents: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Upload a file to the transfer directory. Only POST requests accepted with encodings of "multipart/form-data" or "application/x-www-form-urlencoded". */
    get: operations["coreOtherFileUpload"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/htmlreport/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the 'generate' API endpoint the 'reports' component instead.
     */
    get: operations["coreOtherHtmlreport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/jsonreport/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the 'generate' API endpoint the 'reports' component instead.
     */
    get: operations["coreOtherJsonreport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/mdreport/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the 'generate' API endpoint the 'reports' component instead.
     */
    get: operations["coreOtherMdreport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/messageHar/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'exim' add-on instead.
     */
    get: operations["coreOtherMessageHar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/messagesHar/": {
    parameters: {
      query?: {
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'exim' add-on instead.
     */
    get: operations["coreOtherMessagesHar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/messagesHarById/": {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'exim' add-on instead.
     */
    get: operations["coreOtherMessagesHarById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/proxy.pac/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreOtherProxy.pac"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/rootcert/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreOtherRootcert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/sendHarRequest/": {
    parameters: {
      query: {
        request: string;
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'exim' add-on instead.
     */
    get: operations["coreOtherSendHarRequest"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/setproxy/": {
    parameters: {
      query: {
        proxy: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreOtherSetproxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/core/other/xmlreport/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the 'generate' API endpoint the 'reports' component instead.
     */
    get: operations["coreOtherXmlreport"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/alert/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoint with the same name in the 'alert' component instead.
     */
    get: operations["coreViewAlert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/alerts/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoint with the same name in the 'alert' component instead.
     */
    get: operations["coreViewAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/alertsSummary/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoint with the same name in the 'alert' component instead.
     */
    get: operations["coreViewAlertsSummary"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/childNodes/": {
    parameters: {
      query?: {
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the child nodes underneath the specified URL in the Sites tree */
    get: operations["coreViewChildNodes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/excludedFromProxy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the regular expressions, applied to URLs, to exclude from the local proxies. */
    get: operations["coreViewExcludedFromProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/homeDirectory/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @deprecated */
    get: operations["coreViewHomeDirectory"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/hosts/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the name of the hosts accessed through/by ZAP */
    get: operations["coreViewHosts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/message/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP message with the given ID. Returns the ID, request/response headers and bodies, cookies, note, type, RTT, and timestamp. */
    get: operations["coreViewMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/messages/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP messages sent by ZAP, request and response, optionally filtered by URL and paginated with 'start' position and 'count' of messages */
    get: operations["coreViewMessages"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/messagesById/": {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP messages with the given IDs. */
    get: operations["coreViewMessagesById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/mode/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the mode */
    get: operations["coreViewMode"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/numberOfAlerts/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoint with the same name in the 'alert' component instead.
     */
    get: operations["coreViewNumberOfAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/numberOfMessages/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the number of messages, optionally filtering by URL */
    get: operations["coreViewNumberOfMessages"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionAlertOverridesFilePath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the path to the file with alert overrides. */
    get: operations["coreViewOptionAlertOverridesFilePath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionDefaultUserAgent/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionDefaultUserAgent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionDnsTtlSuccessfulQueries/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionDnsTtlSuccessfulQueries"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionHttpState/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionHttpState"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionHttpStateEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionHttpStateEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionMaximumAlertInstances/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the maximum number of alert instances to include in a report. */
    get: operations["coreViewOptionMaximumAlertInstances"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionMergeRelatedAlerts/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets whether or not related alerts will be merged in any reports generated. */
    get: operations["coreViewOptionMergeRelatedAlerts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainName/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionProxyChainName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainPassword/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionProxyChainPassword"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainPort/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionProxyChainPort"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainPrompt/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionProxyChainPrompt"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainRealm/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionProxyChainRealm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainSkipName/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use view proxyChainExcludedDomains instead.
     */
    get: operations["coreViewOptionProxyChainSkipName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyChainUserName/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionProxyChainUserName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyExcludedDomains/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use view proxyChainExcludedDomains instead.
     */
    get: operations["coreViewOptionProxyExcludedDomains"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionProxyExcludedDomainsEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use view proxyChainExcludedDomains instead.
     */
    get: operations["coreViewOptionProxyExcludedDomainsEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionSingleCookieRequestHeader/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["coreViewOptionSingleCookieRequestHeader"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionTimeoutInSecs/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionTimeoutInSecs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionUseProxyChain/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionUseProxyChain"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionUseProxyChainAuth/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionUseProxyChainAuth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/optionUseSocksProxy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewOptionUseSocksProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/proxyChainExcludedDomains/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["coreViewProxyChainExcludedDomains"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/sessionLocation/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the location of the current session file */
    get: operations["coreViewSessionLocation"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/sites/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the sites accessed through/by ZAP (scheme and domain) */
    get: operations["coreViewSites"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/urls/": {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the URLs accessed through/by ZAP, optionally filtering by (base) URL. */
    get: operations["coreViewUrls"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/version/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets ZAP version */
    get: operations["coreViewVersion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/core/view/zapHomePath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the path to ZAP's home directory. */
    get: operations["coreViewZapHomePath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/dev/other/openapi/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Provides the OpenAPI definition of the ZAP API, in YAML format. */
    get: operations["devOtherOpenapi"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/exim/action/importHar/": {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports a HAR file. */
    get: operations["eximActionImportHar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/exim/action/importModsec2Logs/": {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports ModSecurity2 logs from the file with the given file system path. */
    get: operations["eximActionImportModsec2Logs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/exim/action/importUrls/": {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports URLs (one per line) from the file with the given file system path. */
    get: operations["eximActionImportUrls"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/exim/action/importZapLogs/": {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports previously exported ZAP messages from the file with the given file system path. */
    get: operations["eximActionImportZapLogs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/exim/other/exportHar/": {
    parameters: {
      query?: {
        /** @description The URL below which messages should be included. */
        baseurl?: string;
        /** @description The position (or offset) within the results to use as a starting position for the information returned. */
        start?: string;
        /** @description The number of results to return. */
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP messages sent through/by ZAP, in HAR format, optionally filtered by URL and paginated with 'start' position and 'count' of messages */
    get: operations["eximOtherExportHar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/exim/other/exportHarById/": {
    parameters: {
      query: {
        /** @description The ID (number(s)) of the message(s) to be returned. */
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP messages with the given IDs, in HAR format. */
    get: operations["eximOtherExportHarById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/exim/other/sendHarRequest/": {
    parameters: {
      query: {
        /** @description The raw JSON of a HAR request. */
        request: string;
        /** @description True if redirects should be followed, false otherwise. */
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sends the first HAR request entry, optionally following redirections. Returns, in HAR format, the request sent and response received and followed redirections, if any. The Mode is enforced when sending the request (and following redirections), custom manual requests are not allowed in 'Safe' mode nor in 'Protected' mode if out of scope. */
    get: operations["eximOtherSendHarRequest"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/forcedUser/action/setForcedUser/": {
    parameters: {
      query: {
        contextId: string;
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the user (ID) that should be used in 'forced user' mode for the given context (ID) */
    get: operations["forcedUserActionSetForcedUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/forcedUser/action/setForcedUserModeEnabled/": {
    parameters: {
      query: {
        boolean: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets if 'forced user' mode should be enabled or not */
    get: operations["forcedUserActionSetForcedUserModeEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/forcedUser/view/getForcedUser/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the user (ID) set as 'forced user' for the given context (ID) */
    get: operations["forcedUserViewGetForcedUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/forcedUser/view/isForcedUserModeEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns 'true' if 'forced user' mode is enabled, 'false' otherwise */
    get: operations["forcedUserViewIsForcedUserModeEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/importFile/": {
    parameters: {
      query: {
        /** @description The Endpoint URL. */
        endurl: string;
        /** @description The File That Contains the GraphQL Schema. */
        file: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports a GraphQL Schema from a File. */
    get: operations["graphqlActionImportFile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/importUrl/": {
    parameters: {
      query: {
        /** @description The Endpoint URL. */
        endurl: string;
        /** @description The URL Locating the GraphQL Schema. */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports a GraphQL Schema from a URL. */
    get: operations["graphqlActionImportUrl"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionArgsType/": {
    parameters: {
      query: {
        /** @description Can be "INLINE", "VARIABLES", or "BOTH". */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets how arguments are specified. */
    get: operations["graphqlActionSetOptionArgsType"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionLenientMaxQueryDepthEnabled/": {
    parameters: {
      query: {
        /** @description Enforce Leniently (true or false). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not Maximum Query Depth is enforced leniently. */
    get: operations["graphqlActionSetOptionLenientMaxQueryDepthEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionMaxAdditionalQueryDepth/": {
    parameters: {
      query: {
        /** @description The Maximum Additional Depth. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum additional query generation depth (used if enforced leniently). */
    get: operations["graphqlActionSetOptionMaxAdditionalQueryDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionMaxArgsDepth/": {
    parameters: {
      query: {
        /** @description The Maximum Depth. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum arguments generation depth. */
    get: operations["graphqlActionSetOptionMaxArgsDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionMaxQueryDepth/": {
    parameters: {
      query: {
        /** @description The Maximum Depth. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum query generation depth. */
    get: operations["graphqlActionSetOptionMaxQueryDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionOptionalArgsEnabled/": {
    parameters: {
      query: {
        /** @description Specify Optional Arguments (true or false). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not Optional Arguments should be specified. */
    get: operations["graphqlActionSetOptionOptionalArgsEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionQueryGenEnabled/": {
    parameters: {
      query: {
        /** @description Enable query generation (true or false). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether the query generator is enabled. */
    get: operations["graphqlActionSetOptionQueryGenEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionQuerySplitType/": {
    parameters: {
      query: {
        /** @description Can be "LEAF", "ROOT_FIELD", or "OPERATION". */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the level for which a single query is generated. */
    get: operations["graphqlActionSetOptionQuerySplitType"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/action/setOptionRequestMethod/": {
    parameters: {
      query: {
        /** @description Can be "POST_JSON", "POST_GRAPHQL", or "GET". */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the request method. */
    get: operations["graphqlActionSetOptionRequestMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionArgsType/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns how arguments are currently specified. */
    get: operations["graphqlViewOptionArgsType"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionLenientMaxQueryDepthEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns whether or not lenient maximum query generation depth is enabled. */
    get: operations["graphqlViewOptionLenientMaxQueryDepthEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionMaxAdditionalQueryDepth/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current maximum additional query generation depth. */
    get: operations["graphqlViewOptionMaxAdditionalQueryDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionMaxArgsDepth/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current maximum arguments generation depth. */
    get: operations["graphqlViewOptionMaxArgsDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionMaxQueryDepth/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current maximum query generation depth. */
    get: operations["graphqlViewOptionMaxQueryDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionOptionalArgsEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns whether or not optional arguments are currently specified. */
    get: operations["graphqlViewOptionOptionalArgsEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionQueryGenEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns whether the query generator is enabled. */
    get: operations["graphqlViewOptionQueryGenEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionQuerySplitType/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current level for which a single query is generated. */
    get: operations["graphqlViewOptionQuerySplitType"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/graphql/view/optionRequestMethod/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current request method. */
    get: operations["graphqlViewOptionRequestMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/addDefaultSessionToken/": {
    parameters: {
      query: {
        sessionToken: string;
        tokenEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a default session token with the given name and enabled state. */
    get: operations["httpSessionsActionAddDefaultSessionToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/addSessionToken/": {
    parameters: {
      query: {
        site: string;
        sessionToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds the session token to the given site. */
    get: operations["httpSessionsActionAddSessionToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/createEmptySession/": {
    parameters: {
      query: {
        site: string;
        session?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Creates an empty session for the given site. Optionally with the given name. */
    get: operations["httpSessionsActionCreateEmptySession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/removeDefaultSessionToken/": {
    parameters: {
      query: {
        sessionToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the default session token with the given name. */
    get: operations["httpSessionsActionRemoveDefaultSessionToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/removeSession/": {
    parameters: {
      query: {
        site: string;
        session: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the session from the given site. */
    get: operations["httpSessionsActionRemoveSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/removeSessionToken/": {
    parameters: {
      query: {
        site: string;
        sessionToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the session token from the given site. */
    get: operations["httpSessionsActionRemoveSessionToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/renameSession/": {
    parameters: {
      query: {
        site: string;
        oldSessionName: string;
        newSessionName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Renames the session of the given site. */
    get: operations["httpSessionsActionRenameSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/setActiveSession/": {
    parameters: {
      query: {
        site: string;
        session: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the given session as active for the given site. */
    get: operations["httpSessionsActionSetActiveSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/setDefaultSessionTokenEnabled/": {
    parameters: {
      query: {
        sessionToken: string;
        tokenEnabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the default session token with the given name is enabled. */
    get: operations["httpSessionsActionSetDefaultSessionTokenEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/setSessionTokenValue/": {
    parameters: {
      query: {
        site: string;
        session: string;
        sessionToken: string;
        tokenValue: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the value of the session token of the given session for the given site. */
    get: operations["httpSessionsActionSetSessionTokenValue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/action/unsetActiveSession/": {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Unsets the active session of the given site. */
    get: operations["httpSessionsActionUnsetActiveSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/view/activeSession/": {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the name of the active session for the given site. */
    get: operations["httpSessionsViewActiveSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/view/defaultSessionTokens/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the default session tokens. */
    get: operations["httpSessionsViewDefaultSessionTokens"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/view/sessionTokens/": {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the names of the session tokens for the given site. */
    get: operations["httpSessionsViewSessionTokens"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/view/sessions/": {
    parameters: {
      query: {
        site: string;
        session?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the sessions for the given site. Optionally returning just the session with the given name. */
    get: operations["httpSessionsViewSessions"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/httpSessions/view/sites/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all of the sites that have sessions. */
    get: operations["httpSessionsViewSites"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/keyboard/other/cheatsheetActionOrder/": {
    parameters: {
      query?: {
        incUnset?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the keyboard shortcuts sorted by action, optionally, showing actions without shortcut set. */
    get: operations["keyboardOtherCheatsheetActionOrder"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/keyboard/other/cheatsheetKeyOrder/": {
    parameters: {
      query?: {
        incUnset?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the keyboard shortcuts sorted by keyboard shortcut, optionally, showing actions without shortcut set. */
    get: operations["keyboardOtherCheatsheetKeyOrder"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/localProxies/action/addAdditionalProxy/": {
    parameters: {
      query: {
        address: string;
        port: string;
        behindNat?: string;
        alwaysDecodeZip?: string;
        removeUnsupportedEncodings?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["localProxiesActionAddAdditionalProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/localProxies/action/removeAdditionalProxy/": {
    parameters: {
      query: {
        address: string;
        port: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["localProxiesActionRemoveAdditionalProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/localProxies/view/additionalProxies/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the API endpoints in the 'network' component instead.
     */
    get: operations["localProxiesViewAdditionalProxies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/addAlias/": {
    parameters: {
      query: {
        /** @description The name of the alias. */
        name: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds an alias for the local servers/proxies. */
    get: operations["networkActionAddAlias"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/addHttpProxyExclusion/": {
    parameters: {
      query: {
        /** @description The value of the host, a regular expression. */
        host: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a host to be excluded from the HTTP proxy. */
    get: operations["networkActionAddHttpProxyExclusion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/addLocalServer/": {
    parameters: {
      query: {
        /** @description The address of the local server/proxy. */
        address: string;
        /** @description The port of the local server/proxy. */
        port: string;
        /** @description If the ZAP API is available, true or false. */
        api?: string;
        /** @description If the local server should proxy, true or false. */
        proxy?: string;
        /** @description If the local server is behind NAT, true or false. */
        behindNat?: string;
        /** @description If the response should be decoded, true or false. */
        decodeResponse?: string;
        /** @description If the request header Accept-Encoding should be removed, true or false. */
        removeAcceptEncoding?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a local server/proxy. */
    get: operations["networkActionAddLocalServer"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/addPassThrough/": {
    parameters: {
      query: {
        /** @description The value of the authority, can be a regular expression. */
        authority: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds an authority to pass-through the local proxies. */
    get: operations["networkActionAddPassThrough"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/addPkcs12ClientCertificate/": {
    parameters: {
      query: {
        /** @description The file path. */
        filePath: string;
        /** @description The password for the file. */
        password: string;
        /** @description The index of the certificate in the file, defaults to 0. */
        index?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a client certificate contained in a PKCS#12 file, the certificate is automatically set as active and used. */
    get: operations["networkActionAddPkcs12ClientCertificate"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/addRateLimitRule/": {
    parameters: {
      query: {
        /** @description A description that allows you to identify the rule. Each rule must have a unique description. */
        description: string;
        /** @description The enabled state, true or false. */
        enabled: string;
        /** @description Regex used to match the host. */
        matchRegex: string;
        /** @description Plain string match is handled based on DNS conventions. If the string has one or two components. */
        matchString: string;
        /** @description The maximum number of requests per second. */
        requestsPerSecond: string;
        /** @description How to group hosts when applying rate limiting: rule or host */
        groupBy: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a rate limit rule */
    get: operations["networkActionAddRateLimitRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/generateRootCaCert/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Generates a new Root CA certificate, used to issue server certificates. */
    get: operations["networkActionGenerateRootCaCert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/importRootCaCert/": {
    parameters: {
      query: {
        /** @description The file system path to the PEM file, containing the certificate and private key. */
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports a Root CA certificate to be used to issue server certificates. */
    get: operations["networkActionImportRootCaCert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/removeAlias/": {
    parameters: {
      query: {
        /** @description The name of the alias. */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes an alias. */
    get: operations["networkActionRemoveAlias"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/removeHttpProxyExclusion/": {
    parameters: {
      query: {
        /** @description The value of the host. */
        host: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes an HTTP proxy exclusion. */
    get: operations["networkActionRemoveHttpProxyExclusion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/removeLocalServer/": {
    parameters: {
      query: {
        /** @description The address of the local server/proxy. */
        address: string;
        /** @description The port of the local server/proxy. */
        port: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a local server/proxy. */
    get: operations["networkActionRemoveLocalServer"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/removePassThrough/": {
    parameters: {
      query: {
        /** @description The value of the authority. */
        authority: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a pass-through. */
    get: operations["networkActionRemovePassThrough"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/removeRateLimitRule/": {
    parameters: {
      query: {
        /** @description The description of the rule to remove. */
        description: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Remove a rate limit rule */
    get: operations["networkActionRemoveRateLimitRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setAliasEnabled/": {
    parameters: {
      query: {
        /** @description The name of the alias. */
        name: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not an alias is enabled. */
    get: operations["networkActionSetAliasEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setConnectionTimeout/": {
    parameters: {
      query: {
        /** @description The timeout, in seconds. */
        timeout: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the timeout, for reads and connects. */
    get: operations["networkActionSetConnectionTimeout"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setDefaultUserAgent/": {
    parameters: {
      query: {
        /** @description The default user-agent. */
        userAgent: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the default user-agent. */
    get: operations["networkActionSetDefaultUserAgent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setDnsTtlSuccessfulQueries/": {
    parameters: {
      query: {
        /** @description The TTL, in seconds. Negative number, cache forever. Zero, disables caching. Positive number, the number of seconds the successful DNS queries will be cached. */
        ttl: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the TTL of successful DNS queries. */
    get: operations["networkActionSetDnsTtlSuccessfulQueries"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setHttpProxy/": {
    parameters: {
      query: {
        /** @description The host, name or address. */
        host: string;
        /** @description The port. */
        port: string;
        /** @description The authentication realm. */
        realm?: string;
        /** @description The user name. */
        username?: string;
        /** @description The password. */
        password?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the HTTP proxy configuration. */
    get: operations["networkActionSetHttpProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setHttpProxyAuthEnabled/": {
    parameters: {
      query: {
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the HTTP proxy authentication is enabled. */
    get: operations["networkActionSetHttpProxyAuthEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setHttpProxyEnabled/": {
    parameters: {
      query: {
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the HTTP proxy is enabled. */
    get: operations["networkActionSetHttpProxyEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setHttpProxyExclusionEnabled/": {
    parameters: {
      query: {
        /** @description The value of the host. */
        host: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not an HTTP proxy exclusion is enabled. */
    get: operations["networkActionSetHttpProxyExclusionEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setPassThroughEnabled/": {
    parameters: {
      query: {
        /** @description The value of the authority. */
        authority: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not a pass-through is enabled. */
    get: operations["networkActionSetPassThroughEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setRateLimitRuleEnabled/": {
    parameters: {
      query: {
        /** @description The description of the rule to modify. */
        description: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Set enabled state for a rate limit rule. */
    get: operations["networkActionSetRateLimitRuleEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setRootCaCertValidity/": {
    parameters: {
      query: {
        /** @description The number of days that the generated Root CA certificate will be valid for. */
        validity: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the Root CA certificate validity. Used when generating a new Root CA certificate. */
    get: operations["networkActionSetRootCaCertValidity"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setServerCertValidity/": {
    parameters: {
      query: {
        /** @description The number of days that the generated server certificates will be valid for. */
        validity: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the server certificate validity. Used when generating server certificates. */
    get: operations["networkActionSetServerCertValidity"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setSocksProxy/": {
    parameters: {
      query: {
        /** @description The host, name or address. */
        host: string;
        /** @description The port. */
        port: string;
        /** @description The SOCKS version. */
        version?: string;
        /** @description If the names should be resolved by the SOCKS proxy, true or false. */
        useDns?: string;
        /** @description The user name. */
        username?: string;
        /** @description The password. */
        password?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the SOCKS proxy configuration. */
    get: operations["networkActionSetSocksProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setSocksProxyEnabled/": {
    parameters: {
      query: {
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the SOCKS proxy is enabled. */
    get: operations["networkActionSetSocksProxyEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setUseClientCertificate/": {
    parameters: {
      query: {
        /** @description The use state, true or false. */
        use: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not to use the active client certificate. */
    get: operations["networkActionSetUseClientCertificate"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/action/setUseGlobalHttpState/": {
    parameters: {
      query: {
        /** @description The use state, true or false. */
        use: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not to use the global HTTP state. */
    get: operations["networkActionSetUseGlobalHttpState"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/network/other/proxy.pac/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Provides a PAC file, proxying through the main proxy. */
    get: operations["networkOtherProxy.pac"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/network/other/rootCaCert/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the Root CA certificate used to issue server certificates. Suitable to import into client applications (e.g. browsers). */
    get: operations["networkOtherRootCaCert"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/network/other/setProxy/": {
    parameters: {
      query: {
        /** @description The JSON object containing the HTTP proxy configuration. */
        proxy: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the HTTP proxy configuration. */
    get: operations["networkOtherSetProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getAliases/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the aliases used to identify the local servers/proxies. */
    get: operations["networkViewGetAliases"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getConnectionTimeout/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the connection timeout, in seconds. */
    get: operations["networkViewGetConnectionTimeout"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getDefaultUserAgent/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the default user-agent. */
    get: operations["networkViewGetDefaultUserAgent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getDnsTtlSuccessfulQueries/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the TTL (in seconds) of successful DNS queries. */
    get: operations["networkViewGetDnsTtlSuccessfulQueries"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getHttpProxy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP proxy. */
    get: operations["networkViewGetHttpProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getHttpProxyExclusions/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the HTTP proxy exclusions. */
    get: operations["networkViewGetHttpProxyExclusions"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getLocalServers/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the local servers/proxies. */
    get: operations["networkViewGetLocalServers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getPassThroughs/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the authorities that will pass-through the local proxies. */
    get: operations["networkViewGetPassThroughs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getRateLimitRules/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description List of rate limit rules. */
    get: operations["networkViewGetRateLimitRules"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getRootCaCertValidity/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the Root CA certificate validity, in days. Used when generating a new Root CA certificate. */
    get: operations["networkViewGetRootCaCertValidity"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getServerCertValidity/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the server certificate validity, in days. Used when generating server certificates. */
    get: operations["networkViewGetServerCertValidity"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/getSocksProxy/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the SOCKS proxy. */
    get: operations["networkViewGetSocksProxy"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/isHttpProxyAuthEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the HTTP proxy authentication is enabled. */
    get: operations["networkViewIsHttpProxyAuthEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/isHttpProxyEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the HTTP proxy is enabled. */
    get: operations["networkViewIsHttpProxyEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/isSocksProxyEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the SOCKS proxy is enabled. */
    get: operations["networkViewIsSocksProxyEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/network/view/isUseGlobalHttpState/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not to use global HTTP state. */
    get: operations["networkViewIsUseGlobalHttpState"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/openapi/action/importFile/": {
    parameters: {
      query: {
        /** @description The file that contains the OpenAPI definition. */
        file: string;
        /** @description The Target URL to override the server URL present in the definition. */
        target?: string;
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports an OpenAPI definition from a local file. */
    get: operations["openapiActionImportFile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/openapi/action/importUrl/": {
    parameters: {
      query: {
        /** @description The URL locating the OpenAPI definition. */
        url: string;
        /** @description The Target URL (called hostOverride for historical reasons) to override the server URL present in the definition. */
        hostOverride?: string;
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Imports an OpenAPI definition from a URL. */
    get: operations["openapiActionImportUrl"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/paramDigger/action/helloWorld/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["paramDiggerActionHelloWorld"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pnh/action/monitor/": {
    parameters: {
      query: {
        id: string;
        message: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhActionMonitor"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pnh/action/oracle/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhActionOracle"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pnh/action/startMonitoring/": {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhActionStartMonitoring"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pnh/action/stopMonitoring/": {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhActionStopMonitoring"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/pnh/other/fx_pnh.xpi/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhOtherFx_pnh.xpi"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/pnh/other/manifest/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhOtherManifest"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/pnh/other/pnh/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhOtherPnh"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/pnh/other/service/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["pnhOtherService"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/postman/action/importFile/": {
    parameters: {
      query: {
        file: string;
        endpointUrl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["postmanActionImportFile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/postman/action/importUrl/": {
    parameters: {
      query: {
        url: string;
        endpointUrl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["postmanActionImportUrl"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/clearQueue/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the passive scan queue. */
    get: operations["pscanActionClearQueue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/disableAllScanners/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables all passive scan rules */
    get: operations["pscanActionDisableAllScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/disableAllTags/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables all passive scan tags. */
    get: operations["pscanActionDisableAllTags"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/disableScanners/": {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables all passive scan rules with the given IDs (comma separated list of IDs) */
    get: operations["pscanActionDisableScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/enableAllScanners/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables all passive scan rules */
    get: operations["pscanActionEnableAllScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/enableAllTags/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables all passive scan tags. */
    get: operations["pscanActionEnableAllTags"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/enableScanners/": {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables all passive scan rules with the given IDs (comma separated list of IDs) */
    get: operations["pscanActionEnableScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/setEnabled/": {
    parameters: {
      query: {
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the passive scanning is enabled (Note: the enabled state is not persisted). */
    get: operations["pscanActionSetEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/setMaxAlertsPerRule/": {
    parameters: {
      query: {
        maxAlerts: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum number of alerts a passive scan rule should raise. */
    get: operations["pscanActionSetMaxAlertsPerRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/setScanOnlyInScope/": {
    parameters: {
      query: {
        onlyInScope: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the passive scan should be performed only on messages that are in scope. */
    get: operations["pscanActionSetScanOnlyInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/action/setScannerAlertThreshold/": {
    parameters: {
      query: {
        id: string;
        alertThreshold: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the alert threshold of the passive scan rule with the given ID, accepted values for alert threshold: OFF, DEFAULT, LOW, MEDIUM and HIGH */
    get: operations["pscanActionSetScannerAlertThreshold"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/view/currentRule/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use the currentTasks view instead.
     */
    get: operations["pscanViewCurrentRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/view/currentTasks/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Show information about the passive scan tasks currently being run (if any). */
    get: operations["pscanViewCurrentTasks"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/view/maxAlertsPerRule/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the maximum number of alerts a passive scan rule should raise. */
    get: operations["pscanViewMaxAlertsPerRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/view/recordsToScan/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description The number of records the passive scanner still has to scan */
    get: operations["pscanViewRecordsToScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/view/scanOnlyInScope/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells whether or not the passive scan should be performed only on messages that are in scope. */
    get: operations["pscanViewScanOnlyInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/pscan/view/scanners/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists all passive scan rules with their ID, name, enabled state, and alert threshold. */
    get: operations["pscanViewScanners"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/quickstartlaunch/other/startPage/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["quickstartlaunchOtherStartPage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/replacer/action/addRule/": {
    parameters: {
      query: {
        description: string;
        enabled: string;
        matchType: string;
        matchRegex: string;
        matchString: string;
        replacement?: string;
        initiators?: string;
        /** @description A regular expression to match the URL of the message, if empty the rule applies to all messages. */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a replacer rule. For the parameters: desc is a user friendly description, enabled is true or false, matchType is one of [REQ_HEADER, REQ_HEADER_STR, REQ_BODY_STR, RESP_HEADER, RESP_HEADER_STR, RESP_BODY_STR], matchRegex should be true if the matchString should be treated as a regex otherwise false, matchString is the string that will be matched against, replacement is the replacement string, initiators may be blank (for all initiators) or a comma separated list of integers as defined in <a href="https://github.com/zaproxy/zaproxy/blob/main/zap/src/main/java/org/parosproxy/paros/network/HttpSender.java">HttpSender</a>   */
    get: operations["replacerActionAddRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/replacer/action/removeRule/": {
    parameters: {
      query: {
        description: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the rule with the given description */
    get: operations["replacerActionRemoveRule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/replacer/action/setEnabled/": {
    parameters: {
      query: {
        description: string;
        bool: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables or disables the rule with the given description based on the bool parameter   */
    get: operations["replacerActionSetEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/replacer/view/rules/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns full details of all of the rules */
    get: operations["replacerViewRules"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/reports/action/generate/": {
    parameters: {
      query: {
        /** @description Report Title */
        title: string;
        /** @description Report Template */
        template: string;
        /** @description Report Theme */
        theme?: string;
        /** @description Report Description */
        description?: string;
        /** @description The name of the contexts to be included in the report, separated by '|'. */
        contexts?: string;
        /** @description The site URLs that should be included in the report, separated by '|'. */
        sites?: string;
        /** @description The report sections that should be included, separated by '|'. */
        sections?: string;
        /** @description Confidences that should be included in the report, separated by '|'. Accepted values are "False Positive", "Low", "Medium", "High", and "Confirmed". */
        includedConfidences?: string;
        /** @description Risks that should be included in the report, separated by '|'. Accepted values are "Informational", "Low", "Medium", and "High". */
        includedRisks?: string;
        /** @description The file name of the generated report. This value overrides the reportFileNamePattern parameter. */
        reportFileName?: string;
        /** @description Report File Name Pattern. */
        reportFileNamePattern?: string;
        /** @description Path to directory in which the generated report should be placed. */
        reportDir?: string;
        /** @description Display the generated report. Either "true" or "false". */
        display?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Generate a report with the supplied parameters. */
    get: operations["reportsActionGenerate"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/reports/view/templateDetails/": {
    parameters: {
      query: {
        /** @description Template Label */
        template: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description View details of the specified template. */
    get: operations["reportsViewTemplateDetails"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/reports/view/templates/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description View available templates. */
    get: operations["reportsViewTemplates"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/retest/action/retest/": {
    parameters: {
      query: {
        alertIds: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["retestActionRetest"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/reveal/action/setReveal/": {
    parameters: {
      query: {
        reveal: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets if shows hidden fields and enables disabled fields */
    get: operations["revealActionSetReveal"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/reveal/view/reveal/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tells if shows hidden fields and enables disabled fields */
    get: operations["revealViewReveal"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/revisit/action/revisitSiteOff/": {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["revisitActionRevisitSiteOff"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/revisit/action/revisitSiteOn/": {
    parameters: {
      query: {
        site: string;
        startTime: string;
        endTime: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["revisitActionRevisitSiteOn"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/revisit/view/revisitList/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["revisitViewRevisitList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ruleConfig/action/resetAllRuleConfigValues/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Reset all of the rule configurations */
    get: operations["ruleConfigActionResetAllRuleConfigValues"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ruleConfig/action/resetRuleConfigValue/": {
    parameters: {
      query: {
        key: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Reset the specified rule configuration, which must already exist */
    get: operations["ruleConfigActionResetRuleConfigValue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ruleConfig/action/setRuleConfigValue/": {
    parameters: {
      query: {
        key: string;
        value?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Set the specified rule configuration, which must already exist */
    get: operations["ruleConfigActionSetRuleConfigValue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ruleConfig/view/allRuleConfigs/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Show all of the rule configurations */
    get: operations["ruleConfigViewAllRuleConfigs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/ruleConfig/view/ruleConfigValue/": {
    parameters: {
      query: {
        key: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Show the specified rule configuration */
    get: operations["ruleConfigViewRuleConfigValue"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/clearGlobalCustomVar/": {
    parameters: {
      query: {
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears a global custom variable. */
    get: operations["scriptActionClearGlobalCustomVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/clearGlobalVar/": {
    parameters: {
      query: {
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the global variable with the given key. */
    get: operations["scriptActionClearGlobalVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/clearGlobalVars/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the global variables. */
    get: operations["scriptActionClearGlobalVars"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/clearScriptCustomVar/": {
    parameters: {
      query: {
        /** @description The name of the script. */
        scriptName: string;
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears a script custom variable. */
    get: operations["scriptActionClearScriptCustomVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/clearScriptVar/": {
    parameters: {
      query: {
        scriptName: string;
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists. */
    get: operations["scriptActionClearScriptVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/clearScriptVars/": {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the variables of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists. */
    get: operations["scriptActionClearScriptVars"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/disable/": {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables the script with the given name */
    get: operations["scriptActionDisable"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/enable/": {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables the script with the given name */
    get: operations["scriptActionEnable"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/load/": {
    parameters: {
      query: {
        scriptName: string;
        scriptType: string;
        scriptEngine: string;
        fileName: string;
        scriptDescription?: string;
        charset?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Loads a script into ZAP from the given local file, with the given name, type and engine, optionally with a description, and a charset name to read the script (the charset name is required if the script is not in UTF-8, for example, in ISO-8859-1). */
    get: operations["scriptActionLoad"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/remove/": {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the script with the given name */
    get: operations["scriptActionRemove"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/runStandAloneScript/": {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Runs the stand alone script with the given name */
    get: operations["scriptActionRunStandAloneScript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/setGlobalVar/": {
    parameters: {
      query: {
        varKey: string;
        varValue?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the value of the global variable with the given key. */
    get: operations["scriptActionSetGlobalVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/action/setScriptVar/": {
    parameters: {
      query: {
        scriptName: string;
        varKey: string;
        varValue?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the value of the variable with the given key of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists. */
    get: operations["scriptActionSetScriptVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/globalCustomVar/": {
    parameters: {
      query: {
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the value (string representation) of a global custom variable. Returns an API error (DOES_NOT_EXIST) if no value was previously set. */
    get: operations["scriptViewGlobalCustomVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/globalCustomVars/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the global custom variables (key/value pairs, the value is the string representation). */
    get: operations["scriptViewGlobalCustomVars"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/globalVar/": {
    parameters: {
      query: {
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the value of the global variable with the given key. Returns an API error (DOES_NOT_EXIST) if no value was previously set. */
    get: operations["scriptViewGlobalVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/globalVars/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the global variables (key/value pairs). */
    get: operations["scriptViewGlobalVars"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/listEngines/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the script engines available */
    get: operations["scriptViewListEngines"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/listScripts/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the scripts available, with its engine, name, description, type and error state. */
    get: operations["scriptViewListScripts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/listTypes/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists the script types available. */
    get: operations["scriptViewListTypes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/scriptCustomVar/": {
    parameters: {
      query: {
        /** @description The name of the script. */
        scriptName: string;
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the value (string representation) of a custom variable. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set. */
    get: operations["scriptViewScriptCustomVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/scriptCustomVars/": {
    parameters: {
      query: {
        /** @description The name of the script. */
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the custom variables (key/value pairs, the value is the string representation) of a script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists. */
    get: operations["scriptViewScriptCustomVars"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/scriptVar/": {
    parameters: {
      query: {
        scriptName: string;
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the value of the variable with the given key for the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists or if no value was previously set. */
    get: operations["scriptViewScriptVar"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/script/view/scriptVars/": {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the variables (key/value pairs) of the given script. Returns an API error (DOES_NOT_EXIST) if no script with the given name exists. */
    get: operations["scriptViewScriptVars"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/search/other/harByHeaderRegex/": {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages, in HAR format, that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchOtherHarByHeaderRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/search/other/harByRequestRegex/": {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages, in HAR format, that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchOtherHarByRequestRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/search/other/harByResponseRegex/": {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages, in HAR format, that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchOtherHarByResponseRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OTHER/search/other/harByUrlRegex/": {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages, in HAR format, that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchOtherHarByUrlRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/messagesByHeaderRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewMessagesByHeaderRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/messagesByRequestRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewMessagesByRequestRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/messagesByResponseRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewMessagesByResponseRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/messagesByUrlRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewMessagesByUrlRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/urlsByHeaderRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the URLs of the HTTP messages that match the given regular expression in the header(s) optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewUrlsByHeaderRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/urlsByRequestRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the URLs of the HTTP messages that match the given regular expression in the request optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewUrlsByRequestRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/urlsByResponseRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the URLs of the HTTP messages that match the given regular expression in the response optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewUrlsByResponseRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/search/view/urlsByUrlRegex/": {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the URLs of the HTTP messages that match the given regular expression in the URL optionally filtered by URL and paginated with 'start' position and 'count' of messages. */
    get: operations["searchViewUrlsByUrlRegex"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/addBrowserArgument/": {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
        /** @description The argument. */
        argument: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a browser argument. */
    get: operations["seleniumActionAddBrowserArgument"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/removeBrowserArgument/": {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
        /** @description The argument. */
        argument: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a browser argument. */
    get: operations["seleniumActionRemoveBrowserArgument"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setBrowserArgumentEnabled/": {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
        /** @description The argument. */
        argument: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not a browser argument is enabled. */
    get: operations["seleniumActionSetBrowserArgumentEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionChromeBinaryPath/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the current path to Chrome binary */
    get: operations["seleniumActionSetOptionChromeBinaryPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionChromeDriverPath/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the current path to ChromeDriver */
    get: operations["seleniumActionSetOptionChromeDriverPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionFirefoxBinaryPath/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the current path to Firefox binary */
    get: operations["seleniumActionSetOptionFirefoxBinaryPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionFirefoxDefaultProfile/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["seleniumActionSetOptionFirefoxDefaultProfile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionFirefoxDriverPath/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the current path to Firefox driver (geckodriver) */
    get: operations["seleniumActionSetOptionFirefoxDriverPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionIeDriverPath/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["seleniumActionSetOptionIeDriverPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionLastDirectory/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["seleniumActionSetOptionLastDirectory"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/action/setOptionPhantomJsBinaryPath/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["seleniumActionSetOptionPhantomJsBinaryPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/getBrowserArguments/": {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the browser arguments. */
    get: operations["seleniumViewGetBrowserArguments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionBrowserExtensions/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["seleniumViewOptionBrowserExtensions"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionChromeBinaryPath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current path to Chrome binary */
    get: operations["seleniumViewOptionChromeBinaryPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionChromeDriverPath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current path to ChromeDriver */
    get: operations["seleniumViewOptionChromeDriverPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionFirefoxBinaryPath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current path to Firefox binary */
    get: operations["seleniumViewOptionFirefoxBinaryPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionFirefoxDefaultProfile/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["seleniumViewOptionFirefoxDefaultProfile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionFirefoxDriverPath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the current path to Firefox driver (geckodriver) */
    get: operations["seleniumViewOptionFirefoxDriverPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionIeDriverPath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["seleniumViewOptionIeDriverPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionLastDirectory/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["seleniumViewOptionLastDirectory"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/selenium/view/optionPhantomJsBinaryPath/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Option no longer in effective use.
     */
    get: operations["seleniumViewOptionPhantomJsBinaryPath"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/sessionManagement/action/setSessionManagementMethod/": {
    parameters: {
      query: {
        contextId: string;
        methodName: string;
        methodConfigParams?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the session management method for the context with the given ID. */
    get: operations["sessionManagementActionSetSessionManagementMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/sessionManagement/view/getSessionManagementMethod/": {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the name of the session management method for the context with the given ID. */
    get: operations["sessionManagementViewGetSessionManagementMethod"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/sessionManagement/view/getSessionManagementMethodConfigParams/": {
    parameters: {
      query: {
        methodName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configuration parameters for the session management method with the given name. */
    get: operations["sessionManagementViewGetSessionManagementMethodConfigParams"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/sessionManagement/view/getSupportedSessionManagementMethods/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the name of the session management methods. */
    get: operations["sessionManagementViewGetSupportedSessionManagementMethods"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/soap/action/importFile/": {
    parameters: {
      query: {
        file: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Import a WSDL definition from local file. */
    get: operations["soapActionImportFile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/soap/action/importUrl/": {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Import a WSDL definition from a URL. */
    get: operations["soapActionImportUrl"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/addDomainAlwaysInScope/": {
    parameters: {
      query: {
        value: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a new domain that's always in scope, using the specified value. Optionally sets if the new entry is enabled (default, true) and whether or not the new value is specified as a regex (default, false). */
    get: operations["spiderActionAddDomainAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/clearExcludedFromScan/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears the regexes of URLs excluded from the spider scans. */
    get: operations["spiderActionClearExcludedFromScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/disableAllDomainsAlwaysInScope/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Disables all domains that are always in scope. */
    get: operations["spiderActionDisableAllDomainsAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/enableAllDomainsAlwaysInScope/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Enables all domains that are always in scope. */
    get: operations["spiderActionEnableAllDomainsAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/excludeFromScan/": {
    parameters: {
      query: {
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Adds a regex of URLs that should be excluded from the spider scans. */
    get: operations["spiderActionExcludeFromScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/modifyDomainAlwaysInScope/": {
    parameters: {
      query: {
        idx: string;
        value?: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Modifies a domain that's always in scope. Allows to modify the value, if enabled or if a regex. The domain is selected with its index, which can be obtained with the view domainsAlwaysInScope. */
    get: operations["spiderActionModifyDomainAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/pause/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionPause"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/pauseAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionPauseAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/removeAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionRemoveAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/removeDomainAlwaysInScope/": {
    parameters: {
      query: {
        idx: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes a domain that's always in scope, with the given index. The index can be obtained with the view domainsAlwaysInScope. */
    get: operations["spiderActionRemoveDomainAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/removeScan/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionRemoveScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/resume/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionResume"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/resumeAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionResumeAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/scan/": {
    parameters: {
      query?: {
        url?: string;
        maxChildren?: string;
        recurse?: string;
        contextName?: string;
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Runs the spider against the given URL (or context). Optionally, the 'maxChildren' parameter can be set to limit the number of children scanned, the 'recurse' parameter can be used to prevent the spider from seeding recursively, the parameter 'contextName' can be used to constrain the scan to a Context and the parameter 'subtreeOnly' allows to restrict the spider under a site's subtree (using the specified 'url'). */
    get: operations["spiderActionScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/scanAsUser/": {
    parameters: {
      query: {
        contextId: string;
        userId: string;
        url?: string;
        maxChildren?: string;
        recurse?: string;
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Runs the spider from the perspective of a User, obtained using the given Context ID and User ID. See 'scan' action for more details. */
    get: operations["spiderActionScanAsUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionAcceptCookies/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not a spider process should accept cookies while spidering. */
    get: operations["spiderActionSetOptionAcceptCookies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionHandleODataParametersVisited/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionHandleODataParametersVisited"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionHandleParameters/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionHandleParameters"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionMaxChildren/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum number of child nodes (per node) that can be crawled, 0 means no limit. */
    get: operations["spiderActionSetOptionMaxChildren"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionMaxDepth/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum depth the spider can crawl, 0 for unlimited depth. */
    get: operations["spiderActionSetOptionMaxDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionMaxDuration/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionMaxDuration"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionMaxParseSizeBytes/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the maximum size, in bytes, that a response might have to be parsed. This allows the spider to skip big responses/files. */
    get: operations["spiderActionSetOptionMaxParseSizeBytes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionMaxScansInUI/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionMaxScansInUI"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionParseComments/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionParseComments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionParseDsStore/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionParseDsStore"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionParseGit/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionParseGit"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionParseRobotsTxt/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionParseRobotsTxt"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionParseSVNEntries/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionParseSVNEntries"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionParseSitemapXml/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionParseSitemapXml"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionPostForm/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionPostForm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionProcessForm/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionProcessForm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionRequestWaitTime/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionRequestWaitTime"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionSendRefererHeader/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the 'Referer' header should be sent while spidering. */
    get: operations["spiderActionSetOptionSendRefererHeader"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionShowAdvancedDialog/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionShowAdvancedDialog"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionSkipURLString/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionSkipURLString"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionThreadCount/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionThreadCount"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/setOptionUserAgent/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionSetOptionUserAgent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/stop/": {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionStop"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/action/stopAllScans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderActionStopAllScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/addedNodes/": {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns a list of the names of the nodes added to the Sites tree by the specified scan. */
    get: operations["spiderViewAddedNodes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/allUrls/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns a list of unique URLs from the history table based on HTTP messages added by the Spider. */
    get: operations["spiderViewAllUrls"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/domainsAlwaysInScope/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all the domains that are always in scope. For each domain the following are shown: the index, the value (domain), if enabled, and if specified as a regex. */
    get: operations["spiderViewDomainsAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/excludedFromScan/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the regexes of URLs excluded from the spider scans. */
    get: operations["spiderViewExcludedFromScan"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/fullResults/": {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewFullResults"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionAcceptCookies/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets whether or not a spider process should accept cookies while spidering. */
    get: operations["spiderViewOptionAcceptCookies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionDomainsAlwaysInScope/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use view domainsAlwaysInScope instead.
     */
    get: operations["spiderViewOptionDomainsAlwaysInScope"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionDomainsAlwaysInScopeEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * @deprecated
     * @description Use view domainsAlwaysInScope instead.
     */
    get: operations["spiderViewOptionDomainsAlwaysInScopeEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionHandleODataParametersVisited/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionHandleODataParametersVisited"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionHandleParameters/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionHandleParameters"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionMaxChildren/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the maximum number of child nodes (per node) that can be crawled, 0 means no limit. */
    get: operations["spiderViewOptionMaxChildren"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionMaxDepth/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the maximum depth the spider can crawl, 0 if unlimited. */
    get: operations["spiderViewOptionMaxDepth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionMaxDuration/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionMaxDuration"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionMaxParseSizeBytes/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the maximum size, in bytes, that a response might have to be parsed. */
    get: operations["spiderViewOptionMaxParseSizeBytes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionMaxScansInUI/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionMaxScansInUI"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionParseComments/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionParseComments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionParseDsStore/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionParseDsStore"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionParseGit/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionParseGit"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionParseRobotsTxt/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionParseRobotsTxt"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionParseSVNEntries/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionParseSVNEntries"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionParseSitemapXml/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionParseSitemapXml"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionPostForm/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionPostForm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionProcessForm/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionProcessForm"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionRequestWaitTime/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionRequestWaitTime"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionSendRefererHeader/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets whether or not the 'Referer' header should be sent while spidering. */
    get: operations["spiderViewOptionSendRefererHeader"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionShowAdvancedDialog/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionShowAdvancedDialog"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionSkipURLString/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionSkipURLString"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionThreadCount/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionThreadCount"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/optionUserAgent/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewOptionUserAgent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/results/": {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewResults"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/scans/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewScans"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/spider/view/status/": {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["spiderViewStatus"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/action/clearStats/": {
    parameters: {
      query?: {
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Clears all of the statistics */
    get: operations["statsActionClearStats"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/action/setOptionInMemoryEnabled/": {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether in memory statistics are enabled */
    get: operations["statsActionSetOptionInMemoryEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/action/setOptionStatsdHost/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the Statsd service hostname, supply an empty string to stop using a Statsd service */
    get: operations["statsActionSetOptionStatsdHost"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/action/setOptionStatsdPort/": {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the Statsd service port */
    get: operations["statsActionSetOptionStatsdPort"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/action/setOptionStatsdPrefix/": {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the prefix to be applied to all stats sent to the configured Statsd service */
    get: operations["statsActionSetOptionStatsdPrefix"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/allSitesStats/": {
    parameters: {
      query?: {
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all of the site based statistics, optionally filtered by a key prefix */
    get: operations["statsViewAllSitesStats"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/optionInMemoryEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns 'true' if in memory statistics are enabled, otherwise returns 'false' */
    get: operations["statsViewOptionInMemoryEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/optionStatsdEnabled/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns 'true' if a Statsd server has been correctly configured, otherwise returns 'false' */
    get: operations["statsViewOptionStatsdEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/optionStatsdHost/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the Statsd service hostname */
    get: operations["statsViewOptionStatsdHost"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/optionStatsdPort/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the Statsd service port */
    get: operations["statsViewOptionStatsdPort"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/optionStatsdPrefix/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the prefix to be applied to all stats sent to the configured Statsd service */
    get: operations["statsViewOptionStatsdPrefix"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/siteStats/": {
    parameters: {
      query: {
        site: string;
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets all of the global statistics, optionally filtered by a key prefix */
    get: operations["statsViewSiteStats"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/stats/view/stats/": {
    parameters: {
      query?: {
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Statistics */
    get: operations["statsViewStats"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/authenticateAsUser/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tries to authenticate as the identified user, returning the authentication request and whether it appears to have succeeded. */
    get: operations["usersActionAuthenticateAsUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/newUser/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Creates a new user with the given name for the context with the given ID. */
    get: operations["usersActionNewUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/pollAsUser/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Tries to poll as the identified user, returning the authentication request and whether it appears to have succeeded. This will only work if the polling verification strategy has been configured. */
    get: operations["usersActionPollAsUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/removeUser/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Removes the user with the given ID that belongs to the context with the given ID. */
    get: operations["usersActionRemoveUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/setAuthenticationCredentials/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        authCredentialsConfigParams?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the authentication credentials for the user with the given ID that belongs to the context with the given ID. */
    get: operations["usersActionSetAuthenticationCredentials"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/setAuthenticationState/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        /** @description Last Poll Result - optional, should be 'true' or 'false'. */
        lastPollResult?: string;
        /** @description Last Poll Time in Milliseconds - optional, should be a long or 'NOW' for the current time in ms. */
        lastPollTimeInMs?: string;
        /** @description Requests Since Last Poll - optional, should be an integer. */
        requestsSinceLastPoll?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets fields in the authentication state for the user identified by the Context and User Ids. */
    get: operations["usersActionSetAuthenticationState"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/setCookie/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        /** @description The Cookie Domain */
        domain: string;
        /** @description The Cookie Name */
        name: string;
        /** @description The Cookie Value */
        value: string;
        /** @description The Cookie Path - optional default no path */
        path?: string;
        /** @description If the Cookie is secure - optional default false */
        secure?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the specified cookie for the user identified by the Context and User Ids. */
    get: operations["usersActionSetCookie"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/setUserEnabled/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets whether or not the user, with the given ID that belongs to the context with the given ID, should be enabled. */
    get: operations["usersActionSetUserEnabled"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/action/setUserName/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Renames the user with the given ID that belongs to the context with the given ID. */
    get: operations["usersActionSetUserName"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/view/getAuthenticationCredentials/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description the User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the authentication credentials of the user with given ID that belongs to the context with the given ID. */
    get: operations["usersViewGetAuthenticationCredentials"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/view/getAuthenticationCredentialsConfigParams/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the configuration parameters for the credentials of the context with the given ID. */
    get: operations["usersViewGetAuthenticationCredentialsConfigParams"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/view/getAuthenticationSession/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the authentication session information for the user identified by the Context and User Ids, e.g. cookies and realm credentials. */
    get: operations["usersViewGetAuthenticationSession"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/view/getAuthenticationState/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the authentication state information for the user identified by the Context and User Ids. */
    get: operations["usersViewGetAuthenticationState"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/view/getUserById/": {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets the data of the user with the given ID that belongs to the context with the given ID. */
    get: operations["usersViewGetUserById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/users/view/usersList/": {
    parameters: {
      query?: {
        /** @description The Context ID */
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Gets a list of users that belong to the context with the given ID, or all users if none provided. */
    get: operations["usersViewUsersList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/wappalyzer/view/listAll/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists all sites and their associated applications (technologies). */
    get: operations["wappalyzerViewListAll"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/wappalyzer/view/listSite/": {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists all the applications (technologies) associated with a specific site. */
    get: operations["wappalyzerViewListSite"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/wappalyzer/view/listSites/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Lists all the sites recognized by the wappalyzer addon. */
    get: operations["wappalyzerViewListSites"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/websocket/action/sendTextMessage/": {
    parameters: {
      query: {
        channelId: string;
        outgoing: string;
        message: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sends the specified message on the channel specified by channelId, if outgoing is 'True' then the message will be sent to the server and if it is 'False' then it will be sent to the client */
    get: operations["websocketActionSendTextMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/websocket/action/setBreakTextMessage/": {
    parameters: {
      query: {
        message: string;
        outgoing: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Sets the text message for an intercepted websockets message */
    get: operations["websocketActionSetBreakTextMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/websocket/view/breakTextMessage/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns a text representation of an intercepted websockets message */
    get: operations["websocketViewBreakTextMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/websocket/view/channels/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns all of the registered web socket channels */
    get: operations["websocketViewChannels"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/websocket/view/message/": {
    parameters: {
      query: {
        channelId: string;
        messageId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns full details of the message specified by the channelId and messageId */
    get: operations["websocketViewMessage"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/JSON/websocket/view/messages/": {
    parameters: {
      query?: {
        channelId?: string;
        start?: string;
        count?: string;
        payloadPreviewLength?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns a list of all of the messages that meet the given criteria (all optional), where channelId is a channel identifier, start is the offset to start returning messages from (starting from 0), count is the number of messages to return (default no limit) and payloadPreviewLength is the maximum number bytes to return for the payload contents */
    get: operations["websocketViewMessages"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    ErrorJson: {
      code: string;
      message: string;
      detail?: string;
    };
  };
  responses: {
    /** @description Error of OTHER endpoints. */
    ErrorOther: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        "*/*": unknown;
      };
    };
    /** @description Error of JSON endpoints. */
    ErrorJson: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        "application/json": components["schemas"]["ErrorJson"];
      };
    };
  };
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  accessControlActionScan: {
    parameters: {
      query: {
        contextId: string;
        userId: string;
        scanAsUnAuthUser?: string;
        raiseAlert?: string;
        alertRiskLevel?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  accessControlActionWriteHTMLreport: {
    parameters: {
      query: {
        contextId: string;
        fileName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  accessControlViewGetScanProgress: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  accessControlViewGetScanStatus: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  acsrfActionAddOptionToken: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  acsrfActionRemoveOptionToken: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  acsrfActionSetOptionPartialMatchingEnabled: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  acsrfOtherGenForm: {
    parameters: {
      query: {
        /** @description Define which request will be used */
        hrefId: string;
        /** @description Define the action URL to be used in the generated form */
        actionUrl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  acsrfViewOptionPartialMatchingEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  acsrfViewOptionTokensNames: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionAddAllowedResource: {
    parameters: {
      query: {
        /** @description The regular expression of the allowed resource. */
        regex: string;
        /** @description If the allowed resource should be enabled or not. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionAddExcludedElement: {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
        /** @description The description of the excluded element. */
        description: string;
        /** @description The element to exclude. */
        element: string;
        /** @description The XPath of the element. */
        xpath?: string;
        /** @description The text of the element. */
        text?: string;
        /** @description The attribute name of the element. */
        attributeName?: string;
        /** @description The attribute value of the element. */
        attributeValue?: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionModifyExcludedElement: {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
        /** @description The description of the excluded element. */
        description: string;
        /** @description The element to exclude. */
        element: string;
        /** @description The new description. */
        descriptionNew?: string;
        /** @description The XPath of the element. */
        xpath?: string;
        /** @description The text of the element. */
        text?: string;
        /** @description The attribute name of the element. */
        attributeName?: string;
        /** @description The attribute value of the element. */
        attributeValue?: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionRemoveAllowedResource: {
    parameters: {
      query: {
        /** @description The regular expression of the allowed resource. */
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionRemoveExcludedElement: {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
        /** @description The description of the excluded element. */
        description: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionScan: {
    parameters: {
      query?: {
        /** @description The starting URL (needs to include the 'scheme'). */
        url?: string;
        /** @description A boolean (true/false) indicating whether or not the scan should be restricted to 'inScope' only resources (default value is false). */
        inScope?: string;
        /** @description The name for any defined context. If the value does not match a defined context then an error will occur. */
        contextName?: string;
        /** @description A boolean (true/false) indicating whether or not the crawl should be constrained to a specific path (default value is false). */
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionScanAsUser: {
    parameters: {
      query: {
        /** @description The name for any defined context. If the value does not match a defined context then an error will occur. */
        contextName: string;
        /** @description The name of the user to be used when crawling. The "userName" should be previously defined on the context configuration. */
        userName: string;
        /** @description The starting URL (needs to include the 'scheme'). */
        url?: string;
        /** @description A boolean (true/false) indicating whether or not the crawl should be constrained to a specific path (default value is false). */
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetEnabledAllowedResource: {
    parameters: {
      query: {
        /** @description The regular expression of the allowed resource. */
        regex: string;
        /** @description If the allowed resource should be enabled or not. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionBrowserId: {
    parameters: {
      query: {
        /** @description The name of the browser to be used by the AJAX Spider. (See the Selenium add-on help for a list of supported browsers.) */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionClickDefaultElems: {
    parameters: {
      query: {
        /** @description A boolean (true/false) indicating if only default elements such as 'a' 'button' 'input' should be clicked (default is true). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionClickElemsOnce: {
    parameters: {
      query: {
        /** @description A boolean (true/false) indicating whether or not the AJAX Spider should only click on elements once. If this is set to false, the crawler will attempt to click multiple times; which is more rigorous but may take considerably more time (default is true). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionEventWait: {
    parameters: {
      query: {
        /** @description The time that the AJAX Spider should wait for each event (default is 1000 milliseconds). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionMaxCrawlDepth: {
    parameters: {
      query: {
        /** @description The maximum depth that the crawler should explore (zero means unlimited depth, default is 10). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionMaxCrawlStates: {
    parameters: {
      query: {
        /** @description The maximum number of states that the AJAX Spider should explore (zero means unlimited crawl states, default is 0) */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionMaxDuration: {
    parameters: {
      query: {
        /** @description The maximum amount of time that the AJAX Spider is allowed to run (zero means unlimited running time, default is 60 minutes). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionNumberOfBrowsers: {
    parameters: {
      query: {
        /** @description The number of windows that the AJAX Spider can use. The more windows, the faster the process will be. However, more windows also means greater resource usage (CPU, Memory, etc), and could lead to concurrency issues depending on the app being explored (default is 1). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionRandomInputs: {
    parameters: {
      query: {
        /** @description A boolean (true/false) indicating whether or not random values should be use in form fields. Otherwise, empty values are submitted (default is true). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionSetOptionReloadWait: {
    parameters: {
      query: {
        /** @description The number of milliseconds the AJAX Spider should wait after a page is loaded (default is 1000). */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderActionStop: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewAllowedResources: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewExcludedElements: {
    parameters: {
      query: {
        /** @description The name of the context. */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewFullResults: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewNumberOfResults: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionBrowserId: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionClickDefaultElems: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionClickElemsOnce: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionEventWait: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionMaxCrawlDepth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionMaxCrawlStates: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionMaxDuration: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionNumberOfBrowsers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionRandomInputs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewOptionReloadWait: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewResults: {
    parameters: {
      query?: {
        /** @description The position (or offset) within the results to use as a starting position for the information returned. */
        start?: string;
        /** @description The number of results to return. */
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ajaxSpiderViewStatus: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionAddAlert: {
    parameters: {
      query: {
        /** @description The ID of the message to which the alert should be associated. */
        messageId: string;
        /** @description The name of the alert. */
        name: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId: string;
        /** @description The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]). */
        confidenceId: string;
        /** @description The description to be set to the alert. */
        description: string;
        /** @description The name of the parameter applicable to the alert. */
        param?: string;
        /** @description The attack (ex: injected string) used by the scan rule. */
        attack?: string;
        /** @description Other information about the alert or test. */
        otherInfo?: string;
        /** @description The solution for the alert. */
        solution?: string;
        /** @description The reference details for the alert. */
        references?: string;
        /** @description The evidence associated with the alert. */
        evidence?: string;
        /** @description The CWE identifier associated with the alert. */
        cweId?: string;
        /** @description The WASC identifier associated with the alert. */
        wascId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionDeleteAlert: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionDeleteAlerts: {
    parameters: {
      query?: {
        /** @description The name of the Context for which the alerts should be deleted. */
        contextName?: string;
        /** @description The highest URL in the Sites tree under which alerts should be deleted. */
        baseurl?: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionDeleteAllAlerts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionUpdateAlert: {
    parameters: {
      query: {
        /** @description The ID of the alert to update. */
        id: string;
        /** @description The name of the alert. */
        name: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId: string;
        /** @description The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]). */
        confidenceId: string;
        /** @description The description to be set to the alert. */
        description: string;
        /** @description The name of the parameter applicable to the alert. */
        param?: string;
        /** @description The attack (ex: injected string) used by the scan rule. */
        attack?: string;
        /** @description Other information about the alert or test. */
        otherInfo?: string;
        /** @description The solution for the alert. */
        solution?: string;
        /** @description The reference details for the alert. */
        references?: string;
        /** @description The evidence associated with the alert. */
        evidence?: string;
        /** @description The CWE identifier associated with the alert. */
        cweId?: string;
        /** @description The WASC identifier associated with the alert. */
        wascId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionUpdateAlertsConfidence: {
    parameters: {
      query: {
        /** @description The IDs of the alerts to update (comma separated values). */
        ids: string;
        /** @description The numeric confidence representation ('1 - Low' through '3 - High' [user set values '0 - False Positive', and '4 - User Confirmed' are also available]). */
        confidenceId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertActionUpdateAlertsRisk: {
    parameters: {
      query: {
        /** @description The IDs of the alerts to update (comma separated values). */
        ids: string;
        /** @description The numeric risk representation ('0 - Informational' through '3 - High'). */
        riskId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertViewAlert: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertViewAlertCountsByRisk: {
    parameters: {
      query?: {
        url?: string;
        recurse?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertViewAlerts: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
        riskId?: string;
        /** @description Optionally, the Context name which the Alerts' URLs are associated with. */
        contextName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertViewAlertsByRisk: {
    parameters: {
      query?: {
        url?: string;
        recurse?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertViewAlertsSummary: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertViewNumberOfAlerts: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionAddAlertFilter: {
    parameters: {
      query: {
        contextId: string;
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionAddGlobalAlertFilter: {
    parameters: {
      query: {
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionApplyAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionApplyContext: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionApplyGlobal: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionRemoveAlertFilter: {
    parameters: {
      query: {
        contextId: string;
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionRemoveGlobalAlertFilter: {
    parameters: {
      query: {
        ruleId: string;
        newLevel: string;
        url?: string;
        urlIsRegex?: string;
        parameter?: string;
        enabled?: string;
        parameterIsRegex?: string;
        attack?: string;
        attackIsRegex?: string;
        evidence?: string;
        evidenceIsRegex?: string;
        methods?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionTestAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionTestContext: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterActionTestGlobal: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterViewAlertFilterList: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  alertFilterViewGlobalAlertFilterList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionAddExcludedParam: {
    parameters: {
      query: {
        name: string;
        type?: string;
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionAddScanPolicy: {
    parameters: {
      query: {
        scanPolicyName: string;
        alertThreshold?: string;
        attackStrength?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionClearExcludedFromScan: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionDisableAllScanners: {
    parameters: {
      query?: {
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionDisableScanners: {
    parameters: {
      query: {
        ids: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionEnableAllScanners: {
    parameters: {
      query?: {
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionEnableScanners: {
    parameters: {
      query: {
        ids: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionExcludeFromScan: {
    parameters: {
      query: {
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionImportScanPolicy: {
    parameters: {
      query: {
        path: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionModifyExcludedParam: {
    parameters: {
      query: {
        idx: string;
        name?: string;
        type?: string;
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionPause: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionPauseAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionRemoveAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionRemoveExcludedParam: {
    parameters: {
      query: {
        idx: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionRemoveScan: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionRemoveScanPolicy: {
    parameters: {
      query: {
        scanPolicyName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionResume: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionResumeAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionScan: {
    parameters: {
      query?: {
        url?: string;
        recurse?: string;
        inScopeOnly?: string;
        scanPolicyName?: string;
        method?: string;
        postData?: string;
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionScanAsUser: {
    parameters: {
      query?: {
        url?: string;
        contextId?: string;
        userId?: string;
        recurse?: string;
        scanPolicyName?: string;
        method?: string;
        postData?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetEnabledPolicies: {
    parameters: {
      query: {
        ids: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionAddQueryParam: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionAllowAttackOnStart: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionAttackPolicy: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionDefaultPolicy: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionDelayInMs: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionHandleAntiCSRFTokens: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionHostPerScan: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionInjectPluginIdInHeader: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionMaxAlertsPerRule: {
    parameters: {
      query: {
        /** @description The maximum alerts. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionMaxChartTimeInMins: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionMaxResultsToList: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionMaxRuleDurationInMins: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionMaxScanDurationInMins: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionMaxScansInUI: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionPromptInAttackMode: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionPromptToClearFinishedScans: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionRescanInAttackMode: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionScanHeadersAllRequests: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionScanNullJsonValues: {
    parameters: {
      query: {
        /** @description true to scan null values, false otherwise. */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionShowAdvancedDialog: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionTargetParamsEnabledRPC: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionTargetParamsInjectable: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetOptionThreadPerHost: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetPolicyAlertThreshold: {
    parameters: {
      query: {
        id: string;
        alertThreshold: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetPolicyAttackStrength: {
    parameters: {
      query: {
        id: string;
        attackStrength: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetScannerAlertThreshold: {
    parameters: {
      query: {
        id: string;
        alertThreshold: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSetScannerAttackStrength: {
    parameters: {
      query: {
        id: string;
        attackStrength: string;
        scanPolicyName?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionSkipScanner: {
    parameters: {
      query: {
        scanId: string;
        scannerId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionStop: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionStopAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanActionUpdateScanPolicy: {
    parameters: {
      query: {
        scanPolicyName: string;
        alertThreshold?: string;
        attackStrength?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewAlertsIds: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewAttackModeQueue: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewExcludedFromScan: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewExcludedParamTypes: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewExcludedParams: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewMessagesIds: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionAddQueryParam: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionAllowAttackOnStart: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionAttackPolicy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionDefaultPolicy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionDelayInMs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionExcludedParamList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionHandleAntiCSRFTokens: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionHostPerScan: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionInjectPluginIdInHeader: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionMaxAlertsPerRule: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionMaxChartTimeInMins: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionMaxResultsToList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionMaxRuleDurationInMins: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionMaxScanDurationInMins: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionMaxScansInUI: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionPromptInAttackMode: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionPromptToClearFinishedScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionRescanInAttackMode: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionScanHeadersAllRequests: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionScanNullJsonValues: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionShowAdvancedDialog: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionTargetParamsEnabledRPC: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionTargetParamsInjectable: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewOptionThreadPerHost: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewPolicies: {
    parameters: {
      query?: {
        scanPolicyName?: string;
        policyId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewScanPolicyNames: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewScanProgress: {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewScanners: {
    parameters: {
      query?: {
        scanPolicyName?: string;
        policyId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ascanViewStatus: {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationActionSetAuthenticationMethod: {
    parameters: {
      query: {
        contextId: string;
        authMethodName: string;
        authMethodConfigParams?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationActionSetLoggedInIndicator: {
    parameters: {
      query: {
        contextId: string;
        loggedInIndicatorRegex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationActionSetLoggedOutIndicator: {
    parameters: {
      query: {
        contextId: string;
        loggedOutIndicatorRegex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationViewGetAuthenticationMethod: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationViewGetAuthenticationMethodConfigParams: {
    parameters: {
      query: {
        authMethodName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationViewGetLoggedInIndicator: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationViewGetLoggedOutIndicator: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authenticationViewGetSupportedAuthenticationMethods: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authorizationActionSetBasicAuthorizationDetectionMethod: {
    parameters: {
      query: {
        contextId: string;
        headerRegex?: string;
        bodyRegex?: string;
        statusCode?: string;
        logicalOperator?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  authorizationViewGetAuthorizationDetectionMethod: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  automationActionEndDelayJob: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  automationActionRunPlan: {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  automationViewPlanProgress: {
    parameters: {
      query: {
        planId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionDownloadLatestRelease: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionInstallAddon: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionInstallLocalAddon: {
    parameters: {
      query: {
        file: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionCheckAddonUpdates: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionCheckOnStart: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionDownloadNewRelease: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionInstallAddonUpdates: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionInstallScannerRules: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionReportAlphaAddons: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionReportBetaAddons: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionSetOptionReportReleaseAddons: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateActionUninstallAddon: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewInstalledAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewIsLatestVersion: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewLatestVersionNumber: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewLocalAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewMarketplaceAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewNewAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionAddonDirectories: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionCheckAddonUpdates: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionCheckOnStart: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionDayLastChecked: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionDayLastInstallWarned: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionDayLastUpdateWarned: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionDownloadDirectory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionDownloadNewRelease: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionInstallAddonUpdates: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionInstallScannerRules: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionReportAlphaAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionReportBetaAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewOptionReportReleaseAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  autoupdateViewUpdatedAddons: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionAddHttpBreakpoint: {
    parameters: {
      query: {
        string: string;
        location: string;
        match: string;
        inverse: string;
        ignorecase: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionBreak: {
    parameters: {
      query: {
        type: string;
        state: string;
        scope?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionContinue: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionDrop: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionRemoveHttpBreakpoint: {
    parameters: {
      query: {
        string: string;
        location: string;
        match: string;
        inverse: string;
        ignorecase: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionSetHttpMessage: {
    parameters: {
      query: {
        httpHeader: string;
        httpBody?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakActionStep: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakViewHttpMessage: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakViewIsBreakAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakViewIsBreakRequest: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  breakViewIsBreakResponse: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  clientActionReportEvent: {
    parameters: {
      query: {
        eventJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  clientActionReportObject: {
    parameters: {
      query: {
        objectJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  clientActionReportZestScript: {
    parameters: {
      query: {
        scriptJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  clientActionReportZestStatement: {
    parameters: {
      query: {
        statementJson: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  codedxActionGenerateAndUpload: {
    parameters: {
      query: {
        serverUrl: string;
        codeDxApiKey: string;
        projectId: string;
        fingerprint?: string;
        acceptPermanently?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  codedxActionUploadReport: {
    parameters: {
      query: {
        filePath: string;
        serverUrl: string;
        codeDxApiKey: string;
        projectId: string;
        fingerprint?: string;
        acceptPermanently?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  codedxViewGenerateReport: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionExcludeAllContextTechnologies: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionExcludeContextTechnologies: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        technologyNames: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionExcludeFromContext: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionExportContext: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        contextFile: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionImportContext: {
    parameters: {
      query: {
        contextFile: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionIncludeAllContextTechnologies: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionIncludeContextTechnologies: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        technologyNames: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionIncludeInContext: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionNewContext: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionRemoveContext: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionSetContextCheckingStrategy: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        /** @description One of EACH_RESP, EACH_REQ, EACH_REQ_RESP, POLL_URL */
        checkingStrategy: string;
        /** @description The URL for ZAP to poll, must be supplied if checkingStrategy = POLL_URL, otherwise ignored */
        pollUrl?: string;
        /** @description The POST data to supply to the pollUrl, option and only takes effect if checkingStrategy = POLL_URL */
        pollData?: string;
        /** @description Any additional headers that need to be added to the poll request, separated by '\n' characters, only takes effect if checkingStrategy = POLL_URL */
        pollHeaders?: string;
        /** @description An integer greater than zero, must be supplied if checkingStrategy = POLL_URL, otherwise ignored */
        pollFrequency?: string;
        /** @description One of REQUESTS, SECONDS, must be supplied if checkingStrategy = POLL_URL, otherwise ignored */
        pollFrequencyUnits?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionSetContextInScope: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        booleanInScope: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextActionSetContextRegexs: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
        incRegexs: string;
        excRegexs: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewContext: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewContextList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewExcludeRegexs: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewExcludedTechnologyList: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewIncludeRegexs: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewIncludedTechnologyList: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewTechnologyList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  contextViewUrls: {
    parameters: {
      query: {
        /** @description The name of the context */
        contextName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionAccessUrl: {
    parameters: {
      query: {
        url: string;
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionAddProxyChainExcludedDomain: {
    parameters: {
      query: {
        value: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionClearExcludedFromProxy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionDeleteAlert: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionDeleteAllAlerts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionDeleteSiteNode: {
    parameters: {
      query: {
        url: string;
        method?: string;
        postData?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionDisableAllProxyChainExcludedDomains: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionDisableClientCertificate: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionEnableAllProxyChainExcludedDomains: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionEnablePKCS12ClientCertificate: {
    parameters: {
      query: {
        filePath: string;
        password: string;
        index?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionExcludeFromProxy: {
    parameters: {
      query: {
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionGenerateRootCA: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionLoadSession: {
    parameters: {
      query: {
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionModifyProxyChainExcludedDomain: {
    parameters: {
      query: {
        idx: string;
        value?: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionNewSession: {
    parameters: {
      query?: {
        name?: string;
        overwrite?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionRemoveProxyChainExcludedDomain: {
    parameters: {
      query: {
        idx: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionRunGarbageCollection: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSaveSession: {
    parameters: {
      query: {
        /** @description The name (or path) of the session. If a relative path is specified it will be resolved against the "session" directory in ZAP "home" dir. */
        name: string;
        /** @description If existing files should be overwritten, attempting to overwrite the files of the session already in use/saved will lead to an error ("already_exists"). */
        overwrite?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSendRequest: {
    parameters: {
      query: {
        request: string;
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetHomeDirectory: {
    parameters: {
      query: {
        dir: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetMode: {
    parameters: {
      query: {
        mode: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionAlertOverridesFilePath: {
    parameters: {
      query?: {
        filePath?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionDefaultUserAgent: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionDnsTtlSuccessfulQueries: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionHttpStateEnabled: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionMaximumAlertInstances: {
    parameters: {
      query: {
        numberOfInstances: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionMergeRelatedAlerts: {
    parameters: {
      query: {
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainName: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainPassword: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainPort: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainPrompt: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainRealm: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainSkipName: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionProxyChainUserName: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionSingleCookieRequestHeader: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionTimeoutInSecs: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionUseProxyChain: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionUseProxyChainAuth: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSetOptionUseSocksProxy: {
    parameters: {
      query: {
        /** @description true if the SOCKS proxy should be used, false otherwise. */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionShutdown: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreActionSnapshotSession: {
    parameters: {
      query?: {
        name?: string;
        overwrite?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreOtherFileDownload: {
    parameters: {
      query: {
        /** @description The name of the file, may include subdirectories */
        fileName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherFileUpload: {
    parameters: {
      query: {
        /** @description The name of the file, may include subdirectories. */
        fileName: string;
        /** @description The contents of the file. */
        fileContents: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherHtmlreport: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherJsonreport: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherMdreport: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherMessageHar: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherMessagesHar: {
    parameters: {
      query?: {
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherMessagesHarById: {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  "coreOtherProxy.pac": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherRootcert: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherSendHarRequest: {
    parameters: {
      query: {
        request: string;
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherSetproxy: {
    parameters: {
      query: {
        proxy: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreOtherXmlreport: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  coreViewAlert: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewAlerts: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewAlertsSummary: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewChildNodes: {
    parameters: {
      query?: {
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewExcludedFromProxy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewHomeDirectory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewHosts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewMessage: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewMessages: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewMessagesById: {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewMode: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewNumberOfAlerts: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which alerts should be included. */
        baseurl?: string;
        riskId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewNumberOfMessages: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionAlertOverridesFilePath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionDefaultUserAgent: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionDnsTtlSuccessfulQueries: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionHttpState: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionHttpStateEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionMaximumAlertInstances: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionMergeRelatedAlerts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainName: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainPassword: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainPort: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainPrompt: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainRealm: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainSkipName: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyChainUserName: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyExcludedDomains: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionProxyExcludedDomainsEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionSingleCookieRequestHeader: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionTimeoutInSecs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionUseProxyChain: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionUseProxyChainAuth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewOptionUseSocksProxy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewProxyChainExcludedDomains: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewSessionLocation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewSites: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewUrls: {
    parameters: {
      query?: {
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewVersion: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  coreViewZapHomePath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  devOtherOpenapi: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  eximActionImportHar: {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  eximActionImportModsec2Logs: {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  eximActionImportUrls: {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  eximActionImportZapLogs: {
    parameters: {
      query: {
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  eximOtherExportHar: {
    parameters: {
      query?: {
        /** @description The URL below which messages should be included. */
        baseurl?: string;
        /** @description The position (or offset) within the results to use as a starting position for the information returned. */
        start?: string;
        /** @description The number of results to return. */
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  eximOtherExportHarById: {
    parameters: {
      query: {
        /** @description The ID (number(s)) of the message(s) to be returned. */
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  eximOtherSendHarRequest: {
    parameters: {
      query: {
        /** @description The raw JSON of a HAR request. */
        request: string;
        /** @description True if redirects should be followed, false otherwise. */
        followRedirects?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  forcedUserActionSetForcedUser: {
    parameters: {
      query: {
        contextId: string;
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  forcedUserActionSetForcedUserModeEnabled: {
    parameters: {
      query: {
        boolean: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  forcedUserViewGetForcedUser: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  forcedUserViewIsForcedUserModeEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionImportFile: {
    parameters: {
      query: {
        /** @description The Endpoint URL. */
        endurl: string;
        /** @description The File That Contains the GraphQL Schema. */
        file: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionImportUrl: {
    parameters: {
      query: {
        /** @description The Endpoint URL. */
        endurl: string;
        /** @description The URL Locating the GraphQL Schema. */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionArgsType: {
    parameters: {
      query: {
        /** @description Can be "INLINE", "VARIABLES", or "BOTH". */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionLenientMaxQueryDepthEnabled: {
    parameters: {
      query: {
        /** @description Enforce Leniently (true or false). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionMaxAdditionalQueryDepth: {
    parameters: {
      query: {
        /** @description The Maximum Additional Depth. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionMaxArgsDepth: {
    parameters: {
      query: {
        /** @description The Maximum Depth. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionMaxQueryDepth: {
    parameters: {
      query: {
        /** @description The Maximum Depth. */
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionOptionalArgsEnabled: {
    parameters: {
      query: {
        /** @description Specify Optional Arguments (true or false). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionQueryGenEnabled: {
    parameters: {
      query: {
        /** @description Enable query generation (true or false). */
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionQuerySplitType: {
    parameters: {
      query: {
        /** @description Can be "LEAF", "ROOT_FIELD", or "OPERATION". */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlActionSetOptionRequestMethod: {
    parameters: {
      query: {
        /** @description Can be "POST_JSON", "POST_GRAPHQL", or "GET". */
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionArgsType: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionLenientMaxQueryDepthEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionMaxAdditionalQueryDepth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionMaxArgsDepth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionMaxQueryDepth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionOptionalArgsEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionQueryGenEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionQuerySplitType: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  graphqlViewOptionRequestMethod: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionAddDefaultSessionToken: {
    parameters: {
      query: {
        sessionToken: string;
        tokenEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionAddSessionToken: {
    parameters: {
      query: {
        site: string;
        sessionToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionCreateEmptySession: {
    parameters: {
      query: {
        site: string;
        session?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionRemoveDefaultSessionToken: {
    parameters: {
      query: {
        sessionToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionRemoveSession: {
    parameters: {
      query: {
        site: string;
        session: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionRemoveSessionToken: {
    parameters: {
      query: {
        site: string;
        sessionToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionRenameSession: {
    parameters: {
      query: {
        site: string;
        oldSessionName: string;
        newSessionName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionSetActiveSession: {
    parameters: {
      query: {
        site: string;
        session: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionSetDefaultSessionTokenEnabled: {
    parameters: {
      query: {
        sessionToken: string;
        tokenEnabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionSetSessionTokenValue: {
    parameters: {
      query: {
        site: string;
        session: string;
        sessionToken: string;
        tokenValue: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsActionUnsetActiveSession: {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsViewActiveSession: {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsViewDefaultSessionTokens: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsViewSessionTokens: {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsViewSessions: {
    parameters: {
      query: {
        site: string;
        session?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  httpSessionsViewSites: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  keyboardOtherCheatsheetActionOrder: {
    parameters: {
      query?: {
        incUnset?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  keyboardOtherCheatsheetKeyOrder: {
    parameters: {
      query?: {
        incUnset?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  localProxiesActionAddAdditionalProxy: {
    parameters: {
      query: {
        address: string;
        port: string;
        behindNat?: string;
        alwaysDecodeZip?: string;
        removeUnsupportedEncodings?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  localProxiesActionRemoveAdditionalProxy: {
    parameters: {
      query: {
        address: string;
        port: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  localProxiesViewAdditionalProxies: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionAddAlias: {
    parameters: {
      query: {
        /** @description The name of the alias. */
        name: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionAddHttpProxyExclusion: {
    parameters: {
      query: {
        /** @description The value of the host, a regular expression. */
        host: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionAddLocalServer: {
    parameters: {
      query: {
        /** @description The address of the local server/proxy. */
        address: string;
        /** @description The port of the local server/proxy. */
        port: string;
        /** @description If the ZAP API is available, true or false. */
        api?: string;
        /** @description If the local server should proxy, true or false. */
        proxy?: string;
        /** @description If the local server is behind NAT, true or false. */
        behindNat?: string;
        /** @description If the response should be decoded, true or false. */
        decodeResponse?: string;
        /** @description If the request header Accept-Encoding should be removed, true or false. */
        removeAcceptEncoding?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionAddPassThrough: {
    parameters: {
      query: {
        /** @description The value of the authority, can be a regular expression. */
        authority: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionAddPkcs12ClientCertificate: {
    parameters: {
      query: {
        /** @description The file path. */
        filePath: string;
        /** @description The password for the file. */
        password: string;
        /** @description The index of the certificate in the file, defaults to 0. */
        index?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionAddRateLimitRule: {
    parameters: {
      query: {
        /** @description A description that allows you to identify the rule. Each rule must have a unique description. */
        description: string;
        /** @description The enabled state, true or false. */
        enabled: string;
        /** @description Regex used to match the host. */
        matchRegex: string;
        /** @description Plain string match is handled based on DNS conventions. If the string has one or two components. */
        matchString: string;
        /** @description The maximum number of requests per second. */
        requestsPerSecond: string;
        /** @description How to group hosts when applying rate limiting: rule or host */
        groupBy: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionGenerateRootCaCert: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionImportRootCaCert: {
    parameters: {
      query: {
        /** @description The file system path to the PEM file, containing the certificate and private key. */
        filePath: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionRemoveAlias: {
    parameters: {
      query: {
        /** @description The name of the alias. */
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionRemoveHttpProxyExclusion: {
    parameters: {
      query: {
        /** @description The value of the host. */
        host: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionRemoveLocalServer: {
    parameters: {
      query: {
        /** @description The address of the local server/proxy. */
        address: string;
        /** @description The port of the local server/proxy. */
        port: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionRemovePassThrough: {
    parameters: {
      query: {
        /** @description The value of the authority. */
        authority: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionRemoveRateLimitRule: {
    parameters: {
      query: {
        /** @description The description of the rule to remove. */
        description: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetAliasEnabled: {
    parameters: {
      query: {
        /** @description The name of the alias. */
        name: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetConnectionTimeout: {
    parameters: {
      query: {
        /** @description The timeout, in seconds. */
        timeout: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetDefaultUserAgent: {
    parameters: {
      query: {
        /** @description The default user-agent. */
        userAgent: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetDnsTtlSuccessfulQueries: {
    parameters: {
      query: {
        /** @description The TTL, in seconds. Negative number, cache forever. Zero, disables caching. Positive number, the number of seconds the successful DNS queries will be cached. */
        ttl: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetHttpProxy: {
    parameters: {
      query: {
        /** @description The host, name or address. */
        host: string;
        /** @description The port. */
        port: string;
        /** @description The authentication realm. */
        realm?: string;
        /** @description The user name. */
        username?: string;
        /** @description The password. */
        password?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetHttpProxyAuthEnabled: {
    parameters: {
      query: {
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetHttpProxyEnabled: {
    parameters: {
      query: {
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetHttpProxyExclusionEnabled: {
    parameters: {
      query: {
        /** @description The value of the host. */
        host: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetPassThroughEnabled: {
    parameters: {
      query: {
        /** @description The value of the authority. */
        authority: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetRateLimitRuleEnabled: {
    parameters: {
      query: {
        /** @description The description of the rule to modify. */
        description: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetRootCaCertValidity: {
    parameters: {
      query: {
        /** @description The number of days that the generated Root CA certificate will be valid for. */
        validity: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetServerCertValidity: {
    parameters: {
      query: {
        /** @description The number of days that the generated server certificates will be valid for. */
        validity: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetSocksProxy: {
    parameters: {
      query: {
        /** @description The host, name or address. */
        host: string;
        /** @description The port. */
        port: string;
        /** @description The SOCKS version. */
        version?: string;
        /** @description If the names should be resolved by the SOCKS proxy, true or false. */
        useDns?: string;
        /** @description The user name. */
        username?: string;
        /** @description The password. */
        password?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetSocksProxyEnabled: {
    parameters: {
      query: {
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetUseClientCertificate: {
    parameters: {
      query: {
        /** @description The use state, true or false. */
        use: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkActionSetUseGlobalHttpState: {
    parameters: {
      query: {
        /** @description The use state, true or false. */
        use: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  "networkOtherProxy.pac": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  networkOtherRootCaCert: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  networkOtherSetProxy: {
    parameters: {
      query: {
        /** @description The JSON object containing the HTTP proxy configuration. */
        proxy: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  networkViewGetAliases: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetConnectionTimeout: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetDefaultUserAgent: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetDnsTtlSuccessfulQueries: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetHttpProxy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetHttpProxyExclusions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetLocalServers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetPassThroughs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetRateLimitRules: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetRootCaCertValidity: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetServerCertValidity: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewGetSocksProxy: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewIsHttpProxyAuthEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewIsHttpProxyEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewIsSocksProxyEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  networkViewIsUseGlobalHttpState: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  openapiActionImportFile: {
    parameters: {
      query: {
        /** @description The file that contains the OpenAPI definition. */
        file: string;
        /** @description The Target URL to override the server URL present in the definition. */
        target?: string;
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  openapiActionImportUrl: {
    parameters: {
      query: {
        /** @description The URL locating the OpenAPI definition. */
        url: string;
        /** @description The Target URL (called hostOverride for historical reasons) to override the server URL present in the definition. */
        hostOverride?: string;
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  paramDiggerActionHelloWorld: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pnhActionMonitor: {
    parameters: {
      query: {
        id: string;
        message: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pnhActionOracle: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pnhActionStartMonitoring: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pnhActionStopMonitoring: {
    parameters: {
      query: {
        id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  "pnhOtherFx_pnh.xpi": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  pnhOtherManifest: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  pnhOtherPnh: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  pnhOtherService: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  postmanActionImportFile: {
    parameters: {
      query: {
        file: string;
        endpointUrl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  postmanActionImportUrl: {
    parameters: {
      query: {
        url: string;
        endpointUrl?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionClearQueue: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionDisableAllScanners: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionDisableAllTags: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionDisableScanners: {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionEnableAllScanners: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionEnableAllTags: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionEnableScanners: {
    parameters: {
      query: {
        ids: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionSetEnabled: {
    parameters: {
      query: {
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionSetMaxAlertsPerRule: {
    parameters: {
      query: {
        maxAlerts: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionSetScanOnlyInScope: {
    parameters: {
      query: {
        onlyInScope: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanActionSetScannerAlertThreshold: {
    parameters: {
      query: {
        id: string;
        alertThreshold: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanViewCurrentRule: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanViewCurrentTasks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanViewMaxAlertsPerRule: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanViewRecordsToScan: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanViewScanOnlyInScope: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  pscanViewScanners: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  quickstartlaunchOtherStartPage: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  replacerActionAddRule: {
    parameters: {
      query: {
        description: string;
        enabled: string;
        matchType: string;
        matchRegex: string;
        matchString: string;
        replacement?: string;
        initiators?: string;
        /** @description A regular expression to match the URL of the message, if empty the rule applies to all messages. */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  replacerActionRemoveRule: {
    parameters: {
      query: {
        description: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  replacerActionSetEnabled: {
    parameters: {
      query: {
        description: string;
        bool: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  replacerViewRules: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  reportsActionGenerate: {
    parameters: {
      query: {
        /** @description Report Title */
        title: string;
        /** @description Report Template */
        template: string;
        /** @description Report Theme */
        theme?: string;
        /** @description Report Description */
        description?: string;
        /** @description The name of the contexts to be included in the report, separated by '|'. */
        contexts?: string;
        /** @description The site URLs that should be included in the report, separated by '|'. */
        sites?: string;
        /** @description The report sections that should be included, separated by '|'. */
        sections?: string;
        /** @description Confidences that should be included in the report, separated by '|'. Accepted values are "False Positive", "Low", "Medium", "High", and "Confirmed". */
        includedConfidences?: string;
        /** @description Risks that should be included in the report, separated by '|'. Accepted values are "Informational", "Low", "Medium", and "High". */
        includedRisks?: string;
        /** @description The file name of the generated report. This value overrides the reportFileNamePattern parameter. */
        reportFileName?: string;
        /** @description Report File Name Pattern. */
        reportFileNamePattern?: string;
        /** @description Path to directory in which the generated report should be placed. */
        reportDir?: string;
        /** @description Display the generated report. Either "true" or "false". */
        display?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  reportsViewTemplateDetails: {
    parameters: {
      query: {
        /** @description Template Label */
        template: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  reportsViewTemplates: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  retestActionRetest: {
    parameters: {
      query: {
        alertIds: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  revealActionSetReveal: {
    parameters: {
      query: {
        reveal: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  revealViewReveal: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  revisitActionRevisitSiteOff: {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  revisitActionRevisitSiteOn: {
    parameters: {
      query: {
        site: string;
        startTime: string;
        endTime: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  revisitViewRevisitList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ruleConfigActionResetAllRuleConfigValues: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ruleConfigActionResetRuleConfigValue: {
    parameters: {
      query: {
        key: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ruleConfigActionSetRuleConfigValue: {
    parameters: {
      query: {
        key: string;
        value?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ruleConfigViewAllRuleConfigs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  ruleConfigViewRuleConfigValue: {
    parameters: {
      query: {
        key: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionClearGlobalCustomVar: {
    parameters: {
      query: {
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionClearGlobalVar: {
    parameters: {
      query: {
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionClearGlobalVars: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionClearScriptCustomVar: {
    parameters: {
      query: {
        /** @description The name of the script. */
        scriptName: string;
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionClearScriptVar: {
    parameters: {
      query: {
        scriptName: string;
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionClearScriptVars: {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionDisable: {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionEnable: {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionLoad: {
    parameters: {
      query: {
        scriptName: string;
        scriptType: string;
        scriptEngine: string;
        fileName: string;
        scriptDescription?: string;
        charset?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionRemove: {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionRunStandAloneScript: {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionSetGlobalVar: {
    parameters: {
      query: {
        varKey: string;
        varValue?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptActionSetScriptVar: {
    parameters: {
      query: {
        scriptName: string;
        varKey: string;
        varValue?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewGlobalCustomVar: {
    parameters: {
      query: {
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewGlobalCustomVars: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewGlobalVar: {
    parameters: {
      query: {
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewGlobalVars: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewListEngines: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewListScripts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewListTypes: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewScriptCustomVar: {
    parameters: {
      query: {
        /** @description The name of the script. */
        scriptName: string;
        /** @description The key of the variable. */
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewScriptCustomVars: {
    parameters: {
      query: {
        /** @description The name of the script. */
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewScriptVar: {
    parameters: {
      query: {
        scriptName: string;
        varKey: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  scriptViewScriptVars: {
    parameters: {
      query: {
        scriptName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchOtherHarByHeaderRegex: {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  searchOtherHarByRequestRegex: {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  searchOtherHarByResponseRegex: {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  searchOtherHarByUrlRegex: {
    parameters: {
      query: {
        regex: string;
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorOther"];
    };
  };
  searchViewMessagesByHeaderRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewMessagesByRequestRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewMessagesByResponseRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewMessagesByUrlRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which messages should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewUrlsByHeaderRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewUrlsByRequestRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewUrlsByResponseRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  searchViewUrlsByUrlRegex: {
    parameters: {
      query: {
        regex: string;
        /** @description The highest URL in the Sites tree under which URLs should be included. */
        baseurl?: string;
        start?: string;
        count?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionAddBrowserArgument: {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
        /** @description The argument. */
        argument: string;
        /** @description The enabled state, true or false. */
        enabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionRemoveBrowserArgument: {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
        /** @description The argument. */
        argument: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetBrowserArgumentEnabled: {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
        /** @description The argument. */
        argument: string;
        /** @description The enabled state, true or false. */
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionChromeBinaryPath: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionChromeDriverPath: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionFirefoxBinaryPath: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionFirefoxDefaultProfile: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionFirefoxDriverPath: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionIeDriverPath: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionLastDirectory: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumActionSetOptionPhantomJsBinaryPath: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewGetBrowserArguments: {
    parameters: {
      query: {
        /** @description The browser, chrome or firefox. */
        browser: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionBrowserExtensions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionChromeBinaryPath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionChromeDriverPath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionFirefoxBinaryPath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionFirefoxDefaultProfile: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionFirefoxDriverPath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionIeDriverPath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionLastDirectory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  seleniumViewOptionPhantomJsBinaryPath: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  sessionManagementActionSetSessionManagementMethod: {
    parameters: {
      query: {
        contextId: string;
        methodName: string;
        methodConfigParams?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  sessionManagementViewGetSessionManagementMethod: {
    parameters: {
      query: {
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  sessionManagementViewGetSessionManagementMethodConfigParams: {
    parameters: {
      query: {
        methodName: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  sessionManagementViewGetSupportedSessionManagementMethods: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  soapActionImportFile: {
    parameters: {
      query: {
        file: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  soapActionImportUrl: {
    parameters: {
      query: {
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionAddDomainAlwaysInScope: {
    parameters: {
      query: {
        value: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionClearExcludedFromScan: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionDisableAllDomainsAlwaysInScope: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionEnableAllDomainsAlwaysInScope: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionExcludeFromScan: {
    parameters: {
      query: {
        regex: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionModifyDomainAlwaysInScope: {
    parameters: {
      query: {
        idx: string;
        value?: string;
        isRegex?: string;
        isEnabled?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionPause: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionPauseAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionRemoveAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionRemoveDomainAlwaysInScope: {
    parameters: {
      query: {
        idx: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionRemoveScan: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionResume: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionResumeAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionScan: {
    parameters: {
      query?: {
        url?: string;
        maxChildren?: string;
        recurse?: string;
        contextName?: string;
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionScanAsUser: {
    parameters: {
      query: {
        contextId: string;
        userId: string;
        url?: string;
        maxChildren?: string;
        recurse?: string;
        subtreeOnly?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionAcceptCookies: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionHandleODataParametersVisited: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionHandleParameters: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionMaxChildren: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionMaxDepth: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionMaxDuration: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionMaxParseSizeBytes: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionMaxScansInUI: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionParseComments: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionParseDsStore: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionParseGit: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionParseRobotsTxt: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionParseSVNEntries: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionParseSitemapXml: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionPostForm: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionProcessForm: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionRequestWaitTime: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionSendRefererHeader: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionShowAdvancedDialog: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionSkipURLString: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionThreadCount: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionSetOptionUserAgent: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionStop: {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderActionStopAllScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewAddedNodes: {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewAllUrls: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewDomainsAlwaysInScope: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewExcludedFromScan: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewFullResults: {
    parameters: {
      query: {
        scanId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionAcceptCookies: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionDomainsAlwaysInScope: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionDomainsAlwaysInScopeEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionHandleODataParametersVisited: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionHandleParameters: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionMaxChildren: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionMaxDepth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionMaxDuration: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionMaxParseSizeBytes: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionMaxScansInUI: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionParseComments: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionParseDsStore: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionParseGit: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionParseRobotsTxt: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionParseSVNEntries: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionParseSitemapXml: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionPostForm: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionProcessForm: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionRequestWaitTime: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionSendRefererHeader: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionShowAdvancedDialog: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionSkipURLString: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionThreadCount: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewOptionUserAgent: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewResults: {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewScans: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  spiderViewStatus: {
    parameters: {
      query?: {
        scanId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsActionClearStats: {
    parameters: {
      query?: {
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsActionSetOptionInMemoryEnabled: {
    parameters: {
      query: {
        Boolean: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsActionSetOptionStatsdHost: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsActionSetOptionStatsdPort: {
    parameters: {
      query: {
        Integer: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsActionSetOptionStatsdPrefix: {
    parameters: {
      query: {
        String: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewAllSitesStats: {
    parameters: {
      query?: {
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewOptionInMemoryEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewOptionStatsdEnabled: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewOptionStatsdHost: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewOptionStatsdPort: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewOptionStatsdPrefix: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewSiteStats: {
    parameters: {
      query: {
        site: string;
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  statsViewStats: {
    parameters: {
      query?: {
        keyPrefix?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionAuthenticateAsUser: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionNewUser: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionPollAsUser: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionRemoveUser: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionSetAuthenticationCredentials: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        authCredentialsConfigParams?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionSetAuthenticationState: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        /** @description Last Poll Result - optional, should be 'true' or 'false'. */
        lastPollResult?: string;
        /** @description Last Poll Time in Milliseconds - optional, should be a long or 'NOW' for the current time in ms. */
        lastPollTimeInMs?: string;
        /** @description Requests Since Last Poll - optional, should be an integer. */
        requestsSinceLastPoll?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionSetCookie: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        /** @description The Cookie Domain */
        domain: string;
        /** @description The Cookie Name */
        name: string;
        /** @description The Cookie Value */
        value: string;
        /** @description The Cookie Path - optional default no path */
        path?: string;
        /** @description If the Cookie is secure - optional default false */
        secure?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionSetUserEnabled: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        enabled: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersActionSetUserName: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
        name: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersViewGetAuthenticationCredentials: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description the User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersViewGetAuthenticationCredentialsConfigParams: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersViewGetAuthenticationSession: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersViewGetAuthenticationState: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersViewGetUserById: {
    parameters: {
      query: {
        /** @description The Context ID */
        contextId: string;
        /** @description The User ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  usersViewUsersList: {
    parameters: {
      query?: {
        /** @description The Context ID */
        contextId?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  wappalyzerViewListAll: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  wappalyzerViewListSite: {
    parameters: {
      query: {
        site: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  wappalyzerViewListSites: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  websocketActionSendTextMessage: {
    parameters: {
      query: {
        channelId: string;
        outgoing: string;
        message: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  websocketActionSetBreakTextMessage: {
    parameters: {
      query: {
        message: string;
        outgoing: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  websocketViewBreakTextMessage: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  websocketViewChannels: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  websocketViewMessage: {
    parameters: {
      query: {
        channelId: string;
        messageId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
  websocketViewMessages: {
    parameters: {
      query?: {
        channelId?: string;
        start?: string;
        count?: string;
        payloadPreviewLength?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      default: components["responses"]["ErrorJson"];
    };
  };
}
