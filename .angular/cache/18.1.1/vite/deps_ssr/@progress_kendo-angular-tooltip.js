import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  PopupModule,
  PopupService,
  xIcon
} from "./chunk-JIDDKRYE.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-R34FYGCB.js";
import "./chunk-UVFYPAVO.js";
import {
  IconWrapperComponent,
  IconsModule
} from "./chunk-2GY5W5UB.js";
import {
  Keys,
  PreventableEvent,
  closest,
  focusableSelector,
  hasObservers,
  isDocumentAvailable
} from "./chunk-UVZZJR6W.js";
import {
  validatePackage
} from "./chunk-6FRD3SAH.js";
import "./chunk-EOXLKPHL.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-DLGLBJGM.js";
import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  forwardRef,
  isDevMode,
  require_cjs,
  require_operators,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DFLAVSOJ.js";
import {
  __toESM
} from "./chunk-LDODSSGN.js";

// node_modules/@progress/kendo-angular-tooltip/fesm2015/progress-kendo-angular-tooltip.mjs
var import_operators = __toESM(require_operators(), 1);
var import_rxjs = __toESM(require_cjs(), 1);
var _c0 = (a0, a1) => ({
  $implicit: a0,
  anchor: a1
});
function TooltipContentComponent_div_2_ng_template_1_Template(rf, ctx) {
}
function TooltipContentComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, TooltipContentComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.titleTemplate)("ngTemplateOutlet", ctx_r0.titleTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c0, ctx_r0.anchor, ctx_r0.anchor));
  }
}
function TooltipContentComponent_ng_template_3_Template(rf, ctx) {
}
function TooltipContentComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r0.templateString, " ");
  }
}
function TooltipContentComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function TooltipContentComponent_div_5_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onCloseClick($event));
    });
    ɵɵelementStart(1, "a", 9);
    ɵɵelement(2, "kendo-icon-wrapper", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.closeButtonTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.xIcon);
  }
}
function TooltipContentComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.calloutPositionClass());
  }
}
var _c1 = ["popoverWrapper"];
var _c2 = ["titleTemplateWrapper"];
var _c3 = ["bodyTemplateWrapper"];
var _c4 = (a0, a1) => ({
  "width": a0,
  "height": a1
});
var _c5 = (a0, a1) => ({
  $implicit: a0,
  data: a1
});
function PopoverComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.getCalloutPosition());
  }
}
function PopoverComponent_div_0_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function PopoverComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, PopoverComponent_div_0_div_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const noCallout_r2 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", noCallout_r2);
  }
}
function PopoverComponent_div_0_ng_template_4_div_0_2_ng_template_0_Template(rf, ctx) {
}
function PopoverComponent_div_0_ng_template_4_div_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PopoverComponent_div_0_ng_template_4_div_0_2_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.titleTemplate == null ? null : ctx_r0.titleTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c5, ctx_r0.anchor, ctx_r0.contextData));
  }
}
function PopoverComponent_div_0_ng_template_4_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
  }
}
function PopoverComponent_div_0_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14, 2);
    ɵɵtemplate(2, PopoverComponent_div_0_ng_template_4_div_0_2_Template, 1, 5, null, 15)(3, PopoverComponent_div_0_ng_template_4_div_0_ng_container_3_Template, 2, 1, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.titleTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.title && !ctx_r0.titleTemplate);
  }
}
function PopoverComponent_div_0_ng_template_4_div_1_2_ng_template_0_Template(rf, ctx) {
}
function PopoverComponent_div_0_ng_template_4_div_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PopoverComponent_div_0_ng_template_4_div_1_2_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.bodyTemplate == null ? null : ctx_r0.bodyTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c5, ctx_r0.anchor, ctx_r0.contextData));
  }
}
function PopoverComponent_div_0_ng_template_4_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.body, " ");
  }
}
function PopoverComponent_div_0_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17, 3);
    ɵɵtemplate(2, PopoverComponent_div_0_ng_template_4_div_1_2_Template, 1, 5, null, 15)(3, PopoverComponent_div_0_ng_template_4_div_1_ng_container_3_Template, 2, 1, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.bodyTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.body && !ctx_r0.bodyTemplate);
  }
}
function PopoverComponent_div_0_ng_template_4_div_2_1_ng_template_0_Template(rf, ctx) {
}
function PopoverComponent_div_0_ng_template_4_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PopoverComponent_div_0_ng_template_4_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.actionsTemplate == null ? null : ctx_r0.actionsTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c5, ctx_r0.anchor, ctx_r0.contextData));
  }
}
function PopoverComponent_div_0_ng_template_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, PopoverComponent_div_0_ng_template_4_div_2_1_Template, 1, 5, null, 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.actionsTemplate);
  }
}
function PopoverComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PopoverComponent_div_0_ng_template_4_div_0_Template, 4, 2, "div", 11)(1, PopoverComponent_div_0_ng_template_4_div_1_Template, 4, 2, "div", 12)(2, PopoverComponent_div_0_ng_template_4_div_2_Template, 2, 1, "div", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.titleTemplate || ctx_r0.title);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.bodyTemplate || ctx_r0.body);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.actionsTemplate);
  }
}
function PopoverComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5, 0);
    ɵɵtemplate(2, PopoverComponent_div_0_div_2_Template, 1, 1, "div", 6)(3, PopoverComponent_div_0_div_3_Template, 2, 1, "div", 7)(4, PopoverComponent_div_0_ng_template_4_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const noCallout_r2 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction2(4, _c4, ctx_r0.width, ctx_r0.height));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.callout);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.callout)("ngIfElse", noCallout_r2);
  }
}
var packageMetadata = {
  name: "@progress/kendo-angular-tooltip",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1720607930,
  version: "16.4.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var TOOLTIP_SETTINGS = new InjectionToken("kendo-ui-tooltip-settings");
var TooltipSettings = class {
  /**
   * @hidden
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
  }
};
TooltipSettings.ɵfac = function TooltipSettings_Factory(t) {
  return new (t || TooltipSettings)();
};
TooltipSettings.ɵprov = ɵɵdefineInjectable({
  token: TooltipSettings,
  factory: TooltipSettings.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipSettings, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var idx = 0;
var popoverTitleIdx = 0;
var popoverBodyIdx = 0;
var getId = (prefix, idSource) => {
  switch (idSource) {
    case "popoverTitle":
      return `${prefix}-${++popoverTitleIdx}`;
    case "popoverBody":
      return `${prefix}-${++popoverBodyIdx}`;
    default:
      return `${prefix}-${++idx}`;
  }
};
function align(position, offset) {
  let anchorAlign = {};
  let popupAlign = {};
  let popupMargin = {};
  switch (position) {
    case "top":
      anchorAlign = {
        horizontal: "center",
        vertical: "top"
      };
      popupAlign = {
        horizontal: "center",
        vertical: "bottom"
      };
      popupMargin = {
        horizontal: 0,
        vertical: offset
      };
      break;
    case "bottom":
      anchorAlign = {
        horizontal: "center",
        vertical: "bottom"
      };
      popupAlign = {
        horizontal: "center",
        vertical: "top"
      };
      popupMargin = {
        horizontal: 0,
        vertical: offset
      };
      break;
    case "right":
      anchorAlign = {
        horizontal: "right",
        vertical: "center"
      };
      popupAlign = {
        horizontal: "left",
        vertical: "center"
      };
      popupMargin = {
        horizontal: offset,
        vertical: 0
      };
      break;
    case "left":
      anchorAlign = {
        horizontal: "left",
        vertical: "center"
      };
      popupAlign = {
        horizontal: "right",
        vertical: "center"
      };
      popupMargin = {
        horizontal: offset,
        vertical: 0
      };
      break;
    default:
      break;
  }
  return {
    anchorAlign,
    popupAlign,
    popupMargin
  };
}
function collision(inputcollision, position) {
  if (inputcollision) {
    return inputcollision;
  }
  if (position === "top" || position === "bottom") {
    return {
      horizontal: "fit",
      vertical: "flip"
    };
  }
  return {
    horizontal: "flip",
    vertical: "fit"
  };
}
function isDocumentNode(container) {
  return container.nodeType === 9;
}
function closestBySelector(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
function contains(container, child) {
  if (!container) {
    return false;
  }
  if (isDocumentNode(container)) {
    return false;
  }
  if (container.contains) {
    return container.contains(child);
  }
  if (container.compareDocumentPosition) {
    return !!(container.compareDocumentPosition(child) & Node.DOCUMENT_POSITION_CONTAINED_BY);
  }
}
var hasParent = (node, parent) => {
  while (node && node !== parent) {
    node = node.parentNode;
  }
  return node;
};
function getCenterOffset(item, dir, size) {
  const rect = item.getBoundingClientRect();
  return rect[dir] + rect[size] / 2;
}
function containsItem(collection, item) {
  return collection.indexOf(item) !== -1;
}
function getAllFocusableChildren(parent) {
  return parent.querySelectorAll(focusableSelector);
}
function getFirstAndLastFocusable(parent) {
  const all = getAllFocusableChildren(parent);
  const firstFocusable = all.length > 0 ? all[0] : parent;
  const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
  return [firstFocusable, lastFocusable];
}
var LocalizedMessagesDirective = class extends ComponentMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedMessagesDirective.ɵfac = function LocalizedMessagesDirective_Factory(t) {
  return new (t || LocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedMessagesDirective,
  selectors: [["", "kendoTooltipLocalizedMessages", ""]],
  inputs: {
    closeTitle: "closeTitle"
  },
  features: [ɵɵProvidersFeature([{
    provide: ComponentMessages,
    useExisting: forwardRef(() => LocalizedMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ComponentMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `[kendoTooltipLocalizedMessages]`
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    closeTitle: [{
      type: Input
    }]
  });
})();
var TooltipContentComponent = class {
  constructor(content, localizationService) {
    this.content = content;
    this.localizationService = localizationService;
    this.xIcon = xIcon;
    this.close = new EventEmitter();
    this.hostRole = "tooltip";
    this.tooltipWidth = null;
    this.tooltipHeight = null;
    this.callout = true;
    this.calloutStyles = (position, calloutSize, isFlip) => {
      const styles = {};
      const isVertical = position === "top" || position === "bottom";
      const flipDeg = "180deg";
      const zeroDeg = "0deg";
      if (!isFlip) {
        styles.transform = isVertical ? `rotateX(${zeroDeg})` : `rotateY(${zeroDeg})`;
        return styles;
      }
      if (position === "top") {
        styles.bottom = "unset";
      } else if (position === "bottom") {
        styles.top = "unset";
      } else if (position === "left") {
        styles.right = "unset";
      } else if (position === "right") {
        styles.left = "unset";
      }
      styles[position] = `${-calloutSize}px`;
      styles.transform = isVertical ? `rotateX(${flipDeg})` : `rotateY(${flipDeg})`;
      return styles;
    };
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  get cssClasses() {
    return "k-tooltip";
  }
  get hostId() {
    return this.tooltipId;
  }
  get className() {
    return this.closable;
  }
  get cssPosition() {
    return "relative";
  }
  ngOnInit() {
    this.tooltipId = getId("tooltip");
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  get closeButtonTitle() {
    return this.closeTitle || this.localizationService.get("closeTitle");
  }
  calloutPositionClass() {
    return {
      "top": "k-callout-s",
      "left": "k-callout-e",
      "bottom": "k-callout-n",
      "right": "k-callout-w"
    }[this.position];
  }
  onCloseClick(event) {
    event.preventDefault();
    this.close.emit();
  }
  updateCalloutPosition(position, isFlip) {
    if (!this.callout) {
      return;
    }
    const callout = this.content.nativeElement.querySelector(".k-callout");
    const isVertical = position === "top" || position === "bottom";
    const size = isVertical ? "width" : "height";
    const dir = isVertical ? "left" : "top";
    const offsetProperty = isVertical ? "marginLeft" : "marginTop";
    const calloutSize = callout.getBoundingClientRect()[size];
    const anchorCenter = getCenterOffset(this.anchor.nativeElement, dir, size);
    const contentCenter = getCenterOffset(this.content.nativeElement, dir, size);
    const diff = Math.abs(contentCenter - anchorCenter);
    if (diff > 1 || diff === 0 || Math.round(diff) === 0) {
      const newMargin = contentCenter - anchorCenter + calloutSize / 2;
      callout.style[offsetProperty] = `${-newMargin}px`;
    }
    const calloutStyles = this.calloutStyles(position, calloutSize, isFlip);
    Object.keys(calloutStyles).forEach((style) => {
      callout.style[style] = calloutStyles[style];
    });
  }
};
TooltipContentComponent.ɵfac = function TooltipContentComponent_Factory(t) {
  return new (t || TooltipContentComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService));
};
TooltipContentComponent.ɵcmp = ɵɵdefineComponent({
  type: TooltipContentComponent,
  selectors: [["kendo-tooltip"]],
  hostVars: 13,
  hostBindings: function TooltipContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction)("role", ctx.hostRole)("id", ctx.hostId);
      ɵɵclassMap(ctx.cssClasses);
      ɵɵstyleProp("position", ctx.cssPosition)("width", ctx.tooltipWidth, "px")("height", ctx.tooltipHeight, "px");
      ɵɵclassProp("k-tooltip-closable", ctx.className);
    }
  },
  inputs: {
    tooltipWidth: "tooltipWidth",
    tooltipHeight: "tooltipHeight",
    titleTemplate: "titleTemplate",
    anchor: "anchor",
    closable: "closable",
    templateRef: "templateRef",
    templateString: "templateString"
  },
  outputs: {
    close: "close"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.tooltip"
  }])],
  decls: 7,
  vars: 10,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_TOOLTIP_FESM2015_PROGRESS_KENDO_ANGULAR_TOOLTIP_MJS_0 = goog.getMsg("Close");
      i18n_0 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_TOOLTIP_FESM2015_PROGRESS_KENDO_ANGULAR_TOOLTIP_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.tooltip.closeTitle|The title of the close button:Close`;
    }
    return [["kendoTooltipLocalizedMessages", "", "closeTitle", i18n_0], [1, "k-tooltip-content"], ["class", "k-tooltip-title", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngIf"], ["class", "k-tooltip-button", 3, "click", 4, "ngIf"], ["class", "k-callout", 3, "ngClass", 4, "ngIf"], [1, "k-tooltip-title"], [1, "k-tooltip-button", 3, "click"], ["href", "#", 1, "k-icon"], ["name", "x", 3, "svgIcon"], [1, "k-callout", 3, "ngClass"]];
  },
  template: function TooltipContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵtemplate(2, TooltipContentComponent_div_2_Template, 2, 6, "div", 2)(3, TooltipContentComponent_ng_template_3_Template, 0, 0, "ng-template", 3)(4, TooltipContentComponent_ng_template_4_Template, 1, 1, "ng-template", 4);
      ɵɵelementEnd();
      ɵɵtemplate(5, TooltipContentComponent_div_5_Template, 3, 3, "div", 5)(6, TooltipContentComponent_div_6_Template, 1, 1, "div", 6);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.titleTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.templateRef)("ngTemplateOutlet", ctx.templateRef)("ngTemplateOutletContext", ɵɵpureFunction2(7, _c0, ctx.anchor, ctx.anchor));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.templateString);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.closable);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.callout);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconWrapperComponent, LocalizedMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipContentComponent, [{
    type: Component,
    args: [{
      selector: "kendo-tooltip",
      template: `
        <ng-container kendoTooltipLocalizedMessages
            i18n-closeTitle="kendo.tooltip.closeTitle|The title of the close button"
            closeTitle="Close"
        >
        </ng-container>

        <div class="k-tooltip-content">
            <div class="k-tooltip-title" *ngIf="titleTemplate">
                <ng-template
                    [ngIf]="titleTemplate"
                    [ngTemplateOutlet]="titleTemplate"
                    [ngTemplateOutletContext]="{ $implicit: anchor, anchor: anchor }">
                </ng-template>
            </div>

            <ng-template
                [ngIf]="templateRef"
                [ngTemplateOutlet]="templateRef"
                [ngTemplateOutletContext]="{ $implicit: anchor, anchor: anchor }">
            </ng-template>
            <ng-template
                [ngIf]="templateString">
                {{ templateString }}
            </ng-template>
        </div>

        <div *ngIf="closable" [attr.aria-hidden]="true" class="k-tooltip-button" (click)="onCloseClick($event)">
            <a href="#" [attr.title]="closeButtonTitle" class="k-icon">
                <kendo-icon-wrapper
                    name="x"
                    [svgIcon]="xIcon">
                </kendo-icon-wrapper>
            </a>
        </div>

        <div class="k-callout" *ngIf="callout" [ngClass]="calloutPositionClass()"></div>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.tooltip"
      }]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: LocalizationService
    }];
  }, {
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    close: [{
      type: Output
    }],
    cssClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-tooltip-closable"]
    }],
    cssPosition: [{
      type: HostBinding,
      args: ["style.position"]
    }],
    tooltipWidth: [{
      type: HostBinding,
      args: ["style.width.px"]
    }, {
      type: Input
    }],
    tooltipHeight: [{
      type: HostBinding,
      args: ["style.height.px"]
    }, {
      type: Input
    }],
    titleTemplate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    templateRef: [{
      type: Input
    }],
    templateString: [{
      type: Input
    }]
  });
})();
var TooltipDirective = class {
  constructor(tooltipWrapper, ngZone, renderer, popupService, settings, legacySettings) {
    this.tooltipWrapper = tooltipWrapper;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.popupService = popupService;
    this.filter = "[title]";
    this.position = "top";
    this.showAfter = 100;
    this.callout = true;
    this.closable = false;
    this.offset = 6;
    this.anchor = null;
    this.keyboardNavigationSubscription = new import_rxjs.Subscription();
    this.validPositions = ["top", "bottom", "right", "left"];
    this.validShowOptions = ["hover", "click", "none"];
    validatePackage(packageMetadata);
    Object.assign(this, settings, legacySettings);
    this.ngZone.runOutsideAngular(() => {
      const wrapper = this.tooltipWrapper.nativeElement;
      this.anchorTitleSubscription = (0, import_rxjs.fromEvent)(wrapper, "mouseover").pipe((0, import_operators.filter)(() => this.filter !== "")).subscribe((e) => {
        const filterElement = closestBySelector(e.target, this.filter);
        if (filterElement) {
          this.hideElementTitle({
            nativeElement: filterElement
          });
        }
      });
      this.mouseOverSubscription = (0, import_rxjs.fromEvent)(wrapper, "mouseover").pipe((0, import_operators.filter)(() => this.filter !== "")).subscribe((e) => this.onMouseOver(e));
      this.mouseOutSubscription = (0, import_rxjs.fromEvent)(wrapper, "mouseout").subscribe((e) => this.onMouseOut(e));
    });
  }
  /**
   * Sets the content of the Tooltip as a template reference
   * ([see example]({% slug templates_tooltip %})).
   */
  set tooltipTemplate(value) {
    this.template = value;
  }
  get tooltipTemplate() {
    return this.template;
  }
  /**
   * Shows the Tooltip.
   * @param anchor&mdash; ElementRef|Element.
   * Specifies the element that will be used as an anchor. The Tooltip opens relative to that element.
   */
  show(anchor) {
    if (this.popupRef) {
      return;
    }
    if (anchor instanceof Element) {
      anchor = {
        nativeElement: anchor
      };
    }
    this.anchor = anchor;
    if (this.showOn === "hover") {
      if (this.popupRef) {
        return;
      }
      clearTimeout(this.showTimeout);
      this.showTimeout = setTimeout(() => this.showContent(this.anchor), this.showAfter);
    } else {
      this.hideElementTitle(this.anchor);
      this.showContent(this.anchor);
    }
  }
  /**
   * Hides the Tooltip.
   */
  hide() {
    clearTimeout(this.showTimeout);
    const anchor = this.anchor && this.anchor.nativeElement;
    if (anchor && anchor.getAttribute("data-title")) {
      if (!anchor.getAttribute("title") && anchor.hasAttribute("title")) {
        anchor.setAttribute("title", anchor.getAttribute("data-title"));
      }
      anchor.setAttribute("data-title", "");
    }
    if (this.popupMouseOutSubscription) {
      this.popupMouseOutSubscription.unsubscribe();
    }
    if (this.closeClickSubscription) {
      this.closeClickSubscription.unsubscribe();
    }
    this.closePopup();
  }
  /**
   * Toggle visibility of the Tooltip.
   *
   * @param anchor&mdash; ElementRef|Element. Specifies the element that will be used as an anchor.
   * @param show&mdash; Optional. Boolean. Specifies if the Tooltip will be rendered.
   */
  toggle(anchor, show) {
    const previousAnchor = this.anchor && this.anchor.nativeElement;
    if (anchor instanceof Element) {
      anchor = {
        nativeElement: anchor
      };
    }
    if (previousAnchor !== anchor.nativeElement) {
      this.hide();
    }
    if (previousAnchor === anchor.nativeElement && this.showOn === "click") {
      this.hide();
    }
    if (typeof show === "undefined") {
      show = !this.popupRef;
    }
    if (show) {
      this.show(anchor);
    } else {
      this.hide();
    }
  }
  ngOnInit() {
    if (this.showOn === void 0) {
      this.showOn = "hover";
    }
    this.keyboardNavigationSubscription.add(this.renderer.listen(this.tooltipWrapper.nativeElement, "keydown", (event) => this.onKeyDown(event)));
    this.verifyProperties();
  }
  ngOnChanges(changes) {
    if (changes.showOn && isDocumentAvailable()) {
      this.subscribeClick();
    }
  }
  ngAfterViewChecked() {
    if (!this.popupRef) {
      return;
    }
    if (this.anchor && !hasParent(this.anchor.nativeElement || this.anchor, this.tooltipWrapper.nativeElement)) {
      this.anchor = null;
      this.hide();
    }
  }
  ngOnDestroy() {
    this.hide();
    this.template = null;
    this.anchorTitleSubscription.unsubscribe();
    this.mouseOverSubscription.unsubscribe();
    this.mouseOutSubscription.unsubscribe();
    this.keyboardNavigationSubscription.unsubscribe();
    if (this.mouseClickSubscription) {
      this.mouseClickSubscription.unsubscribe();
    }
    if (this.popupPositionChangeSubscription) {
      this.popupPositionChangeSubscription.unsubscribe();
    }
    if (this.popupMouseOutSubscription) {
      this.popupMouseOutSubscription.unsubscribe();
    }
  }
  showContent(anchorRef) {
    if (!anchorRef.nativeElement.getAttribute("data-title") && !this.template) {
      return;
    }
    this.ngZone.run(() => {
      this.openPopup(anchorRef);
      this.bindContent(this.popupRef.content, anchorRef);
    });
    this.popupRef.popupAnchorViewportLeave.pipe((0, import_operators.take)(1)).subscribe(() => this.hide());
  }
  bindContent(contentComponent, anchorRef) {
    const content = contentComponent.instance;
    this.closeClickSubscription = content.close.subscribe(() => {
      this.hide();
    });
    if (!this.template) {
      content.templateString = this.anchor.nativeElement.getAttribute("data-title");
    } else {
      content.templateRef = this.template;
    }
    if (this.titleTemplate) {
      content.titleTemplate = this.titleTemplate;
    }
    content.closeTitle = this.closeTitle;
    content.anchor = anchorRef;
    content.callout = this.callout;
    content.closable = this.closable;
    content.position = this.position;
    content.tooltipWidth = this.tooltipWidth;
    content.tooltipHeight = this.tooltipHeight;
    this.popupRef.content.changeDetectorRef.detectChanges();
  }
  hideElementTitle(elementRef) {
    const element = elementRef.nativeElement;
    if (element.getAttribute("title")) {
      element.setAttribute("data-title", element.getAttribute("title"));
      element.setAttribute("title", "");
    }
  }
  openPopup(anchorRef) {
    const alignSettings = align(this.position, this.offset);
    const anchorAlign = alignSettings.anchorAlign;
    const popupAlign = alignSettings.popupAlign;
    const popupMargin = alignSettings.popupMargin;
    this.popupRef = this.popupService.open({
      anchor: anchorRef,
      anchorAlign,
      animate: false,
      content: TooltipContentComponent,
      collision: collision(this.collision, this.position),
      margin: popupMargin,
      popupAlign,
      popupClass: "k-popup-transparent"
    });
    if (this.tooltipClass) {
      this.renderer.addClass(this.popupRef.popupElement, this.tooltipClass);
    }
    if (this.tooltipContentClass) {
      this.renderer.addClass(this.popupRef.content.instance["content"].nativeElement, this.tooltipContentClass);
    }
    const popupInstance = this.popupRef.content.instance;
    if (anchorRef) {
      this.renderer.setAttribute(anchorRef.nativeElement, "aria-labelledby", popupInstance.tooltipId);
    }
    if (popupInstance.callout) {
      this.popupPositionChangeSubscription = this.popupRef.popupPositionChange.subscribe(({
        flip
      }) => {
        const isFlip = flip.horizontal === true || flip.vertical === true;
        popupInstance.updateCalloutPosition(this.position, isFlip);
      });
    }
    if (this.showOn === "hover") {
      this.ngZone.runOutsideAngular(() => {
        const popup = this.popupRef.popupElement;
        this.popupMouseOutSubscription = (0, import_rxjs.fromEvent)(popup, "mouseout").subscribe((e) => this.onMouseOut(e));
      });
    }
  }
  closePopup() {
    if (this.popupRef) {
      if (this.anchor) {
        this.renderer.removeAttribute(this.anchor.nativeElement, "aria-labelledby");
      }
      this.popupRef.close();
      this.popupRef = null;
    }
    if (this.popupPositionChangeSubscription) {
      this.popupPositionChangeSubscription.unsubscribe();
    }
  }
  subscribeClick() {
    if (this.mouseClickSubscription) {
      this.mouseClickSubscription.unsubscribe();
    }
    if (this.showOn === "click") {
      this.mouseClickSubscription = (0, import_rxjs.fromEvent)(document, "click").pipe((0, import_operators.filter)(() => this.filter !== "")).subscribe((e) => this.onMouseClick(e, this.tooltipWrapper.nativeElement));
    }
  }
  onMouseClick(e, wrapper) {
    const target = e.target;
    const filterElement = closestBySelector(target, this.filter);
    const popup = this.popupRef && this.popupRef.popupElement;
    if (popup) {
      if (popup.contains(target)) {
        return;
      }
      if (this.closable) {
        return;
      }
    }
    if (wrapper.contains(target) && filterElement) {
      this.toggle(filterElement, true);
    } else if (popup) {
      this.hide();
    }
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const target = event.target;
    if (this.popupRef) {
      const tooltipId = this.popupRef.content.location.nativeElement.getAttribute("id");
      const anchorLabelledBy = target.getAttribute("aria-labelledby");
      if (keyCode === Keys.Escape && this.canCloseTooltip(target, tooltipId, anchorLabelledBy)) {
        this.closePopup();
      }
    }
  }
  canCloseTooltip(target, tooltipId, anchorLabelledBy) {
    const isIdEqualsLabel = tooltipId === anchorLabelledBy;
    const filterElement = closestBySelector(target, this.filter);
    const isTargetFocused = target === document.activeElement;
    const isTargetInsideWrapper = this.tooltipWrapper.nativeElement.contains(target);
    return isTargetInsideWrapper && filterElement && isTargetFocused && isIdEqualsLabel;
  }
  onMouseOver(e) {
    const filterElement = closestBySelector(e.target, this.filter);
    if (this.showOn !== "hover") {
      return;
    }
    if (filterElement) {
      this.toggle(filterElement, true);
    }
  }
  onMouseOut(e) {
    if (this.showOn !== "hover") {
      return;
    }
    if (this.closable) {
      return;
    }
    const popup = this.popupRef && this.popupRef.popupElement;
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && this.anchor && contains(this.anchor.nativeElement, relatedTarget)) {
      return;
    }
    if (relatedTarget && contains(popup, relatedTarget)) {
      return;
    }
    this.hide();
  }
  verifyProperties() {
    if (!isDevMode()) {
      return;
    }
    if (!containsItem(this.validPositions, this.position)) {
      throw new Error(`Invalid value provided for position property.The available options are 'top', 'bottom', 'left', or 'right'.`);
    }
    if (!containsItem(this.validShowOptions, this.showOn)) {
      throw new Error(`Invalid value provided for showOn property.The available options are 'hover' or 'none'.`);
    }
  }
};
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
  return new (t || TooltipDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(TooltipSettings, 8), ɵɵdirectiveInject(TOOLTIP_SETTINGS, 8));
};
TooltipDirective.ɵdir = ɵɵdefineDirective({
  type: TooltipDirective,
  selectors: [["", "kendoTooltip", ""]],
  inputs: {
    filter: "filter",
    position: "position",
    titleTemplate: "titleTemplate",
    showOn: "showOn",
    showAfter: "showAfter",
    callout: "callout",
    closable: "closable",
    offset: "offset",
    tooltipWidth: "tooltipWidth",
    tooltipHeight: "tooltipHeight",
    tooltipClass: "tooltipClass",
    tooltipContentClass: "tooltipContentClass",
    collision: "collision",
    closeTitle: "closeTitle",
    tooltipTemplate: "tooltipTemplate"
  },
  exportAs: ["kendoTooltip"],
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTooltip]",
      exportAs: "kendoTooltip"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: PopupService
    }, {
      type: TooltipSettings,
      decorators: [{
        type: Optional
      }]
    }, {
      type: TooltipSettings,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [TOOLTIP_SETTINGS]
      }]
    }];
  }, {
    filter: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    titleTemplate: [{
      type: Input
    }],
    showOn: [{
      type: Input
    }],
    showAfter: [{
      type: Input
    }],
    callout: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    tooltipWidth: [{
      type: Input
    }],
    tooltipHeight: [{
      type: Input
    }],
    tooltipClass: [{
      type: Input
    }],
    tooltipContentClass: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    closeTitle: [{
      type: Input
    }],
    tooltipTemplate: [{
      type: Input
    }]
  });
})();
var ERRORS = {
  popover: `Invalid value provided for the 'popover' property. The accepted data types are 'PopoverComponent' or 'PopoverFn'.`,
  templateData: `templateData must be a function, but received`,
  showOn: `Invalid value provided for the 'showOn' property. The available options are 'click', 'hover', 'focus' or 'none'.`
};
var PopoverTitleTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PopoverTitleTemplateDirective.ɵfac = function PopoverTitleTemplateDirective_Factory(t) {
  return new (t || PopoverTitleTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PopoverTitleTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PopoverTitleTemplateDirective,
  selectors: [["", "kendoPopoverTitleTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverTitleTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPopoverTitleTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var PopoverBodyTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PopoverBodyTemplateDirective.ɵfac = function PopoverBodyTemplateDirective_Factory(t) {
  return new (t || PopoverBodyTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PopoverBodyTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PopoverBodyTemplateDirective,
  selectors: [["", "kendoPopoverBodyTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverBodyTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPopoverBodyTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var PopoverActionsTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
PopoverActionsTemplateDirective.ɵfac = function PopoverActionsTemplateDirective_Factory(t) {
  return new (t || PopoverActionsTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
PopoverActionsTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: PopoverActionsTemplateDirective,
  selectors: [["", "kendoPopoverActionsTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverActionsTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPopoverActionsTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var PopoverComponent = class {
  constructor(localization, renderer, element, zone) {
    this.localization = localization;
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.position = "right";
    this.callout = true;
    this.animation = false;
    this.visible = false;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
    this.closeOnKeyDown = new EventEmitter();
    this._width = "auto";
    this._height = "auto";
    this.popoverId = "";
    this._offset = 6;
    this.subs = new import_rxjs.Subscription();
    this._templateData = () => null;
    validatePackage(packageMetadata);
  }
  /**
   * Specifies the distance from the Popover to its anchor element in pixels.
   *
   * @default `6`
   */
  set offset(value) {
    this._offset = value;
  }
  get offset() {
    const calloutBuffer = 14;
    return this.callout ? calloutBuffer + this._offset : this._offset;
  }
  /**
   * Determines the width of the popover. Numeric values are treated as pixels.
   * @default 'auto'
   */
  set width(value) {
    this._width = typeof value === "number" ? `${value}px` : value;
  }
  get width() {
    return this._width;
  }
  /**
   * Determines the height of the popover. Numeric values are treated as pixels.
   * @default 'auto'
   */
  set height(value) {
    this._height = typeof value === "number" ? `${value}px` : value;
  }
  get height() {
    return this._height;
  }
  /**
   * Defines a callback function which returns custom data passed to the Popover templates.
   * It exposes the current anchor element as an argument. [See example]({% slug templates_popover %}#toc-popoverdatacallback)
   */
  set templateData(fn) {
    if (isDevMode && typeof fn !== "function") {
      throw new Error(`${ERRORS.templateData} ${JSON.stringify(fn)}.`);
    }
    this._templateData = fn;
  }
  get templateData() {
    return this._templateData;
  }
  /**
   * @hidden
   */
  get isHidden() {
    return !this.visible;
  }
  /**
   * @hidden
   */
  get hasAttributeHidden() {
    return !this.visible;
  }
  ngOnInit() {
    this.popoverId = getId("k-popover");
    this.subs.add(this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
    this.subs.add(this.renderer.listen(this.element.nativeElement, "keydown", (event) => this.onKeyDown(event)));
  }
  ngAfterViewInit() {
    this.zone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
      if (this.visible) {
        const wrapper = this.popoverWrapper.nativeElement;
        const focusablePopoverChildren = getAllFocusableChildren(wrapper);
        if (focusablePopoverChildren.length > 0) {
          focusablePopoverChildren[0].focus();
        }
        this.setAriaAttributes(wrapper, focusablePopoverChildren);
      }
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  getCalloutPosition() {
    switch (this.position) {
      case "top":
        return {
          "k-callout-s": true
        };
      case "bottom":
        return {
          "k-callout-n": true
        };
      case "left":
        return {
          "k-callout-e": true
        };
      case "right":
        return {
          "k-callout-w": true
        };
      default:
        return {
          "k-callout-s": true
        };
    }
  }
  /**
   * @hidden
   */
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const target = event.target;
    if (keyCode === Keys.Tab) {
      this.keepFocusWithinComponent(target, event);
    }
    if (keyCode === Keys.Escape) {
      this.closeOnKeyDown.emit();
    }
  }
  keepFocusWithinComponent(target, event) {
    const wrapper = this.popoverWrapper.nativeElement;
    const [firstFocusable, lastFocusable] = getFirstAndLastFocusable(wrapper);
    const tabAfterLastFocusable = !event.shiftKey && target === lastFocusable;
    const shiftTabAfterFirstFocusable = event.shiftKey && target === firstFocusable;
    if (tabAfterLastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
    if (shiftTabAfterFirstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  }
  setAriaAttributes(wrapper, focusablePopoverChildren) {
    if (this.titleTemplate) {
      const titleRef = this.titleTemplateWrapper.nativeElement;
      const focusableHeaderChildren = getAllFocusableChildren(titleRef).length > 0;
      if (focusableHeaderChildren) {
        const headerId = getId("k-popover-header", "popoverTitle");
        this.renderer.setAttribute(titleRef, "id", headerId);
        this.renderer.setAttribute(wrapper, "aria-labelledby", headerId);
      }
    }
    if (this.bodyTemplate) {
      const bodyRef = this.bodyTemplateWrapper.nativeElement;
      const focusableBodyChildren = getAllFocusableChildren(bodyRef).length > 0;
      if (focusableBodyChildren) {
        const bodyId = getId("k-popover-body", "popoverBody");
        this.renderer.setAttribute(bodyRef, "id", bodyId);
        this.renderer.setAttribute(wrapper, "aria-describedby", bodyId);
      }
    }
    this.renderer.setAttribute(wrapper, "id", this.popoverId);
    this.renderer.setAttribute(wrapper, "role", focusablePopoverChildren.length > 0 ? "dialog" : "tooltip");
  }
};
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
  return new (t || PopoverComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
PopoverComponent.ɵcmp = ɵɵdefineComponent({
  type: PopoverComponent,
  selectors: [["kendo-popover"]],
  contentQueries: function PopoverComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PopoverTitleTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PopoverBodyTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PopoverActionsTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
    }
  },
  viewQuery: function PopoverComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popoverWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplateWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyTemplateWrapper = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function PopoverComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction)("aria-hidden", ctx.hasAttributeHidden);
      ɵɵstyleProp("width", ctx._width)("height", ctx._height);
      ɵɵclassProp("k-hidden", ctx.isHidden);
    }
  },
  inputs: {
    position: "position",
    offset: "offset",
    width: "width",
    height: "height",
    title: "title",
    subtitle: "subtitle",
    body: "body",
    callout: "callout",
    animation: "animation",
    templateData: "templateData"
  },
  outputs: {
    show: "show",
    shown: "shown",
    hide: "hide",
    hidden: "hidden",
    closeOnKeyDown: "closeOnKeyDown"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.popover"
  }])],
  decls: 1,
  vars: 1,
  consts: [["popoverWrapper", ""], ["noCallout", ""], ["titleTemplateWrapper", ""], ["bodyTemplateWrapper", ""], ["class", "k-popover k-popup", 3, "ngStyle", 4, "ngIf"], [1, "k-popover", "k-popup", 3, "ngStyle"], ["class", "k-popover-callout", 3, "ngClass", 4, "ngIf"], ["class", "k-popover-inner", 4, "ngIf", "ngIfElse"], [1, "k-popover-callout", 3, "ngClass"], [1, "k-popover-inner"], [4, "ngTemplateOutlet"], ["class", "k-popover-header", 4, "ngIf"], ["class", "k-popover-body", 4, "ngIf"], ["class", "k-popover-actions k-actions k-actions-stretched k-actions-horizontal", 4, "ngIf"], [1, "k-popover-header"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-popover-body"], [1, "k-popover-actions", "k-actions", "k-actions-stretched", "k-actions-horizontal"]],
  template: function PopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PopoverComponent_div_0_Template, 6, 7, "div", 4);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{
      selector: "kendo-popover",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.popover"
      }],
      template: `
    <div #popoverWrapper *ngIf="visible" class="k-popover k-popup" [ngStyle]="{'width': width, 'height': height}">
        <div class="k-popover-callout" [ngClass]="getCalloutPosition()" *ngIf="callout"></div>

        <div class="k-popover-inner" *ngIf="callout; else noCallout">
            <ng-container *ngTemplateOutlet="noCallout"></ng-container>
        </div>

        <ng-template #noCallout>
            <div #titleTemplateWrapper *ngIf="titleTemplate || title" class="k-popover-header">
                <ng-template *ngIf="titleTemplate"
                    [ngTemplateOutlet]="titleTemplate?.templateRef"
                    [ngTemplateOutletContext]="{ $implicit: anchor, data: contextData }">
                </ng-template>
                <ng-container *ngIf="title && !titleTemplate">
                    {{ title }}
                </ng-container>
            </div>

            <div #bodyTemplateWrapper *ngIf="bodyTemplate || body" class="k-popover-body">
                <ng-template *ngIf="bodyTemplate"
                    [ngTemplateOutlet]="bodyTemplate?.templateRef"
                    [ngTemplateOutletContext]="{ $implicit: anchor, data: contextData }">
                </ng-template>
                <ng-container *ngIf="body && !bodyTemplate">
                    {{ body }}
                </ng-container>
            </div>

            <div *ngIf="actionsTemplate" class="k-popover-actions k-actions k-actions-stretched k-actions-horizontal">
                <ng-template *ngIf="actionsTemplate"
                    [ngTemplateOutlet]="actionsTemplate?.templateRef"
                    [ngTemplateOutletContext]="{ $implicit: anchor, data: contextData }">
                </ng-template>
            </div>
        </ng-template>
    </div>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    position: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    title: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    body: [{
      type: Input
    }],
    callout: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    templateData: [{
      type: Input
    }],
    isHidden: [{
      type: HostBinding,
      args: ["class.k-hidden"]
    }],
    hasAttributeHidden: [{
      type: HostBinding,
      args: ["attr.aria-hidden"]
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    closeOnKeyDown: [{
      type: Output
    }],
    popoverWrapper: [{
      type: ViewChild,
      args: ["popoverWrapper"]
    }],
    titleTemplateWrapper: [{
      type: ViewChild,
      args: ["titleTemplateWrapper"]
    }],
    bodyTemplateWrapper: [{
      type: ViewChild,
      args: ["bodyTemplateWrapper"]
    }],
    titleTemplate: [{
      type: ContentChild,
      args: [PopoverTitleTemplateDirective, {
        static: false
      }]
    }],
    bodyTemplate: [{
      type: ContentChild,
      args: [PopoverBodyTemplateDirective, {
        static: false
      }]
    }],
    actionsTemplate: [{
      type: ContentChild,
      args: [PopoverActionsTemplateDirective, {
        static: false
      }]
    }],
    _width: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    _height: [{
      type: HostBinding,
      args: ["style.height"]
    }]
  });
})();
var PopoverShowEvent = class extends PreventableEvent {
  /**
   * @hidden
   * Constructs the event arguments for the `show` event.
   * @param anchor - The host element related to the popover.
   */
  constructor(anchor) {
    super();
    this.anchor = anchor;
  }
};
var PopoverHideEvent = class extends PreventableEvent {
  /**
   * @hidden
   * Constructs the event arguments for the `hide` event.
   * @param anchor - The host element related to the popover.
   * @param popover - The popover element.
   */
  constructor(anchor, popover) {
    super();
    this.anchor = anchor;
    this.popover = popover;
  }
};
var PopoverShownEvent = class {
  /**
   * @hidden
   * Constructs the event arguments for the `shown` event.
   * @param anchor - The host element related to the popover.
   * @param popover - The popover element.
   */
  constructor(anchor, popover) {
    this.anchor = anchor;
    this.popover = popover;
  }
};
var PopoverHiddenEvent = class {
  /**
   * @hidden
   * Constructs the event arguments for the `hidden` event.
   * @param anchor - The host element related to the popover.
   */
  constructor(anchor) {
    this.anchor = anchor;
  }
};
var validShowOptions = ["hover", "click", "none", "focus"];
var PopoverDirectivesBase = class {
  constructor(ngZone, popupService, renderer) {
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.renderer = renderer;
    this.anchor = null;
    this.subs = new import_rxjs.Subscription();
    this._showOn = "click";
  }
  /**
   * Specifies the popover instance that will be rendered.
   * Accepts a [`PopoverComponent`]({% slug api_tooltip_popovercomponent %}) instance or
   * a [`PopoverFn`]({% slug api_tooltip_popoverfn %}) callback which returns a [`PopoverComponent`]({% slug api_tooltip_popovercomponent %}) instance
   * depending on the current anchor element.
   *
   * [See example]({% slug templates_popover %}#toc-popovercallback)
   */
  set popover(value) {
    if (value instanceof PopoverComponent || typeof value === `function`) {
      this._popover = value;
    } else {
      if (isDevMode) {
        throw new Error(ERRORS.popover);
      }
    }
  }
  get popover() {
    return this._popover;
  }
  /**
   * The event on which the Popover will be shown
   *
   * The supported values are:
   * - `click` (default) &mdash;The Popover will be shown when its `anchor` element is clicked.
   * - `hover`&mdash;The Popover will be shown when its `anchor` element is hovered.
   * - `focus`&mdash;The Popover will be shown when its `anchor` element is focused.
   * - `none`&mdash;The Popover will not be shown on user interaction. It could be rendered via the Popover API methods.
   */
  set showOn(value) {
    if (isDevMode && !containsItem(validShowOptions, value)) {
      throw new Error(ERRORS.showOn);
    }
    this._showOn = value;
  }
  get showOn() {
    return this._showOn;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      switch (this.showOn) {
        case "hover":
          this.subscribeToShowEvents([{
            name: "mouseenter",
            handler: this.mouseenterHandler
          }, {
            name: "mouseleave",
            handler: this.mouseleaveHandler
          }]);
          break;
        case "focus":
          this.subscribeToShowEvents([{
            name: "focus",
            handler: this.focusHandler
          }, {
            name: "blur",
            handler: this.blurHandler
          }]);
          break;
        case "click":
          this.subscribeClick();
          break;
        default:
          break;
      }
    });
  }
  ngOnDestroy() {
    this.closePopup();
    this.subs.unsubscribe();
    if (this.disposeHoverOverListener) {
      this.disposeHoverOverListener();
    }
    if (this.disposeHoverOutListener) {
      this.disposeHoverOutListener();
    }
    if (this.disposeClickListener) {
      this.disposeClickListener();
    }
    if (this._focusInsideSub) {
      this._focusInsideSub.unsubscribe();
    }
    if (this._hideSub) {
      this._hideSub.unsubscribe();
    }
    if (this._popupOpenSub) {
      this._popupOpenSub.unsubscribe();
    }
    if (this._popupCloseSub) {
      this._popupCloseSub.unsubscribe();
    }
  }
  /**
   * Hides the Popover ([See example]({% slug programmaticcontrol_popover %})).
   */
  hide() {
    this.closePopup();
  }
  /**
   * @hidden
   */
  closePopup() {
    if (this.popupRef) {
      if (this.anchor) {
        this.renderer.removeAttribute(this.anchor, "aria-describedby");
      }
      this.popupRef.close();
      this.popupRef = null;
      if (this.disposePopupHoverOutListener) {
        this.disposePopupHoverOutListener();
      }
      if (this.disposePopupHoverInListener) {
        this.disposePopupHoverInListener();
      }
      if (this.disposePopupFocusOutListener) {
        this.disposePopupFocusOutListener();
      }
    }
  }
  /**
   * @hidden
   */
  openPopup(anchor) {
    this.anchor = anchor instanceof ElementRef ? anchor.nativeElement : anchor;
    const popoverComp = this.popover instanceof PopoverComponent ? this.popover : this.popover(this.anchor);
    const alignSettings = align(popoverComp.position, popoverComp.offset);
    const anchorAlign = alignSettings.anchorAlign;
    const popupAlign = alignSettings.popupAlign;
    const popupMargin = alignSettings.popupMargin;
    const _animation = popoverComp.animation;
    this.popupRef = this.popupService.open({
      anchor: {
        nativeElement: this.anchor
      },
      animate: _animation,
      content: PopoverComponent,
      popupAlign,
      anchorAlign,
      margin: popupMargin,
      popupClass: "k-popup-transparent",
      collision: {
        horizontal: "fit",
        vertical: "fit"
      }
    });
    const popupInstance = this.popupRef.content.instance;
    if (anchor) {
      this.subs.add(this.renderer.listen(this.anchor, "keydown", (event) => this.onKeyDown(event)));
      this.renderer.setAttribute(this.anchor, "aria-describedby", popupInstance.popoverId);
    }
    this.subs.add(popupInstance.closeOnKeyDown.subscribe(() => {
      this.anchor.focus();
      this.hide();
    }));
    this.applySettings(this.popupRef.content, popoverComp);
    this.monitorPopup();
    this.initializeCompletionEvents(popoverComp, this.anchor);
  }
  /**
   * @hidden
   */
  isPrevented(anchorElement, show) {
    const popoverComp = this.popover instanceof PopoverComponent ? this.popover : this.popover(anchorElement);
    let eventArgs;
    eventArgs = this.initializeEvents(popoverComp, eventArgs, show, anchorElement);
    return eventArgs.isDefaultPrevented();
  }
  /**
   * @hidden
   */
  monitorPopup() {
    if (this.showOn === "hover") {
      this.ngZone.runOutsideAngular(() => {
        const popup = this.popupRef.popupElement;
        this.disposePopupHoverInListener = this.renderer.listen(popup, "mouseenter", (_) => {
          this.ngZone.run((_2) => this._popoverService.emitPopoverState(true));
        });
        this.disposePopupHoverOutListener = this.renderer.listen(popup, "mouseleave", (_) => {
          this.ngZone.run((_2) => this._popoverService.emitPopoverState(false));
        });
      });
    }
    if (this.showOn === "focus") {
      this.ngZone.runOutsideAngular(() => {
        const popup = this.popupRef.popupElement;
        this.disposePopupFocusOutListener = this.renderer.listen(popup, "focusout", (e) => {
          const isInsidePopover = closest(e.relatedTarget, (node) => node.classList && node.classList.contains("k-popover"));
          if (!isInsidePopover) {
            this.ngZone.run((_) => this._popoverService.emitFocusInsidePopover(false));
          }
        });
      });
    }
  }
  applySettings(contentComponent, popover) {
    const content = contentComponent.instance;
    content.visible = true;
    content.anchor = this.anchor;
    content.position = popover.position;
    content.offset = popover.offset;
    content.width = popover.width;
    content.height = popover.height;
    content.title = popover.title;
    content.body = popover.body;
    content.callout = popover.callout;
    content.animation = popover.animation;
    content.contextData = popover.templateData(this.anchor);
    content.titleTemplate = popover.titleTemplate;
    content.bodyTemplate = popover.bodyTemplate;
    content.actionsTemplate = popover.actionsTemplate;
    this.popupRef.content.changeDetectorRef.detectChanges();
  }
  /**
   * @hidden
   */
  initializeEvents(popoverComp, eventArgs, show, anchorElement) {
    if (show) {
      eventArgs = new PopoverShowEvent(anchorElement);
      if (this.shouldEmitEvent(!!this.popupRef, "show", popoverComp)) {
        this.ngZone.run(() => popoverComp.show.emit(eventArgs));
      }
    } else {
      eventArgs = new PopoverHideEvent(anchorElement, this.popupRef);
      if (this.shouldEmitEvent(!!this.popupRef, "hide", popoverComp)) {
        this.ngZone.run(() => popoverComp.hide.emit(eventArgs));
      }
    }
    return eventArgs;
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    if (keyCode === Keys.Escape) {
      this.hide();
    }
  }
  initializeCompletionEvents(popoverComp, _anchor) {
    if (this.shouldEmitCompletionEvents("shown", popoverComp)) {
      this.popupRef.popupOpen.subscribe(() => {
        const eventArgs = new PopoverShownEvent(_anchor, this.popupRef);
        popoverComp.shown.emit(eventArgs);
      });
    }
    if (this.shouldEmitCompletionEvents("hidden", popoverComp)) {
      this.popupRef.popupClose.subscribe(() => {
        this.ngZone.run((_) => {
          const eventArgs = new PopoverHiddenEvent(_anchor);
          popoverComp.hidden.emit(eventArgs);
        });
      });
    }
  }
  shouldEmitEvent(hasPopup, event, popoverComp) {
    if (event === "show" && !hasPopup && hasObservers(popoverComp[event]) || event === "hide" && hasPopup && hasObservers(popoverComp[event])) {
      return true;
    }
    return false;
  }
  shouldEmitCompletionEvents(event, popoverComp) {
    if (hasObservers(popoverComp[event]) && !this._popupOpenSub || hasObservers(popoverComp[event]) && !this._popupCloseSub) {
      return true;
    }
    return false;
  }
};
PopoverDirectivesBase.ɵfac = function PopoverDirectivesBase_Factory(t) {
  return new (t || PopoverDirectivesBase)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(Renderer2));
};
PopoverDirectivesBase.ɵdir = ɵɵdefineDirective({
  type: PopoverDirectivesBase,
  inputs: {
    popover: "popover",
    showOn: "showOn"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverDirectivesBase, [{
    type: Directive,
    args: [{}]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: Renderer2
    }];
  }, {
    popover: [{
      type: Input
    }],
    showOn: [{
      type: Input
    }]
  });
})();
var PopoverService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this._pointerOverPopup = new import_rxjs.BehaviorSubject(null);
    this._pointerOverAnchor = new import_rxjs.BehaviorSubject(null);
    this._focusInsidePopover = new import_rxjs.BehaviorSubject(null);
    this._hidePopover = new import_rxjs.Subject();
    this.subs = new import_rxjs.Subscription();
    this.monitor();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  get isPopoverHovered() {
    return this._pointerOverPopup.asObservable();
  }
  emitPopoverState(isHovered) {
    this.ngZone.run((_) => this._pointerOverPopup.next(isHovered));
  }
  get isAnchorHovered() {
    return this._pointerOverAnchor.asObservable();
  }
  emitAnchorState(isHovered, anchor) {
    this._isOrigin = this.originAnchor === anchor;
    this.currentAnchor = anchor;
    if (isHovered) {
      this.originAnchor = anchor;
    }
    this.ngZone.run((_) => this._pointerOverAnchor.next(isHovered));
  }
  get isFocusInsidePopover() {
    return this._focusInsidePopover.asObservable();
  }
  emitFocusInsidePopover(isFocused) {
    this.ngZone.run((_) => this._focusInsidePopover.next(isFocused));
    this._focusInsidePopover.next(null);
  }
  get hidePopover() {
    return this._hidePopover.asObservable();
  }
  monitor() {
    this.subs.add((0, import_rxjs.combineLatest)(this.isPopoverHovered, this.isAnchorHovered).pipe(
      // `auditTime` is used because the `mouseleave` event is emitted before `mouseenter`
      // i.e. there is a millisecond in which the pointer leaves the first target (e.g. anchor) and hasn't reached the second one (e.g. popup)
      // resulting in both observables emitting `false`
      (0, import_operators.auditTime)(20)
    ).subscribe((val) => {
      const [isPopoverHovered, isAnchorHovered] = val;
      this._hidePopover.next([isPopoverHovered, isAnchorHovered, this._isOrigin, this.currentAnchor]);
    }));
  }
};
PopoverService.ɵfac = function PopoverService_Factory(t) {
  return new (t || PopoverService)(ɵɵinject(NgZone));
};
PopoverService.ɵprov = ɵɵdefineInjectable({
  token: PopoverService,
  factory: PopoverService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var PopoverContainerDirective = class extends PopoverDirectivesBase {
  constructor(wrapperEl, ngZone, popupService, renderer, popoverService) {
    super(ngZone, popupService, renderer);
    this.wrapperEl = wrapperEl;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.renderer = renderer;
    this.popoverService = popoverService;
    this.mouseenterHandler = (anchor) => {
      this.controlVisibility(anchor, true);
    };
    this.mouseleaveHandler = (args) => {
      const anchor = args.anchor;
      if (this.isPrevented(anchor, false)) {
        return;
      }
      if (!this._hideSub) {
        this._hideSub = this.popoverService.hidePopover.subscribe((val) => {
          const [isPopoverHovered, , isOriginAnchor, currentAnchor] = val;
          if (!isPopoverHovered && !isOriginAnchor) {
            this.hide();
            if (!isOriginAnchor && currentAnchor) {
              this.show(currentAnchor);
            }
          }
        });
      }
    };
    this.focusHandler = (anchor) => {
      this.controlVisibility(anchor, true);
    };
    this.blurHandler = (args) => {
      const anchor = args.anchor;
      const event = args.domEvent;
      if (this.isPrevented(anchor, false)) {
        return;
      }
      const isFocusInside = !!closest(event.relatedTarget, (node) => node.classList && node.classList.contains("k-popover"));
      if (!isFocusInside) {
        this.hide();
      }
      if (!this._focusInsideSub) {
        this._focusInsideSub = this.popoverService.isFocusInsidePopover.pipe((0, import_operators.filter)((v) => v !== null)).subscribe((val) => {
          if (!val && !isFocusInside) {
            this.hide();
          }
        });
      }
    };
    this._popoverService = this.popoverService;
  }
  /**
   * Shows the Popover.
   *
   * @param anchor&mdash;Specifies the element that will be used as an anchor. The Popover opens relative to that element. [See example]({% slug programmaticcontrol_popover %})
   */
  show(anchor) {
    if (this.popupRef) {
      return;
    }
    this.ngZone.run(() => {
      this.openPopup(anchor);
    });
    this.popupRef.popupAnchorViewportLeave.pipe((0, import_operators.take)(1)).subscribe(() => this.hide());
  }
  /**
   * Toggles the visibility of the Popover. [See example]({% slug programmaticcontrol_popover %})
   *
   * @param anchor&mdash;Specifies the element that will be used as an anchor. The Popover opens relative to that element.
   */
  toggle(anchor) {
    const previousAnchor = this.popupRef && this.popupRef.content.instance.anchor;
    if (this.popupRef) {
      this.hide();
      if (previousAnchor !== anchor) {
        this.show(anchor);
      }
    } else {
      this.show(anchor);
    }
  }
  subscribeClick() {
    if (this.disposeClickListener) {
      this.disposeClickListener();
    }
    this.disposeClickListener = this.renderer.listen(document, "click", (e) => {
      const filterElement = closestBySelector(e.target, this.filter);
      this.clickHandler(filterElement, e);
    });
  }
  subscribeToShowEvents(arr) {
    const filteredElements = Array.from(document.querySelectorAll(this.filter));
    filteredElements.forEach((el) => {
      this.subs.add(this.renderer.listen(el, arr[0].name, () => {
        this.popoverService.emitAnchorState(true, el);
        arr[0].handler(el);
      }));
      this.subs.add(this.renderer.listen(el, arr[1].name, (e) => {
        this.popoverService.emitAnchorState(false, null);
        arr[1].handler({
          anchor: el,
          domEvent: e
        });
      }));
    });
  }
  clickHandler(anchor, event) {
    const isInsidePopup = !!closest(event.target, (node) => node.classList && node.classList.contains("k-popup"));
    const popupRefAnchor = this.popupRef && this.popupRef.content.instance.anchor;
    const isOriginAnchor = !!closest(event.target, (node) => node === (popupRefAnchor ? popupRefAnchor : anchor));
    if (this.showOn !== "click" || isInsidePopup || this.popupRef && isOriginAnchor) {
      return;
    }
    if (!anchor && this.popupRef) {
      this.controlVisibility(anchor, false);
      return;
    }
    if (isOriginAnchor) {
      this.controlVisibility(anchor, true);
    } else if (this.popupRef) {
      this.controlVisibility(anchor, false);
      this.controlVisibility(anchor, true);
    }
  }
  controlVisibility(anchor, show) {
    if (this.isPrevented(anchor, show)) {
      return;
    }
    if (show) {
      this.show(anchor);
    } else {
      this.hide();
    }
  }
};
PopoverContainerDirective.ɵfac = function PopoverContainerDirective_Factory(t) {
  return new (t || PopoverContainerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopoverService));
};
PopoverContainerDirective.ɵdir = ɵɵdefineDirective({
  type: PopoverContainerDirective,
  selectors: [["", "kendoPopoverContainer", ""]],
  inputs: {
    filter: "filter"
  },
  exportAs: ["kendoPopoverContainer"],
  features: [ɵɵProvidersFeature([PopoverService]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPopoverContainer]",
      exportAs: "kendoPopoverContainer",
      providers: [PopoverService]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: Renderer2
    }, {
      type: PopoverService
    }];
  }, {
    filter: [{
      type: Input
    }]
  });
})();
var PopoverAnchorDirective = class extends PopoverDirectivesBase {
  constructor(hostEl, ngZone, popupService, renderer, popoverService) {
    super(ngZone, popupService, renderer);
    this.hostEl = hostEl;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.renderer = renderer;
    this.popoverService = popoverService;
    this.mouseenterHandler = () => {
      this.controlVisibility(this.hostEl.nativeElement, true);
    };
    this.mouseleaveHandler = () => {
      if (this.isPrevented(this.hostEl.nativeElement, false)) {
        return;
      }
      if (!this._hideSub) {
        this._hideSub = this.popoverService.hidePopover.subscribe((val) => {
          const [isPopoverHovered, isAnchorHovered] = val;
          if (!isPopoverHovered && !isAnchorHovered) {
            this.hide();
          }
        });
      }
    };
    this.focusHandler = () => {
      this.controlVisibility(this.hostEl.nativeElement, true);
    };
    this.blurHandler = (args) => {
      const event = args.domEvent;
      if (this.isPrevented(this.hostEl.nativeElement, false)) {
        return;
      }
      const isFocusInside = !!closest(event.relatedTarget, (node) => node.classList && node.classList.contains("k-popover"));
      if (!isFocusInside) {
        this.hide();
      }
      if (!this._focusInsideSub) {
        this._focusInsideSub = this.popoverService.isFocusInsidePopover.pipe((0, import_operators.filter)((v) => v !== null)).subscribe((val) => {
          if (!val) {
            this.hide();
          }
        });
      }
    };
    this._popoverService = this.popoverService;
  }
  /**
   * Shows the Popover. [See example]({% slug programmaticcontrol_popover %})
   */
  show() {
    if (this.popupRef) {
      return;
    }
    this.ngZone.run(() => {
      this.openPopup(this.hostEl);
    });
    this.popupRef.popupAnchorViewportLeave.pipe((0, import_operators.take)(1)).subscribe(() => this.hide());
  }
  /**
   * Toggles the visibility of the Popover. [See example]({% slug programmaticcontrol_popover %})
   */
  toggle() {
    if (this.popupRef) {
      this.hide();
    } else {
      this.show();
    }
  }
  subscribeToShowEvents(arr) {
    const hostEl = this.hostEl.nativeElement;
    this.subs.add(this.renderer.listen(hostEl, arr[0].name, () => {
      this.popoverService.emitAnchorState(true, hostEl);
      arr[0].handler();
    }));
    this.subs.add(this.renderer.listen(hostEl, arr[1].name, (e) => {
      this.popoverService.emitAnchorState(false, null);
      arr[1].handler({
        domEvent: e
      });
    }));
  }
  subscribeClick() {
    if (this.disposeClickListener) {
      this.disposeClickListener();
    }
    this.disposeClickListener = this.renderer.listen(document, "click", (e) => {
      this.onClick(e);
    });
  }
  /**
   * @hidden
   */
  onClick(event) {
    const isInsidePopup = !!closest(event.target, (node) => node.classList && node.classList.contains("k-popup"));
    const isAnchor = !!closest(event.target, (node) => node === this.hostEl.nativeElement);
    if (isInsidePopup || this.popupRef && isAnchor) {
      return;
    }
    if (isAnchor) {
      this.controlVisibility(this.hostEl.nativeElement, true);
    } else {
      this.controlVisibility(this.hostEl.nativeElement, false);
    }
  }
  controlVisibility(anchor, show) {
    if (this.isPrevented(anchor, show)) {
      return;
    }
    if (show) {
      this.show();
    } else {
      this.hide();
    }
  }
};
PopoverAnchorDirective.ɵfac = function PopoverAnchorDirective_Factory(t) {
  return new (t || PopoverAnchorDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopoverService));
};
PopoverAnchorDirective.ɵdir = ɵɵdefineDirective({
  type: PopoverAnchorDirective,
  selectors: [["", "kendoPopoverAnchor", ""]],
  exportAs: ["kendoPopoverAnchor"],
  features: [ɵɵProvidersFeature([PopoverService]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverAnchorDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoPopoverAnchor]",
      exportAs: "kendoPopoverAnchor",
      providers: [PopoverService]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: Renderer2
    }, {
      type: PopoverService
    }];
  }, null);
})();
var COMPONENT_DIRECTIVES = [TooltipDirective, TooltipContentComponent, LocalizedMessagesDirective];
var COMPONENT_MODULES = [PopupModule, IconsModule];
var TooltipModule = class {
};
TooltipModule.ɵfac = function TooltipModule_Factory(t) {
  return new (t || TooltipModule)();
};
TooltipModule.ɵmod = ɵɵdefineNgModule({
  type: TooltipModule,
  declarations: [TooltipDirective, TooltipContentComponent, LocalizedMessagesDirective],
  imports: [CommonModule, PopupModule, IconsModule],
  exports: [TooltipDirective, TooltipContentComponent, LocalizedMessagesDirective]
});
TooltipModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, COMPONENT_MODULES]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      declarations: [COMPONENT_DIRECTIVES],
      entryComponents: [TooltipContentComponent],
      imports: [CommonModule, ...COMPONENT_MODULES],
      exports: [COMPONENT_DIRECTIVES]
    }]
  }], null, null);
})();
var DIRECTIVES = [PopoverActionsTemplateDirective, PopoverBodyTemplateDirective, PopoverTitleTemplateDirective, PopoverAnchorDirective, PopoverContainerDirective];
var PopoverModule = class {
};
PopoverModule.ɵfac = function PopoverModule_Factory(t) {
  return new (t || PopoverModule)();
};
PopoverModule.ɵmod = ɵɵdefineNgModule({
  type: PopoverModule,
  declarations: [PopoverActionsTemplateDirective, PopoverBodyTemplateDirective, PopoverTitleTemplateDirective, PopoverAnchorDirective, PopoverContainerDirective, PopoverComponent],
  imports: [CommonModule, PopupModule],
  exports: [PopoverActionsTemplateDirective, PopoverBodyTemplateDirective, PopoverTitleTemplateDirective, PopoverAnchorDirective, PopoverContainerDirective, PopoverComponent]
});
PopoverModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, PopupModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      declarations: [...DIRECTIVES, PopoverComponent],
      entryComponents: [PopoverComponent],
      exports: [...DIRECTIVES, PopoverComponent],
      imports: [CommonModule, PopupModule]
    }]
  }], null, null);
})();
var TooltipsModule = class {
};
TooltipsModule.ɵfac = function TooltipsModule_Factory(t) {
  return new (t || TooltipsModule)();
};
TooltipsModule.ɵmod = ɵɵdefineNgModule({
  type: TooltipsModule,
  exports: [TooltipModule, PopoverModule]
});
TooltipsModule.ɵinj = ɵɵdefineInjector({
  imports: [TooltipModule, PopoverModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipsModule, [{
    type: NgModule,
    args: [{
      exports: [TooltipModule, PopoverModule]
    }]
  }], null, null);
})();
export {
  LocalizedMessagesDirective,
  PopoverActionsTemplateDirective,
  PopoverAnchorDirective,
  PopoverBodyTemplateDirective,
  PopoverComponent,
  PopoverContainerDirective,
  PopoverHiddenEvent,
  PopoverHideEvent,
  PopoverModule,
  PopoverShowEvent,
  PopoverShownEvent,
  PopoverTitleTemplateDirective,
  TOOLTIP_SETTINGS,
  TooltipContentComponent,
  TooltipDirective,
  TooltipModule,
  TooltipSettings,
  TooltipsModule
};
//# sourceMappingURL=@progress_kendo-angular-tooltip.js.map
