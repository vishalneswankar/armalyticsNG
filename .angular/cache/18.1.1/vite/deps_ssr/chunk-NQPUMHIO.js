import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MultiPath,
  Path,
  color_default,
  drawing_exports,
  exportImage,
  geometry_exports,
  group_default,
  image_default,
  named_colors_default,
  parseColor,
  surface_default
} from "./chunk-OWBWA4Z6.js";
import {
  __awaiter
} from "./chunk-2TQ557LO.js";
import {
  IntlService
} from "./chunk-PJ5CPNHZ.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  RadioControlValueAccessor
} from "./chunk-MDHWVN3Q.js";
import {
  ButtonComponent,
  ButtonModule
} from "./chunk-WLY3CAIH.js";
import {
  PopupModule,
  PopupService,
  caretAltDownIcon,
  caretAltExpandIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltUpIcon,
  checkIcon,
  document_default,
  dropletSlashIcon,
  dropletSliderIcon,
  exclamationCircleIcon,
  hyperlinkOpenIcon,
  offset_default,
  paletteIcon,
  position_with_scroll_default,
  scrollPosition,
  starIcon,
  starOutlineIcon,
  windowIcon,
  windowMinimizeIcon,
  windowRestoreIcon,
  windowViewport,
  xCircleIcon,
  xIcon
} from "./chunk-JIDDKRYE.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService,
  MessageService,
  RTL
} from "./chunk-R34FYGCB.js";
import {
  AnimationBuilder,
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-UVFYPAVO.js";
import {
  IconWrapperComponent,
  IconsModule
} from "./chunk-2GY5W5UB.js";
import {
  AdornmentsModule,
  DraggableDirective,
  DraggableModule,
  EventsModule,
  EventsOutsideAngularDirective,
  KendoInput,
  Keys,
  PrefixTemplateDirective,
  PreventableEvent,
  ResizeSensorComponent,
  ResizeSensorModule,
  SuffixTemplateDirective,
  WatermarkModule,
  WatermarkOverlayComponent,
  anyChanged,
  browser,
  closest,
  findFocusableChild,
  focusableSelector,
  guid,
  hasObservers,
  isChanged,
  isControlRequired,
  isDocumentAvailable,
  isObjectPresent,
  isPresent,
  isSafari,
  mobileOS,
  parseAttributes,
  parseCSSClassNames,
  removeHTMLAttributes,
  setHTMLAttributes,
  shouldShowValidationUI
} from "./chunk-UVZZJR6W.js";
import {
  validatePackage
} from "./chunk-6FRD3SAH.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-DLGLBJGM.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
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
  ɵɵclassMapInterpolate1,
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
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-DFLAVSOJ.js";
import {
  __toESM
} from "./chunk-LDODSSGN.js";

// node_modules/@progress/kendo-angular-inputs/fesm2015/progress-kendo-angular-inputs.mjs
var import_rxjs2 = __toESM(require_cjs(), 1);
var import_operators2 = __toESM(require_operators(), 1);

// node_modules/@progress/kendo-angular-dialog/fesm2015/progress-kendo-angular-dialog.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
var _c0 = ["*"];
function DialogActionsComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!actions"]);
  }
}
function DialogActionsComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 6);
    ɵɵelementContainerEnd();
  }
}
function DialogActionsComponent_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function DialogActionsComponent_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const action_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onButtonClick(action_r2, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.buttonClass(action_r2));
    ɵɵattribute("aria-label", action_r2.text);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", action_r2.text, " ");
  }
}
function DialogActionsComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialogActionsComponent_ng_container_1_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 3)(2, DialogActionsComponent_ng_container_1_ng_container_1_ng_template_2_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const defaultAction_r4 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isDivider(action_r2))("ngIfElse", defaultAction_r4);
  }
}
function DialogActionsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialogActionsComponent_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.actionsArray);
  }
}
function DialogActionsComponent_ng_template_2_Template(rf, ctx) {
}
var _c1 = ["dialog"];
var _c2 = [[["kendo-dialog-titlebar"]], "*", [["kendo-dialog-actions"]]];
var _c3 = ["kendo-dialog-titlebar", "*", "kendo-dialog-actions"];
function DialogComponent_kendo_dialog_titlebar_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-dialog-titlebar", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("closeTitle", ctx_r0.closeTitle)("id", ctx_r0.titleId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function DialogComponent_ng_content_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!title"]);
  }
}
function DialogComponent_ng_content_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!contentTemplate"]);
  }
}
function DialogComponent_8_ng_template_0_Template(rf, ctx) {
}
function DialogComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DialogComponent_8_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
function DialogComponent_ng_content_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2, ["*ngIf", "!actions"]);
  }
}
function DialogComponent_kendo_dialog_actions_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-dialog-actions", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("actions", ctx_r0.actions)("layout", ctx_r0.actionsLayout);
  }
}
function DialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12);
  }
}
var _c4 = (a0) => ({
  "$implicit": a0
});
function WindowTitleBarComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!template"]);
  }
}
function WindowTitleBarComponent_1_ng_template_0_Template(rf, ctx) {
}
function WindowTitleBarComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WindowTitleBarComponent_1_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c4, ctx_r0.service));
  }
}
var _c5 = ["kendoWindowCloseAction", ""];
function WindowCloseActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.xIcon);
  }
}
function WindowCloseActionDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function WindowCloseActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c6 = ["kendoWindowMinimizeAction", ""];
function WindowMinimizeActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.windowMinimizeIcon);
  }
}
function WindowMinimizeActionDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function WindowMinimizeActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c7 = ["kendoWindowMaximizeAction", ""];
function WindowMaximizeActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.windowIcon);
  }
}
function WindowMaximizeActionDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function WindowMaximizeActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c8 = ["kendoWindowRestoreAction", ""];
function WindowRestoreActionDirective_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r0.windowRestoreIcon);
  }
}
function WindowRestoreActionDirective_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelement(1, "img", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function WindowRestoreActionDirective_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
var _c9 = [[["kendo-window-titlebar"]], "*"];
var _c10 = ["kendo-window-titlebar", "*"];
function WindowComponent_kendo_window_titlebar_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "kendo-window-titlebar", 6)(1, "span", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵelement(4, "button", 9)(5, "button", 10)(6, "button", 11)(7, "button", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("template", ctx_r0.titleBarTemplate)("id", ctx_r0.titleId);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.title);
    ɵɵadvance(2);
    ɵɵattribute("title", ctx_r0.minimizeButtonTitle)("aria-label", ctx_r0.minimizeButtonTitle);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.maximizeButtonTitle)("aria-label", ctx_r0.maximizeButtonTitle);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.restoreButtonTitle)("aria-label", ctx_r0.restoreButtonTitle);
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.closeButtonTitle)("aria-label", ctx_r0.closeButtonTitle);
  }
}
function WindowComponent_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!showDefaultTitleBar"]);
  }
}
function WindowComponent_div_4_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "!contentTemplate"]);
  }
}
function WindowComponent_div_4_2_ng_template_0_Template(rf, ctx) {
}
function WindowComponent_div_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WindowComponent_div_4_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
  }
}
function WindowComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, WindowComponent_div_4_ng_content_1_Template, 1, 0, "ng-content", 2)(2, WindowComponent_div_4_2_Template, 1, 1, null, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("hidden", ctx_r0.state === "minimized" && ctx_r0.keepContent);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.contentTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.contentTemplate);
  }
}
function WindowComponent_ng_template_5_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 16);
  }
  if (rf & 2) {
    const dir_r2 = ctx.$implicit;
    ɵɵproperty("direction", dir_r2);
  }
}
function WindowComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, WindowComponent_ng_template_5_div_0_Template, 1, 1, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r0.resizeDirections);
  }
}
function WindowComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 17);
  }
}
var isPresent2 = (value) => value !== null && value !== void 0;
var isTruthy = (value) => !!value;
var toClassList = (classNames) => String(classNames).trim().split(" ");
var focusableRegex = /^(?:a|input|select|textarea|button|object)$/i;
var Keys2;
(function(Keys3) {
  Keys3[Keys3["esc"] = 27] = "esc";
  Keys3[Keys3["tab"] = 9] = "tab";
  Keys3[Keys3["enter"] = 13] = "enter";
  Keys3[Keys3["space"] = 32] = "space";
  Keys3[Keys3["ctrl"] = 17] = "ctrl";
  Keys3[Keys3["shift"] = 16] = "shift";
  Keys3[Keys3["left"] = 37] = "left";
  Keys3[Keys3["up"] = 38] = "up";
  Keys3[Keys3["right"] = 39] = "right";
  Keys3[Keys3["down"] = 40] = "down";
})(Keys2 || (Keys2 = {}));
var DIALOG_ELEMENTS_HANDLING_ESC_KEY = "k-dialog-wrapper k-actions k-dialog-titlebar-action";
var DIALOG_ELEMENTS_HANDLING_ARROWS = "k-actions";
var WINDOW_CLASSES = "k-window";
var hasClasses = (element, classNames) => {
  const namesList = toClassList(classNames);
  return Boolean(toClassList(element.className).find((className) => namesList.indexOf(className) >= 0));
};
var isVisible = (element) => {
  const rect = element.getBoundingClientRect();
  return !!(rect.width && rect.height) && window.getComputedStyle(element).visibility !== "hidden";
};
var isFocusable = (element, checkVisibility = true) => {
  if (element.tagName) {
    const tagName = element.tagName.toLowerCase();
    const tabIndex = element.getAttribute("tabIndex");
    const validTabIndex = tabIndex !== null && !isNaN(tabIndex) && tabIndex > -1;
    let focusable = false;
    if (focusableRegex.test(tagName)) {
      focusable = !element.disabled;
    } else {
      focusable = validTabIndex;
    }
    return focusable && (!checkVisibility || isVisible(element));
  }
  return false;
};
var parseCSSClassNames2 = (value) => {
  if (isObject(value)) {
    return parseObjectClassNames(value);
  }
  if (isString(value)) {
    return parseStringClassNames(value);
  }
  if (Array.isArray(value)) {
    return parseArrayClassNames(value);
  }
};
var parseObjectClassNames = (value) => {
  const classes = [];
  Object.keys(value).forEach((className) => {
    const currentClassName = splitStringToArray(className);
    if (value[className] && currentClassName[0]) {
      classes.push(...currentClassName);
    }
  });
  return classes;
};
var parseStringClassNames = (value) => {
  const classes = [];
  const classesArray = splitStringToArray(value);
  classesArray.forEach((className) => {
    classes.push(className);
  });
  return classes;
};
var parseArrayClassNames = (value) => {
  const classes = [];
  value.forEach((className) => {
    const current = splitStringToArray(className);
    if (current[0]) {
      classes.push(...current);
    }
  });
  return classes;
};
var preventDefault = ({
  originalEvent: event
}) => {
  event.stopPropagation();
  event.preventDefault();
};
var RESIZE_DIRECTIONS = ["n", "e", "s", "w", "se", "sw", "ne", "nw"];
var OFFSET_STYLES = ["top", "left", "width", "height"];
var isString = (value) => value instanceof String || typeof value === "string";
var isObject = (value) => isPresent2(value) && !Array.isArray(value) && typeof value === "object";
var isNumber = (value) => typeof value === "number" && isFinite(value);
var createValueWithUnit = (value) => value + (isNumber(value) ? "px" : "");
var splitStringToArray = (value) => value.trim().replace(/\s+/g, " ").split(" ");
var findPrimaryButton = (buttons) => {
  for (let i = buttons.length - 1; i >= 0; i--) {
    const classList = buttons[i].classList;
    for (let j = 0; j < classList.length; j++) {
      if (classList[j].endsWith("-primary")) {
        return buttons[i];
      }
    }
  }
};
var DialogActionsComponent = class {
  constructor(el) {
    this.el = el;
    this.layout = "stretched";
    this.action = new EventEmitter();
    this.hostClasses = true;
  }
  /**
   * Allows the declarative specification of the actions.
   */
  set actions(value) {
    if (value instanceof TemplateRef) {
      this.actionsTemplate = value;
    } else if (Array.isArray(value)) {
      this.actionsArray = value;
    } else {
      throw new Error('"actions" must be either TemplateRef or DialogAction[] instance.');
    }
  }
  get startClassName() {
    return this.layout === "start";
  }
  get centerClassName() {
    return this.layout === "center";
  }
  get endClassName() {
    return this.layout === "end";
  }
  get stretchedClassName() {
    return this.layout === "stretched";
  }
  /**
   * @hidden
   */
  onButtonClick(action, _e) {
    this.action.emit(action);
  }
  /**
   * @hidden
   */
  buttonClass(action) {
    let classes = ["k-button k-button-md k-rounded-md"];
    const fillMode = action.fillMode ? action.fillMode : "solid";
    const themeColor = action.themeColor ? action.themeColor : "base";
    const cssClasses = action.cssClass ? parseCSSClassNames2(action.cssClass) : [];
    classes.push(`k-button-${fillMode} k-button-${fillMode}-${themeColor}`);
    if (cssClasses.length > 0) {
      classes = classes.concat(cssClasses);
    }
    return classes.join(" ");
  }
  /**
   * @hidden
   */
  isDivider(action) {
    return action === "spacer";
  }
};
DialogActionsComponent.ɵfac = function DialogActionsComponent_Factory(t) {
  return new (t || DialogActionsComponent)(ɵɵdirectiveInject(ElementRef));
};
DialogActionsComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogActionsComponent,
  selectors: [["kendo-dialog-actions"]],
  hostVars: 16,
  hostBindings: function DialogActionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-actions", ctx.hostClasses)("k-actions-horizontal", ctx.hostClasses)("k-window-actions", ctx.hostClasses)("k-dialog-actions", ctx.hostClasses)("k-actions-start", ctx.startClassName)("k-actions-center", ctx.centerClassName)("k-actions-end", ctx.endClassName)("k-actions-stretched", ctx.stretchedClassName);
    }
  },
  inputs: {
    actions: "actions",
    layout: "layout"
  },
  outputs: {
    action: "action"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 4,
  consts: [["actionTemplate", ""], ["defaultAction", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [4, "ngFor", "ngForOf"], [1, "k-spacer"], ["type", "button", 3, "click", "ngClass"]],
  template: function DialogActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, DialogActionsComponent_ng_content_0_Template, 1, 0, "ng-content", 2)(1, DialogActionsComponent_ng_container_1_Template, 2, 1, "ng-container", 3)(2, DialogActionsComponent_ng_template_2_Template, 0, 0, "ng-template", 4, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const actionTemplate_r5 = ɵɵreference(3);
      ɵɵproperty("ngIf", !ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.actionsArray)("ngIfElse", actionTemplate_r5);
      ɵɵadvance();
      ɵɵproperty("ngTemplateOutlet", ctx.actionsTemplate);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogActionsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-dialog-actions",
      template: `
        <ng-content *ngIf="!actions"></ng-content>
        <ng-container *ngIf="actionsArray; else actionTemplate">
            <ng-container *ngFor="let action of actionsArray">
                <ng-container *ngIf="isDivider(action); else defaultAction">
                    <span class="k-spacer"></span>
                </ng-container>
                <ng-template #defaultAction>
                    <button
                        type="button"
                        [ngClass]="buttonClass(action)"
                        (click)="onButtonClick(action, $event)"
                        [attr.aria-label]="action.text"
                    >
                        {{ action.text }}
                    </button>
                </ng-template>
            </ng-container>
        </ng-container>
        <ng-template #actionTemplate [ngTemplateOutlet]="actionsTemplate"></ng-template>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    actions: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    action: [{
      type: Output
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-actions-horizontal"]
    }, {
      type: HostBinding,
      args: ["class.k-window-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-dialog-actions"]
    }],
    startClassName: [{
      type: HostBinding,
      args: ["class.k-actions-start"]
    }],
    centerClassName: [{
      type: HostBinding,
      args: ["class.k-actions-center"]
    }],
    endClassName: [{
      type: HostBinding,
      args: ["class.k-actions-end"]
    }],
    stretchedClassName: [{
      type: HostBinding,
      args: ["class.k-actions-stretched"]
    }]
  });
})();
var PreventableEvent2 = class {
  /**
   * @hidden
   */
  constructor() {
    this.prevented = false;
  }
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var DIALOG_LOCALIZATION_SERVICE = new InjectionToken("Dialog LocalizationService");
var TitleBarLocalizationService = class extends LocalizationService {
  constructor(prefix, messageService, rtl, dialogLocalization) {
    super(prefix, messageService, rtl);
    this.dialogLocalization = dialogLocalization;
  }
  get(shortKey) {
    if (this.dialogLocalization) {
      return this.dialogLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
};
TitleBarLocalizationService.ɵfac = function TitleBarLocalizationService_Factory(t) {
  return new (t || TitleBarLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(DIALOG_LOCALIZATION_SERVICE, 8));
};
TitleBarLocalizationService.ɵprov = ɵɵdefineInjectable({
  token: TitleBarLocalizationService,
  factory: TitleBarLocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleBarLocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }, {
      type: LocalizationService,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [DIALOG_LOCALIZATION_SERVICE]
      }]
    }];
  }, null);
})();
var Messages = class extends ComponentMessages {
};
Messages.ɵfac = /* @__PURE__ */ (() => {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(t) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(Messages)))(t || Messages);
  };
})();
Messages.ɵdir = ɵɵdefineDirective({
  type: Messages,
  selectors: [["kendo-dialog-messages-base"]],
  inputs: {
    closeTitle: "closeTitle",
    restoreTitle: "restoreTitle",
    maximizeTitle: "maximizeTitle",
    minimizeTitle: "minimizeTitle"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-dialog-messages-base"
    }]
  }], null, {
    closeTitle: [{
      type: Input
    }],
    restoreTitle: [{
      type: Input
    }],
    maximizeTitle: [{
      type: Input
    }],
    minimizeTitle: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class extends Messages {
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
  selectors: [["", "kendoDialogLocalizedMessages", ""], ["", "kendoWindowLocalizedMessages", ""], ["", "kendoDialogTitleBarLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => LocalizedMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: `
    [kendoDialogLocalizedMessages],
    [kendoWindowLocalizedMessages],
    [kendoDialogTitleBarLocalizedMessages]
  `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DialogTitleBarComponent = class {
  constructor(zone, hostElement, localizationService) {
    this.zone = zone;
    this.hostElement = hostElement;
    this.localizationService = localizationService;
    this.close = new EventEmitter();
    this.xIcon = xIcon;
  }
  get className() {
    return true;
  }
  get closeButtonTitle() {
    return this.closeTitle || this.localizationService.get("closeTitle");
  }
  ngAfterViewInit() {
    this.zone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
      const element = this.hostElement.nativeElement.querySelector(".k-dialog-title");
      element.setAttribute("id", this.id);
    });
  }
  /**
   * @hidden
   */
  onCloseClick(e) {
    e.preventDefault();
    const eventArgs = new PreventableEvent2();
    this.close.emit(eventArgs);
  }
};
DialogTitleBarComponent.ɵfac = function DialogTitleBarComponent_Factory(t) {
  return new (t || DialogTitleBarComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService, 8));
};
DialogTitleBarComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogTitleBarComponent,
  selectors: [["kendo-dialog-titlebar"]],
  hostVars: 4,
  hostBindings: function DialogTitleBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-window-titlebar", ctx.className)("k-dialog-titlebar", ctx.className);
    }
  },
  inputs: {
    id: "id",
    closeTitle: "closeTitle"
  },
  outputs: {
    close: "close"
  },
  features: [ɵɵProvidersFeature([TitleBarLocalizationService, {
    provide: LocalizationService,
    useExisting: TitleBarLocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.dialog"
  }])],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_0 = goog.getMsg("Close");
      i18n_0 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.dialog.closeTitle|The title of the close button:Close`;
    }
    return [["kendoDialogTitleBarLocalizedMessages", "", "closeTitle", i18n_0], [1, "k-window-title", "k-dialog-title"], [1, "k-window-titlebar-actions", "k-dialog-titlebar-actions"], ["kendoButton", "", "fillMode", "flat", "type", "button", "icon", "close", 1, "k-window-titlebar-action", "k-dialog-titlebar-action", 3, "click", "svgIcon"]];
  },
  template: function DialogTitleBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementContainerStart(0, 0);
      ɵɵelementStart(1, "span", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2)(4, "button", 3);
      ɵɵlistener("click", function DialogTitleBarComponent_Template_button_click_4_listener($event) {
        return ctx.onCloseClick($event);
      });
      ɵɵelementEnd()();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance(4);
      ɵɵproperty("svgIcon", ctx.xIcon);
      ɵɵattribute("title", ctx.closeButtonTitle)("aria-label", ctx.closeButtonTitle);
    }
  },
  dependencies: [LocalizedMessagesDirective, ButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogTitleBarComponent, [{
    type: Component,
    args: [{
      selector: "kendo-dialog-titlebar",
      providers: [TitleBarLocalizationService, {
        provide: LocalizationService,
        useExisting: TitleBarLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.dialog"
      }],
      template: `
         <ng-container
            kendoDialogTitleBarLocalizedMessages
            i18n-closeTitle="kendo.dialog.closeTitle|The title of the close button"
            closeTitle="Close"
        >
            <span class="k-window-title k-dialog-title">
                <ng-content></ng-content>
            </span>

            <div class="k-window-titlebar-actions k-dialog-titlebar-actions">
                <button
                    kendoButton
                    fillMode="flat"
                    type="button"
                    [attr.title]="closeButtonTitle"
                    [attr.aria-label]="closeButtonTitle"
                    icon="close"
                    [svgIcon]="xIcon"
                    class="k-window-titlebar-action k-dialog-titlebar-action"
                    (click)="onCloseClick($event)"
                >
                </button>
            </div>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }, {
      type: LocalizationService,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    close: [{
      type: Output
    }],
    id: [{
      type: Input
    }],
    closeTitle: [{
      type: Input
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-window-titlebar"]
    }, {
      type: HostBinding,
      args: ["class.k-dialog-titlebar"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-dialog",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1720607785,
  version: "16.4.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var DialogCloseResult = class {
};
function animations(duration, direction, animationType) {
  switch (animationType) {
    case "slide": {
      const translate = direction === "left" || direction === "right" ? "translateX" : "translateY";
      const start = direction === "right" || direction === "down" ? -100 : 100;
      const end = 0;
      return [style({
        transform: `${translate}(${start}%)`
      }), animate(`${duration}ms ease-in`, style({
        transform: `${translate}(${end}%)`
      }))];
    }
    case "expand": {
      const scale = direction === "up" || direction === "down" ? "scaleY" : "scaleX";
      const startScale = 0;
      const endScale = 1;
      let origin;
      if (direction === "down") {
        origin = "top";
      } else if (direction === "left") {
        origin = "right";
      } else if (direction === "right") {
        origin = "left";
      } else {
        origin = "bottom";
      }
      return [style({
        transform: `${scale}(${startScale})`,
        transformOrigin: origin
      }), animate(`${duration}ms ease-in`, style({
        transform: `${scale}(${endScale})`
      }))];
    }
    case "zoom": {
      const startZoom = 0;
      const endZoom = 1;
      return [animate(duration, keyframes([style({
        transform: `scale(${startZoom})`
      }), style({
        transform: `scale(${endZoom})`
      })]))];
    }
    case "fade": {
      const startFade = 0;
      const endFade = 1;
      return [animate(duration, keyframes([style({
        opacity: `${startFade}`
      }), style({
        opacity: `${endFade}`
      })]))];
    }
    case "translate":
      return [style({
        transform: "translate(0, -10%)"
      }), animate(`${duration}ms cubic-bezier(.2, 1, .2, 1)`)];
    default:
      return [style({
        transform: "translate(0, -10%)"
      }), animate(`${duration}ms cubic-bezier(.2, 1, .2, 1)`)];
  }
}
var createPlayer = (builder, animation, animatedElement) => {
  const factory = builder.build(animation);
  let player = factory.create(animatedElement);
  player.onDone(() => {
    if (player) {
      player.destroy();
      player = null;
    }
  });
  return player;
};
var animateContent = (animation, defAnimationConfig, animatedElement, builder) => {
  let animationConfig = defAnimationConfig;
  if (typeof animation !== "boolean") {
    animationConfig = animation;
    animationConfig.duration = animationConfig.duration ? animationConfig.duration : defAnimationConfig.duration;
  }
  const animationSpecs = animations(animationConfig.duration, animationConfig.direction, animationConfig.type);
  const player = createPlayer(builder, animationSpecs, animatedElement);
  player.play();
};
var DEFAULT_ANIMATION_CONFIG = {
  duration: 300,
  type: "translate"
};
var DialogComponent = class {
  constructor(wrapper, renderer, localization, cdr, ngZone, builder) {
    this.wrapper = wrapper;
    this.renderer = renderer;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.builder = builder;
    this.actionsLayout = "stretched";
    this.animation = true;
    this.titleId = null;
    this.contentId = null;
    this.showLicenseWatermark = false;
    this.action = new EventEmitter();
    this.close = new EventEmitter();
    this.tabIndex = 0;
    this._themeColor = null;
    this.subscriptions = [];
    this.domSubs = new import_rxjs.Subscription();
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subscriptions.push(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.titleId = this.generateTitleId();
    this.contentId = this.generateContentId();
  }
  /**
   * The Dialog allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color to the titlebar while also amending the text color accordingly.
   *
   * The possible values are:
   * * `primary`
   * * `dark`
   * * `light`
   */
  set themeColor(themeColor) {
    this.handleThemeColorClass(this.themeColor, themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * @hidden
   */
  set htmlAttributes(attributes) {
    setHTMLAttributes(attributes, this.renderer, this.wrapper.nativeElement);
    const el = this.wrapper.nativeElement;
    const dir = el.getAttribute("dir");
    const tIndex = el.getAttribute("tabindex");
    if (this.direction !== dir && dir) {
      this.direction = dir;
    }
    if (this.tabIndex !== tIndex && tIndex) {
      this.tabIndex = tIndex;
    }
    this._htmlAttributes = attributes;
  }
  get htmlAttributes() {
    return this._htmlAttributes;
  }
  /**
   * @hidden
   */
  set cssClass(classes) {
    this.setServiceClasses(this._cssClass, classes);
    this._cssClass = classes;
  }
  get cssClass() {
    return this._cssClass;
  }
  get dir() {
    return this.direction;
  }
  ngAfterContentInit() {
    this.bubble("close", this.titlebarContent.first);
    this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-describedby", this.contentId);
    if (this.titlebarContent.first) {
      this.titlebarContent.first.id = this.titleId;
    } else {
      this.subscriptions.push(this.titlebarContent.changes.subscribe(() => {
        if (isPresent2(this.titlebarContent.first)) {
          this.titlebarContent.first.id = this.titleId;
          this.ngZone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
            this.bubble("close", this.titlebarContent.first);
            this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-labelledby", this.titleId);
          });
        }
      }));
    }
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.ngZone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
      this.handleInitialFocus();
    });
    this.bubble("close", this.titlebarView.first);
    this.bubble("action", this.actionsView);
    if (this.titlebarView.first || this.titlebarContent.first) {
      this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-labelledby", this.titleId);
    } else {
      this.subscriptions.push(this.titlebarView.changes.subscribe(() => {
        if (isPresent2(this.titlebarView.first)) {
          this.titlebarView.first.id = this.titleId;
          this.ngZone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
            this.bubble("close", this.titlebarView.first);
            this.renderer.setAttribute(this.wrapper.nativeElement.querySelector(".k-dialog"), "aria-labelledby", this.titleId);
          });
        }
      }));
    }
    this.initDomEvents();
    this.handleThemeColorClass(null, this.themeColor);
  }
  ngOnInit() {
    if (this.animation) {
      animateContent(this.animation, DEFAULT_ANIMATION_CONFIG, this.dialog.nativeElement, this.builder);
    }
    this.renderer.removeAttribute(this.wrapper.nativeElement, "title");
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = [];
    if (this.domSubs) {
      this.domSubs.unsubscribe();
    }
  }
  /**
   * Focuses the wrapper of the Dialog component.
   */
  focus() {
    const wrapper = this.wrapper.nativeElement;
    if (isPresent2(wrapper)) {
      wrapper.focus();
    }
  }
  initDomEvents() {
    if (!this.wrapper) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.wrapper.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  onKeyDown(event) {
    const target = event.target;
    const parent = target.parentElement;
    if (hasClasses(target, DIALOG_ELEMENTS_HANDLING_ESC_KEY) || hasClasses(parent, DIALOG_ELEMENTS_HANDLING_ESC_KEY)) {
      if (event.keyCode === Keys2.esc) {
        this.ngZone.run(() => {
          this.close.emit(new DialogCloseResult());
        });
      }
    }
    if (hasClasses(target, "k-button") && hasClasses(parent, DIALOG_ELEMENTS_HANDLING_ARROWS) && (event.keyCode === Keys2.left || event.keyCode === Keys2.right)) {
      this.ngZone.run(() => {
        this.handleActionButtonFocus(parent, event.keyCode);
      });
    }
    if (event.keyCode === Keys2.tab) {
      this.ngZone.run(() => {
        this.keepFocusWithinComponent(target, event);
      });
    }
  }
  setServiceClasses(prevValue, value) {
    const el = this.wrapper.nativeElement;
    if (prevValue) {
      parseCSSClassNames2(prevValue).forEach((className) => {
        this.renderer.removeClass(el, className);
      });
    }
    if (value) {
      parseCSSClassNames2(value).forEach((className) => {
        this.renderer.addClass(el, className);
      });
    }
  }
  /**
   * @hidden
   */
  handleInitialFocus() {
    const wrapper = this.wrapper.nativeElement;
    const primaryButton = this.findPrimary(wrapper);
    if (this.autoFocusedElement) {
      const initiallyFocusedElement = wrapper.querySelector(this.autoFocusedElement);
      if (initiallyFocusedElement) {
        initiallyFocusedElement.focus();
      }
    } else if (this.shouldFocusPrimary(primaryButton)) {
      primaryButton.focus();
    } else {
      wrapper.focus();
    }
  }
  /**
   * @hidden
   */
  findPrimary(wrapper) {
    const actionBtns = wrapper.querySelectorAll(".k-actions .k-button");
    return findPrimaryButton(actionBtns);
  }
  /**
   * @hidden
   */
  handleActionButtonFocus(parent, key) {
    const focusableActionButtons = this.getAllFocusableChildren(parent);
    for (let i = 0; i < focusableActionButtons.length; i++) {
      const current = focusableActionButtons[i];
      if (current === document.activeElement) {
        if (key === Keys2.left && i > 0) {
          focusableActionButtons[i - 1].focus();
          break;
        }
        if (key === Keys2.right && i < focusableActionButtons.length - 1) {
          focusableActionButtons[i + 1].focus();
          break;
        }
      }
    }
  }
  /**
   * @hidden
   */
  keepFocusWithinComponent(target, event) {
    const wrapper = this.wrapper.nativeElement;
    const [firstFocusable, lastFocusable] = this.getFirstAndLastFocusable(wrapper);
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
  /**
   * @hidden
   */
  shouldFocusPrimary(el) {
    return isPresent2(el) && isFocusable(el);
  }
  /**
   * @hidden
   */
  getAllFocusableChildren(parent) {
    return parent.querySelectorAll(focusableSelector);
  }
  /**
   * @hidden
   */
  getFirstAndLastFocusable(parent) {
    const all = this.getAllFocusableChildren(parent);
    const firstFocusable = all.length > 0 ? all[0] : parent;
    const lastFocusable = all.length > 0 ? all[all.length - 1] : parent;
    return [firstFocusable, lastFocusable];
  }
  /**
   * @hidden
   */
  generateTitleId() {
    return "kendo-dialog-title-" + Math.ceil(Math.random() * 1e6).toString();
  }
  /**
   * @hidden
   */
  generateContentId() {
    return "kendo-dialog-content-" + Math.ceil(Math.random() * 1e6).toString();
  }
  get wrapperClass() {
    return true;
  }
  get styles() {
    const styles = {};
    if (this.width) {
      styles.width = createValueWithUnit(this.width);
    }
    if (this.height) {
      styles.height = createValueWithUnit(this.height);
    }
    if (this.minWidth) {
      styles.minWidth = createValueWithUnit(this.minWidth);
    }
    if (this.maxWidth) {
      styles.maxWidth = createValueWithUnit(this.maxWidth);
    }
    if (this.minHeight) {
      styles.minHeight = createValueWithUnit(this.minHeight);
    }
    if (this.maxHeight) {
      styles.maxHeight = createValueWithUnit(this.maxHeight);
    }
    return styles;
  }
  bubble(eventName, component) {
    if (component) {
      const emit = (e) => this[eventName].emit(e);
      const s = component[eventName].subscribe(emit);
      this.subscriptions.push(s);
    }
  }
  handleThemeColorClass(previousValue, currentValue) {
    const dialog = this.dialog.nativeElement;
    if (previousValue) {
      const classToRemove = `k-dialog-${previousValue}`;
      this.renderer.removeClass(dialog, classToRemove);
    }
    if (currentValue) {
      const classToAdd = `k-dialog-${currentValue}`;
      this.renderer.addClass(dialog, classToAdd);
    }
  }
};
DialogComponent.ɵfac = function DialogComponent_Factory(t) {
  return new (t || DialogComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(AnimationBuilder));
};
DialogComponent.ɵcmp = ɵɵdefineComponent({
  type: DialogComponent,
  selectors: [["kendo-dialog"]],
  contentQueries: function DialogComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, DialogTitleBarComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titlebarContent = _t);
    }
  },
  viewQuery: function DialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DialogActionsComponent, 5);
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(DialogTitleBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsView = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialog = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titlebarView = _t);
    }
  },
  hostVars: 4,
  hostBindings: function DialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.dir)("tabIndex", ctx.tabIndex);
      ɵɵclassProp("k-dialog-wrapper", ctx.wrapperClass);
    }
  },
  inputs: {
    actions: "actions",
    actionsLayout: "actionsLayout",
    autoFocusedElement: "autoFocusedElement",
    title: "title",
    width: "width",
    minWidth: "minWidth",
    maxWidth: "maxWidth",
    height: "height",
    minHeight: "minHeight",
    maxHeight: "maxHeight",
    animation: "animation",
    themeColor: "themeColor"
  },
  outputs: {
    action: "action",
    close: "close"
  },
  exportAs: ["kendoDialog"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: DIALOG_LOCALIZATION_SERVICE,
    useExisting: LocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.dialog"
  }])],
  ngContentSelectors: _c3,
  decls: 12,
  vars: 10,
  consts: () => {
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_1 = goog.getMsg("Close");
      i18n_1 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.dialog.closeTitle|The title of the close button:Close`;
    }
    return [["dialog", ""], ["kendoDialogLocalizedMessages", "", "closeTitle", i18n_1], [1, "k-overlay"], ["role", "dialog", "aria-modal", "true", 1, "k-window", "k-dialog", 3, "ngStyle"], [3, "closeTitle", "id", 4, "ngIf"], [4, "ngIf"], [1, "k-window-content", "k-dialog-content", 3, "id"], [3, "actions", "layout", 4, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [3, "closeTitle", "id"], [3, "ngTemplateOutlet"], [3, "actions", "layout"], ["kendoWatermarkOverlay", ""]];
  },
  template: function DialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c2);
      ɵɵelementContainerStart(0, 1);
      ɵɵelement(1, "div", 2);
      ɵɵelementStart(2, "div", 3, 0);
      ɵɵtemplate(4, DialogComponent_kendo_dialog_titlebar_4_Template, 2, 3, "kendo-dialog-titlebar", 4)(5, DialogComponent_ng_content_5_Template, 1, 0, "ng-content", 5);
      ɵɵelementStart(6, "div", 6);
      ɵɵtemplate(7, DialogComponent_ng_content_7_Template, 1, 0, "ng-content", 5)(8, DialogComponent_8_Template, 1, 1, null, 5);
      ɵɵelementEnd();
      ɵɵtemplate(9, DialogComponent_ng_content_9_Template, 1, 0, "ng-content", 5)(10, DialogComponent_kendo_dialog_actions_10_Template, 1, 2, "kendo-dialog-actions", 7)(11, DialogComponent_div_11_Template, 1, 0, "div", 8);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("@overlayAppear", void 0);
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.styles);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.title);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.title);
      ɵɵadvance();
      ɵɵproperty("id", ctx.contentId);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.contentTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [DialogActionsComponent, LocalizedMessagesDirective, NgIf, NgTemplateOutlet, NgStyle, WatermarkOverlayComponent, DialogTitleBarComponent],
  encapsulation: 2,
  data: {
    animation: [trigger("overlayAppear", [state("in", style({
      opacity: 1
    })), transition("void => *", [style({
      opacity: 0.1
    }), animate(".3s cubic-bezier(.2, .6, .4, 1)")])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogComponent, [{
    type: Component,
    args: [{
      animations: [trigger("overlayAppear", [state("in", style({
        opacity: 1
      })), transition("void => *", [style({
        opacity: 0.1
      }), animate(".3s cubic-bezier(.2, .6, .4, 1)")])])],
      exportAs: "kendoDialog",
      providers: [LocalizationService, {
        provide: DIALOG_LOCALIZATION_SERVICE,
        useExisting: LocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.dialog"
      }],
      selector: "kendo-dialog",
      template: `
        <ng-container
            kendoDialogLocalizedMessages
            i18n-closeTitle="kendo.dialog.closeTitle|The title of the close button"
            closeTitle="Close"
        >
            <div class="k-overlay" @overlayAppear></div>

            <div #dialog class="k-window k-dialog" role="dialog" aria-modal="true" [ngStyle]="styles">
                <kendo-dialog-titlebar *ngIf="title" [closeTitle]="closeTitle" [id]="titleId">{{ title }}</kendo-dialog-titlebar>
                <ng-content select="kendo-dialog-titlebar" *ngIf="!title"></ng-content>

                <div [id]="contentId" class="k-window-content k-dialog-content">
                    <ng-content *ngIf="!contentTemplate"></ng-content>
                    <ng-template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></ng-template>
                </div>

                <ng-content select="kendo-dialog-actions" *ngIf="!actions"></ng-content>
                <kendo-dialog-actions *ngIf="actions" [actions]="actions" [layout]="actionsLayout"> </kendo-dialog-actions>

                <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
            </div>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: AnimationBuilder
    }];
  }, {
    actions: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    autoFocusedElement: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    maxWidth: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    minHeight: [{
      type: Input
    }],
    maxHeight: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    action: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    titlebarContent: [{
      type: ContentChildren,
      args: [DialogTitleBarComponent, {
        descendants: false
      }]
    }],
    titlebarView: [{
      type: ViewChildren,
      args: [DialogTitleBarComponent]
    }],
    actionsView: [{
      type: ViewChild,
      args: [DialogActionsComponent, {
        static: false
      }]
    }],
    dialog: [{
      type: ViewChild,
      args: ["dialog", {
        static: true
      }]
    }],
    wrapperClass: [{
      type: HostBinding,
      args: ["class.k-dialog-wrapper"]
    }]
  });
})();
var DialogRef = class {
};
var DialogContentBase = class {
  constructor(dialog) {
    this.dialog = dialog;
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    if (this.dialogTitleBar) {
      this.dialogTitleBar.close.pipe((0, import_operators.filter)((e) => !e.isDefaultPrevented())).subscribe(() => {
        this.dialog.close();
      });
    }
    if (this.dialogActions) {
      if (this.dialogActions.actions) {
        this.dialogActions.action.subscribe((action) => this.dialog.dialog.instance.action.emit(action));
      }
    }
  }
};
DialogContentBase.ɵfac = function DialogContentBase_Factory(t) {
  return new (t || DialogContentBase)(ɵɵdirectiveInject(DialogRef));
};
DialogContentBase.ɵdir = ɵɵdefineDirective({
  type: DialogContentBase,
  viewQuery: function DialogContentBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(DialogTitleBarComponent, 5);
      ɵɵviewQuery(DialogActionsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialogTitleBar = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialogActions = _t.first);
    }
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogContentBase, [{
    type: Directive
  }], function() {
    return [{
      type: DialogRef
    }];
  }, {
    dialogTitleBar: [{
      type: ViewChild,
      args: [DialogTitleBarComponent, {
        static: false
      }]
    }],
    dialogActions: [{
      type: ViewChild,
      args: [DialogActionsComponent, {
        static: false
      }]
    }]
  });
})();
var DialogContainerService = class _DialogContainerService {
  set container(container) {
    _DialogContainerService.container = container;
  }
  get container() {
    return _DialogContainerService.container;
  }
};
DialogContainerService.container = null;
DialogContainerService.ɵfac = function DialogContainerService_Factory(t) {
  return new (t || DialogContainerService)();
};
DialogContainerService.ɵprov = ɵɵdefineInjectable({
  token: DialogContainerService,
  factory: DialogContainerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogContainerService, [{
    type: Injectable
  }], null, null);
})();
var isNotComponent$1 = (component) => isString(component) || component instanceof TemplateRef;
var DialogInjector = class {
  constructor(getDialogRef, parentInjector) {
    this.getDialogRef = getDialogRef;
    this.parentInjector = parentInjector;
  }
  get(token3, notFoundValue) {
    if (token3 === DialogRef) {
      return this.getDialogRef();
    }
    return this.parentInjector.get(token3, notFoundValue);
  }
};
var DialogService = class {
  constructor(resolver, containerService) {
    this.resolver = resolver;
    this.containerService = containerService;
  }
  /**
   * Opens a Dialog window. Requires an element in the application that uses the
   * [`kendoDialogContainer`]({% slug api_dialog_dialogcontainerdirective %}) directive.
   * Created Dialogs will be mounted in the DOM directly after that element.
   *
   * @param {DialogAction} options - The options that define the Dialog.
   * @returns {DialogRef} - A reference to the Dialog object and the convenience properties.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <button kendoButton (click)="open()">Harmless button</button>
   *     <div kendoDialogContainer></div>
   *   `
   * })
   * export class AppComponent {
   *     constructor( private dialogService: DialogService ) {}
   *
   *     public open() {
   *         var dialog = this.dialogService.open({
   *           title: "Please confirm",
   *           content: "Are you sure?",
   *           actions: [
   *             { text: "No" },
   *             { text: "Yes", themeColor: 'primary' }
   *           ]
   *         });
   *
   *         dialog.result.subscribe((result) => {
   *           if (result instanceof DialogCloseResult) {
   *             console.log("close");
   *           } else {
   *             console.log("action", result);
   *           }
   *         });
   *     }
   * }
   * ```
   *
   */
  open(options) {
    const factory = this.resolver.resolveComponentFactory(DialogComponent);
    const container = options.appendTo || this.containerService.container;
    if (!container) {
      throw new Error(`
Cannot attach dialog to the page.
Add an element that uses the kendoDialogContainer directive, or set the 'appendTo' property.
See https://www.telerik.com/kendo-angular-ui/components/dialogs/dialog/service/.
          `);
    }
    const dialogRef = {
      close: () => {
      },
      content: null,
      dialog: null,
      result: null
    };
    return this.initializeDialog(options.content, factory, container, dialogRef, options);
  }
  initializeDialog(component, factory, container, dialogRef, options) {
    const content = this.contentFrom(component, container, dialogRef);
    const dialog = container.createComponent(factory, void 0, void 0, content.nodes);
    dialogRef.dialog = dialog;
    dialog.changeDetectorRef.markForCheck();
    this.applyOptions(dialog.instance, options);
    const apiClose = new import_rxjs.Subject();
    const close = (e) => {
      if (e instanceof PreventableEvent2) {
        e = new DialogCloseResult();
      }
      apiClose.next(e || new DialogCloseResult());
      if (content.componentRef) {
        content.componentRef.destroy();
      }
      dialog.destroy();
    };
    const result = (0, import_rxjs.merge)(
      apiClose,
      // triggered when the titlebar or actions are defined in DialogSettings
      (0, import_rxjs.merge)(dialog.instance.close, dialog.instance.action).pipe((0, import_operators.map)((e) => e instanceof PreventableEvent2 ? new DialogCloseResult() : e), (0, import_operators.filter)((e) => {
        if (options.preventAction) {
          const dialogRefParameter = isNotComponent$1(component) ? void 0 : dialogRef;
          return !options.preventAction(e, dialogRefParameter);
        }
        return true;
      }))
    ).pipe(
      (0, import_operators.take)(1),
      // Takes care for multiple subscriptions:
      // We subscribe internaly and the user may subscribe to get a close result - dialog.result.subscribe().
      // This causes multiple subscriptions to the same source and thus multiple emissions. share() solves that.
      (0, import_operators.share)()
    );
    result.subscribe(close);
    dialogRef.close = close;
    dialogRef.result = result;
    if (component && isDevMode()) {
      const hasContentTitle = content.nodes[0] && content.nodes[0].length > 0;
      const hasContentActions = content.nodes[2] && content.nodes[2].length > 0;
      const multipleTitles = options.title && hasContentTitle;
      const multipleActions = options.actions && hasContentActions;
      if (component.prototype instanceof DialogContentBase) {
        if (multipleTitles || multipleActions) {
          console.warn(`
                    Multiple Title and/or Actions configurations detected.
                    When using a component as content, provide the title and actions either in the component's markup
                    or via the title and actions properties of the DialogSettings object, but not both.
                    See https://www.telerik.com/kendo-angular-ui/components/dialogs/dialog/service/#toc-passing-title-content-and-actions-as-a-single-component'`);
        }
      } else {
        if (hasContentTitle || hasContentActions) {
          console.warn(`
                    When Title and/or Actions markup is provided in content component's template,
                    the component needs to inherit the DialogContentBase class to ensure that close and result events are properly hooked.
                    See https://www.telerik.com/kendo-angular-ui/components/dialogs/dialog/service/#toc-passing-title-content-and-actions-as-a-single-component'`);
        }
      }
    }
    return dialogRef;
  }
  applyOptions(instance, options) {
    instance.title = options.title;
    instance.actions = options.actions;
    instance.actionsLayout = options.actionsLayout || "stretched";
    instance.width = options.width;
    instance.minWidth = options.minWidth;
    instance.maxWidth = options.maxWidth;
    instance.height = options.height;
    instance.minHeight = options.minHeight;
    instance.maxHeight = options.maxHeight;
    instance.autoFocusedElement = options.autoFocusedElement;
    instance.closeTitle = options.closeTitle;
    instance.cssClass = options.cssClass;
    instance.htmlAttributes = options.htmlAttributes;
    instance.animation = options.animation !== void 0 ? options.animation : true;
    if (options.content instanceof TemplateRef) {
      instance.contentTemplate = options.content;
    }
  }
  contentFrom(content, container, dialogRef) {
    const renderer = container.injector.get(Renderer2);
    let nodes = [];
    let titleNodes = [];
    let actionNodes = [];
    let componentRef = null;
    if (typeof content === "string") {
      nodes = [renderer.createText(content)];
    } else if (content && !(content instanceof TemplateRef)) {
      const injector = new DialogInjector(() => dialogRef, container.injector);
      const factory = this.resolver.resolveComponentFactory(content);
      componentRef = container.createComponent(factory, void 0, injector);
      titleNodes = Array.from(componentRef.location.nativeElement.querySelectorAll("kendo-dialog-titlebar"));
      nodes = [componentRef.location.nativeElement];
      actionNodes = Array.from(componentRef.location.nativeElement.querySelectorAll("kendo-dialog-actions"));
      dialogRef.content = componentRef;
    }
    return {
      componentRef,
      nodes: [
        titleNodes,
        nodes,
        actionNodes
        // <ng-content select="kendo-dialog-actions">
      ]
    };
  }
};
DialogService.ɵfac = function DialogService_Factory(t) {
  return new (t || DialogService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(DialogContainerService));
};
DialogService.ɵprov = ɵɵdefineInjectable({
  token: DialogService,
  factory: DialogService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogService, [{
    type: Injectable
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: DialogContainerService,
      decorators: [{
        type: Inject,
        args: [DialogContainerService]
      }]
    }];
  }, null);
})();
var newZIndex = 10002;
var DEFAULT_OPTIONS = {
  draggable: true,
  height: null,
  left: null,
  minHeight: 100,
  minWidth: 120,
  position: "absolute",
  resizable: true,
  state: "default",
  top: null,
  width: null
};
var createMoveStream = (el, ev) => (mouseDown) => {
  return el.kendoDrag.pipe((0, import_operators.takeUntil)(el.kendoRelease.pipe((0, import_operators.tap)(() => {
    ev.emit();
  }))), (0, import_operators.map)(({
    pageX,
    pageY
  }) => ({
    originalX: mouseDown.pageX,
    originalY: mouseDown.pageY,
    pageX,
    pageY
  })));
};
var DragResizeService = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.close = new EventEmitter();
    this.focus = new EventEmitter();
    this.change = new EventEmitter();
    this.stateChange = new EventEmitter();
    this.dragStart = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.resizeStart = new EventEmitter();
    this.resizeEnd = new EventEmitter();
    this.options = Object.assign({}, DEFAULT_OPTIONS);
    this.lastAction = null;
    this.subscriptions = new import_rxjs.Subscription();
    this.dragSubscription = new import_rxjs.Subscription();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    if (this.dragSubscription) {
      this.dragSubscription.unsubscribe();
    }
  }
  init(el) {
    const state2 = this.options.state;
    const options = this.options;
    this.window = el;
    if (state2 !== "default") {
      this.restoreOptions = Object.assign({}, options);
    }
    if (state2 === "minimized") {
      options.height = 0;
      options.minHeight = 0;
    }
    if (state2 === "maximized") {
      options.position = "fixed";
    }
  }
  onDrag(el) {
    this.subscriptions.add(this.ngZone.runOutsideAngular(() => {
      let startPosition;
      let dragStarted;
      this.dragSubscription = el.kendoPress.pipe((0, import_operators.tap)((ev) => {
        if (!ev.isTouch) {
          preventDefault(ev);
        }
        this.focus.emit();
        startPosition = this.currentPosition();
        dragStarted = false;
      }), (0, import_operators.switchMap)(createMoveStream(el, this.dragEnd))).subscribe(({
        pageX,
        pageY,
        originalX,
        originalY
      }) => {
        if (!dragStarted) {
          this.ensureWidth();
          this.dragStart.emit();
          dragStarted = true;
        }
        this.handleDrag({
          originalX,
          originalY,
          pageX,
          pageY,
          startPosition
        });
      });
    }));
  }
  handleDrag({
    originalX,
    originalY,
    pageX,
    pageY,
    startPosition
  }) {
    this.options.left = startPosition.x + pageX - originalX;
    this.options.top = startPosition.y + pageY - originalY;
    if (this.options.state === "minimized" && isPresent2(this.restoreOptions)) {
      this.restoreOptions.left = this.options.left;
      this.restoreOptions.top = this.options.top;
    }
    this.change.emit({
      left: startPosition.x + pageX - originalX,
      top: startPosition.y + pageY - originalY
    });
  }
  onResize(handle, direction) {
    this.subscriptions.add(this.ngZone.runOutsideAngular(() => {
      let startOffsetAndPosition;
      let resizeStarted = false;
      handle.kendoPress.pipe((0, import_operators.tap)((ev) => {
        preventDefault(ev);
        this.focus.emit();
        startOffsetAndPosition = this.currentOffsetAndPosition();
        resizeStarted = false;
      }), (0, import_operators.switchMap)(createMoveStream(handle, this.resizeEnd))).subscribe(({
        pageX,
        pageY,
        originalX,
        originalY
      }) => {
        if (!resizeStarted) {
          this.resizeStart.emit(direction);
          resizeStarted = true;
        }
        const deltaX = pageX - originalX;
        const deltaY = pageY - originalY;
        this.handleResize(startOffsetAndPosition, direction, deltaX, deltaY);
      });
    }));
  }
  handleResize(initial, dir, deltaX, deltaY) {
    const old = this.options;
    const ev = {};
    if (dir.indexOf("e") >= 0) {
      const newWidth = initial.width + deltaX;
      if (newWidth !== old.width && newWidth >= old.minWidth) {
        ev.width = newWidth;
      }
    }
    if (dir.indexOf("n") >= 0) {
      const newHeight = initial.height - deltaY;
      const newTop = initial.y + deltaY;
      if (newHeight !== old.height && newHeight >= old.minHeight && newTop !== old.top) {
        ev.height = newHeight;
        ev.top = newTop;
      }
    }
    if (dir.indexOf("s") >= 0) {
      const newHeight = initial.height + deltaY;
      if (newHeight !== old.height && newHeight >= old.minHeight) {
        ev.height = newHeight;
      }
    }
    if (dir.indexOf("w") >= 0) {
      const newLeft = initial.x + deltaX;
      const newWidth = initial.width - deltaX;
      if (newWidth !== old.width && newWidth >= old.minWidth && newLeft !== old.left) {
        ev.width = newWidth;
        ev.left = newLeft;
      }
    }
    if (isPresent2(ev.width) || isPresent2(ev.height)) {
      OFFSET_STYLES.forEach((style2) => {
        if (isPresent2(ev[style2])) {
          this.options[style2] = ev[style2];
        }
      });
      this.change.emit(ev);
    }
  }
  restoreAction() {
    this.lastAction = "restore";
    this.defaultState();
  }
  defaultState() {
    if (isPresent2(this.restoreOptions)) {
      this.options = Object.assign({}, this.restoreOptions);
    }
    this.options.state = "default";
    this.stateChange.emit("default");
  }
  storeOptions() {
    this.restoreOptions = Object.assign({}, this.options);
  }
  maximizeAction() {
    this.lastAction = "maximize";
    this.maximizeState();
  }
  maximizeState() {
    this.storeOptions();
    const wnd = this.windowViewPort;
    this.options = Object.assign({}, this.options, {
      height: wnd.height,
      left: 0,
      position: "fixed",
      state: "maximized",
      top: 0,
      width: wnd.width
    });
    this.stateChange.emit("maximized");
  }
  minimizeAction() {
    this.lastAction = "minimize";
    this.minimizeState();
  }
  minimizeState() {
    this.storeOptions();
    this.options = Object.assign({}, this.options, {
      height: null,
      minHeight: 0,
      state: "minimized"
    });
    this.stateChange.emit("minimized");
  }
  /**
   * Handles manual changes of the 'state' property.
   * Required to distinguish them from action clicks.
   */
  applyManualState() {
    const state2 = this.options.state;
    switch (state2) {
      case "default":
        this.clearHeight();
        this.defaultState();
        break;
      case "maximized":
        this.clearHeight();
        this.maximizeState();
        break;
      case "minimized":
        this.minimizeState();
        break;
      default:
        break;
    }
  }
  closeAction() {
    this.close.emit();
  }
  ensureWidth() {
    const windowOffset = offset_default(this.window.nativeElement);
    if (!isPresent2(this.options.width)) {
      this.options.width = windowOffset.width;
      this.change.emit({
        width: windowOffset.width
      });
    }
  }
  clearHeight() {
    if (this.options.height === 0) {
      delete this.options.height;
    }
    if (this.options.minHeight === 0) {
      delete this.options.minHeight;
    }
  }
  center() {
    if (this.options.state === "maximized") {
      return;
    }
    const scroll = scrollPosition(this.window.nativeElement);
    const wnd = this.windowViewPort;
    const wrapper = offset_default(this.window.nativeElement);
    const ev = {};
    if (!isPresent2(this.options.left)) {
      this.options.left = scroll.x + Math.max(0, (wnd.width - wrapper.width) / 2);
      ev.left = this.options.left;
    }
    if (!isPresent2(this.options.top)) {
      this.options.top = scroll.y + Math.max(0, (wnd.height - wrapper.height) / 2);
      ev.top = this.options.top;
    }
    this.change.emit(ev);
  }
  currentOffsetAndPosition() {
    const o = this.options;
    const off = offset_default(this.window.nativeElement);
    return Object.assign({}, this.currentPosition(), {
      height: o.height ? o.height : off.height,
      width: o.width ? o.width : off.width
    });
  }
  currentPosition() {
    const o = this.options;
    if (!o.top || !o.left) {
      this.setPosition();
    }
    return {
      x: this.options.left,
      y: this.options.top
    };
  }
  setPosition() {
    const wrapper = position_with_scroll_default(this.window.nativeElement, document_default(this.window.nativeElement));
    this.options.left = wrapper.left;
    this.options.top = wrapper.top;
  }
  setRestoreOption(style2, value) {
    if (isPresent2(this.restoreOptions)) {
      this.restoreOptions[style2] = value;
    }
  }
  get nextPossibleZIndex() {
    return newZIndex;
  }
  get nextZIndex() {
    return newZIndex++;
  }
  get windowViewPort() {
    return windowViewport(this.window.nativeElement);
  }
};
DragResizeService.ɵfac = function DragResizeService_Factory(t) {
  return new (t || DragResizeService)(ɵɵinject(NgZone));
};
DragResizeService.ɵprov = ɵɵdefineInjectable({
  token: DragResizeService,
  factory: DragResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var ResizeHandleDirective = class {
  constructor(draggable, el, renderer, service) {
    this.draggable = draggable;
    this.el = el;
    this.renderer = renderer;
    this.service = service;
    this.subscriptions = new import_rxjs.Subscription();
  }
  get hostClass() {
    return true;
  }
  ngOnInit() {
    this.setDisplay();
    this.renderer.addClass(this.el.nativeElement, "k-resize-" + this.direction);
    this.subscriptions.add((0, import_rxjs.of)(this.draggable).subscribe((handle) => {
      this.service.onResize(handle, this.direction);
    }));
    this.subscriptions.add(this.service.resizeStart.subscribe((dir) => {
      if (dir !== this.direction) {
        this.setDisplay("none");
      }
    }));
    this.subscriptions.add(this.service.dragStart.subscribe(() => {
      this.setDisplay("none");
    }));
    this.subscriptions.add((0, import_rxjs.merge)(this.service.resizeEnd, this.service.dragEnd).subscribe(() => {
      this.setDisplay("block");
    }));
    this.subscriptions.add(this.service.stateChange.subscribe((state2) => {
      this.setDisplay(state2 === "default" ? "block" : "none");
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  setDisplay(value = "block") {
    this.renderer.setStyle(this.el.nativeElement, "display", this.service.options.state === "default" ? value : "none");
  }
};
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) {
  return new (t || ResizeHandleDirective)(ɵɵdirectiveInject(DraggableDirective, 1), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService));
};
ResizeHandleDirective.ɵdir = ɵɵdefineDirective({
  type: ResizeHandleDirective,
  selectors: [["", "kendoWindowResizeHandle", ""]],
  hostVars: 2,
  hostBindings: function ResizeHandleDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-resize-handle", ctx.hostClass);
    }
  },
  inputs: {
    direction: "direction"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoWindowResizeHandle]"
    }]
  }], function() {
    return [{
      type: DraggableDirective,
      decorators: [{
        type: Host
      }]
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService
    }];
  }, {
    direction: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-resize-handle"]
    }]
  });
})();
var WindowTitleBarComponent = class {
  constructor(el, service, ngZone) {
    this.el = el;
    this.ngZone = ngZone;
    this.service = service;
  }
  ngOnInit() {
    this.dragDirective = new DraggableDirective(this.el, this.ngZone);
    this.dragDirective.ngOnInit();
    if (this.isDraggable) {
      this.subscribeDrag();
    }
    this.subscribeStateChange();
  }
  ngAfterViewInit() {
    const element = this.el.nativeElement.querySelector(".k-window-title");
    if (isPresent2(element)) {
      element.setAttribute("id", this.id);
    }
  }
  ngOnDestroy() {
    this.dragDirective.ngOnDestroy();
    this.unsubscribeDrag();
    this.unsubscribeState();
  }
  /**
   * @hidden
   */
  subscribeDrag() {
    this.unsubscribeDrag();
    this.dragSubscription = (0, import_rxjs.of)(this.dragDirective).subscribe((titleBar) => {
      this.service.onDrag(titleBar);
    });
  }
  /**
   * @hidden
   */
  subscribeStateChange() {
    this.stateSubscription = this.service.stateChange.subscribe((state2) => {
      if (this.service.options.draggable) {
        if (state2 === "maximized") {
          this.unsubscribeDrag();
        } else {
          this.subscribeDrag();
        }
      }
    });
  }
  /**
   * @hidden
   */
  unsubscribeDrag() {
    if (this.dragSubscription) {
      this.service.dragSubscription.unsubscribe();
      this.dragSubscription.unsubscribe();
      this.dragSubscription = null;
    }
  }
  /**
   * @hidden
   */
  unsubscribeState() {
    if (this.stateSubscription) {
      this.stateSubscription.unsubscribe();
      this.stateSubscription = null;
    }
  }
  get className() {
    return true;
  }
  get touchAction() {
    if (this.isDraggable) {
      return "none";
    }
  }
  /**
   * @hidden
   */
  handle(ev) {
    const target = ev.target;
    const state2 = this.service.options.state;
    if (!hasClasses(target, "k-icon") && !isFocusable(target, false) && this.service.options.resizable) {
      if (state2 === "default") {
        this.service.maximizeAction();
      } else if (state2 === "maximized") {
        this.service.restoreAction();
      }
    }
  }
  get isDraggable() {
    const options = this.service.options;
    return options.draggable && options.state !== "maximized";
  }
};
WindowTitleBarComponent.ɵfac = function WindowTitleBarComponent_Factory(t) {
  return new (t || WindowTitleBarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DragResizeService), ɵɵdirectiveInject(NgZone));
};
WindowTitleBarComponent.ɵcmp = ɵɵdefineComponent({
  type: WindowTitleBarComponent,
  selectors: [["kendo-window-titlebar"]],
  hostVars: 4,
  hostBindings: function WindowTitleBarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("dblclick", function WindowTitleBarComponent_dblclick_HostBindingHandler($event) {
        return ctx.handle($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("touch-action", ctx.touchAction);
      ɵɵclassProp("k-window-titlebar", ctx.className);
    }
  },
  inputs: {
    template: "template",
    id: "id"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function WindowTitleBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowTitleBarComponent_ng_content_0_Template, 1, 0, "ng-content", 0)(1, WindowTitleBarComponent_1_Template, 1, 4, null, 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.template);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.template);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowTitleBarComponent, [{
    type: Component,
    args: [{
      selector: "kendo-window-titlebar",
      template: `
	<ng-content *ngIf="!template"></ng-content>
	<ng-template
		[ngTemplateOutlet]="template"
		[ngTemplateOutletContext]="{'$implicit': service}" *ngIf="template">
	</ng-template>
	`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: DragResizeService
    }, {
      type: NgZone
    }];
  }, {
    template: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-window-titlebar"]
    }],
    touchAction: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }],
    handle: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var NavigationService = class {
  constructor(window2, ngZone) {
    this.window = window2;
    this.ngZone = ngZone;
  }
  process(ev) {
    const key = ev.keyCode;
    switch (key) {
      case Keys2.up:
      case Keys2.down:
      case Keys2.left:
      case Keys2.right: {
        ev.preventDefault();
        this.ngZone.run(() => {
          this.handleArrow(key, ev);
        });
        break;
      }
      case Keys2.esc:
        this.ngZone.run(() => {
          this.handleEscape();
        });
        break;
      default:
        break;
    }
  }
  handleArrow(key, ev) {
    const options = this.window.options;
    if (ev.altKey) {
      this.handleStateChange(key, options.state);
      return;
    }
    if ((ev.ctrlKey || ev.metaKey) && options.state === "default") {
      this.handleResize(key);
    } else {
      this.handleDrag(key);
    }
  }
  handleEscape() {
    this.window.closeAction();
  }
  handleDrag(key) {
    const options = this.window.options;
    if (!options.draggable) {
      return;
    }
    const offset = this.window.currentOffsetAndPosition();
    const restoreOptions = this.window.restoreOptions;
    const ev = {};
    let delta = 10;
    if (key === Keys2.left || key === Keys2.up) {
      delta *= -1;
    }
    switch (key) {
      case Keys2.left:
      case Keys2.right: {
        ev.left = offset.x + delta;
        options.left = ev.left;
        break;
      }
      case Keys2.up:
      case Keys2.down: {
        ev.top = offset.y + delta;
        options.top = ev.top;
        break;
      }
      default:
        break;
    }
    if (options.state === "minimized" && isPresent2(restoreOptions)) {
      restoreOptions.left = options.left;
      restoreOptions.top = options.top;
    }
    this.window.change.emit(ev);
  }
  handleResize(key) {
    const options = this.window.options;
    if (!options.resizable) {
      return;
    }
    const offset = this.window.currentOffsetAndPosition();
    let newWidth;
    let newHeight;
    const ev = {};
    let delta = 10;
    if (key === Keys2.left || key === Keys2.up) {
      delta *= -1;
    }
    switch (key) {
      case Keys2.left:
      case Keys2.right: {
        newWidth = offset.width + delta;
        if (newWidth !== options.width && newWidth >= options.minWidth) {
          ev.width = newWidth;
        }
        break;
      }
      case Keys2.up:
      case Keys2.down: {
        newHeight = offset.height + delta;
        if (newHeight !== options.height && newHeight >= options.minHeight) {
          ev.height = newHeight;
        }
        break;
      }
      default:
        break;
    }
    if (isPresent2(ev.width) || isPresent2(ev.height)) {
      OFFSET_STYLES.forEach((style2) => {
        if (isPresent2(ev[style2])) {
          this.window.options[style2] = ev[style2];
        }
      });
      this.window.change.emit(ev);
    }
  }
  handleStateChange(key, state2) {
    if (state2 === "minimized" && key === Keys2.up || state2 === "maximized" && key === Keys2.down) {
      this.window.restoreAction();
      return;
    }
    if (state2 === "default") {
      if (key === Keys2.up) {
        this.window.maximizeAction();
      } else if (key === Keys2.down) {
        this.window.minimizeAction();
      }
    }
  }
};
NavigationService.ɵfac = function NavigationService_Factory(t) {
  return new (t || NavigationService)(ɵɵinject(DragResizeService), ɵɵinject(NgZone));
};
NavigationService.ɵprov = ɵɵdefineInjectable({
  token: NavigationService,
  factory: NavigationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], function() {
    return [{
      type: DragResizeService
    }, {
      type: NgZone
    }];
  }, null);
})();
var WindowCloseActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.xIcon = xIcon;
    this.buttonType = "button";
    this.buttonClass = true;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "x";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.closeAction();
    }
  }
};
WindowCloseActionDirective.ɵfac = function WindowCloseActionDirective_Factory(t) {
  return new (t || WindowCloseActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowCloseActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowCloseActionDirective,
  selectors: [["button", "kendoWindowCloseAction", ""]],
  hostVars: 3,
  hostBindings: function WindowCloseActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowCloseActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowCloseAction"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature],
  attrs: _c5,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "close", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "close", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowCloseActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowCloseActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowCloseActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowCloseActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgClass, NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowCloseActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowCloseAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowCloseAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="close"
            [svgIcon]="xIcon">
        </kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var WindowMinimizeActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.buttonType = "button";
    this.buttonClass = true;
    this.windowMinimizeIcon = windowMinimizeIcon;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "window-minimize";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.minimizeAction();
    }
  }
  get visible() {
    return this.window.options.state === "default" ? "inline-flex" : "none";
  }
};
WindowMinimizeActionDirective.ɵfac = function WindowMinimizeActionDirective_Factory(t) {
  return new (t || WindowMinimizeActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowMinimizeActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowMinimizeActionDirective,
  selectors: [["button", "kendoWindowMinimizeAction", ""]],
  hostVars: 5,
  hostBindings: function WindowMinimizeActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowMinimizeActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵstyleProp("display", ctx.visible);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowMinimizeAction"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature],
  attrs: _c6,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "window-minimize", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "window-minimize", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowMinimizeActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowMinimizeActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowMinimizeActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowMinimizeActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgClass, NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMinimizeActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowMinimizeAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowMinimizeAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="window-minimize"
            [svgIcon]="windowMinimizeIcon">
        </kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    visible: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var WindowMaximizeActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.buttonType = "button";
    this.buttonClass = true;
    this.windowIcon = windowIcon;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "window";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.maximizeAction();
    }
  }
  get visible() {
    return this.window.options.state === "default" ? "inline-flex" : "none";
  }
};
WindowMaximizeActionDirective.ɵfac = function WindowMaximizeActionDirective_Factory(t) {
  return new (t || WindowMaximizeActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowMaximizeActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowMaximizeActionDirective,
  selectors: [["button", "kendoWindowMaximizeAction", ""]],
  hostVars: 5,
  hostBindings: function WindowMaximizeActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowMaximizeActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵstyleProp("display", ctx.visible);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowMaximizeAction"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature],
  attrs: _c7,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "window", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "window", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowMaximizeActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowMaximizeActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowMaximizeActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowMaximizeActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgClass, NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowMaximizeActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowMaximizeAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowMaximizeAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="window"
            [svgIcon]="windowIcon">
        </kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    visible: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var WindowRestoreActionDirective = class extends ButtonComponent {
  constructor(el, renderer, _service, localization, ngZone) {
    super(el, renderer, null, localization, ngZone);
    this.windowRestoreIcon = windowRestoreIcon;
    this.buttonType = "button";
    this.buttonClass = true;
    this.window = _service;
    this.fillMode = "flat";
    this.icon = "window-restore";
  }
  /**
   * @hidden
   */
  onClick() {
    if (!this.isDisabled) {
      this.window.restoreAction();
    }
  }
  get visible() {
    return this.window.options.state === "default" ? "none" : "inline-flex";
  }
};
WindowRestoreActionDirective.ɵfac = function WindowRestoreActionDirective_Factory(t) {
  return new (t || WindowRestoreActionDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
WindowRestoreActionDirective.ɵcmp = ɵɵdefineComponent({
  type: WindowRestoreActionDirective,
  selectors: [["button", "kendoWindowRestoreAction", ""]],
  hostVars: 5,
  hostBindings: function WindowRestoreActionDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function WindowRestoreActionDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      ɵɵattribute("type", ctx.buttonType);
      ɵɵstyleProp("display", ctx.visible);
      ɵɵclassProp("k-window-titlebar-action", ctx.buttonClass);
    }
  },
  inputs: {
    window: "window"
  },
  exportAs: ["kendoWindowRestoreAction"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.button"
  }]), ɵɵInheritDefinitionFeature],
  attrs: _c8,
  ngContentSelectors: _c0,
  decls: 5,
  vars: 3,
  consts: [["innerCssClass", "k-button-icon", "name", "window-restore", 3, "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["innerCssClass", "k-button-icon", "name", "window-restore", 3, "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"]],
  template: function WindowRestoreActionDirective_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, WindowRestoreActionDirective_kendo_icon_wrapper_0_Template, 1, 1, "kendo-icon-wrapper", 0)(1, WindowRestoreActionDirective_span_1_Template, 2, 1, "span", 1)(2, WindowRestoreActionDirective_span_2_Template, 1, 1, "span", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵprojection(4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.imageUrl && !ctx.iconClass);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.imageUrl);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass);
    }
  },
  dependencies: [NgClass, NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowRestoreActionDirective, [{
    type: Component,
    args: [{
      exportAs: "kendoWindowRestoreAction",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoWindowRestoreAction]",
      template: `
        <kendo-icon-wrapper
            *ngIf="!imageUrl && !iconClass"
            innerCssClass="k-button-icon"
            name="window-restore"
            [svgIcon]="windowRestoreIcon">
        </kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    window: [{
      type: Input
    }],
    buttonType: [{
      type: HostBinding,
      args: ["attr.type"]
    }],
    buttonClass: [{
      type: HostBinding,
      args: ["class.k-window-titlebar-action"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }],
    visible: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var WindowComponent = class {
  constructor(el, renderer, service, navigation, ngZone, localization) {
    this.el = el;
    this.renderer = renderer;
    this.service = service;
    this.navigation = navigation;
    this.ngZone = ngZone;
    this.localization = localization;
    this.keepContent = false;
    this.dragStart = new EventEmitter();
    this.dragEnd = new EventEmitter();
    this.resizeStart = new EventEmitter();
    this.resizeEnd = new EventEmitter();
    this.close = new EventEmitter();
    this.widthChange = new EventEmitter();
    this.heightChange = new EventEmitter();
    this.topChange = new EventEmitter();
    this.leftChange = new EventEmitter();
    this.stateChange = new EventEmitter();
    this.messages = {};
    this.showLicenseWatermark = false;
    this.tabIndex = 0;
    this.role = "dialog";
    this.hostClass = true;
    this.titleId = null;
    this._themeColor = null;
    this.draged = false;
    this.resized = false;
    this.windowSubscription = new import_rxjs.Subscription();
    this.domSubs = new import_rxjs.Subscription();
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.direction = this.localization.rtl ? "rtl" : "ltr";
    this.localizationChangeSubscription = this.localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
    this.resizeDirections = RESIZE_DIRECTIONS;
    this.subscribeEvents();
    this.titleId = this.generateTitleId();
  }
  /**
   * Specifies whether the user will be able to drag the component.
   * @default true
   */
  set draggable(value) {
    this.options.draggable = value;
  }
  get draggable() {
    return this.options.draggable;
  }
  /**
   * Specifies whether the user will be able to resize the component.
   * @default true
   */
  set resizable(value) {
    this.options.resizable = value;
  }
  get resizable() {
    return this.options.resizable;
  }
  /**
   * The Window allows you to specify predefined theme colors.
   * The theme color will be applied as a background and border color to the titlebar while also amending the text color accordingly.
   *
   * The possible values are:
   * * `primary`
   * * `dark`
   * * `light`
   */
  set themeColor(themeColor) {
    this.handleThemeColorClass(this.themeColor, themeColor);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * @hidden
   */
  set cssClass(classes) {
    this.setServiceClasses(this._cssClass, classes);
    this._cssClass = classes;
  }
  get cssClass() {
    return this._cssClass;
  }
  /**
   * @hidden
   */
  set htmlAttributes(attributes) {
    setHTMLAttributes(attributes, this.renderer, this.el.nativeElement);
    const el = this.el.nativeElement;
    const dir = el.getAttribute("dir");
    const tIndex = el.getAttribute("tabindex");
    if (this.direction !== dir) {
      this.direction = dir;
    }
    if (this.tabIndex !== tIndex) {
      this.tabIndex = tIndex;
    }
    this._htmlAttributes = attributes;
  }
  get htmlAttributes() {
    return this._htmlAttributes;
  }
  /**
   * Specifies the initial state of the component.
   * If not specified, the value is set to `default`.
   *
   * The possible values are:
   * * `minimized`
   * * `maximized`
   * * `default`
   */
  set state(value) {
    this.options.state = value;
  }
  get state() {
    return this.options.state;
  }
  /**
   * Specifies the minimum width of the component.
   * The `minWidth` property has to be set in pixels.
   * @default 120
   */
  set minWidth(value) {
    this.setOption("minWidth", value);
  }
  get minWidth() {
    return this.options.minWidth;
  }
  /**
   * Specifies the minimum height of the Window.
   * The `minHeight` property has to be set in pixels.
   * @default 100
   */
  set minHeight(value) {
    this.setOption("minHeight", value);
  }
  get minHeight() {
    return this.options.minHeight;
  }
  /**
   * Specifies the width of the Window.
   * The `width` property has to be set in pixels.
   */
  set width(value) {
    this.setOption("width", value);
  }
  get width() {
    return this.options.width;
  }
  /**
   * Specifies the height of the Window.
   * The `height` property has to be set in pixels.
   */
  set height(value) {
    this.setOption("height", value);
  }
  get height() {
    return this.options.height;
  }
  /**
   * Specifies the initial top offset of the Window.
   * The `top` property has to be set in pixels.
   */
  set top(value) {
    this.setOption("top", value);
  }
  get top() {
    return this.options.top;
  }
  /**
   * Specifies the initial left offset of the Window.
   * Numeric values are treated as pixels.
   */
  set left(value) {
    this.setOption("left", value);
  }
  get left() {
    return this.options.left;
  }
  get closeButtonTitle() {
    if (this.messages && this.messages.closeTitle) {
      return this.messages.closeTitle;
    }
    return this.localization.get("closeTitle");
  }
  get restoreButtonTitle() {
    if (this.messages && this.messages.restoreTitle) {
      return this.messages.restoreTitle;
    }
    return this.localization.get("restoreTitle");
  }
  get maximizeButtonTitle() {
    if (this.messages && this.messages.maximizeTitle) {
      return this.messages.maximizeTitle;
    }
    return this.localization.get("maximizeTitle");
  }
  get minimizeButtonTitle() {
    if (this.messages && this.messages.minimizeTitle) {
      return this.messages.minimizeTitle;
    }
    return this.localization.get("minimizeTitle");
  }
  get dir() {
    return this.direction;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.setNextZIndex();
    this.ngZone.onStable.pipe((0, import_operators.take)(1)).subscribe(() => {
      this.handleInitialFocus();
    });
    this.ngZone.runOutsideAngular(() => Promise.resolve(null).then(() => this.setInitialOffset()));
    this.initDomEvents();
    if (this.titleBarView || this.titleBarContent) {
      this.renderer.setAttribute(this.el.nativeElement, "aria-labelledby", this.titleId);
    }
    this.handleThemeColorClass(null, this.themeColor);
  }
  ngOnInit() {
    this.renderer.removeAttribute(this.el.nativeElement, "title");
    this.service.init(this.el);
  }
  ngOnChanges(changes) {
    OFFSET_STYLES.forEach((style2) => {
      if (isChanged(style2, changes)) {
        this.setStyle(style2, this.options[style2]);
      }
    });
    if (isChanged("draggable", changes)) {
      const titleBar = isPresent2(this.titleBarContent) ? this.titleBarContent : this.titleBarView;
      if (isTruthy(changes["draggable"].currentValue)) {
        titleBar.subscribeDrag();
      } else {
        titleBar.unsubscribeDrag();
      }
    }
    if (isChanged("state", changes)) {
      if (isPresent2(this.service.lastAction)) {
        this.service.lastAction = null;
      } else {
        this.service.applyManualState();
        this.updateAllOffset();
      }
    }
  }
  ngOnDestroy() {
    if (this.windowSubscription) {
      this.windowSubscription.unsubscribe();
    }
    if (this.domSubs) {
      this.domSubs.unsubscribe();
    }
    this.localizationChangeSubscription.unsubscribe();
  }
  /**
   * Focuses the wrapper of the Window component.
   */
  focus() {
    const wrapper = this.el.nativeElement;
    if (isPresent2(wrapper)) {
      wrapper.focus();
    }
  }
  /**
   * Brings the current Window component on top of other Window components on the page.
   */
  bringToFront() {
    this.setNextZIndex();
  }
  /**
   * Manually updates the `width` or `height` option of the Window.
   * The required style will be applied to the Window wrapper element and the
   * corresponding property of the component instance will be updated.
   * This method is intended to be used for sizing dynamically created components using the
   * [`WindowService`]({% slug api_dialog_windowservice %})
   * @param {WindowDimensionSetting} dimension - The option that will be updated
   * @param {number} value - The value set in pixels
   */
  setDimension(dimension, value) {
    this.setOption(dimension, value);
    this.setStyle(dimension, value);
  }
  /**
   * Manually updates the `top` or `left` offset of the Window.
   * The required style will be applied to the Window wrapper element and the
   * corresponding property of the component instance will be updated.
   * This method is intended to be used for positioning dynamically created components using the
   * [`WindowService`]({% slug api_dialog_windowservice %})
   * @param {WindowOffsetSetting} offset - The option that will be updated
   * @param {number} value - The value set in pixels
   */
  setOffset(offset, value) {
    this.setOption(offset, value);
    this.setStyle(offset, value);
  }
  get showDefaultTitleBar() {
    return !isPresent2(this.titleBarContent);
  }
  get styleMinWidth() {
    return this.minWidth + "px";
  }
  get styleMinHeight() {
    return this.minHeight + "px";
  }
  get stylePosition() {
    return this.options.position;
  }
  get wrapperMaximizedClass() {
    return this.state === "maximized";
  }
  get wrapperMinimizedClass() {
    return this.state === "minimized";
  }
  /**
   * @hidden
   */
  onComponentFocus() {
    this.renderer.addClass(this.el.nativeElement, "k-focus");
    this.setNextZIndex();
  }
  /**
   * @hidden
   */
  onComponentBlur() {
    this.renderer.removeClass(this.el.nativeElement, "k-focus");
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.windowSubscription.add(this.service.focus.subscribe(() => {
      this.el.nativeElement.focus();
    }));
    this.windowSubscription.add(this.service.dragStart.subscribe(() => {
      this.draged = true;
      this.ngZone.run(() => {
        this.dragStart.emit();
      });
    }));
    this.windowSubscription.add(this.service.dragEnd.subscribe(() => {
      if (this.draged) {
        this.draged = false;
        this.ngZone.run(() => {
          this.dragEnd.emit();
        });
      }
    }));
    this.windowSubscription.add(this.service.close.subscribe(() => {
      this.close.emit();
    }));
    this.windowSubscription.add(this.service.resizeStart.subscribe(() => {
      this.resized = true;
      this.ngZone.run(() => {
        this.resizeStart.emit();
      });
    }));
    this.windowSubscription.add(this.service.resizeEnd.subscribe(() => {
      if (this.resized) {
        this.resized = false;
        this.ngZone.run(() => {
          this.resizeEnd.emit();
        });
      }
    }));
    this.windowSubscription.add(this.service.change.subscribe((ev) => {
      OFFSET_STYLES.forEach((style2) => {
        if (isPresent2(ev[style2])) {
          this.setStyle(style2, ev[style2]);
          if (this.state !== "maximized") {
            const emitter = this[style2 + "Change"];
            if (emitter.observers.length) {
              this.ngZone.run(() => {
                emitter.emit(ev[style2]);
              });
            }
          }
        }
      });
    }));
    this.windowSubscription.add(this.service.stateChange.subscribe((state2) => {
      if (isPresent2(this.service.lastAction)) {
        this.updateAllOffset();
        this.stateChange.emit(state2);
      }
    }));
  }
  initDomEvents() {
    if (!this.el) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.domSubs.add(this.renderer.listen(this.el.nativeElement, "keydown", (ev) => {
        this.onKeyDown(ev);
      }));
    });
  }
  onKeyDown(event) {
    if (hasClasses(event.target, WINDOW_CLASSES)) {
      this.navigation.process(event);
    }
  }
  setServiceClasses(prevValue, value) {
    const el = this.el.nativeElement;
    if (prevValue) {
      parseCSSClassNames2(prevValue).forEach((className) => {
        this.renderer.removeClass(el, className);
      });
    }
    if (value) {
      parseCSSClassNames2(value).forEach((className) => {
        this.renderer.addClass(el, className);
      });
    }
  }
  setNextZIndex() {
    const currentZIndex = this.el.nativeElement.style["z-index"];
    const nextPossibleZIndex = this.service.nextPossibleZIndex;
    if (!currentZIndex || nextPossibleZIndex - currentZIndex > 1) {
      this.renderer.setStyle(this.el.nativeElement, "z-index", this.service.nextZIndex);
    }
  }
  setInitialOffset() {
    if (this.state !== "maximized") {
      this.updateAllOffset();
      if (!isPresent2(this.left) || !isPresent2(this.top)) {
        this.service.center();
      }
    } else {
      const viewPort = this.service.windowViewPort;
      this.setStyle("width", viewPort.width);
      this.setStyle("height", viewPort.height);
      this.setStyle("top", 0);
      this.setStyle("left", 0);
    }
  }
  updateAllOffset() {
    OFFSET_STYLES.forEach((style2) => {
      if (isPresent2(this[style2])) {
        this.setStyle(style2, this[style2]);
      } else {
        this.removeStyle(style2);
      }
    });
  }
  setStyle(style2, value) {
    this.renderer.setStyle(this.el.nativeElement, style2, value + "px");
  }
  removeStyle(style2) {
    this.renderer.removeStyle(this.el.nativeElement, style2);
  }
  get options() {
    return this.service.options;
  }
  setOption(style2, value) {
    if (typeof value !== "number" && typeof value !== "string") {
      return;
    }
    const parsedValue = typeof value === "number" ? value : parseInt(value, 10);
    this.options[style2] = parsedValue;
    this.service.setRestoreOption(style2, parsedValue);
  }
  handleInitialFocus() {
    const wrapper = this.el.nativeElement;
    if (this.autoFocusedElement) {
      const initiallyFocusedElement = wrapper.querySelector(this.autoFocusedElement);
      if (initiallyFocusedElement) {
        initiallyFocusedElement.focus();
      }
    } else {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  generateTitleId() {
    return "kendo-window-title-" + Math.ceil(Math.random() * 1e6).toString();
  }
  handleThemeColorClass(previousValue, currentValue) {
    const wrapper = this.el.nativeElement;
    if (previousValue) {
      const classToRemove = `k-window-${previousValue}`;
      this.renderer.removeClass(wrapper, classToRemove);
    }
    if (currentValue) {
      const classToAdd = `k-window-${currentValue}`;
      this.renderer.addClass(wrapper, classToAdd);
    }
  }
};
WindowComponent.ɵfac = function WindowComponent_Factory(t) {
  return new (t || WindowComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragResizeService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
};
WindowComponent.ɵcmp = ɵɵdefineComponent({
  type: WindowComponent,
  selectors: [["kendo-window"]],
  contentQueries: function WindowComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, WindowTitleBarComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleBarContent = _t.first);
    }
  },
  viewQuery: function WindowComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(WindowTitleBarComponent, 5);
      ɵɵviewQuery(ResizeHandleDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleBarView = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeHandles = _t);
    }
  },
  hostVars: 15,
  hostBindings: function WindowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function WindowComponent_focus_HostBindingHandler() {
        return ctx.onComponentFocus();
      })("blur", function WindowComponent_blur_HostBindingHandler() {
        return ctx.onComponentBlur();
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabIndex", ctx.tabIndex)("role", ctx.role)("dir", ctx.dir);
      ɵɵstyleProp("min-width", ctx.styleMinWidth)("min-height", ctx.styleMinHeight)("position", ctx.stylePosition);
      ɵɵclassProp("k-window", ctx.hostClass)("k-window-maximized", ctx.wrapperMaximizedClass)("k-window-minimized", ctx.wrapperMinimizedClass);
    }
  },
  inputs: {
    autoFocusedElement: "autoFocusedElement",
    title: "title",
    draggable: "draggable",
    resizable: "resizable",
    themeColor: "themeColor",
    keepContent: "keepContent",
    state: "state",
    minWidth: "minWidth",
    minHeight: "minHeight",
    width: "width",
    height: "height",
    top: "top",
    left: "left"
  },
  outputs: {
    dragStart: "dragStart",
    dragEnd: "dragEnd",
    resizeStart: "resizeStart",
    resizeEnd: "resizeEnd",
    close: "close",
    widthChange: "widthChange",
    heightChange: "heightChange",
    topChange: "topChange",
    leftChange: "leftChange",
    stateChange: "stateChange"
  },
  exportAs: ["kendoWindow"],
  features: [ɵɵProvidersFeature([DragResizeService, NavigationService, LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.window"
  }]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c10,
  decls: 7,
  vars: 5,
  consts: () => {
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_2 = goog.getMsg("Close");
      i18n_2 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.window.closeTitle|The title of the close button:Close`;
    }
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_3 = goog.getMsg("Restore");
      i18n_3 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_3;
    } else {
      i18n_3 = $localize`:kendo.window.restoreTitle|The title of the restore button:Restore`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_4 = goog.getMsg("Maximize");
      i18n_4 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_4;
    } else {
      i18n_4 = $localize`:kendo.window.maximizeTitle|The title of the maximize button:Maximize`;
    }
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_5 = goog.getMsg("Minimize");
      i18n_5 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_DIALOG_FESM2015_PROGRESS_KENDO_ANGULAR_DIALOG_MJS_5;
    } else {
      i18n_5 = $localize`:kendo.window.minimizeTitle|The title of the minimize button:Minimize`;
    }
    return [["kendoWindowLocalizedMessages", "", "closeTitle", i18n_2, "restoreTitle", i18n_3, "maximizeTitle", i18n_4, "minimizeTitle", i18n_5], [3, "template", "id", 4, "ngIf"], [4, "ngIf"], ["class", "k-window-content", 3, "hidden", 4, "ngIf"], [3, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [3, "template", "id"], [1, "k-window-title"], [1, "k-window-titlebar-actions"], ["kendoWindowMinimizeAction", ""], ["kendoWindowMaximizeAction", ""], ["kendoWindowRestoreAction", ""], ["kendoWindowCloseAction", ""], [1, "k-window-content", 3, "hidden"], [3, "ngTemplateOutlet"], ["kendoWindowResizeHandle", "", "kendoDraggable", "", 3, "direction", 4, "ngFor", "ngForOf"], ["kendoWindowResizeHandle", "", "kendoDraggable", "", 3, "direction"], ["kendoWatermarkOverlay", ""]];
  },
  template: function WindowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c9);
      ɵɵelementContainerStart(0, 0)(1);
      ɵɵtemplate(2, WindowComponent_kendo_window_titlebar_2_Template, 8, 11, "kendo-window-titlebar", 1)(3, WindowComponent_ng_content_3_Template, 1, 0, "ng-content", 2)(4, WindowComponent_div_4_Template, 3, 3, "div", 3)(5, WindowComponent_ng_template_5_Template, 1, 1, "ng-template", 4)(6, WindowComponent_div_6_Template, 1, 0, "div", 5);
      ɵɵelementContainerEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showDefaultTitleBar);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.showDefaultTitleBar);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.state !== "minimized" || ctx.keepContent);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.resizable);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showLicenseWatermark);
    }
  },
  dependencies: [LocalizedMessagesDirective, NgForOf, NgIf, NgTemplateOutlet, DraggableDirective, WatermarkOverlayComponent, ResizeHandleDirective, WindowTitleBarComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoWindow",
      providers: [DragResizeService, NavigationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.window"
      }],
      selector: "kendo-window",
      template: `
        <ng-container kendoWindowLocalizedMessages
            i18n-closeTitle="kendo.window.closeTitle|The title of the close button"
            closeTitle="Close"

            i18n-restoreTitle="kendo.window.restoreTitle|The title of the restore button"
            restoreTitle="Restore"

            i18n-maximizeTitle="kendo.window.maximizeTitle|The title of the maximize button"
            maximizeTitle="Maximize"

            i18n-minimizeTitle="kendo.window.minimizeTitle|The title of the minimize button"
            minimizeTitle="Minimize"
        >
        <ng-container>

        <kendo-window-titlebar *ngIf="showDefaultTitleBar" [template]="titleBarTemplate" [id]="titleId">
            <span class="k-window-title">{{ title }}</span>
            <div class="k-window-titlebar-actions">
                <button kendoWindowMinimizeAction  [attr.title]="minimizeButtonTitle" [attr.aria-label]="minimizeButtonTitle"></button>
                <button kendoWindowMaximizeAction [attr.title]="maximizeButtonTitle" [attr.aria-label]="maximizeButtonTitle"></button>
                <button kendoWindowRestoreAction [attr.title]="restoreButtonTitle" [attr.aria-label]="restoreButtonTitle"></button>
                <button kendoWindowCloseAction [attr.title]="closeButtonTitle" [attr.aria-label]="closeButtonTitle"></button>
            </div>
        </kendo-window-titlebar>
        <ng-content select="kendo-window-titlebar" *ngIf="!showDefaultTitleBar"></ng-content>

        <div *ngIf="state !== 'minimized' || keepContent"
            [hidden]="state === 'minimized' && keepContent"
            class="k-window-content"
        >
            <ng-content *ngIf="!contentTemplate"></ng-content>
            <ng-template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></ng-template>
        </div>

        <ng-template [ngIf]='resizable'>
            <div *ngFor='let dir of resizeDirections'
                [direction]="dir"
                kendoWindowResizeHandle
                kendoDraggable>
            </div>
        </ng-template>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: DragResizeService
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    autoFocusedElement: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    draggable: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    keepContent: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    minWidth: [{
      type: Input
    }],
    minHeight: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    top: [{
      type: Input
    }],
    left: [{
      type: Input
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }],
    resizeStart: [{
      type: Output
    }],
    resizeEnd: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    widthChange: [{
      type: Output
    }],
    heightChange: [{
      type: Output
    }],
    topChange: [{
      type: Output
    }],
    leftChange: [{
      type: Output
    }],
    stateChange: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabIndex"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-window"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    titleBarView: [{
      type: ViewChild,
      args: [WindowTitleBarComponent, {
        static: false
      }]
    }],
    titleBarContent: [{
      type: ContentChild,
      args: [WindowTitleBarComponent, {
        static: false
      }]
    }],
    resizeHandles: [{
      type: ViewChildren,
      args: [ResizeHandleDirective]
    }],
    styleMinWidth: [{
      type: HostBinding,
      args: ["style.minWidth"]
    }],
    styleMinHeight: [{
      type: HostBinding,
      args: ["style.minHeight"]
    }],
    stylePosition: [{
      type: HostBinding,
      args: ["style.position"]
    }],
    wrapperMaximizedClass: [{
      type: HostBinding,
      args: ["class.k-window-maximized"]
    }],
    wrapperMinimizedClass: [{
      type: HostBinding,
      args: ["class.k-window-minimized"]
    }],
    onComponentFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onComponentBlur: [{
      type: HostListener,
      args: ["blur"]
    }]
  });
})();
var WindowCloseResult = class {
};
var WindowRef = class {
};
var WindowContainerService = class _WindowContainerService {
  set container(container) {
    _WindowContainerService.container = container;
  }
  get container() {
    return _WindowContainerService.container;
  }
};
WindowContainerService.container = null;
WindowContainerService.ɵfac = function WindowContainerService_Factory(t) {
  return new (t || WindowContainerService)();
};
WindowContainerService.ɵprov = ɵɵdefineInjectable({
  token: WindowContainerService,
  factory: WindowContainerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowContainerService, [{
    type: Injectable
  }], null, null);
})();
var isNotComponent = (component) => isString(component) || component instanceof TemplateRef;
var WindowInjector = class {
  constructor(getWindowRef, parentInjector) {
    this.getWindowRef = getWindowRef;
    this.parentInjector = parentInjector;
  }
  get(token3, notFoundValue) {
    if (token3 === WindowRef) {
      return this.getWindowRef();
    }
    return this.parentInjector.get(token3, notFoundValue);
  }
};
var WindowService = class {
  constructor(resolver, containerService) {
    this.resolver = resolver;
    this.containerService = containerService;
  }
  /**
   * Opens a Window component.
   *
   * @param {WindowSettings} settings - The settings that define the Window.
   * @returns {WindowRef} - A reference to the Window object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <button kendoButton (click)="open()">Open window</button>
   *     <div kendoWindowContainer></div>
   *   `
   * })
   * export class AppComponent {
   *     constructor( private windowService: WindowService ) {}
   *
   *     public open() {
   *         var window = this.windowService.open({
   *           title: "My window",
   *           content: "My content!"
   *         });
   *
   *         window.result.subscribe((result) => {
   *           if (result instanceof WindowCloseResult) {
   *             console.log("Window was closed");
   *           }
   *         });
   *     }
   * }
   * ```
   *
   */
  open(settings) {
    const factory = this.resolver.resolveComponentFactory(WindowComponent);
    const container = settings.appendTo || this.containerService.container;
    if (!container) {
      throw new Error(`Cannot attach window to the page.
                Add an element that uses the kendoWindowContainer directive, or set the 'appendTo' property.
                See https://www.telerik.com/kendo-angular-ui/components/dialogs/window/service/
            `);
    }
    const windowRef = {
      close: () => {
      },
      content: null,
      result: null,
      window: null
    };
    const content = this.contentFrom(settings.content, container, windowRef);
    const window2 = container.createComponent(factory, void 0, void 0, content.nodes);
    windowRef.window = window2;
    this.applyOptions(window2.instance, settings);
    const apiClose = new import_rxjs.Subject();
    const close = (e) => {
      apiClose.next(e || new WindowCloseResult());
      if (content.componentRef) {
        content.componentRef.destroy();
      }
      window2.destroy();
    };
    const result = (0, import_rxjs.merge)(apiClose, window2.instance.close.pipe((0, import_operators.map)((e) => e ? e : new WindowCloseResult()), (0, import_operators.filter)((e) => {
      if (settings.preventClose) {
        const windowRefParameter = isNotComponent(settings.content) ? void 0 : windowRef;
        return !settings.preventClose(e, windowRefParameter);
      }
      return true;
    }))).pipe(
      (0, import_operators.take)(1),
      // Takes care for multiple subscriptions:
      // We subscribe internally and the user may subscribe to get a close result - window.result.subscribe().
      // This causes multiple subscriptions to the same source and thus multiple emissions. share() solves that.
      (0, import_operators.share)()
    );
    result.subscribe(close);
    windowRef.close = close;
    windowRef.result = result;
    window2.changeDetectorRef.markForCheck();
    return windowRef;
  }
  applyOptions(instance, options) {
    if (isPresent2(options.htmlAttributes)) {
      instance.htmlAttributes = options.htmlAttributes;
    }
    if (isPresent2(options.cssClass)) {
      instance.cssClass = options.cssClass;
    }
    if (isPresent2(options.title)) {
      instance.title = options.title;
    }
    if (isPresent2(options.keepContent)) {
      instance.keepContent = options.keepContent;
    }
    if (isPresent2(options.width)) {
      instance.width = options.width;
    }
    if (isPresent2(options.minWidth)) {
      instance.minWidth = options.minWidth;
    }
    if (isPresent2(options.height)) {
      instance.height = options.height;
    }
    if (isPresent2(options.minHeight)) {
      instance.minHeight = options.minHeight;
    }
    if (isPresent2(options.left)) {
      instance.left = options.left;
    }
    if (isPresent2(options.top)) {
      instance.top = options.top;
    }
    if (isPresent2(options.draggable)) {
      instance.draggable = options.draggable;
    }
    if (isPresent2(options.resizable)) {
      instance.resizable = options.resizable;
    }
    if (isPresent2(options.messages && options.messages.closeTitle)) {
      instance.messages.closeTitle = options.messages.closeTitle;
    }
    if (isPresent2(options.messages && options.messages.restoreTitle)) {
      instance.messages.restoreTitle = options.messages.restoreTitle;
    }
    if (isPresent2(options.messages && options.messages.maximizeTitle)) {
      instance.messages.maximizeTitle = options.messages.maximizeTitle;
    }
    if (isPresent2(options.messages && options.messages.minimizeTitle)) {
      instance.messages.minimizeTitle = options.messages.minimizeTitle;
    }
    if (isPresent2(options.autoFocusedElement)) {
      instance.autoFocusedElement = options.autoFocusedElement;
    }
    if (isPresent2(options.state)) {
      instance.state = options.state;
      if (options.state === "minimized") {
        instance.keepContent = true;
      }
    }
    if (options.content instanceof TemplateRef) {
      instance.contentTemplate = options.content;
    }
    if (options.titleBarContent instanceof TemplateRef) {
      instance.titleBarTemplate = options.titleBarContent;
    }
  }
  contentFrom(content, container, windowRef) {
    const renderer = container.injector.get(Renderer2);
    let nodes = [];
    let componentRef = null;
    if (typeof content === "string") {
      nodes = [renderer.createText(content)];
    } else if (content && !(content instanceof TemplateRef)) {
      const injector = new WindowInjector(() => windowRef, container.injector);
      const factory = this.resolver.resolveComponentFactory(content);
      componentRef = container.createComponent(factory, void 0, injector);
      nodes = [componentRef.location.nativeElement];
      windowRef.content = componentRef;
    }
    return {
      componentRef,
      nodes: [
        [],
        nodes
        // Content
      ]
    };
  }
};
WindowService.ɵfac = function WindowService_Factory(t) {
  return new (t || WindowService)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(WindowContainerService));
};
WindowService.ɵprov = ɵɵdefineInjectable({
  token: WindowService,
  factory: WindowService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowService, [{
    type: Injectable
  }], function() {
    return [{
      type: ComponentFactoryResolver$1
    }, {
      type: WindowContainerService,
      decorators: [{
        type: Inject,
        args: [WindowContainerService]
      }]
    }];
  }, null);
})();
var DialogContainerDirective = class {
  constructor(container, service) {
    service.container = container;
  }
};
DialogContainerDirective.ɵfac = function DialogContainerDirective_Factory(t) {
  return new (t || DialogContainerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DialogContainerService));
};
DialogContainerDirective.ɵdir = ɵɵdefineDirective({
  type: DialogContainerDirective,
  selectors: [["", "kendoDialogContainer", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialogContainer]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: DialogContainerService
    }];
  }, null);
})();
var CustomMessagesComponent = class extends Messages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
CustomMessagesComponent.ɵfac = function CustomMessagesComponent_Factory(t) {
  return new (t || CustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
CustomMessagesComponent.ɵdir = ɵɵdefineDirective({
  type: CustomMessagesComponent,
  selectors: [["kendo-dialog-messages"], ["kendo-window-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: Messages,
    useExisting: forwardRef(() => CustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomMessagesComponent, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-dialog-messages, kendo-window-messages"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SHARED_DIRECTIVES = [DialogActionsComponent, CustomMessagesComponent, LocalizedMessagesDirective];
var SharedModule = class {
};
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = ɵɵdefineNgModule({
  type: SharedModule,
  declarations: [DialogActionsComponent, CustomMessagesComponent, LocalizedMessagesDirective],
  imports: [CommonModule, IconsModule, ButtonModule],
  exports: [DialogActionsComponent, CustomMessagesComponent, LocalizedMessagesDirective, CommonModule, IconsModule, ButtonModule]
});
SharedModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconsModule, ButtonModule, CommonModule, IconsModule, ButtonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [SHARED_DIRECTIVES],
      exports: [SHARED_DIRECTIVES, CommonModule, IconsModule, ButtonModule],
      imports: [CommonModule, IconsModule, ButtonModule]
    }]
  }], null, null);
})();
var DIALOG_DIRECTIVES = [DialogComponent, DialogTitleBarComponent];
var DialogModule = class {
};
DialogModule.ɵfac = function DialogModule_Factory(t) {
  return new (t || DialogModule)();
};
DialogModule.ɵmod = ɵɵdefineNgModule({
  type: DialogModule,
  declarations: [DialogComponent, DialogTitleBarComponent, DialogContainerDirective],
  imports: [SharedModule, WatermarkModule],
  exports: [DialogComponent, DialogTitleBarComponent, DialogActionsComponent, CustomMessagesComponent, LocalizedMessagesDirective, DialogContainerDirective]
});
DialogModule.ɵinj = ɵɵdefineInjector({
  providers: [DialogContainerService, DialogService],
  imports: [SharedModule, WatermarkModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      declarations: [DIALOG_DIRECTIVES, DialogContainerDirective],
      entryComponents: [DIALOG_DIRECTIVES],
      exports: [DIALOG_DIRECTIVES, SHARED_DIRECTIVES, DialogContainerDirective],
      imports: [SharedModule, WatermarkModule],
      providers: [DialogContainerService, DialogService]
    }]
  }], null, null);
})();
var WindowContainerDirective = class {
  constructor(container, service) {
    service.container = container;
  }
};
WindowContainerDirective.ɵfac = function WindowContainerDirective_Factory(t) {
  return new (t || WindowContainerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(WindowContainerService));
};
WindowContainerDirective.ɵdir = ɵɵdefineDirective({
  type: WindowContainerDirective,
  selectors: [["", "kendoWindowContainer", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowContainerDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoWindowContainer]"
    }]
  }], function() {
    return [{
      type: ViewContainerRef
    }, {
      type: WindowContainerService
    }];
  }, null);
})();
var WINDOW_DIRECTIVES = [ResizeHandleDirective, WindowComponent, WindowTitleBarComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective];
var ENTRY_COMPONENTS = [WindowComponent, WindowTitleBarComponent];
var exportedModules = [WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent];
var WindowModule = class {
};
WindowModule.ɵfac = function WindowModule_Factory(t) {
  return new (t || WindowModule)();
};
WindowModule.ɵmod = ɵɵdefineNgModule({
  type: WindowModule,
  declarations: [ResizeHandleDirective, WindowComponent, WindowTitleBarComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowContainerDirective],
  imports: [SharedModule, DraggableModule, WatermarkModule],
  exports: [WindowComponent, WindowCloseActionDirective, WindowMinimizeActionDirective, WindowMaximizeActionDirective, WindowRestoreActionDirective, WindowTitleBarComponent, DialogActionsComponent, CustomMessagesComponent, LocalizedMessagesDirective, WindowContainerDirective]
});
WindowModule.ɵinj = ɵɵdefineInjector({
  providers: [WindowContainerService, WindowService],
  imports: [SharedModule, DraggableModule, WatermarkModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowModule, [{
    type: NgModule,
    args: [{
      declarations: [WINDOW_DIRECTIVES, WindowContainerDirective],
      entryComponents: [ENTRY_COMPONENTS],
      exports: [exportedModules, SHARED_DIRECTIVES, WindowContainerDirective],
      imports: [SharedModule, DraggableModule, WatermarkModule],
      providers: [WindowContainerService, WindowService]
    }]
  }], null, null);
})();
var DialogsModule = class {
};
DialogsModule.ɵfac = function DialogsModule_Factory(t) {
  return new (t || DialogsModule)();
};
DialogsModule.ɵmod = ɵɵdefineNgModule({
  type: DialogsModule,
  exports: [DialogModule, WindowModule]
});
DialogsModule.ɵinj = ɵɵdefineInjector({
  imports: [DialogModule, WindowModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogsModule, [{
    type: NgModule,
    args: [{
      exports: [DialogModule, WindowModule]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/result.js
var ResultType;
(function(ResultType3) {
  ResultType3[ResultType3["Literal"] = 0] = "Literal";
  ResultType3[ResultType3["Mask"] = 1] = "Mask";
  ResultType3[ResultType3["Undefined"] = 2] = "Undefined";
})(ResultType || (ResultType = {}));
var Result = (
  /** @class */
  function() {
    function Result3(value, rest, type) {
      if (type === void 0) {
        type = ResultType.Undefined;
      }
      this.value = value;
      this.rest = rest;
      this.type = type;
    }
    Result3.prototype.map = function(fn) {
      return new Result3(fn(this.value), this.rest);
    };
    Result3.prototype.chain = function(fn) {
      return fn(this.value, this.rest);
    };
    Result3.prototype.fold = function(s, _) {
      return s(this.value, this.rest);
    };
    Result3.prototype.concat = function(r) {
      return this.map(function(vs, _) {
        return r.chain(function(v, __) {
          return vs.concat([v]);
        });
      });
    };
    Result3.prototype.toString = function() {
      return "Result({ value: '" + this.value + "', rest: " + this.rest + " })";
    };
    return Result3;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/stream.js
var Stream = (
  /** @class */
  function() {
    function Stream3(input, control) {
      if (input === void 0) {
        input = [];
      }
      if (control === void 0) {
        control = [];
      }
      this.input = input;
      this.control = control;
      this.inputCursor = 0;
      this.controlCursor = 0;
    }
    Stream3.prototype.eof = function() {
      return this.inputCursor >= this.input.length;
    };
    Stream3.prototype.next = function() {
      return {
        char: this.input[this.inputCursor++],
        control: this.control[this.controlCursor++]
      };
    };
    Stream3.prototype.peek = function() {
      return {
        char: this.input[this.inputCursor],
        control: this.control[this.controlCursor]
      };
    };
    Stream3.prototype.eat_input = function() {
      this.inputCursor++;
    };
    Stream3.prototype.eat_control = function() {
      this.controlCursor++;
    };
    Stream3.prototype.eat = function() {
      this.inputCursor++;
      this.controlCursor++;
    };
    return Stream3;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/parsers.js
var toArray = function(value) {
  return (value || "").split("");
};
var ESCAPE_CHARACTER = "\\";
var Parser = (
  /** @class */
  function() {
    function Parser3(parse) {
      this.parse = parse;
    }
    Parser3.prototype.run = function(input, control) {
      if (control === void 0) {
        control = "";
      }
      if (input instanceof Stream) {
        return this.parse(input);
      } else {
        return this.parse(new Stream(toArray(input), toArray(control)));
      }
    };
    Parser3.prototype.map = function(f) {
      var _this = this;
      return new Parser3(function(stream) {
        return _this.parse(stream).map(f);
      });
    };
    Parser3.prototype.chain = function(f) {
      var _this = this;
      return new Parser3(function(stream) {
        return _this.parse(stream).chain(function(v, s) {
          return f(v).run(s);
        });
      });
    };
    Parser3.prototype.isLiteral = function(c) {
      return this.run(c).type === ResultType.Literal;
    };
    return Parser3;
  }()
);
var mask = function(_a2) {
  var prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
  return function(rule) {
    return new Parser(function(stream) {
      while (!stream.eof()) {
        var _a3 = stream.peek(), char = _a3.char, control = _a3.control;
        if (char === control && control === prompt) {
          stream.eat();
          return new Result(prompt, stream, ResultType.Mask);
        }
        if (rule.test(char)) {
          stream.eat();
          return new Result(char, stream, ResultType.Mask);
        }
        if (char === promptPlaceholder) {
          stream.eat();
          return new Result(prompt, stream, ResultType.Mask);
        }
        stream.eat_input();
      }
      stream.eat();
      return new Result(prompt, stream, ResultType.Mask);
    });
  };
};
var literal = function(_token) {
  return new Parser(function(stream) {
    var char = stream.peek().char;
    if (char === _token) {
      stream.eat();
      return new Result(_token, stream, ResultType.Literal);
    }
    return new Result(_token, stream, ResultType.Literal);
  });
};
var unmask = function(prompt) {
  return function(rule) {
    return new Parser(function(stream) {
      while (!stream.eof()) {
        var _a2 = stream.peek(), char = _a2.char, control = _a2.control;
        if (char === prompt && control === prompt) {
          stream.eat();
          return new Result(char, stream);
        }
        if (rule.test(char)) {
          stream.eat();
          return new Result(char, stream);
        }
        stream.eat_input();
      }
      stream.eat();
      return new Result("", stream);
    });
  };
};
var unliteral = function(_token) {
  return new Parser(function(stream) {
    if (stream.eof()) {
      return new Result("", stream);
    }
    var char = stream.peek().char;
    if (char === _token) {
      stream.eat();
    }
    return new Result(_token, stream);
  });
};
var token = function(rules, creator) {
  return new Parser(function(stream) {
    var char = stream.next().char;
    var rule = rules[char];
    if (char === ESCAPE_CHARACTER) {
      char = stream.next().char;
      return new Result(creator.literal(char), stream);
    }
    if (!rule) {
      return new Result(creator.literal(char), stream);
    }
    return new Result(creator.mask(rule), stream);
  });
};
var rawMask = function(_a2) {
  var prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
  return new Parser(function(stream) {
    var char = stream.next().char;
    if (char === prompt) {
      return new Result(promptPlaceholder, stream);
    }
    return new Result(char, stream);
  });
};
var rawLiteral = function(includeLiterals) {
  return new Parser(function(stream) {
    var char = stream.next().char;
    if (includeLiterals) {
      return new Result(char, stream);
    }
    return new Result("", stream);
  });
};

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/parsing/combinators.js
var always = function(value) {
  return new Parser(function(stream) {
    return new Result(value, stream);
  });
};
var append = function(p1, p2) {
  return p1.chain(function(vs) {
    return p2.map(function(v) {
      return vs.concat([v]);
    });
  });
};
var sequence = function(list) {
  return list.reduce(function(acc, parser) {
    return append(acc, parser);
  }, always([]));
};
var greedy = function(parser) {
  return new Parser(function(stream) {
    var result = new Result([], stream);
    while (!stream.eof()) {
      result = result.concat(parser.run(stream));
    }
    return result;
  });
};

// node_modules/@progress/kendo-inputs-common/dist/es/maskedtextbox/masking.service.js
var MaskingService = (
  /** @class */
  function() {
    function MaskingService3() {
      this.rules = {};
      this.prompt = "_";
      this.mask = "";
      this.promptPlaceholder = " ";
      this.includeLiterals = false;
      this.maskTokens = [];
      this.unmaskTokens = [];
      this.rawTokens = [];
      this.validationTokens = [];
    }
    MaskingService3.prototype.update = function(_a2) {
      var _b = _a2.mask, mask3 = _b === void 0 ? "" : _b, _c = _a2.prompt, prompt = _c === void 0 ? "" : _c, _d = _a2.promptPlaceholder, promptPlaceholder = _d === void 0 ? " " : _d, _e = _a2.rules, rules = _e === void 0 ? {} : _e, _f = _a2.includeLiterals, includeLiterals = _f === void 0 ? false : _f;
      this.mask = mask3;
      this.prompt = prompt;
      this.promptPlaceholder = promptPlaceholder;
      this.rules = rules;
      this.includeLiterals = includeLiterals;
      this.tokenize();
    };
    MaskingService3.prototype.validationValue = function(maskedValue) {
      if (maskedValue === void 0) {
        maskedValue = "";
      }
      var value = maskedValue;
      sequence(this.validationTokens).run(maskedValue).fold(function(unmasked) {
        value = unmasked.join("");
      });
      return value;
    };
    MaskingService3.prototype.rawValue = function(maskedValue) {
      if (maskedValue === void 0) {
        maskedValue = "";
      }
      var value = maskedValue;
      if (!this.rawTokens.length) {
        return value;
      }
      sequence(this.rawTokens).run(maskedValue).fold(function(unmasked) {
        value = unmasked.join("");
      });
      return value;
    };
    MaskingService3.prototype.maskRaw = function(rawValue) {
      if (rawValue === void 0) {
        rawValue = "";
      }
      var value = rawValue;
      if (!this.maskTokens.length) {
        return value;
      }
      sequence(this.maskTokens).run(rawValue).fold(function(masked) {
        value = masked.join("");
      });
      return value;
    };
    MaskingService3.prototype.maskInput = function(input, control, splitPoint) {
      if (input.length < control.length) {
        return this.maskRemoved(input, control, splitPoint);
      }
      return this.maskInserted(input, control, splitPoint);
    };
    MaskingService3.prototype.maskInRange = function(pasted, oldValue, start, end) {
      var value = "";
      var selection = end;
      var beforeChange = oldValue.split("").slice(0, start);
      var afterChange = oldValue.split("").slice(end);
      sequence(this.maskTokens.slice(start, end)).run(pasted).fold(function(masked) {
        value = beforeChange.concat(masked).concat(afterChange).join("");
      });
      return {
        selection,
        value
      };
    };
    MaskingService3.prototype.maskRemoved = function(input, control, splitPoint) {
      var _this = this;
      var value = "";
      var selection = splitPoint;
      var unchanged = input.split("").slice(splitPoint);
      var changed = input.split("").slice(0, splitPoint).join("");
      var take3 = this.maskTokens.length - (input.length - splitPoint);
      sequence(this.maskTokens.slice(0, take3)).run(changed, control).fold(function(masked) {
        selection = _this.adjustPosition(masked, selection);
        value = masked.concat(unchanged).join("");
      });
      return {
        selection,
        value
      };
    };
    MaskingService3.prototype.adjustPosition = function(input, selection) {
      var caretChar = input[selection];
      var isLiteral = this.maskTokens[selection].isLiteral(caretChar);
      if (!isLiteral && caretChar !== this.prompt) {
        return selection + 1;
      }
      return selection;
    };
    MaskingService3.prototype.maskInserted = function(input, control, splitPoint) {
      var _this = this;
      var value = "";
      var selection = splitPoint;
      var changed = input.slice(0, splitPoint);
      sequence(this.unmaskTokens).run(changed, control).chain(function(unmasked) {
        selection = unmasked.join("").length;
        var unchanged = control.slice(selection);
        return sequence(_this.maskTokens).run(unmasked.join("") + unchanged, control);
      }).fold(function(masked) {
        value = masked.join("");
      });
      return {
        selection,
        value
      };
    };
    Object.defineProperty(MaskingService3.prototype, "maskTokenCreator", {
      get: function() {
        var _a2 = this, prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder;
        return {
          literal: function(rule) {
            return literal(rule);
          },
          mask: function(rule) {
            return mask({
              prompt,
              promptPlaceholder
            })(rule);
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService3.prototype, "unmaskTokenCreator", {
      get: function() {
        var _this = this;
        return {
          literal: function(rule) {
            return unliteral(rule);
          },
          mask: function(rule) {
            return unmask(_this.prompt)(rule);
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService3.prototype, "rawTokenCreator", {
      get: function() {
        var _a2 = this, prompt = _a2.prompt, promptPlaceholder = _a2.promptPlaceholder, includeLiterals = _a2.includeLiterals;
        return {
          literal: function(_) {
            return rawLiteral(includeLiterals);
          },
          mask: function(_) {
            return rawMask({
              prompt,
              promptPlaceholder
            });
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MaskingService3.prototype, "validationTokenCreator", {
      get: function() {
        var prompt = this.prompt;
        return {
          literal: function(_) {
            return rawLiteral(false);
          },
          mask: function(_) {
            return rawMask({
              prompt,
              promptPlaceholder: ""
            });
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MaskingService3.prototype.tokenize = function() {
      var _this = this;
      greedy(token(this.rules, this.maskTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.maskTokens = tokens;
      });
      greedy(token(this.rules, this.unmaskTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.unmaskTokens = tokens;
      });
      greedy(token(this.rules, this.rawTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.rawTokens = tokens;
      });
      greedy(token(this.rules, this.validationTokenCreator)).run(this.mask).fold(function(tokens, _) {
        _this.validationTokens = tokens;
      });
    };
    return MaskingService3;
  }()
);

// node_modules/@progress/kendo-inputs-common/dist/es/common/drawing-utils.js
var _a = drawing_exports.util;
var elementOffset = _a.elementOffset;
var limitValue = _a.limitValue;

// node_modules/@progress/kendo-inputs-common/dist/es/signature/signature-pad.js
var Point = geometry_exports.Point;
var Rect = geometry_exports.Rect;
var transform = geometry_exports.transform;
var noop = function() {
};
var DECIMAL_DIGITS = 3;
var DEFAULT_COLOR = "#000";
var DEFAULT_BACKGROUND_COLOR = "#fff";
var DEFAULT_PRECISION = 1;
var DEFAULT_SAMPLING_RATE = 200;
var DEFAULT_STROKE_WIDTH = 1;
var DEFAULT_WIDTH = 750;
var DEFAULT_HEIGHT = 250;
var DEFAULT_SCALE = 1;
var DEFAULT_EXPORT_SCALE = 6;
var SignaturePad = (
  /** @class */
  function() {
    function SignaturePad2(element, options) {
      if (options === void 0) {
        options = {};
      }
      this.element = element;
      this.lastMoveTime = 0;
      this.resolveColors(options);
      this.options = Object.assign({
        scale: DEFAULT_SCALE,
        precision: DEFAULT_PRECISION,
        samplingRate: DEFAULT_SAMPLING_RATE,
        smooth: options.smooth !== false,
        color: DEFAULT_COLOR,
        backgroundColor: DEFAULT_BACKGROUND_COLOR,
        strokeWidth: DEFAULT_STROKE_WIDTH,
        onChange: noop,
        onDraw: noop,
        onDrawEnd: noop
      }, options, {
        color: this.color,
        backgroundColor: this.backgroundColor
      });
      this.pathOptions = {
        stroke: {
          color: this.options.color,
          width: this.options.strokeWidth,
          lineCap: "round",
          lineJoin: "round"
        }
      };
      this.initSurface();
      this.attachEvents();
    }
    SignaturePad2.prototype.destroy = function() {
      this.detachEvents();
    };
    SignaturePad2.prototype.clear = function() {
      this.rootGroup.clear();
      this.path = null;
    };
    SignaturePad2.prototype.readThemeColors = function() {
      var themeColor;
      var themeBackgroundColor;
      if (typeof document !== "undefined") {
        var themeElement = this.element.closest(".k-signature") || this.element;
        var computedStyle = themeElement.ownerDocument.defaultView.getComputedStyle(themeElement);
        themeColor = computedStyle.color;
        themeBackgroundColor = computedStyle.backgroundColor;
      }
      this.themeColor = themeColor || this.themeColor || DEFAULT_COLOR;
      this.themeBackgroundColor = themeBackgroundColor || this.themeBackgroundColor || DEFAULT_BACKGROUND_COLOR;
    };
    SignaturePad2.prototype.resolveColors = function(options) {
      this.readThemeColors();
      this.color = options.color || (this.options || {}).color || this.themeColor;
      this.backgroundColor = options.backgroundColor || (this.options || {}).backgroundColor || this.themeBackgroundColor;
    };
    Object.defineProperty(SignaturePad2.prototype, "isDrawing", {
      get: function() {
        return Boolean(this.points);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SignaturePad2.prototype, "pathData", {
      get: function() {
        var _a2;
        return (_a2 = this.path) === null || _a2 === void 0 ? void 0 : _a2.toString(DECIMAL_DIGITS);
      },
      set: function(value) {
        this.clear();
        this.path = MultiPath.parse(value, this.pathOptions);
        this.rootGroup.append(this.path);
      },
      enumerable: false,
      configurable: true
    });
    SignaturePad2.prototype.loadImage = function(data, size) {
      if (size === void 0) {
        size = [];
      }
      if (!data) {
        this.clear();
        return;
      }
      var _a2 = this.size, width = _a2[0], height = _a2[1];
      var contentWidth = width / this.options.scale;
      var contentHeight = height / this.options.scale;
      var importWidth = size[0] || contentWidth * DEFAULT_EXPORT_SCALE;
      var importHeight = size[1] || contentHeight * DEFAULT_EXPORT_SCALE;
      var scaleX = contentWidth / importWidth;
      var scaleY = contentHeight / importHeight;
      var scale = Math.min(scaleX, scaleY);
      var img = new image_default(data, new geometry_exports.Rect([0, 0], [importWidth, importHeight]));
      img.transform(transform().scale(scale, scale));
      this.clear();
      this.rootGroup.append(img);
    };
    SignaturePad2.prototype.exportImage = function(options) {
      var _a2;
      var _b = this.size, width = _b[0], height = _b[1];
      var contentWidth = width / this.options.scale;
      var contentHeight = height / this.options.scale;
      var exportWidth = (options === null || options === void 0 ? void 0 : options.width) || contentWidth * DEFAULT_EXPORT_SCALE;
      var exportHeight = (options === null || options === void 0 ? void 0 : options.height) || contentHeight * DEFAULT_EXPORT_SCALE;
      var scaleX = exportWidth / contentWidth;
      var scaleY = exportHeight / contentHeight;
      var scale = Math.min(scaleX, scaleY);
      var exportRect = new Rect([0, 0], [exportWidth, exportHeight]);
      var exportGroup = new group_default({
        clip: Path.fromRect(exportRect)
      });
      var contentGroup = new group_default({
        transform: transform().scale(scale, scale)
      });
      var frame = Path.fromRect(exportRect, {
        fill: {
          color: this.options.backgroundColor
        }
      });
      exportGroup.append(frame);
      exportGroup.append(contentGroup);
      (_a2 = contentGroup.children).push.apply(_a2, this.rootGroup.children);
      return exportImage(exportGroup, Object.assign({
        width: exportWidth,
        height: exportHeight
      }, options));
    };
    SignaturePad2.prototype.resize = function() {
      this.surface.resize(true);
    };
    SignaturePad2.prototype.setOptions = function(options) {
      this.resolveColors(options);
      Object.assign(this.options, options, {
        color: this.color,
        backgroundColor: this.backgroundColor
      });
      this.pathOptions.stroke.color = this.options.color;
      this.pathOptions.stroke.width = this.options.strokeWidth;
      if (this.path) {
        this.path.options.set("stroke.color", this.options.color);
        this.path.options.set("stroke.width", this.options.strokeWidth);
      }
      this.background.options.set("fill.color", this.options.backgroundColor);
    };
    SignaturePad2.prototype.initSurface = function() {
      this.surface = surface_default.create(this.element, {
        type: "canvas"
      });
      this.element.style.touchAction = "none";
      var scale = this.options.scale;
      this.rootGroup = new group_default({
        transform: transform().scale(scale, scale)
      });
      var width = this.element.offsetWidth || DEFAULT_WIDTH;
      var height = this.element.offsetHeight || DEFAULT_HEIGHT;
      this.size = [width, height];
      this.background = Path.fromRect(new Rect([0, 0], this.size), {
        fill: {
          color: this.options.backgroundColor
        }
      });
      this.surface.draw(this.background);
      this.surface.draw(this.rootGroup);
    };
    SignaturePad2.prototype.attachEvents = function() {
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onPointerMove = this.onPointerMove.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);
      this.onDragStart = this.onDragStart.bind(this);
      this.element.addEventListener("pointerdown", this.onPointerDown);
      this.element.addEventListener("pointerup", this.onPointerUp);
      this.element.addEventListener("dragstart", this.onDragStart);
    };
    SignaturePad2.prototype.detachEvents = function() {
      this.element.removeEventListener("pointerdown", this.onPointerDown);
      this.detachPointerMove();
      this.element.removeEventListener("pointerup", this.onPointerUp);
      this.element.removeEventListener("dragstart", this.onDragStart);
    };
    SignaturePad2.prototype.attachPointerMove = function() {
      this.element.addEventListener("pointermove", this.onPointerMove);
    };
    SignaturePad2.prototype.detachPointerMove = function() {
      this.element.removeEventListener("pointermove", this.onPointerMove);
    };
    SignaturePad2.prototype.touchPoint = function(e) {
      var offset = elementOffset(this.element);
      var pageX = e.pageX;
      var pageY = e.pageY;
      var scale = 1 / this.options.scale;
      return new Point(pageX - offset.left, pageY - offset.top).scale(scale, scale);
    };
    SignaturePad2.prototype.onDragStart = function(e) {
      e.preventDefault();
    };
    SignaturePad2.prototype.onPointerDown = function(e) {
      if (this.options.readonly || !e.isPrimary || !isMainButton(e)) {
        return;
      }
      this.detachPointerMove();
      this.attachPointerMove();
      if (!this.path) {
        this.path = new MultiPath(this.pathOptions);
        this.rootGroup.append(this.path);
      }
      this.options.onDraw();
      this.element.setPointerCapture(e.pointerId);
      var point = this.touchPoint(e);
      this.points = [point];
      this.path.moveTo(point);
    };
    SignaturePad2.prototype.onPointerMove = function(e) {
      if (!this.points || !this.path || !e.isPrimary) {
        return;
      }
      var now = (/* @__PURE__ */ new Date()).getTime();
      var elapsed = now - this.lastMoveTime;
      var minTimeDelta = 1e3 / limitValue(this.options.samplingRate, 1, 1e4);
      if (elapsed < minTimeDelta) {
        return;
      } else {
        this.lastMoveTime = now;
      }
      var point = this.touchPoint(e);
      var lastPoint = this.points[this.points.length - 1];
      var minDelta = 1 / limitValue(this.options.precision, 0.01, 100);
      if (point.distanceTo(lastPoint) < minDelta) {
        return;
      }
      this.points.push(point);
      this.path.lineTo(point);
    };
    SignaturePad2.prototype.onPointerUp = function(e) {
      if (!e.isPrimary || !this.path || !this.points || this.options.readonly) {
        return;
      }
      this.detachPointerMove();
      if (this.options.smooth) {
        var segments = Path.curveFromPoints(this.points);
        this.path.paths.splice(this.path.paths.length - 1, 1, segments);
      }
      this.points = null;
      this.options.onDrawEnd();
      this.options.onChange(this.pathData);
    };
    return SignaturePad2;
  }()
);
function isMainButton(e) {
  return typeof e.button !== "number" || e.button === 0;
}

// node_modules/@progress/kendo-angular-inputs/fesm2015/progress-kendo-angular-inputs.mjs
var _c02 = ["wrap"];
var _c12 = ["track"];
var _c22 = ["sliderSelection"];
var _c32 = ["ticks"];
var _c42 = ["tickElement"];
var _c52 = ["kendoSliderTicks", ""];
function SliderTicksComponent_li_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵelementContainer(1, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    const defaultLabel_r3 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.labelTemplate || defaultLabel_r3)("ngTemplateOutletContext", tick_r1);
  }
}
function SliderTicksComponent_li_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, " ");
    ɵɵelementContainerEnd();
  }
}
function SliderTicksComponent_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 3, 1);
    ɵɵelementContainerStart(2, 4);
    ɵɵtemplate(3, SliderTicksComponent_li_0_span_3_Template, 2, 2, "span", 5)(4, SliderTicksComponent_li_0_ng_container_4_Template, 2, 0, "ng-container", 6);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tick_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r1.tickTitle(tick_r1.value));
    ɵɵproperty("ngClass", tick_r1.classes);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", tick_r1.large);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", true);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", false);
  }
}
function SliderTicksComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const value_r4 = ctx.value;
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r1.tickTitle(value_r4), " ");
  }
}
var _c62 = ["draghandle"];
var _c72 = ["decreaseButton"];
var _c82 = ["increaseButton"];
var _c92 = (a0, a1) => ({
  click: a0,
  keydown: a1
});
function SliderComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 16, 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.decreaseButtonArrowIcon)("svgIcon", ctx_r1.decreaseButtonArrowSVGIcon)("title", ctx_r1.decrementMessage);
    ɵɵattribute("tabindex", -1);
  }
}
function SliderComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 17, 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tickTitle", ctx_r1.title)("vertical", ctx_r1.vertical)("step", ctx_r1.smallStep)("largeStep", ctx_r1.largeStep)("min", ctx_r1.min)("max", ctx_r1.max)("labelTemplate", ctx_r1.labelTemplate == null ? null : ctx_r1.labelTemplate.templateRef);
  }
}
function SliderComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 18, 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.increaseButtonArrowIcon)("svgIcon", ctx_r1.increaseButtonArrowSVGIcon)("title", ctx_r1.incrementMessage);
    ɵɵattribute("tabindex", -1);
  }
}
var _c102 = ["draghandleStart"];
var _c11 = ["draghandleEnd"];
function RangeSliderComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ul", 13, 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tickTitle", ctx_r1.title)("vertical", ctx_r1.vertical)("step", ctx_r1.smallStep)("largeStep", ctx_r1.largeStep)("min", ctx_r1.min)("max", ctx_r1.max)("labelTemplate", ctx_r1.labelTemplate == null ? null : ctx_r1.labelTemplate.templateRef);
    ɵɵattribute("aria-hidden", true);
  }
}
var _c122 = ["thumb"];
var _c13 = ["numericInput"];
var _c14 = (a0, a1, a2, a3, a4, a5, a6) => ({
  mousedown: a0,
  dragenter: a1,
  keydown: a2,
  input: a3,
  focus: a4,
  blur: a5,
  paste: a6
});
var _c15 = (a0, a1) => ({
  mouseup: a0,
  mouseleave: a1
});
var _c16 = (a0) => ({
  mousedown: a0
});
function NumericTextBoxComponent_span_2_ng_template_1_Template(rf, ctx) {
}
function NumericTextBoxComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, NumericTextBoxComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function NumericTextBoxComponent_kendo_input_separator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function NumericTextBoxComponent_kendo_input_separator_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function NumericTextBoxComponent_span_7_ng_template_1_Template(rf, ctx) {
}
function NumericTextBoxComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, NumericTextBoxComponent_span_7_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
function NumericTextBoxComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11)(1, "button", 12);
    ɵɵelement(2, "kendo-icon-wrapper", 13);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 14);
    ɵɵelement(4, "kendo-icon-wrapper", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(15, _c15, ctx_r1.releaseArrow, ctx_r1.releaseArrow));
    ɵɵadvance();
    ɵɵclassProp("k-active", ctx_r1.arrowDirection === ctx_r1.ArrowDirection.Up);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(18, _c16, ctx_r1.increasePress))("title", ctx_r1.incrementTitle);
    ɵɵattribute("aria-hidden", true)("aria-label", ctx_r1.incrementTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.arrowUpIcon);
    ɵɵadvance();
    ɵɵclassProp("k-active", ctx_r1.arrowDirection === ctx_r1.ArrowDirection.Down);
    ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction1(20, _c16, ctx_r1.decreasePress))("title", ctx_r1.decrementTitle);
    ɵɵattribute("aria-hidden", true)("aria-label", ctx_r1.decrementTitle);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r1.arrowDownIcon);
  }
}
var _c17 = ["input"];
var _c18 = (a0, a1, a2, a3, a4) => ({
  focus: a0,
  blur: a1,
  click: a2,
  dragstart: a3,
  drop: a4
});
function MaskedTextBoxComponent_span_1_ng_template_1_Template(rf, ctx) {
}
function MaskedTextBoxComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, MaskedTextBoxComponent_span_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefixTemplate == null ? null : ctx_r1.prefixTemplate.templateRef);
  }
}
function MaskedTextBoxComponent_kendo_input_separator_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function MaskedTextBoxComponent_kendo_input_separator_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function MaskedTextBoxComponent_span_6_ng_template_1_Template(rf, ctx) {
}
function MaskedTextBoxComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtemplate(1, MaskedTextBoxComponent_span_6_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffixTemplate == null ? null : ctx_r1.suffixTemplate.templateRef);
  }
}
var _c19 = (a0, a1, a2) => ({
  focus: a0,
  blur: a1,
  input: a2
});
function TextBoxComponent_span_2_ng_template_1_Template(rf, ctx) {
}
function TextBoxComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, TextBoxComponent_span_2_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.prefix == null ? null : ctx_r1.prefix.templateRef);
  }
}
function TextBoxComponent_kendo_input_separator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function TextBoxComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 11);
    ɵɵlistener("click", function TextBoxComponent_span_6_Template_span_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue());
    })("mousedown", function TextBoxComponent_span_6_Template_span_mousedown_0_listener($event) {
      ɵɵrestoreView(_r3);
      return ɵɵresetView($event.preventDefault());
    })("keydown.enter", function TextBoxComponent_span_6_Template_span_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    })("keydown.space", function TextBoxComponent_span_6_Template_span_keydown_space_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.clearValue($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r1.tabIndex)("title", ctx_r1.clearTitle());
    ɵɵattribute("aria-label", ctx_r1.clearTitle());
    ɵɵadvance();
    ɵɵproperty("name", ctx_r1.clearButtonClass)("customFontClass", ctx_r1.customClearButtonClasses)("svgIcon", ctx_r1.clearButtonSvgIcon || ctx_r1.svgIcon("xIcon"));
  }
}
function TextBoxComponent_kendo_icon_wrapper_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.errorIconClasses)("customFontClass", ctx_r1.customIconClasses)("svgIcon", ctx_r1.errorSvgIcon || ctx_r1.svgIcon("exclamationCircleIcon"));
  }
}
function TextBoxComponent_kendo_icon_wrapper_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r1.successIconClasses)("customFontClass", ctx_r1.customSuccessIconClasses)("svgIcon", ctx_r1.successSvgIcon || ctx_r1.svgIcon("checkIcon"));
  }
}
function TextBoxComponent_kendo_input_separator_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator");
  }
}
function TextBoxComponent_span_10_ng_template_1_Template(rf, ctx) {
}
function TextBoxComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, TextBoxComponent_span_10_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.suffix == null ? null : ctx_r1.suffix.templateRef);
  }
}
var _c20 = ["*"];
var _c21 = [[["kendo-textarea-prefix"]], [["kendo-textarea-suffix"]]];
var _c222 = ["kendo-textarea-prefix", "kendo-textarea-suffix"];
function TextAreaComponent_kendo_input_separator_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("orientation", ctx_r1.separatorOrientation);
  }
}
function TextAreaComponent_kendo_input_separator_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-input-separator", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("orientation", ctx_r1.separatorOrientation);
  }
}
var _c23 = (a0, a1, a2, a3) => ({
  backgroundColor: a0,
  width: a1,
  height: a2,
  minWidth: a3
});
function ColorPaletteComponent_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 5);
    ɵɵlistener("click", function ColorPaletteComponent_tr_3_td_1_Template_td_click_0_listener() {
      const ctx_r1 = ɵɵrestoreView(_r1);
      const color_r3 = ctx_r1.$implicit;
      const colIndex_r4 = ctx_r1.index;
      const rowIndex_r5 = ɵɵnextContext().index;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.handleCellSelection(color_r3, {
        row: rowIndex_r5,
        col: colIndex_r4
      }));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const color_r3 = ctx.$implicit;
    const colIndex_r4 = ctx.index;
    const rowIndex_r5 = ɵɵnextContext().index;
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("k-selected", (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.row) === rowIndex_r5 && (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.col) === colIndex_r4)("k-focus", ctx_r5.focusInComponent && (ctx_r5.focusedCell == null ? null : ctx_r5.focusedCell.row) === rowIndex_r5 && (ctx_r5.focusedCell == null ? null : ctx_r5.focusedCell.col) === colIndex_r4);
    ɵɵproperty("id", "k-" + rowIndex_r5 + "-" + colIndex_r4 + "-" + ctx_r5.uniqueId)("ngStyle", ɵɵpureFunction4(9, _c23, color_r3, ctx_r5.tileLayout.width + "px", ctx_r5.tileLayout.height + "px", ctx_r5.tileLayout.width + "px"));
    ɵɵattribute("aria-selected", (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.row) === rowIndex_r5 && (ctx_r5.selectedCell == null ? null : ctx_r5.selectedCell.col) === colIndex_r4 ? "true" : void 0)("aria-label", color_r3)("value", color_r3);
  }
}
function ColorPaletteComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 3);
    ɵɵtemplate(1, ColorPaletteComponent_tr_3_td_1_Template, 1, 14, "td", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", row_r7);
  }
}
var _c24 = ["opacityInput"];
var _c25 = ["hexInput"];
var _c26 = ["blue"];
var _c27 = ["toggleFormatButton"];
function ColorInputComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "input", 10, 1);
    ɵɵlistener("blur", function ColorInputComponent_div_3_Template_input_blur_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleHexInputBlur());
    })("input", function ColorInputComponent_div_3_Template_input_input_1_listener() {
      ɵɵrestoreView(_r1);
      const hexInput_r3 = ɵɵreference(2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleHexValueChange(hexInput_r3.value));
    })("keydown.tab", function ColorInputComponent_div_3_Template_input_keydown_tab_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusDragHandle($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 11);
    ɵɵtext(4, "HEX");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("k-readonly", ctx_r1.readonly);
    ɵɵproperty("id", ctx_r1.focusableId)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("value", ctx_r1.hex || "")("tabindex", ctx_r1.tabindex.toString());
    ɵɵadvance(2);
    ɵɵproperty("for", ctx_r1.focusableId);
  }
}
function ColorInputComponent_ng_container_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "kendo-numerictextbox", 15, 5);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_ng_container_4_div_16_Template_kendo_numerictextbox_valueChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.rgba.a, $event) || (ctx_r1.rgba.a = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_ng_container_4_div_16_Template_kendo_numerictextbox_blur_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_ng_container_4_div_16_Template_kendo_numerictextbox_valueChange_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    })("keydown.tab", function ColorInputComponent_ng_container_4_div_16_Template_kendo_numerictextbox_keydown_tab_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.focusDragHandle($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 11);
    ɵɵtext(5, "A");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const alpha_r6 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("min", 0)("max", 1);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.a);
    ɵɵproperty("autoCorrect", true)("spinners", false)("step", 0.01)("format", "n2")("decimals", 2);
    ɵɵadvance(3);
    ɵɵproperty("for", alpha_r6.focusableId);
  }
}
function ColorInputComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6)(2, "kendo-numerictextbox", 12, 2);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_valueChange_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rgba.r, $event) || (ctx_r1.rgba.r = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_blur_2_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_valueChange_2_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 11);
    ɵɵtext(5, "R");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 6)(7, "kendo-numerictextbox", 13, 3);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_valueChange_7_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rgba.g, $event) || (ctx_r1.rgba.g = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_blur_7_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_valueChange_7_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    });
    ɵɵelementEnd();
    ɵɵelementStart(9, "label", 11);
    ɵɵtext(10, "G");
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 6)(12, "kendo-numerictextbox", 14, 4);
    ɵɵtwoWayListener("valueChange", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_valueChange_12_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.rgba.b, $event) || (ctx_r1.rgba.b = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("blur", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_blur_12_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaInputBlur());
    })("valueChange", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_valueChange_12_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleRgbaValueChange());
    })("keydown.tab", function ColorInputComponent_ng_container_4_Template_kendo_numerictextbox_keydown_tab_12_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onTab());
    });
    ɵɵelementEnd();
    ɵɵelementStart(14, "label", 11);
    ɵɵtext(15, "B");
    ɵɵelementEnd()();
    ɵɵtemplate(16, ColorInputComponent_ng_container_4_div_16_Template, 6, 13, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const red_r7 = ɵɵreference(3);
    const green_r8 = ɵɵreference(8);
    const blue_r9 = ɵɵreference(13);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("min", 0)("max", 255);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.r);
    ɵɵproperty("autoCorrect", true)("spinners", false)("format", "n")("decimals", 0);
    ɵɵadvance(2);
    ɵɵproperty("for", red_r7.focusableId);
    ɵɵadvance(3);
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("min", 0)("max", 255);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.g);
    ɵɵproperty("autoCorrect", true)("spinners", false)("format", "n")("decimals", 0);
    ɵɵadvance(2);
    ɵɵproperty("for", green_r8.focusableId);
    ɵɵadvance(3);
    ɵɵproperty("localizationService", ctx_r1.localizationService)("disabled", ctx_r1.disabled)("readonly", ctx_r1.readonly)("tabindex", ctx_r1.tabindex)("min", 0)("max", 255);
    ɵɵtwoWayProperty("value", ctx_r1.rgba.b);
    ɵɵproperty("autoCorrect", true)("spinners", false)("format", "n")("decimals", 0);
    ɵɵadvance(2);
    ɵɵproperty("for", blue_r9.focusableId);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.opacity);
  }
}
var _c28 = ["kendoContrastValidation", ""];
function ContrastValidationComponent_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵelement(2, "kendo-icon-wrapper", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.passMessage, " ");
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.checkIcon);
  }
}
function ContrastValidationComponent_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelement(2, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.failMessage, " ");
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.xCircleIcon);
  }
}
function ContrastValidationComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContrastValidationComponent_ng_container_2_span_1_Template, 3, 2, "span", 1)(2, ContrastValidationComponent_ng_container_2_span_2_Template, 3, 2, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.pass);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.pass);
  }
}
var _c29 = ["kendoContrastTool", ""];
function ContrastComponent_ng_container_3_span_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("svgIcon", ctx_r0.checkIcon);
  }
}
function ContrastComponent_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵelement(1, "kendo-icon-wrapper", 8);
    ɵɵtemplate(2, ContrastComponent_ng_container_3_span_1_kendo_icon_wrapper_2_Template, 1, 1, "kendo-icon-wrapper", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.checkIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.satisfiesAAACondition);
  }
}
function ContrastComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵelement(1, "kendo-icon-wrapper", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.xCircleIcon);
  }
}
function ContrastComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContrastComponent_ng_container_3_span_1_Template, 3, 2, "span", 5)(2, ContrastComponent_ng_container_3_span_2_Template, 2, 1, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.satisfiesAACondition);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.satisfiesAACondition);
  }
}
var _c30 = ["kendoColorContrastSvg", ""];
function ColorContrastSvgComponent__svg_path_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 1);
  }
  if (rf & 2) {
    const path_r1 = ctx.$implicit;
    ɵɵattribute("d", path_r1);
  }
}
var _c31 = ["gradientDragHandle"];
var _c322 = ["inputs"];
var _c33 = ["alphaSlider"];
var _c34 = ["gradientWrapper"];
var _c35 = ["hsvRectangle"];
var _c36 = (a0) => ({
  "k-align-self-end": a0
});
function ColorGradientComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const gradientWrapper_r4 = ɵɵreference(5);
    ɵɵstyleMap("position: absolute; overflow: visible; pointer-events: none; left: 0px; top: 0px;");
    ɵɵproperty("wrapper", gradientWrapper_r4 ? gradientWrapper_r4 : void 0)("hsva", ctx_r2.hsva)("backgroundColor", ctx_r2.contrastTool);
  }
}
function ColorGradientComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ColorGradientComponent_button_10_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.reset());
    })("keydown.enter", function ColorGradientComponent_button_10_Template_button_keydown_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.reset());
    })("keydown.space", function ColorGradientComponent_button_10_Template_button_keydown_space_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.reset());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleMap("position: absolute; top: 0; left: 50%; transform: translateX(-50%);");
    ɵɵproperty("svgIcon", ctx_r2.dropletSlashIcon)("tabindex", ctx_r2.innerTabIndex.toString());
    ɵɵattribute("aria-label", ctx_r2.clearButtonTitle)("title", ctx_r2.clearButtonTitle);
  }
}
function ColorGradientComponent_kendo_slider_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-slider", 18, 4);
    ɵɵlistener("valueChange", function ColorGradientComponent_kendo_slider_12_Template_kendo_slider_valueChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleAlphaSliderChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r2.clearButton ? "140" : null, "px");
    ɵɵproperty("tabindex", ctx_r2.innerTabIndex)("ngClass", ɵɵpureFunction1(14, _c36, ctx_r2.clearButton))("dragHandleTitle", ctx_r2.opacitySliderTitle)("disabled", ctx_r2.disabled)("readonly", ctx_r2.readonly)("showButtons", false)("vertical", true)("min", 0)("max", 100)("smallStep", 1)("largeStep", 10)("value", ctx_r2.alphaSliderValue);
  }
}
function ColorGradientComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 19);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.value)("ratio", ctx_r2.contrastTool);
  }
}
var _c37 = ["clearButton"];
var _c38 = ["viewButtons"];
var _c39 = ["kendoFlatColorPickerHeader", ""];
function FlatColorPickerHeaderComponent_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9, 0);
    ɵɵlistener("click", function FlatColorPickerHeaderComponent_div_1_button_1_Template_button_click_0_listener() {
      const view_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onViewButtonClick(view_r2));
    })("keydown.shift.tab", function FlatColorPickerHeaderComponent_div_1_button_1_Template_button_keydown_shift_tab_0_listener($event) {
      const i_r4 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onHeaderTabOut($event, i_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const view_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("tabindex", ctx_r2.innerTabIndex.toString())("icon", ctx_r2.getViewButtonIcon(view_r2))("svgIcon", ctx_r2.getViewButtonsSVGIcon(view_r2))("ngClass", ctx_r2.activeView === view_r2 ? "k-selected" : "");
    ɵɵattribute("title", ctx_r2.getText(view_r2 === "gradient" ? "gradientView" : "paletteView"))("aria-label", ctx_r2.getText(view_r2 === "gradient" ? "gradientView" : "paletteView"))("aria-pressed", ctx_r2.activeView === view_r2);
  }
}
function FlatColorPickerHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, FlatColorPickerHeaderComponent_div_1_button_1_Template, 2, 7, "button", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.views);
  }
}
function FlatColorPickerHeaderComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10, 1);
    ɵɵlistener("click", function FlatColorPickerHeaderComponent_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clearButtonClick.emit());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r2.innerTabIndex.toString())("svgIcon", ctx_r2.dropletSlashIcon);
    ɵɵattribute("aria-label", ctx_r2.getText("clearButton"))("title", ctx_r2.getText("clearButton"));
  }
}
function FlatColorPickerHeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "span", 12);
    ɵɵelementStart(2, "span", 13);
    ɵɵlistener("click", function FlatColorPickerHeaderComponent_div_5_Template_span_click_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.valuePaneClick.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r2.selection);
    ɵɵattribute("title", ctx_r2.getText("previewColor"));
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r2.value);
    ɵɵattribute("title", ctx_r2.getText("revertSelection"));
  }
}
var _c40 = ["first"];
var _c41 = ["last"];
var _c422 = ["kendoFlatColorPickerActionButtons", ""];
var _c43 = ["header"];
var _c44 = ["gradient"];
var _c45 = ["palette"];
var _c46 = ["footer"];
function FlatColorPickerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10, 0);
    ɵɵlistener("clearButtonClick", function FlatColorPickerComponent_div_1_Template_div_clearButtonClick_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClearButtonClick());
    })("viewChange", function FlatColorPickerComponent_div_1_Template_div_viewChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onViewChange($event));
    })("valuePaneClick", function FlatColorPickerComponent_div_1_Template_div_valuePaneClick_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.resetSelection($event));
    })("tabOut", function FlatColorPickerComponent_div_1_Template_div_tabOut_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.lastFocusable($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerTabIndex", ctx_r1.innerTabIndex)("clearButton", ctx_r1.clearButton)("activeView", ctx_r1.activeView)("views", ctx_r1.views)("value", ctx_r1.value)("selection", ctx_r1.selection)("preview", ctx_r1.preview);
  }
}
function FlatColorPickerComponent_kendo_colorgradient_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-colorgradient", 11, 1);
    ɵɵlistener("keydown.tab", function FlatColorPickerComponent_kendo_colorgradient_3_Template_kendo_colorgradient_keydown_tab_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.focusFirstHeaderButton());
    })("valueChange", function FlatColorPickerComponent_kendo_colorgradient_3_Template_kendo_colorgradient_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleValueChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r1.innerTabIndex)("value", ctx_r1.selection)("format", ctx_r1.format)("opacity", ctx_r1.gradientSettings.opacity)("delay", ctx_r1.gradientSettings.delay)("contrastTool", ctx_r1.gradientSettings.contrastTool)("gradientSliderSmallStep", ctx_r1.gradientSettings.gradientSliderSmallStep)("gradientSliderStep", ctx_r1.gradientSettings.gradientSliderStep)("readonly", ctx_r1.readonly);
  }
}
function FlatColorPickerComponent_kendo_colorpalette_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-colorpalette", 12, 2);
    ɵɵlistener("valueChange", function FlatColorPickerComponent_kendo_colorpalette_4_Template_kendo_colorpalette_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleValueChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", ctx_r1.innerTabIndex)("palette", ctx_r1.paletteSettings.palette)("columns", ctx_r1.paletteSettings.columns)("tileSize", ctx_r1.paletteSettings.tileSize)("format", ctx_r1.format)("value", ctx_r1.selection)("readonly", ctx_r1.readonly);
  }
}
function FlatColorPickerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13, 3);
    ɵɵlistener("actionButtonClick", function FlatColorPickerComponent_div_5_Template_div_actionButtonClick_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAction($event));
    })("tabOut", function FlatColorPickerComponent_div_5_Template_div_tabOut_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.firstFocusable.focus());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("innerTabIndex", ctx_r1.innerTabIndex)("ngClass", "k-justify-content-" + ctx_r1.actionsLayout);
  }
}
var _c47 = ["container"];
var _c48 = ["activeColor"];
var _c49 = ["popupTemplate"];
var _c50 = ["flatColorPicker"];
var _c51 = (a0, a1) => ({
  "k-icon-color-preview": a0,
  "k-no-color": a1
});
function ColorPickerComponent_kendo_icon_wrapper_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.iconStyles)("customFontClass", ctx_r0.customIconStyles)("svgIcon", ctx_r0.svgIcon);
  }
}
function ColorPickerComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-flatcolorpicker", 11, 3);
    ɵɵlistener("cancel", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_cancel_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.handleCancelEvent($event));
    })("focusout", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_focusout_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.handlePopupBlur($event));
    })("valueChange", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_valueChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.handleValueChange($event));
    })("keydown", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.handlePopupKeyDown($event));
    })("activeViewChange", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_activeViewChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.activeViewChange.emit($event));
    })("clearButtonClick", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_clearButtonClick_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.clearButtonClick.emit());
    })("actionButtonClick", function ColorPickerComponent_ng_template_7_Template_kendo_flatcolorpicker_actionButtonClick_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.togglePopup());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r0.value)("format", ctx_r0.format)("views", ctx_r0.views)("activeView", ctx_r0.activeView)("actionsLayout", ctx_r0.actionsLayout)("preview", ctx_r0.preview)("gradientSettings", ctx_r0.gradientSettings)("paletteSettings", ctx_r0.paletteSettings)("clearButton", ctx_r0.clearButton);
  }
}
var _c522 = (a0, a1) => ({
  blur: a0,
  change: a1
});
var _c53 = [[["label"], ["kendo-label"]], "*", [["kendo-formhint"]], [["kendo-formerror"]]];
var _c54 = ["label, kendo-label", "*", "kendo-formhint", "kendo-formerror"];
function FormFieldComponent_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2, ["*ngIf", "hasHints"]);
  }
}
function FormFieldComponent_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3, ["*ngIf", "hasErrors"]);
  }
}
var _c55 = ["canvas"];
var _c56 = ["minimize"];
var _c57 = ["maximize"];
function SignatureComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12, 1);
    ɵɵlistener("click", function SignatureComponent_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMaximize());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.svgIcon("hyperlinkOpenIcon"))("size", ctx_r1.size)("title", ctx_r1.maximizeTitle);
    ɵɵattribute("aria-label", ctx_r1.maximizeTitle);
  }
}
function SignatureComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13, 2);
    ɵɵlistener("click", function SignatureComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMinimize());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.svgIcon("hyperlinkOpenIcon"))("size", ctx_r1.size)("title", ctx_r1.minimizeTitle);
    ɵɵattribute("aria-label", ctx_r1.minimizeTitle);
  }
}
function SignatureComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
}
function SignatureComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function SignatureComponent_button_8_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("svgIcon", ctx_r1.svgIcon("xIcon"))("size", ctx_r1.size)("title", ctx_r1.clearTitle);
    ɵɵattribute("aria-label", ctx_r1.clearTitle);
  }
}
function SignatureComponent_kendo_dialog_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-dialog", 16);
    ɵɵlistener("click", function SignatureComponent_kendo_dialog_9_Template_kendo_dialog_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogClick($event));
    })("keydown", function SignatureComponent_kendo_dialog_9_Template_kendo_dialog_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogKeydown($event));
    });
    ɵɵelementStart(1, "kendo-signature", 17);
    ɵɵlistener("valueChange", function SignatureComponent_kendo_dialog_9_Template_kendo_signature_valueChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogValueChange($event));
    })("minimize", function SignatureComponent_kendo_dialog_9_Template_kendo_signature_minimize_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDialogClose());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("k-signature-maximized", true);
    ɵɵproperty("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled)("size", ctx_r1.size)("rounded", ctx_r1.rounded)("fillMode", ctx_r1.fillMode)("color", ctx_r1.color)("backgroundColor", ctx_r1.backgroundColor)("strokeWidth", ctx_r1.strokeWidth)("smooth", ctx_r1.smooth)("value", ctx_r1.popupValue)("hideLine", ctx_r1.hideLine)("maximized", true)("width", ctx_r1.popupWidth)("height", ctx_r1.popupHeight)("popupScale", ctx_r1.popupScale)("exportScale", 1 / ctx_r1.popupScale * ctx_r1.exportScale)("parentLocalization", ctx_r1.localization);
  }
}
var _c58 = (a0, a1) => ({
  "k-selected": a0,
  "k-hover": a1
});
var _c59 = (a0) => ({
  index: a0
});
var _c60 = (a0) => ({
  "clipPath": a0
});
function RatingComponent_span_1_ng_container_1_ng_container_1_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", item_r4.selected || item_r4.hovered ? "star" : "star-outline")("svgIcon", item_r4.selected || item_r4.hovered ? ctx_r1.svgIcon : ctx_r1.svgIconOutline);
  }
}
function RatingComponent_span_1_ng_container_1_ng_container_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("name", item_r4.selected || item_r4.hovered ? ctx_r1.icon : ctx_r1.icon + "-outline");
  }
}
function RatingComponent_span_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RatingComponent_span_1_ng_container_1_ng_container_1_kendo_icon_wrapper_1_Template, 1, 2, "kendo-icon-wrapper", 5)(2, RatingComponent_span_1_ng_container_1_ng_container_1_kendo_icon_wrapper_2_Template, 1, 1, "kendo-icon-wrapper", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon);
  }
}
function RatingComponent_span_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function RatingComponent_span_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_span_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const i_r3 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c59, i_r3));
  }
}
function RatingComponent_span_1_ng_container_1_3_ng_template_0_Template(rf, ctx) {
}
function RatingComponent_span_1_ng_container_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_span_1_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const i_r3 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.hoveredItemTemplate == null ? null : ctx_r1.hoveredItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c59, i_r3));
  }
}
function RatingComponent_span_1_ng_container_1_4_ng_template_0_Template(rf, ctx) {
}
function RatingComponent_span_1_ng_container_1_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, RatingComponent_span_1_ng_container_1_4_ng_template_0_Template, 0, 0, "ng-template", 9);
  }
  if (rf & 2) {
    const i_r3 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.selectedItemTemplate == null ? null : ctx_r1.selectedItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c59, i_r3));
  }
}
function RatingComponent_span_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RatingComponent_span_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 4)(2, RatingComponent_span_1_ng_container_1_2_Template, 1, 4, null, 4)(3, RatingComponent_span_1_ng_container_1_3_Template, 1, 4, null, 4)(4, RatingComponent_span_1_ng_container_1_4_Template, 1, 4, null, 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate && !item_r4.selected && !item_r4.hovered);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hoveredItemTemplate && item_r4.hovered);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.selectedItemTemplate && item_r4.selected && !item_r4.hovered);
  }
}
function RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", "star-outline")("svgIcon", ctx_r1.svgIconOutline);
  }
}
function RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r1.icon + "-outline");
  }
}
function RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", "star")("svgIcon", ctx_r1.svgIcon);
  }
}
function RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("name", ctx_r1.icon);
  }
}
function RatingComponent_span_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 10);
    ɵɵtemplate(2, RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_2_Template, 1, 2, "kendo-icon-wrapper", 5)(3, RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_3_Template, 1, 1, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 12);
    ɵɵtemplate(5, RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_5_Template, 1, 2, "kendo-icon-wrapper", 5)(6, RatingComponent_span_1_ng_container_2_ng_container_1_kendo_icon_wrapper_6_Template, 1, 1, "kendo-icon-wrapper", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c60, ctx_r1.direction === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon);
  }
}
function RatingComponent_span_1_ng_container_2_ng_template_3_Template(rf, ctx) {
}
function RatingComponent_span_1_ng_container_2_span_4_ng_template_1_Template(rf, ctx) {
}
function RatingComponent_span_1_ng_container_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, RatingComponent_span_1_ng_container_2_span_4_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r3 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c60, ctx_r1.direction === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.hoveredItemTemplate == null ? null : ctx_r1.hoveredItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c59, i_r3));
  }
}
function RatingComponent_span_1_ng_container_2_span_5_ng_template_1_Template(rf, ctx) {
}
function RatingComponent_span_1_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, RatingComponent_span_1_ng_container_2_span_5_ng_template_1_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r3 = ɵɵnextContext(2).index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c60, ctx_r1.direction === "rtl" ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.selectedItemTemplate == null ? null : ctx_r1.selectedItemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c59, i_r3));
  }
}
function RatingComponent_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, RatingComponent_span_1_ng_container_2_ng_container_1_Template, 7, 7, "ng-container", 4);
    ɵɵelementStart(2, "span", 10);
    ɵɵtemplate(3, RatingComponent_span_1_ng_container_2_ng_template_3_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
    ɵɵtemplate(4, RatingComponent_span_1_ng_container_2_span_4_Template, 2, 7, "span", 11)(5, RatingComponent_span_1_ng_container_2_span_5_Template, 2, 7, "span", 11);
    ɵɵelement(6, "span");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const item_r4 = ctx_r4.$implicit;
    const i_r3 = ctx_r4.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate == null ? null : ctx_r1.itemTemplate.templateRef)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c59, i_r3));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hoveredItemTemplate && item_r4.hovered);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.selectedItemTemplate && item_r4.selected && !item_r4.hovered);
    ɵɵadvance();
    ɵɵstyleProp("width", 24, "px")("height", 24, "px")("display", "block");
  }
}
function RatingComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 3);
    ɵɵlistener("mouseenter", function RatingComponent_span_1_Template_span_mouseenter_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMouseEnter($event));
    })("mouseout", function RatingComponent_span_1_Template_span_mouseout_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMouseOut());
    })("click", function RatingComponent_span_1_Template_span_click_0_listener($event) {
      const i_r3 = ɵɵrestoreView(_r1).index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeValue(i_r3, $event));
    });
    ɵɵtemplate(1, RatingComponent_span_1_ng_container_1_Template, 5, 4, "ng-container", 4)(2, RatingComponent_span_1_ng_container_2_Template, 7, 13, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵproperty("title", item_r4.title)("ngClass", ɵɵpureFunction2(4, _c58, item_r4.selected || item_r4.selectedIndicator, item_r4.hovered));
    ɵɵadvance();
    ɵɵproperty("ngIf", !item_r4.half);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4.half);
  }
}
function RatingComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.label);
  }
}
var isPresent3 = (value) => value !== null && value !== void 0;
var areSame = (value1, value2) => value1 === value2 || value1 === null && value2 === void 0 || value1 === void 0 && value2 === null;
var requiresZoneOnBlur = (ngControl) => ngControl && (!ngControl.touched || ngControl.control && ngControl.control.updateOn === "blur");
var fitIntoBounds = (contender, min, max) => {
  if (!isPresent3(contender) || isNaN(contender)) {
    return min;
  }
  return contender <= min ? min : contender >= max ? max : contender;
};
var SIZE_MAP = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDED_MAP = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var isNone = (style2) => style2 === "none";
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZE_MAP[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZE_MAP[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDED_MAP[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDED_MAP[newValue]}` : ""
      };
    case "fillMode":
      return {
        toRemove: `k-${componentType}-${previousValue}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${newValue}` : ""
      };
    default:
      break;
  }
};
var COMPONENT_TYPE = new InjectionToken("TYPE_TOKEN");
var MAX_PRECISION = 20;
var limitPrecision = (precision) => Math.min(precision, MAX_PRECISION);
var fractionLength = (value) => {
  return (String(value).split(".")[1] || "").length;
};
var maxFractionLength = (value1, value2) => {
  return Math.max(fractionLength(value1), fractionLength(value2));
};
var toFixedPrecision = (value, precision) => {
  const maxPrecision = limitPrecision(precision);
  return parseFloat(value.toFixed(maxPrecision));
};
var add = (value1, value2) => {
  const maxPrecision = maxFractionLength(value1, value2);
  return toFixedPrecision(value1 + value2, maxPrecision);
};
var subtract = (value1, value2) => {
  return add(value1, -value2);
};
var multiply = (value1, value2) => {
  const maxPrecision = fractionLength(value1) + fractionLength(value2);
  return toFixedPrecision(value1 * value2, maxPrecision);
};
var divide = (dividend, divisor) => {
  if (divisor === 0) {
    return NaN;
  }
  const power = maxFractionLength(dividend, divisor);
  const correctionValue = Math.pow(10, power);
  return correctionValue * dividend / (correctionValue * divisor);
};
var remainder = (dividend, divisor) => {
  return Math.abs(subtract(dividend, multiply(divisor, Math.floor(divide(dividend, divisor)))));
};
var calculateFixedTrackSize = ({
  max,
  min,
  smallStep,
  fixedTickWidth
}) => (max - min) / smallStep * fixedTickWidth;
var calculateTicksCount = (min = 0, max = 0, smallStep = 1) => {
  if (smallStep <= 0) {
    throw new Error("Invalid argument: smallStep must be a positive number");
  }
  const adjustedRange = Math.abs(subtract(max, min));
  const adjustedRatio = Math.floor(divide(adjustedRange, smallStep));
  const result = add(adjustedRatio, 1);
  return result;
};
var calculateValueFromTick = (index, {
  max,
  min,
  smallStep,
  reverse,
  vertical
}) => {
  const value = add(min, multiply(index, smallStep));
  return vertical || reverse ? Math.abs(subtract(value, max)) : value;
};
var calculateHandlePosition = ({
  trackWidth,
  min,
  max,
  value
}) => {
  const step = trackWidth / Math.abs(max - min);
  const pos = isPresent3(value) ? step * (value - min) : min;
  return Math.floor(pos);
};
var decreaseValueToStep = (value, {
  max,
  min,
  smallStep,
  largeStep
}, large = false) => {
  const step = large && largeStep ? multiply(smallStep, largeStep) : smallStep;
  const stepValue = subtract(value, min);
  let result;
  const stepRemainder = remainder(stepValue, step);
  if (stepRemainder === 0) {
    result = subtract(stepValue, step);
  } else {
    result = subtract(stepValue, stepRemainder);
  }
  return limitValue2(add(result, min), min, max);
};
var increaseValueToStep = (value, {
  max,
  min,
  smallStep,
  largeStep
}, large = false) => {
  const step = large && largeStep ? multiply(smallStep, largeStep) : smallStep;
  const stepValue = subtract(value, min);
  const stepRemainder = remainder(stepValue, step);
  const result = add(subtract(stepValue, stepRemainder), step);
  return limitValue2(add(result, min), min, max);
};
var isStartHandle = (dragHandle) => dragHandle.id.indexOf("k-start-handle") > -1;
var snapValue = (value, options) => {
  const {
    smallStep,
    min,
    max
  } = options;
  const limited = limitValue2(value, min, max);
  if (value !== limited) {
    return limited;
  }
  const left = decreaseValueToStep(value, options);
  const right = increaseValueToStep(value, options);
  if ((value - min) % smallStep === 0) {
    return value;
  }
  if (right - value <= (right - left) / 2) {
    return right;
  }
  return left;
};
var trimValue = (max, min, value) => {
  if (value > max) {
    return max;
  }
  if (value < min) {
    return min;
  }
  return value;
};
var trimValueRange = (max, min, value) => {
  return value ? [trimValue(max, min, value[0]), trimValue(max, min, value[1])] : [min, min];
};
var identity = (value) => value;
var isSameRange = (value1, value2) => areSame(value1[0], value2[0]) && areSame(value1[1], value2[1]);
var elementOffset2 = (element) => {
  const box = element.getBoundingClientRect();
  const documentElement = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0),
    top: box.top + (window.pageYOffset || documentElement.scrollTop) - (documentElement.clientTop || 0)
  };
};
var limitValue2 = (value, min, max) => {
  return Math.max(Math.min(value, max), min);
};
var eventValue = (eventArgs, scaleElement, options) => {
  const {
    min,
    max,
    vertical,
    rtl
  } = options;
  const trackOffset = elementOffset2(scaleElement);
  const offset = vertical ? eventArgs.pageY - trackOffset.top : eventArgs.pageX - trackOffset.left;
  const scale = (max - min) / (vertical ? scaleElement.clientHeight : scaleElement.clientWidth);
  const offsetValue = offset * scale;
  let value = rtl || vertical ? max - offsetValue : min + offsetValue;
  const stepFractionLength = fractionLength(options.smallStep);
  value = toFixedPrecision(value, stepFractionLength + 1);
  return snapValue(value, options);
};
var increment = (options) => {
  return increaseValueToStep(options.value, options);
};
var decrement = (options) => {
  return decreaseValueToStep(options.value, options);
};
var incrementLarge = (options) => {
  return increaseValueToStep(options.value, options, true);
};
var decrementLarge = (options) => {
  return decreaseValueToStep(options.value, options, true);
};
var validateValue = (value) => {
  if (isDevMode && value && value[0] > value[1]) {
    throw new Error("[RangeSlider] The start value should not be greater than the end value.");
  }
};
var SliderModelBase = class {
  constructor(props, wrapper, track, renderer, button) {
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.renderer = renderer;
    this.button = button;
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.tickSizes = this.getTickSizes();
  }
  resizeTrack() {
    const orientation = this.props.vertical ? "height" : "width";
    const altOrientation = this.props.vertical ? "width" : "height";
    const trackWidth = this.trackWidth();
    this.track.parentElement.style[orientation] = `${trackWidth}px`;
    this.track.parentElement.style[altOrientation] = "";
  }
  resizeTicks(ticksContainer, ticks) {
    const dimension = this.props.vertical ? "height" : "width";
    [...ticks].map((tick, index) => tick.style[dimension] = `${this.tickSizes[index]}px`);
    if (this.props.vertical) {
      this.adjustPadding(ticksContainer);
    }
  }
  resizeWrapper() {
    const dimension = this.props.vertical ? "height" : "width";
    const fixedTrackWidth = calculateFixedTrackSize(this.props);
    const wrapperParentEl = this.wrapper.parentElement;
    if (fixedTrackWidth) {
      wrapperParentEl.style[dimension] = "auto";
    }
  }
  trackWidth() {
    if (this.props.fixedTickWidth) {
      return calculateFixedTrackSize(this.props);
    }
    const wrapperWidth = this.elementSize(this.wrapper.parentElement);
    const trackOffset = this.getTrackOffset();
    return wrapperWidth - trackOffset;
  }
  getTickSizes() {
    const {
      min,
      max,
      smallStep
    } = this.props;
    const count = calculateTicksCount(min, max, smallStep);
    const trackSize = this.trackWidth();
    const distStep = trackSize / subtract(max, min);
    const result = [];
    let usedSpace = 0;
    let endPoint = 0;
    for (let i = 0; i < count; i++) {
      if (i === 0 || i === count - 1) {
        endPoint += smallStep / 2 * distStep;
      } else {
        endPoint += smallStep * distStep;
      }
      endPoint = +endPoint.toFixed(2) - 0.01;
      const size = Math.round(endPoint - usedSpace);
      result.push(size);
      usedSpace += size;
    }
    if (usedSpace >= trackSize) {
      result[result.length - 1] -= 1;
    }
    return result;
  }
  adjustPadding(ticksContainer) {
    const totalTickSize = this.tickSizes.reduce((prev, curr) => prev + curr, 0);
    const trackWidth = this.trackWidth();
    const reminder = trackWidth - totalTickSize;
    if (reminder !== 0) {
      const padding = reminder + this.elementOffset(this.track);
      ticksContainer.style.paddingTop = `${padding}px`;
    }
  }
  elementOffset(element) {
    const {
      vertical
    } = this.props;
    const style2 = getComputedStyle(element);
    return parseInt(vertical ? style2.bottom : style2.left, 10);
  }
  elementSize(element) {
    const {
      vertical
    } = this.props;
    return vertical ? element.clientHeight : element.clientWidth;
  }
  getTrackOffset() {
    const showButtons = this.props.buttons && isPresent3(this.button);
    if (!showButtons) {
      return 0;
    }
    const BUTTONS_COUNT = 2;
    const buttonStyles = this.button.nativeElement.getBoundingClientRect();
    const wrapperGap = parseInt(window.getComputedStyle(this.wrapper.parentElement).gap);
    const buttonSize = this.props.vertical ? buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.height : buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.width;
    return (buttonSize + wrapperGap) * BUTTONS_COUNT;
  }
};
var SliderModel = class extends SliderModelBase {
  positionHandle(dragHandle) {
    const {
      max,
      min,
      reverse,
      vertical
    } = this.props;
    const position = vertical ? "bottom" : reverse ? "right" : "left";
    const trackWidth = this.trackWidth();
    const value = trimValue(max, min, this.props.value);
    this.handlePosition = calculateHandlePosition({
      min,
      max,
      reverse,
      value,
      trackWidth
    });
    this.renderer.setStyle(dragHandle, position, `${this.handlePosition}px`);
  }
  positionSelection(selection) {
    const {
      vertical
    } = this.props;
    const dimension = vertical ? "height" : "width";
    const size = this.handlePosition;
    this.renderer.setStyle(selection, dimension, `${size}px`);
  }
};
var UNTOUCHED = "ng-untouched";
var toClassList2 = (classNames) => String(classNames).trim().split(" ");
var hasClass = (element, className) => Boolean(toClassList2(element.className).find((name) => name === className));
function invokeElementMethod(element, name, ...args) {
  if (element && element.nativeElement) {
    return element.nativeElement[name].apply(element.nativeElement, args);
  }
}
var isUntouched = (element) => element && element.nativeElement && hasClass(element.nativeElement, UNTOUCHED);
var containsFocus = (hostElement, contender) => hostElement && contender && (hostElement === contender || hostElement.contains(contender));
var closest2 = (node, predicate) => {
  while (node && !predicate(node)) {
    node = node.parentNode;
  }
  return node;
};
var packageMetadata2 = {
  name: "@progress/kendo-angular-inputs",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1720607858,
  version: "16.4.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var LabelTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
LabelTemplateDirective.ɵfac = function LabelTemplateDirective_Factory(t) {
  return new (t || LabelTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
LabelTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: LabelTemplateDirective,
  selectors: [["", "kendoSliderLabelTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSliderLabelTemplate]"
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
var SliderBase = class {
  constructor(localizationService, injector, renderer, ngZone, changeDetector, hostElement) {
    this.localizationService = localizationService;
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    this.title = identity;
    this.tickPlacement = "both";
    this.vertical = false;
    this.min = 0;
    this.max = 10;
    this.smallStep = 1;
    this.largeStep = null;
    this.disabled = false;
    this.readonly = false;
    this.tabindex = 0;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.sliderClass = true;
    this.subscriptions = new import_rxjs2.Subscription();
    this.ifEnabled = (callback, event) => {
      if (!this.isDisabled) {
        callback.call(this, event);
      }
    };
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  get horizontalClass() {
    return !this.vertical;
  }
  get verticalClass() {
    return this.vertical;
  }
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  ngOnInit() {
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
      this.sizeComponent();
    }));
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.control = this.injector.get(NgControl, null);
  }
  /**
   * @hidden
   */
  get isDisabled() {
    return this.disabled || this.readonly;
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  get reverse() {
    return this.localizationService.rtl && !this.vertical;
  }
  get keyBinding() {
    const reverse = this.reverse;
    return {
      [Keys.ArrowLeft]: reverse ? increment : decrement,
      [Keys.ArrowRight]: reverse ? decrement : increment,
      [Keys.ArrowDown]: decrement,
      [Keys.ArrowUp]: increment,
      [Keys.PageUp]: incrementLarge,
      [Keys.PageDown]: decrementLarge,
      [Keys.Home]: ({
        min
      }) => min,
      [Keys.End]: ({
        max
      }) => max
    };
  }
  resetStyles(elements) {
    elements.forEach((el) => {
      if (el) {
        if (this.vertical) {
          this.renderer.removeStyle(el, "width");
          this.renderer.removeStyle(el, "left");
          this.renderer.removeStyle(el, "right");
        } else {
          this.renderer.removeStyle(el, "height");
          this.renderer.removeStyle(el, "bottom");
        }
        this.renderer.removeStyle(el, "padding-top");
      }
    });
  }
};
SliderBase.ɵfac = function SliderBase_Factory(t) {
  return new (t || SliderBase)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
SliderBase.ɵcmp = ɵɵdefineComponent({
  type: SliderBase,
  selectors: [["kendo-slider-base"]],
  contentQueries: function SliderBase_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, LabelTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelTemplate = _t.first);
    }
  },
  viewQuery: function SliderBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 7);
      ɵɵviewQuery(_c12, 7);
      ɵɵviewQuery(_c22, 7);
      ɵɵviewQuery(_c32, 5, ElementRef);
      ɵɵviewQuery(_c32, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.track = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderSelection = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticks = _t.first);
    }
  },
  hostVars: 11,
  hostBindings: function SliderBase_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-slider-horizontal", ctx.horizontalClass)("k-slider-vertical", ctx.verticalClass)("k-slider", ctx.sliderClass)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    title: "title",
    tickPlacement: "tickPlacement",
    vertical: "vertical",
    min: "min",
    max: "max",
    smallStep: "smallStep",
    largeStep: "largeStep",
    fixedTickWidth: "fixedTickWidth",
    disabled: "disabled",
    readonly: "readonly",
    tabindex: "tabindex"
  },
  outputs: {
    onFocus: "focus",
    onBlur: "blur",
    valueChange: "valueChange"
  },
  decls: 0,
  vars: 0,
  template: function SliderBase_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderBase, [{
    type: Component,
    args: [{
      selector: "kendo-slider-base",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Injector
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    title: [{
      type: Input
    }],
    tickPlacement: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    smallStep: [{
      type: Input
    }],
    largeStep: [{
      type: Input
    }],
    fixedTickWidth: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    horizontalClass: [{
      type: HostBinding,
      args: ["class.k-slider-horizontal"]
    }],
    verticalClass: [{
      type: HostBinding,
      args: ["class.k-slider-vertical"]
    }],
    sliderClass: [{
      type: HostBinding,
      args: ["class.k-slider"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    wrapper: [{
      type: ViewChild,
      args: ["wrap", {
        static: true
      }]
    }],
    track: [{
      type: ViewChild,
      args: ["track", {
        static: true
      }]
    }],
    sliderSelection: [{
      type: ViewChild,
      args: ["sliderSelection", {
        static: true
      }]
    }],
    ticksContainer: [{
      type: ViewChild,
      args: ["ticks", {
        read: ElementRef,
        static: false
      }]
    }],
    ticks: [{
      type: ViewChild,
      args: ["ticks", {
        static: false
      }]
    }],
    labelTemplate: [{
      type: ContentChild,
      args: [LabelTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var SliderTick = class {
  constructor(value) {
    this.value = value;
    this.classes = {
      "k-tick": true
    };
  }
};
var SliderTicksComponent = class {
  constructor() {
    this.wrapperClasses = "k-reset k-slider-items";
    this.ticks = [];
  }
  ngOnChanges(_) {
    this.createTicks();
  }
  createTicks() {
    const count = calculateTicksCount(this.min, this.max, this.step);
    const largeStep = this.largeStep;
    const tickValueProps = {
      max: this.max,
      min: this.min,
      smallStep: this.step
    };
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(new SliderTick(calculateValueFromTick(i, tickValueProps)));
      if (largeStep && i % largeStep === 0) {
        result[i].large = true;
        result[i].classes["k-tick-large"] = true;
      }
    }
    if (result.length > 0) {
      Object.assign(result[0].classes, this.endTickClasses(true));
      Object.assign(result[result.length - 1].classes, this.endTickClasses(false));
    }
    this.ticks = result;
  }
  endTickClasses(first) {
    return {
      "k-first": first && !this.vertical || !first && this.vertical,
      "k-last": !first && !this.vertical || first && this.vertical
    };
  }
};
SliderTicksComponent.ɵfac = function SliderTicksComponent_Factory(t) {
  return new (t || SliderTicksComponent)();
};
SliderTicksComponent.ɵcmp = ɵɵdefineComponent({
  type: SliderTicksComponent,
  selectors: [["", "kendoSliderTicks", ""]],
  viewQuery: function SliderTicksComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c42, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tickElements = _t);
    }
  },
  hostVars: 2,
  hostBindings: function SliderTicksComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.wrapperClasses);
    }
  },
  inputs: {
    tickTitle: "tickTitle",
    vertical: "vertical",
    step: "step",
    largeStep: "largeStep",
    min: "min",
    max: "max",
    labelTemplate: "labelTemplate"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c52,
  decls: 3,
  vars: 1,
  consts: [["defaultLabel", ""], ["tickElement", ""], ["role", "presentation", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], ["role", "presentation", 3, "ngClass", "title"], [3, "ngSwitch"], ["class", "k-label", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "k-label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function SliderTicksComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SliderTicksComponent_li_0_Template, 5, 5, "li", 2)(1, SliderTicksComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.ticks);
    }
  },
  dependencies: [NgClass, NgForOf, NgTemplateOutlet, NgSwitch, NgSwitchCase],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderTicksComponent, [{
    type: Component,
    args: [{
      selector: "[kendoSliderTicks]",
      template: `
    <li #tickElement *ngFor="let tick of ticks;"
        [ngClass]="tick.classes"
        title="{{ tickTitle(tick.value) }}"
        role="presentation"
     >
         <ng-container [ngSwitch]="tick.large">
            <span class="k-label" *ngSwitchCase="true">
                <ng-container [ngTemplateOutlet]="labelTemplate || defaultLabel" [ngTemplateOutletContext]="tick">
                </ng-container>
            </span>
            <ng-container *ngSwitchCase="false">&nbsp;</ng-container>
         </ng-container>
     </li>

     <ng-template #defaultLabel let-value="value">
        {{ tickTitle(value) }}
     </ng-template>
  `
    }]
  }], null, {
    wrapperClasses: [{
      type: HostBinding,
      args: ["class"]
    }],
    tickTitle: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    largeStep: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    labelTemplate: [{
      type: Input
    }],
    tickElements: [{
      type: ViewChildren,
      args: ["tickElement"]
    }]
  });
})();
var SliderMessages = class extends ComponentMessages {
};
SliderMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵSliderMessages_BaseFactory;
  return function SliderMessages_Factory(t) {
    return (ɵSliderMessages_BaseFactory || (ɵSliderMessages_BaseFactory = ɵɵgetInheritedFactory(SliderMessages)))(t || SliderMessages);
  };
})();
SliderMessages.ɵdir = ɵɵdefineDirective({
  type: SliderMessages,
  selectors: [["kendo-slider-messages-base"]],
  inputs: {
    decrement: "decrement",
    increment: "increment",
    dragHandle: "dragHandle"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-slider-messages-base"
    }]
  }], null, {
    decrement: [{
      type: Input
    }],
    increment: [{
      type: Input
    }],
    dragHandle: [{
      type: Input
    }]
  });
})();
var LocalizedSliderMessagesDirective = class extends SliderMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedSliderMessagesDirective.ɵfac = function LocalizedSliderMessagesDirective_Factory(t) {
  return new (t || LocalizedSliderMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedSliderMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedSliderMessagesDirective,
  selectors: [["", "kendoSliderLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: SliderMessages,
    useExisting: forwardRef(() => LocalizedSliderMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSliderMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: SliderMessages,
        useExisting: forwardRef(() => LocalizedSliderMessagesDirective)
      }],
      selector: "[kendoSliderLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var PRESSED$1 = "k-pressed";
var SliderComponent = class extends SliderBase {
  constructor(localization, injector, renderer, ngZone, changeDetector, hostElement) {
    super(localization, injector, renderer, ngZone, changeDetector, hostElement);
    this.localization = localization;
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    this.focusableId = `k-${guid()}`;
    this.animate = true;
    this.showButtons = true;
    this.value = this.min;
    this.arrowUpIcon = caretAltUpIcon;
    this.arrowDownIcon = caretAltDownIcon;
    this.arrowLeftIcon = caretAltLeftIcon;
    this.arrowRightIcon = caretAltRightIcon;
    this.focusChangedProgrammatically = false;
    this.onWrapClick = (args) => {
      const target = args.target;
      if (!this.isDisabled && !target.closest(".k-button")) {
        const value = eventValue(args, this.track.nativeElement, this.getProps());
        this.changeValue(value);
      }
      invokeElementMethod(this.draghandle, "focus");
    };
    this.onKeyDown = (e) => {
      const options = this.getProps();
      const {
        max,
        min
      } = options;
      const handler = this.keyBinding[e.keyCode];
      if (this.isDisabled || !handler) {
        return;
      }
      const value = handler(options);
      this.changeValue(trimValue(max, min, value));
      e.preventDefault();
    };
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    this.decreaseValue = () => {
      this.changeValue(decreaseValueToStep(this.value, this.getProps()));
    };
    this.increaseValue = () => {
      this.changeValue(increaseValueToStep(this.value, this.getProps()));
    };
    this.handleBlur = () => {
      this.changeDetector.markForCheck();
      this.focused = false;
      if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
          if (!this.focusChangedProgrammatically) {
            this.onBlur.emit();
          }
        });
      }
    };
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * @hidden
   */
  get currentValue() {
    return isPresent3(this.value) ? this.value.toString() : "";
  }
  /**
   * Focuses the Slider.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="slider.focus()">Focus</button>
   *  <kendo-slider #slider></kendo-slider>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    if (!this.disabled) {
      this.focusChangedProgrammatically = true;
      invokeElementMethod(this.draghandle, "focus");
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Blurs the Slider.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    invokeElementMethod(this.draghandle, "blur");
    this.handleBlur();
    this.focusChangedProgrammatically = false;
  }
  ngOnChanges(changes) {
    if (anyChanged(["value", "fixedTickWidth", "tickPlacement"], changes, true)) {
      this.ngZone.onStable.asObservable().pipe((0, import_operators2.take)(1)).subscribe(() => {
        this.sizeComponent(false);
      });
    }
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.showButtons) {
      this.setValueChangeInterval(this.increaseButton.nativeElement, () => this.increaseValue());
      this.setValueChangeInterval(this.decreaseButton.nativeElement, () => this.decreaseValue());
    }
    this.sizeComponent(false);
    if (this.ticks) {
      this.ticks.tickElements.changes.subscribe(() => this.sizeComponent(false));
    }
    this.attachElementEventHandlers();
    this.isSliderInvalid();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get incrementMessage() {
    return this.incrementTitle || this.localizationService.get("increment");
  }
  /**
   * @hidden
   */
  get decrementMessage() {
    return this.decrementTitle || this.localizationService.get("decrement");
  }
  /**
   * @hidden
   */
  get dragHandleMessage() {
    return this.dragHandleTitle || this.localizationService.get("dragHandle");
  }
  /**
   * @hidden
   */
  handleDragPress(args) {
    if (args.originalEvent) {
      args.originalEvent.preventDefault();
    }
    this.renderer.removeClass(this.hostElement.nativeElement, "k-slider-transitions");
  }
  /**
   * @hidden
   */
  onHandleDrag(args) {
    this.dragging = true;
    this.changeValue(eventValue(args, this.track.nativeElement, this.getProps()));
  }
  /**
   * @hidden
   */
  onHandleRelease() {
    this.dragging = false;
    this.renderer.addClass(this.hostElement.nativeElement, "k-slider-transitions");
  }
  //ngModel binding
  /**
   * @hidden
   */
  writeValue(value) {
    this.changeDetector.markForCheck();
    this.value = value;
    this.sizeComponent(this.animate);
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  changeValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.sizeComponent(this.animate);
        this.changeDetector.markForCheck();
      });
    }
    this.isSliderInvalid();
  }
  /**
   * @hidden
   */
  sizeComponent(animate2) {
    if (!isDocumentAvailable()) {
      return;
    }
    const wrapper = this.wrapper.nativeElement;
    const track = this.track.nativeElement;
    const selectionEl = this.sliderSelection.nativeElement;
    const dragHandleEl = this.draghandle.nativeElement;
    const ticks = this.ticks ? this.ticksContainer.nativeElement : null;
    if (!animate2) {
      this.renderer.removeClass(this.hostElement.nativeElement, "k-slider-transitions");
    }
    this.resetStyles([track, selectionEl, dragHandleEl, ticks, this.hostElement.nativeElement]);
    const props = this.getProps();
    const model = new SliderModel(props, wrapper, track, this.renderer, this.increaseButton);
    model.resizeTrack();
    if (this.ticks) {
      model.resizeTicks(this.ticksContainer.nativeElement, this.ticks.tickElements.map((element) => element.nativeElement));
    }
    model.positionHandle(dragHandleEl);
    model.positionSelection(selectionEl);
    if (!animate2) {
      this.hostElement.nativeElement.getBoundingClientRect();
      this.renderer.addClass(this.hostElement.nativeElement, "k-slider-transitions");
    }
    if (this.fixedTickWidth) {
      model.resizeWrapper();
    }
  }
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      this.isFocused = value;
    }
  }
  set dragging(value) {
    if (this.isDragged !== value && this.sliderSelection && this.draghandle) {
      const sliderSelection = this.sliderSelection.nativeElement;
      const draghandle = this.draghandle.nativeElement;
      if (value) {
        this.renderer.addClass(sliderSelection, PRESSED$1);
        this.renderer.addClass(draghandle, PRESSED$1);
      } else {
        this.renderer.removeClass(sliderSelection, PRESSED$1);
        this.renderer.removeClass(draghandle, PRESSED$1);
      }
      this.isDragged = value;
    }
  }
  setValueChangeInterval(element, callback) {
    this.ngZone.runOutsideAngular(() => {
      const pointerdown = (0, import_rxjs2.fromEvent)(element, "pointerdown");
      const pointerup = (0, import_rxjs2.fromEvent)(element, "pointerup");
      const pointerout = (0, import_rxjs2.fromEvent)(element, "pointerout");
      const subscription = pointerdown.pipe((0, import_operators2.tap)((e) => e.preventDefault()), (0, import_operators2.filter)((e) => e.button === 0 && !this.isDisabled), (0, import_operators2.concatMap)(() => (0, import_rxjs2.interval)(150).pipe((0, import_operators2.startWith)(-1), (0, import_operators2.takeUntil)((0, import_rxjs2.merge)(pointerup, pointerout))))).subscribe(() => {
        if (!this.isFocused) {
          invokeElementMethod(this.draghandle, "focus");
        }
        callback();
      });
      this.subscriptions.add(subscription);
    });
  }
  getProps() {
    return {
      buttons: this.showButtons,
      disabled: this.disabled,
      fixedTickWidth: this.fixedTickWidth,
      largeStep: this.largeStep,
      max: this.max,
      min: this.min,
      readonly: this.readonly,
      reverse: this.reverse,
      rtl: this.localizationService.rtl,
      smallStep: this.smallStep,
      value: trimValue(this.max, this.min, this.value),
      vertical: this.vertical
    };
  }
  isSliderInvalid() {
    const sliderClasses = this.hostElement.nativeElement.classList;
    this.isInvalid = sliderClasses.contains("ng-invalid") ? true : false;
    this.renderer.setAttribute(this.draghandle.nativeElement, "aria-invalid", `${this.isInvalid}`);
  }
  attachElementEventHandlers() {
    const hostElement = this.hostElement.nativeElement;
    let tabbing = false;
    let cursorInsideWrapper = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        if (!this.isFocused) {
          this.ngZone.run(() => {
            if (!this.focusChangedProgrammatically) {
              this.onFocus.emit();
            }
            this.focused = true;
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          if (args.relatedTarget !== this.draghandle.nativeElement) {
            this.handleBlur();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper) {
            this.handleBlur();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.keyCode === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
  get decreaseButtonArrowIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? "caret-alt-left" : "caret-alt-right" : "caret-alt-down";
    return icon;
  }
  get increaseButtonArrowIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? "caret-alt-right" : "caret-alt-left" : "caret-alt-up";
    return icon;
  }
  get decreaseButtonArrowSVGIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? this.arrowLeftIcon : this.arrowRightIcon : this.arrowDownIcon;
    return icon;
  }
  get increaseButtonArrowSVGIcon() {
    const icon = !this.vertical ? this.direction === "ltr" ? this.arrowRightIcon : this.arrowLeftIcon : this.arrowUpIcon;
    return icon;
  }
};
SliderComponent.ɵfac = function SliderComponent_Factory(t) {
  return new (t || SliderComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
SliderComponent.ɵcmp = ɵɵdefineComponent({
  type: SliderComponent,
  selectors: [["kendo-slider"]],
  viewQuery: function SliderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c62, 7);
      ɵɵviewQuery(_c72, 5, ElementRef);
      ɵɵviewQuery(_c82, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draghandle = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.decreaseButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.increaseButton = _t.first);
    }
  },
  inputs: {
    focusableId: "focusableId",
    dragHandleTitle: "dragHandleTitle",
    incrementTitle: "incrementTitle",
    animate: "animate",
    decrementTitle: "decrementTitle",
    showButtons: "showButtons",
    value: "value",
    tabIndex: "tabIndex"
  },
  exportAs: ["kendoSlider"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.slider"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => SliderComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 13,
  vars: 23,
  consts: () => {
    let i18n_0;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_0 = goog.getMsg("increment");
      i18n_0 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_0;
    } else {
      i18n_0 = $localize`:kendo.slider.increment|The title of the **Increase** button of the Slider.:increment`;
    }
    let i18n_1;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_1 = goog.getMsg("decrement");
      i18n_1 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_1;
    } else {
      i18n_1 = $localize`:kendo.slider.decrement|The title of the **Decrease** button of the Slider.:decrement`;
    }
    let i18n_2;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_2 = goog.getMsg("Drag");
      i18n_2 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_2;
    } else {
      i18n_2 = $localize`:kendo.slider.dragHandle|The title of the drag handle of the Slider.:Drag`;
    }
    return [["wrap", ""], ["track", ""], ["sliderSelection", ""], ["draghandle", ""], ["decreaseButton", ""], ["ticks", ""], ["increaseButton", ""], ["kendoSliderLocalizedMessages", "", "increment", i18n_0, "decrement", i18n_1, "dragHandle", i18n_2], ["kendoButton", "", "type", "button", "rounded", "full", "class", "k-button-decrease", "aria-hidden", "true", 3, "icon", "svgIcon", "title", 4, "ngIf"], [1, "k-slider-track-wrap", 3, "kendoEventsOutsideAngular"], ["kendoSliderTicks", "", "aria-hidden", "true", 3, "tickTitle", "vertical", "step", "largeStep", "min", "max", "labelTemplate", 4, "ngIf"], [1, "k-slider-track"], [1, "k-slider-selection"], ["role", "slider", "kendoDraggable", "", 1, "k-draghandle", "k-draghandle-end", 3, "kendoPress", "kendoDrag", "kendoRelease", "title", "id"], ["kendoButton", "", "type", "button", "rounded", "full", "class", "k-button-increase", "aria-hidden", "true", 3, "icon", "svgIcon", "title", 4, "ngIf"], [3, "resize"], ["kendoButton", "", "type", "button", "rounded", "full", "aria-hidden", "true", 1, "k-button-decrease", 3, "icon", "svgIcon", "title"], ["kendoSliderTicks", "", "aria-hidden", "true", 3, "tickTitle", "vertical", "step", "largeStep", "min", "max", "labelTemplate"], ["kendoButton", "", "type", "button", "rounded", "full", "aria-hidden", "true", 1, "k-button-increase", 3, "icon", "svgIcon", "title"]];
  },
  template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainerStart(0, 7);
      ɵɵtemplate(1, SliderComponent_button_1_Template, 2, 4, "button", 8);
      ɵɵelementStart(2, "div", 9, 0);
      ɵɵtemplate(4, SliderComponent_ul_4_Template, 2, 7, "ul", 10);
      ɵɵelementStart(5, "div", 11, 1);
      ɵɵelement(7, "div", 12, 2);
      ɵɵelementStart(9, "span", 13, 3);
      ɵɵlistener("kendoPress", function SliderComponent_Template_span_kendoPress_9_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.handleDragPress, $event));
      })("kendoDrag", function SliderComponent_Template_span_kendoDrag_9_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.onHandleDrag, $event));
      })("kendoRelease", function SliderComponent_Template_span_kendoRelease_9_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.onHandleRelease, $event));
      });
      ɵɵelementEnd()()();
      ɵɵtemplate(11, SliderComponent_button_11_Template, 2, 4, "button", 14);
      ɵɵelementStart(12, "kendo-resize-sensor", 15);
      ɵɵlistener("resize", function SliderComponent_Template_kendo_resize_sensor_resize_12_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.sizeComponent(false));
      });
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showButtons);
      ɵɵadvance();
      ɵɵclassProp("k-slider-topleft", ctx.tickPlacement === "before")("k-slider-bottomright", ctx.tickPlacement === "after");
      ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(20, _c92, ctx.onWrapClick, ctx.onKeyDown));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.tickPlacement !== "none");
      ɵɵadvance(5);
      ɵɵstyleProp("touch-action", ctx.isDisabled ? "" : "none");
      ɵɵproperty("title", ctx.dragHandleMessage)("id", ctx.focusableId);
      ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.currentValue)("aria-valuetext", ctx.currentValue)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-orientation", ctx.vertical ? "vertical" : "horizontal")("tabindex", ctx.disabled ? "-1" : ctx.tabIndex);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showButtons);
    }
  },
  dependencies: [NgIf, SliderTicksComponent, DraggableDirective, EventsOutsideAngularDirective, ResizeSensorComponent, ButtonComponent, LocalizedSliderMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSlider",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.slider"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SliderComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => SliderComponent)
      }],
      selector: "kendo-slider",
      template: `
        <ng-container kendoSliderLocalizedMessages
            i18n-increment="kendo.slider.increment|The title of the **Increase** button of the Slider."
            increment="increment"
            i18n-decrement="kendo.slider.decrement|The title of the **Decrease** button of the Slider."
            decrement="decrement"
            i18n-dragHandle="kendo.slider.dragHandle|The title of the drag handle of the Slider."
            dragHandle="Drag"
        >
        <button
            kendoButton
            #decreaseButton
            *ngIf="showButtons"
            type="button"
            rounded="full"
            [icon]="decreaseButtonArrowIcon"
            [svgIcon]="decreaseButtonArrowSVGIcon"
            class="k-button-decrease"
            [title]="decrementMessage"
            aria-hidden="true"
            [attr.tabindex]="-1"
        ></button>
        <div
            #wrap
            class="k-slider-track-wrap"
            [class.k-slider-topleft]="tickPlacement === 'before'"
            [class.k-slider-bottomright]="tickPlacement === 'after'"
            [kendoEventsOutsideAngular]="{ click: onWrapClick, keydown: onKeyDown }"
        >
            <ul kendoSliderTicks
                #ticks
                *ngIf="tickPlacement !== 'none'"
                [tickTitle]="title"
                [vertical]="vertical"
                [step]="smallStep"
                [largeStep]="largeStep"
                [min]="min"
                [max]="max"
                [labelTemplate]="labelTemplate?.templateRef"
                aria-hidden="true"
            >
            </ul>
            <div #track class="k-slider-track">
                <div #sliderSelection class="k-slider-selection">
                </div>
                <span #draghandle
                    role="slider"
                    [attr.aria-valuemin]="min"
                    [attr.aria-valuemax]="max"
                    [attr.aria-valuenow]="currentValue"
                    [attr.aria-valuetext]="currentValue"
                    [attr.aria-disabled]="disabled ? true : undefined"
                    [attr.aria-readonly]="readonly ? true : undefined"
                    [attr.aria-orientation]="vertical ? 'vertical' : 'horizontal'"
                    [style.touch-action]="isDisabled ? '' : 'none'"
                    class="k-draghandle k-draghandle-end"
                    [title]="dragHandleMessage"
                    [attr.tabindex]="disabled ? '-1' : tabIndex"
                    [id]="focusableId"
                    kendoDraggable
                    (kendoPress)="ifEnabled(handleDragPress, $event)"
                    (kendoDrag)="ifEnabled(onHandleDrag, $event)"
                    (kendoRelease)="ifEnabled(onHandleRelease, $event)"
                ></span>
            </div>
        </div>
        <button
            kendoButton
            #increaseButton
            *ngIf="showButtons"
            type="button"
            rounded="full"
            [icon]="increaseButtonArrowIcon"
            [svgIcon]="increaseButtonArrowSVGIcon"
            class="k-button-increase"
            [title]="incrementMessage"
            [attr.tabindex]="-1"
            aria-hidden="true"
        ></button>
        <kendo-resize-sensor (resize)="sizeComponent(false)"></kendo-resize-sensor>
  `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Injector
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    dragHandleTitle: [{
      type: Input
    }],
    incrementTitle: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    decrementTitle: [{
      type: Input
    }],
    showButtons: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    draghandle: [{
      type: ViewChild,
      args: ["draghandle", {
        static: true
      }]
    }],
    decreaseButton: [{
      type: ViewChild,
      args: ["decreaseButton", {
        read: ElementRef
      }]
    }],
    increaseButton: [{
      type: ViewChild,
      args: ["increaseButton", {
        read: ElementRef
      }]
    }]
  });
})();
var RangeSliderModel = class extends SliderModelBase {
  positionHandle(dragHandle) {
    if (!dragHandle.id) {
      return;
    }
    const {
      max,
      min,
      reverse,
      vertical
    } = this.props;
    const position = vertical ? "bottom" : reverse ? "right" : "left";
    const trackWidth = this.trackWidth();
    const value = isStartHandle(dragHandle) ? trimValueRange(max, min, this.props.value)[0] : trimValueRange(max, min, this.props.value)[1];
    if (isStartHandle(dragHandle)) {
      this.startHandlePosition = calculateHandlePosition({
        min,
        max,
        reverse,
        value,
        trackWidth
      });
      this.renderer.setStyle(dragHandle, position, `${this.startHandlePosition}px`);
    } else {
      this.endHandlePosition = calculateHandlePosition({
        min,
        max,
        reverse,
        value,
        trackWidth
      });
      this.renderer.setStyle(dragHandle, position, `${this.endHandlePosition}px`);
    }
  }
  positionSelection(dragHandle, selection) {
    const {
      reverse,
      vertical
    } = this.props;
    const dimension = vertical ? "height" : "width";
    const position = vertical ? "bottom" : reverse ? "right" : "left";
    const size = Math.abs(this.endHandlePosition - this.startHandlePosition);
    const currentSelectionPosition = vertical ? dragHandle.style.bottom : reverse ? dragHandle.style.right : dragHandle.style.left;
    this.renderer.setStyle(selection, dimension, `${size}px`);
    this.renderer.setStyle(selection, position, parseFloat(currentSelectionPosition) + "px");
  }
};
var RangeSliderMessages = class extends ComponentMessages {
};
RangeSliderMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵRangeSliderMessages_BaseFactory;
  return function RangeSliderMessages_Factory(t) {
    return (ɵRangeSliderMessages_BaseFactory || (ɵRangeSliderMessages_BaseFactory = ɵɵgetInheritedFactory(RangeSliderMessages)))(t || RangeSliderMessages);
  };
})();
RangeSliderMessages.ɵdir = ɵɵdefineDirective({
  type: RangeSliderMessages,
  selectors: [["kendo-rangeslider-messages-base"]],
  inputs: {
    dragHandleStart: "dragHandleStart",
    dragHandleEnd: "dragHandleEnd"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-rangeslider-messages-base"
    }]
  }], null, {
    dragHandleStart: [{
      type: Input
    }],
    dragHandleEnd: [{
      type: Input
    }]
  });
})();
var LocalizedRangeSliderMessagesDirective = class extends RangeSliderMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedRangeSliderMessagesDirective.ɵfac = function LocalizedRangeSliderMessagesDirective_Factory(t) {
  return new (t || LocalizedRangeSliderMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedRangeSliderMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedRangeSliderMessagesDirective,
  selectors: [["", "kendoSliderLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: RangeSliderMessages,
    useExisting: forwardRef(() => LocalizedRangeSliderMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedRangeSliderMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: RangeSliderMessages,
        useExisting: forwardRef(() => LocalizedRangeSliderMessagesDirective)
      }],
      selector: "[kendoSliderLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var PRESSED = "k-pressed";
var RangeSliderComponent = class extends SliderBase {
  constructor(localization, injector, renderer, ngZone, changeDetector, hostElement) {
    super(localization, injector, renderer, ngZone, changeDetector, hostElement);
    this.localization = localization;
    this.injector = injector;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    this.startHandleId = `k-start-handle-${guid()}`;
    this.endHandleId = `k-end-handle-${guid()}`;
    this.focusableId = this.startHandleId;
    this.activeHandle = "startHandle";
    this.focusChangedProgrammatically = false;
    this.onWrapClick = (args) => {
      if (!this.isDisabled) {
        this.value = this.value || [this.min, this.min];
        const trackValue = eventValue(args, this.track.nativeElement, this.getProps());
        let newRangeValue;
        const [startValue, endValue] = newRangeValue = this.value;
        if (trackValue <= startValue) {
          newRangeValue = [trackValue, endValue];
          this.activeHandle = "startHandle";
        } else if (startValue < trackValue && trackValue < endValue) {
          if (trackValue < (startValue + endValue) / 2) {
            newRangeValue = [trackValue, endValue];
            this.activeHandle = "startHandle";
          } else {
            newRangeValue = [startValue, trackValue];
            this.activeHandle = "endHandle";
          }
        } else if (trackValue >= endValue) {
          newRangeValue = [startValue, trackValue];
          this.activeHandle = "endHandle";
        }
        const activeHandle = this.activeHandle === "startHandle" ? this.draghandleStart : this.draghandleEnd;
        invokeElementMethod(activeHandle, "focus");
        this.changeValue(newRangeValue);
      }
    };
    this.onKeyDown = (e) => {
      this.value = this.value || [this.min, this.min];
      const options = this.getProps();
      const {
        max,
        min
      } = options;
      const handler = this.keyBinding[e.keyCode];
      if (this.isDisabled || !handler) {
        return;
      }
      const startHandleIsActive = isStartHandle(e.target);
      const nonDraggedHandle = startHandleIsActive ? this.draghandleEnd.nativeElement : this.draghandleStart.nativeElement;
      this.renderer.removeStyle(nonDraggedHandle, "zIndex");
      this.renderer.setStyle(e.target, "zIndex", 1);
      const value = handler(Object.assign(Object.assign({}, options), {
        value: startHandleIsActive ? this.value[0] : this.value[1]
      }));
      if (startHandleIsActive) {
        if (value > this.value[1]) {
          this.value[1] = value;
        }
      } else {
        if (value < this.value[0]) {
          this.value[0] = value;
        }
      }
      const trimmedValue = trimValue(max, min, value);
      const newValue = startHandleIsActive ? [trimmedValue, this.value[1]] : [this.value[0], trimmedValue];
      this.changeValue(newValue);
      e.preventDefault();
    };
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    this.handleBlur = () => {
      this.changeDetector.markForCheck();
      this.focused = false;
      if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
          if (!this.focusChangedProgrammatically) {
            this.onBlur.emit();
          }
        });
      }
    };
  }
  /**
   * Focuses the RangeSlider.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *     <div>
   *         <button class="k-button" (click)="slider.focus()">Focus</button>
   *     </div>
   *     <kendo-rangeslider #slider></kendo-rangeslider>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    this.focusChangedProgrammatically = true;
    invokeElementMethod(this.draghandleStart, "focus");
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the RangeSlider.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const activeHandle = this.activeHandle === "startHandle" ? this.draghandleStart : this.draghandleEnd;
    invokeElementMethod(activeHandle, "blur");
    this.handleBlur();
    this.focusChangedProgrammatically = false;
  }
  ngOnInit() {
    if (!this.value) {
      this.value = [this.min, this.max];
    }
    super.ngOnInit();
  }
  ngOnChanges(changes) {
    if (anyChanged(["value", "fixedTickWidth", "tickPlacement"], changes, true)) {
      if (changes["value"] && changes["value"].currentValue) {
        validateValue(changes["value"].currentValue);
      }
      this.ngZone.onStable.asObservable().pipe((0, import_operators2.take)(1)).subscribe(() => {
        this.sizeComponent();
      });
    }
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.sizeComponent();
    if (this.ticks) {
      this.ticks.tickElements.changes.subscribe(() => this.sizeComponent());
    }
    this.isRangeSliderInvalid();
    this.attachElementEventHandlers();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  textFor(key) {
    return this.localization.get(key);
  }
  /**
   * @hidden
   */
  get valueText() {
    return this.value ? `${this.value[0]} - ${this.value[1]}` : "";
  }
  /**
   * @hidden
   */
  handleDragPress(args) {
    if (args.originalEvent) {
      args.originalEvent.preventDefault();
    }
    const target = args.originalEvent.target;
    this.draggedHandle = target;
    const nonDraggedHandle = this.draghandleStart.nativeElement === this.draggedHandle ? this.draghandleEnd.nativeElement : this.draghandleStart.nativeElement;
    this.renderer.removeStyle(nonDraggedHandle, "zIndex");
    this.renderer.setStyle(target, "zIndex", 1);
  }
  /**
   * @hidden
   */
  onHandleDrag(args) {
    this.value = this.value || [this.min, this.min];
    const target = args.originalEvent.target;
    const lastCoords = this.draggedHandle.getBoundingClientRect();
    this.lastHandlePosition = {
      x: lastCoords.left,
      y: lastCoords.top
    };
    this.dragging = {
      value: true,
      target
    };
    const mousePos = {
      x: args.pageX - 0.5 - lastCoords.width / 2,
      y: args.pageY - lastCoords.width / 2
    };
    const left = mousePos.x < this.lastHandlePosition.x;
    const right = mousePos.x > this.lastHandlePosition.x;
    const up = mousePos.y > this.lastHandlePosition.y;
    const moveStartHandle = () => this.changeValue([eventValue(args, this.track.nativeElement, this.getProps()), this.value[1]]);
    const moveEndHandle = () => this.changeValue([this.value[0], eventValue(args, this.track.nativeElement, this.getProps())]);
    const moveBothHandles = () => this.changeValue([eventValue(args, this.track.nativeElement, this.getProps()), eventValue(args, this.track.nativeElement, this.getProps())]);
    const activeStartHandle = isStartHandle(this.draggedHandle);
    const vertical = this.vertical;
    const horizontal = !vertical;
    const forward = vertical && up || (this.reverse ? horizontal && right : horizontal && left);
    const incorrectValueState = this.value[0] > this.value[1];
    if (this.value[0] === this.value[1] || incorrectValueState) {
      if (forward) {
        activeStartHandle ? moveStartHandle() : moveBothHandles();
      } else {
        activeStartHandle ? moveBothHandles() : moveEndHandle();
      }
    } else {
      activeStartHandle ? moveStartHandle() : moveEndHandle();
    }
  }
  /**
   * @hidden
   */
  onHandleRelease(args) {
    this.dragging = {
      value: false,
      target: args.originalEvent.target
    };
    this.draggedHandle = void 0;
  }
  //ngModel binding
  /**
   * @hidden
   */
  writeValue(value) {
    validateValue(value);
    this.value = value;
    this.sizeComponent();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  changeValue(value) {
    if (!this.value || !isSameRange(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        if (this.value) {
          this.valueChange.emit(value);
        }
        this.sizeComponent();
      });
    }
    this.isRangeSliderInvalid();
  }
  /**
   * @hidden
   */
  sizeComponent() {
    if (!isDocumentAvailable()) {
      return;
    }
    const wrapper = this.wrapper.nativeElement;
    const track = this.track.nativeElement;
    const selectionEl = this.sliderSelection.nativeElement;
    const dragHandleStartEl = this.draghandleStart.nativeElement;
    const dragHandleEndEl = this.draghandleEnd.nativeElement;
    const ticks = this.ticks ? this.ticksContainer.nativeElement : null;
    this.resetStyles([track, selectionEl, dragHandleStartEl, dragHandleEndEl, ticks, this.hostElement.nativeElement]);
    const props = this.getProps();
    const model = new RangeSliderModel(props, wrapper, track, this.renderer);
    model.resizeTrack();
    if (this.ticks) {
      model.resizeTicks(this.ticksContainer.nativeElement, this.ticks.tickElements.map((element) => element.nativeElement));
    }
    model.positionHandle(dragHandleStartEl);
    model.positionHandle(dragHandleEndEl);
    model.positionSelection(dragHandleStartEl, selectionEl);
    if (this.fixedTickWidth) {
      model.resizeWrapper();
    }
  }
  /**
   * @hidden
   */
  get isDisabled() {
    return this.disabled || this.readonly;
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      this.isFocused = value;
    }
  }
  set dragging(data) {
    if (this.isDragged !== data.value && this.sliderSelection && this.draghandleStart && this.draghandleEnd) {
      const sliderSelection = this.sliderSelection.nativeElement;
      const draghandle = data.target;
      if (data.value) {
        this.renderer.addClass(sliderSelection, PRESSED);
        this.renderer.addClass(draghandle, PRESSED);
      } else {
        this.renderer.removeClass(sliderSelection, PRESSED);
        this.renderer.removeClass(draghandle, PRESSED);
      }
      this.isDragged = data.value;
    }
  }
  getProps() {
    return {
      disabled: this.disabled,
      fixedTickWidth: this.fixedTickWidth,
      largeStep: this.largeStep,
      max: this.max,
      min: this.min,
      readonly: this.readonly,
      reverse: this.reverse,
      rtl: this.localizationService.rtl,
      smallStep: this.smallStep,
      value: trimValueRange(this.max, this.min, this.value),
      vertical: this.vertical,
      buttons: false
    };
  }
  isRangeSliderInvalid() {
    const rangeSliderClasses = this.hostElement.nativeElement.classList;
    this.isInvalid = rangeSliderClasses.contains("ng-invalid") ? true : false;
    this.renderer.setAttribute(this.draghandleStart.nativeElement, "aria-invalid", `${this.isInvalid}`);
    this.renderer.setAttribute(this.draghandleEnd.nativeElement, "aria-invalid", `${this.isInvalid}`);
  }
  attachElementEventHandlers() {
    const hostElement = this.hostElement.nativeElement;
    let tabbing = false;
    let cursorInsideWrapper = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        if (!this.isFocused) {
          this.ngZone.run(() => {
            if (!this.focusChangedProgrammatically) {
              this.onFocus.emit();
            }
            this.focused = true;
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          if (args.relatedTarget !== this.draghandleStart.nativeElement && args.relatedTarget !== this.draghandleEnd.nativeElement) {
            this.handleBlur();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper) {
            this.handleBlur();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.keyCode === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
};
RangeSliderComponent.ɵfac = function RangeSliderComponent_Factory(t) {
  return new (t || RangeSliderComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
RangeSliderComponent.ɵcmp = ɵɵdefineComponent({
  type: RangeSliderComponent,
  selectors: [["kendo-rangeslider"]],
  viewQuery: function RangeSliderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c102, 7);
      ɵɵviewQuery(_c11, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draghandleStart = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.draghandleEnd = _t.first);
    }
  },
  inputs: {
    value: "value"
  },
  exportAs: ["kendoRangeSlider"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.rangeslider"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RangeSliderComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => RangeSliderComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 13,
  vars: 33,
  consts: () => {
    let i18n_3;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_3 = goog.getMsg("Drag");
      i18n_3 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_3;
    } else {
      i18n_3 = $localize`:kendo.rangeslider.dragHandleStart|The title of the **Start** drag handle of the Slider.:Drag`;
    }
    let i18n_4;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_4 = goog.getMsg("Drag");
      i18n_4 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_4;
    } else {
      i18n_4 = $localize`:kendo.rangeslider.dragHandleEnd|The title of the **End** drag handle of the Slider.:Drag`;
    }
    return [["wrap", ""], ["track", ""], ["sliderSelection", ""], ["draghandleStart", ""], ["draghandleEnd", ""], ["ticks", ""], ["kendoSliderLocalizedMessages", "", "dragHandleStart", i18n_3, "dragHandleEnd", i18n_4], [1, "k-slider-track-wrap", 3, "kendoEventsOutsideAngular"], ["kendoSliderTicks", "", 3, "tickTitle", "vertical", "step", "largeStep", "min", "max", "labelTemplate", 4, "ngIf"], [1, "k-slider-track"], [1, "k-slider-selection"], ["role", "slider", "kendoDraggable", "", 1, "k-draghandle", 3, "kendoPress", "kendoDrag", "kendoRelease", "id", "title"], [3, "resize"], ["kendoSliderTicks", "", 3, "tickTitle", "vertical", "step", "largeStep", "min", "max", "labelTemplate"]];
  },
  template: function RangeSliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainerStart(0, 6);
      ɵɵelementStart(1, "div", 7, 0);
      ɵɵtemplate(3, RangeSliderComponent_ul_3_Template, 2, 8, "ul", 8);
      ɵɵelementStart(4, "div", 9, 1);
      ɵɵelement(6, "div", 10, 2);
      ɵɵelementStart(8, "span", 11, 3);
      ɵɵlistener("kendoPress", function RangeSliderComponent_Template_span_kendoPress_8_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.handleDragPress, $event));
      })("kendoDrag", function RangeSliderComponent_Template_span_kendoDrag_8_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.onHandleDrag, $event));
      })("kendoRelease", function RangeSliderComponent_Template_span_kendoRelease_8_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.onHandleRelease, $event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(10, "span", 11, 4);
      ɵɵlistener("kendoPress", function RangeSliderComponent_Template_span_kendoPress_10_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.handleDragPress, $event));
      })("kendoDrag", function RangeSliderComponent_Template_span_kendoDrag_10_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.onHandleDrag, $event));
      })("kendoRelease", function RangeSliderComponent_Template_span_kendoRelease_10_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.ifEnabled(ctx.onHandleRelease, $event));
      });
      ɵɵelementEnd()()();
      ɵɵelementStart(12, "kendo-resize-sensor", 12);
      ɵɵlistener("resize", function RangeSliderComponent_Template_kendo_resize_sensor_resize_12_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.sizeComponent());
      });
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("k-slider-topleft", ctx.tickPlacement === "before")("k-slider-bottomright", ctx.tickPlacement === "after");
      ɵɵproperty("kendoEventsOutsideAngular", ɵɵpureFunction2(30, _c92, ctx.onWrapClick, ctx.onKeyDown));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.tickPlacement !== "none");
      ɵɵadvance(5);
      ɵɵstyleProp("touch-action", ctx.isDisabled ? "" : "none");
      ɵɵproperty("id", ctx.startHandleId)("title", ctx.textFor("dragHandleStart"));
      ɵɵattribute("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value ? ctx.value[0] : null)("aria-valuetext", ctx.valueText)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      ɵɵadvance(2);
      ɵɵstyleProp("touch-action", ctx.isDisabled ? "" : "none");
      ɵɵproperty("id", ctx.endHandleId)("title", ctx.textFor("dragHandleEnd"));
      ɵɵattribute("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value ? ctx.value[1] : null)("aria-valuetext", ctx.valueText)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
    }
  },
  dependencies: [NgIf, SliderTicksComponent, DraggableDirective, EventsOutsideAngularDirective, ResizeSensorComponent, LocalizedRangeSliderMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoRangeSlider",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.rangeslider"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RangeSliderComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => RangeSliderComponent)
      }],
      selector: "kendo-rangeslider",
      template: `
        <ng-container kendoSliderLocalizedMessages
            i18n-dragHandleStart="kendo.rangeslider.dragHandleStart|The title of the **Start** drag handle of the Slider."
            dragHandleStart="Drag"
            i18n-dragHandleEnd="kendo.rangeslider.dragHandleEnd|The title of the **End** drag handle of the Slider."
            dragHandleEnd="Drag"
        >

        <div
            #wrap
            class="k-slider-track-wrap"
            [class.k-slider-topleft]="tickPlacement === 'before'"
            [class.k-slider-bottomright]="tickPlacement === 'after'"
            [kendoEventsOutsideAngular]="{ click: onWrapClick, keydown: onKeyDown }"
        >
            <ul kendoSliderTicks
                #ticks
                *ngIf="tickPlacement !== 'none'"
                [tickTitle]="title"
                [vertical]="vertical"
                [step]="smallStep"
                [largeStep]="largeStep"
                [min]="min"
                [max]="max"
                [labelTemplate]="labelTemplate?.templateRef"
                [attr.aria-hidden]="true"
            >
            </ul>
            <div #track class="k-slider-track">
                <div #sliderSelection class="k-slider-selection">
                </div>
                <span #draghandleStart
                    role="slider"
                    [id]="startHandleId"
                    [attr.tabindex]="disabled ? undefined : tabindex"
                    [attr.aria-valuemin]="min"
                    [attr.aria-valuemax]="max"
                    [attr.aria-valuenow]="value ? value[0] : null"
                    [attr.aria-valuetext]="valueText"
                    [attr.aria-disabled]="disabled ? true : undefined"
                    [attr.aria-readonly]="readonly ? true : undefined"
                    [attr.aria-orientation]="vertical ? 'vertical' : 'horizontal'"
                    [style.touch-action]="isDisabled ? '' : 'none'"
                    class="k-draghandle"
                    [title]="textFor('dragHandleStart')"
                    kendoDraggable
                    (kendoPress)="ifEnabled(handleDragPress ,$event)"
                    (kendoDrag)="ifEnabled(onHandleDrag ,$event)"
                    (kendoRelease)="ifEnabled(onHandleRelease, $event)"
                ></span>
                <span #draghandleEnd
                    role="slider"
                    [id]="endHandleId"
                    [attr.tabindex]="disabled ? undefined : tabindex"
                    [attr.aria-valuemin]="min"
                    [attr.aria-valuemax]="max"
                    [attr.aria-valuenow]="value ? value[1] : null"
                    [attr.aria-valuetext]="valueText"
                    [attr.aria-disabled]="disabled ? true : undefined"
                    [attr.aria-readonly]="readonly ? true : undefined"
                    [attr.aria-orientation]="vertical ? 'vertical' : 'horizontal'"
                    [style.touch-action]="isDisabled ? '' : 'none'"
                    class="k-draghandle"
                    [title]="textFor('dragHandleEnd')"
                    kendoDraggable
                    (kendoPress)="ifEnabled(handleDragPress ,$event)"
                    (kendoDrag)="ifEnabled(onHandleDrag ,$event)"
                    (kendoRelease)="ifEnabled(onHandleRelease, $event)"
                ></span>
            </div>
        </div>
        <kendo-resize-sensor (resize)="sizeComponent()"></kendo-resize-sensor>
  `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Injector
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    value: [{
      type: Input
    }],
    draghandleStart: [{
      type: ViewChild,
      args: ["draghandleStart", {
        static: true
      }]
    }],
    draghandleEnd: [{
      type: ViewChild,
      args: ["draghandleEnd", {
        static: true
      }]
    }]
  });
})();
var Messages2 = class extends ComponentMessages {
};
Messages2.ɵfac = /* @__PURE__ */ (() => {
  let ɵMessages_BaseFactory;
  return function Messages_Factory(t) {
    return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(Messages2)))(t || Messages2);
  };
})();
Messages2.ɵdir = ɵɵdefineDirective({
  type: Messages2,
  selectors: [["kendo-switch-messages-base"]],
  inputs: {
    on: "on",
    off: "off"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages2, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-switch-messages-base"
    }]
  }], null, {
    on: [{
      type: Input
    }],
    off: [{
      type: Input
    }]
  });
})();
var LocalizedSwitchMessagesDirective = class extends Messages2 {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedSwitchMessagesDirective.ɵfac = function LocalizedSwitchMessagesDirective_Factory(t) {
  return new (t || LocalizedSwitchMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedSwitchMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedSwitchMessagesDirective,
  selectors: [["", "kendoSwitchLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: Messages2,
    useExisting: forwardRef(() => LocalizedSwitchMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSwitchMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages2,
        useExisting: forwardRef(() => LocalizedSwitchMessagesDirective)
      }],
      selector: "[kendoSwitchLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var FOCUSED$5 = "k-focus";
var DEFAULT_SIZE$9 = "medium";
var DEFAULT_THUMB_ROUNDED = "full";
var DEFAULT_TRACK_ROUNDED = "full";
var SwitchComponent = class {
  constructor(renderer, hostElement, localizationService, injector, changeDetector, ngZone) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.localizationService = localizationService;
    this.injector = injector;
    this.changeDetector = changeDetector;
    this.ngZone = ngZone;
    this.disabled = false;
    this.readonly = false;
    this.tabindex = 0;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.hostRole = "switch";
    this.hostClasses = true;
    this.initialized = false;
    this.domSubscriptions = [];
    this._checked = false;
    this._size = "medium";
    this._trackRounded = "full";
    this._thumbRounded = "full";
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    this.handleFocus = (event) => {
      if (this.isFocused) {
        return;
      }
      event.stopImmediatePropagation();
      this.focused = true;
      if (hasObservers(this.onFocus)) {
        this.ngZone.run(() => {
          const eventArgs = {
            originalEvent: event
          };
          this.onFocus.emit(eventArgs);
        });
      }
    };
    this.handleBlur = (event) => {
      const relatedTarget = event && event.relatedTarget;
      if (this.hostElement.nativeElement.contains(relatedTarget)) {
        return;
      }
      event.stopImmediatePropagation();
      this.changeDetector.markForCheck();
      this.focused = false;
      if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
          const eventArgs = {
            originalEvent: event
          };
          this.onBlur.emit(eventArgs);
        });
      }
    };
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  /**
   * @hidden
   */
  get focusableId() {
    if (this.hostElement.nativeElement.hasAttribute("id")) {
      return this.hostElement.nativeElement.getAttribute("id");
    }
    return `k-${guid()}`;
  }
  /**
   * Sets the value of the Switch when it is initially displayed.
   */
  set checked(value) {
    this.setHostClasses(value);
    this._checked = value;
  }
  get checked() {
    return this._checked;
  }
  /**
   * Specifies the width and height of the Switch.
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$9;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the border radius of the Switch thumb.
   *
   * The possible values are:
   * * `full` (default)
   * * `small`
   * * `medium`
   * * `large`
   * * `none`
   */
  set thumbRounded(thumbRounded) {
    const newThumbRounded = thumbRounded ? thumbRounded : DEFAULT_THUMB_ROUNDED;
    this.handleThumbClasses(newThumbRounded);
    this._thumbRounded = newThumbRounded;
  }
  get thumbRounded() {
    return this._thumbRounded;
  }
  /**
   * Specifies the border radius of the Switch track.
   *
   * The possible values are:
   * * `full` (default)
   * * `small`
   * * `medium`
   * * `large`
   * * `none`
   */
  set trackRounded(trackRounded) {
    const newTrackRounded = trackRounded ? trackRounded : DEFAULT_TRACK_ROUNDED;
    this.handleTrackClasses(newTrackRounded);
    this._trackRounded = newTrackRounded;
  }
  get trackRounded() {
    return this._trackRounded;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  get ieClass() {
    return browser && browser.msie;
  }
  get hostId() {
    return this.focusableId;
  }
  get ariaChecked() {
    return this.checked;
  }
  get ariaInvalid() {
    return this.isControlInvalid ? true : void 0;
  }
  get hostTabIndex() {
    return this.disabled ? void 0 : this.tabIndex;
  }
  get ariaDisabled() {
    return this.disabled ? true : void 0;
  }
  get ariaReadonly() {
    return this.readonly;
  }
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  get onLabelMessage() {
    return this.onLabel !== void 0 ? this.onLabel : this.localizationService.get("on");
  }
  /**
   * @hidden
   */
  get offLabelMessage() {
    return this.offLabel !== void 0 ? this.offLabel : this.localizationService.get("off");
  }
  get isEnabled() {
    return !this.disabled && !this.readonly;
  }
  ngOnInit() {
    if (this.hostElement) {
      const wrapper = this.hostElement.nativeElement;
      this.renderer.removeAttribute(wrapper, "tabindex");
    }
    this.localizationChangeSubscription = this.localizationService.changes.pipe((0, import_operators2.skip)(1)).subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.control = this.injector.get(NgControl, null);
    this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => this.initialized = true);
  }
  ngAfterViewInit() {
    const wrapper = this.hostElement.nativeElement;
    if (!this.checked && !wrapper.classList.contains("k-switch-off")) {
      this.renderer.addClass(wrapper, "k-switch-off");
    }
    this.handleClasses(this.size, "size");
    this.handleTrackClasses(this.trackRounded);
    this.handleThumbClasses(this.thumbRounded);
    this.attachHostHandlers();
  }
  ngOnDestroy() {
    if (this.localizationChangeSubscription) {
      this.localizationChangeSubscription.unsubscribe();
    }
    this.domSubscriptions.forEach((subscription) => subscription());
    const wrapper = this.hostElement.nativeElement;
    wrapper.removeEventListener("focus", this.handleFocus, true);
    wrapper.removeEventListener("blur", this.handleBlur, true);
  }
  /**
   * Focuses the Switch.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="switch.focus()">Focus</button>
   *  <kendo-switch #switch></kendo-switch>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    if (!this.hostElement) {
      return;
    }
    this.hostElement.nativeElement.focus();
  }
  /**
   * Blurs the Switch.
   */
  blur() {
    if (!this.hostElement) {
      return;
    }
    this.hostElement.nativeElement.blur();
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.checked = value === null ? false : value;
    this.changeDetector.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  keyDownHandler(e) {
    const keyCode = e.keyCode;
    if (this.isEnabled && (keyCode === Keys.Space || keyCode === Keys.Enter)) {
      this.changeValue(!this.checked);
      e.preventDefault();
    }
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.isEnabled) {
      this.changeValue(!this.checked);
    }
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  changeValue(value) {
    if (this.checked !== value) {
      this.ngZone.run(() => {
        this.checked = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
  }
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      const wrapper = this.hostElement.nativeElement;
      if (value) {
        this.renderer.addClass(wrapper, FOCUSED$5);
      } else {
        this.renderer.removeClass(wrapper, FOCUSED$5);
      }
      this.isFocused = value;
    }
  }
  attachHostHandlers() {
    this.ngZone.runOutsideAngular(() => {
      const wrapper = this.hostElement.nativeElement;
      this.domSubscriptions.push(this.renderer.listen(wrapper, "click", this.clickHandler), this.renderer.listen(wrapper, "keydown", this.keyDownHandler));
      wrapper.addEventListener("focus", this.handleFocus, true);
      wrapper.addEventListener("blur", this.handleBlur, true);
    });
  }
  setHostClasses(value) {
    const wrapper = this.hostElement.nativeElement;
    if (value) {
      this.renderer.removeClass(wrapper, "k-switch-off");
      this.renderer.addClass(wrapper, "k-switch-on");
    } else {
      this.renderer.removeClass(wrapper, "k-switch-on");
      this.renderer.addClass(wrapper, "k-switch-off");
    }
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("switch", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleTrackClasses(value) {
    var _a2, _b;
    const elem = (_a2 = this.hostElement) === null || _a2 === void 0 ? void 0 : _a2.nativeElement;
    const track = (_b = this.track) === null || _b === void 0 ? void 0 : _b.nativeElement;
    if (!elem || !track) {
      return;
    }
    const classes = getStylingClasses("switch", "rounded", this.trackRounded, value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
      this.renderer.removeClass(track, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
      this.renderer.addClass(track, classes.toAdd);
    }
  }
  handleThumbClasses(value) {
    var _a2;
    const thumb = (_a2 = this.thumb) === null || _a2 === void 0 ? void 0 : _a2.nativeElement;
    if (!thumb) {
      return;
    }
    const classes = getStylingClasses("switch", "rounded", this.thumbRounded, value);
    if (classes.toRemove) {
      this.renderer.removeClass(thumb, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(thumb, classes.toAdd);
    }
  }
};
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) {
  return new (t || SwitchComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
};
SwitchComponent.ɵcmp = ɵɵdefineComponent({
  type: SwitchComponent,
  selectors: [["kendo-switch"]],
  viewQuery: function SwitchComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c12, 7);
      ɵɵviewQuery(_c122, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.track = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumb = _t.first);
    }
  },
  hostVars: 16,
  hostBindings: function SwitchComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction)("role", ctx.hostRole)("id", ctx.hostId)("aria-checked", ctx.ariaChecked)("aria-invalid", ctx.ariaInvalid)("tabindex", ctx.hostTabIndex)("aria-disabled", ctx.ariaDisabled)("aria-readonly", ctx.ariaReadonly);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-ie", ctx.ieClass)("k-switch", ctx.hostClasses)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    focusableId: "focusableId",
    onLabel: "onLabel",
    offLabel: "offLabel",
    checked: "checked",
    disabled: "disabled",
    readonly: "readonly",
    tabindex: "tabindex",
    size: "size",
    thumbRounded: "thumbRounded",
    trackRounded: "trackRounded",
    tabIndex: "tabIndex"
  },
  outputs: {
    onFocus: "focus",
    onBlur: "blur",
    valueChange: "valueChange"
  },
  exportAs: ["kendoSwitch"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.switch"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwitchComponent)
    /* eslint-disable-line*/
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => SwitchComponent)
  }])],
  decls: 10,
  vars: 8,
  consts: () => {
    let i18n_5;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_5 = goog.getMsg("ON");
      i18n_5 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_5;
    } else {
      i18n_5 = $localize`:kendo.switch.on|The **On** label of the Switch.:ON`;
    }
    let i18n_6;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_6 = goog.getMsg("OFF");
      i18n_6 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_6;
    } else {
      i18n_6 = $localize`:kendo.switch.off|The **Off** label of the Switch.:OFF`;
    }
    return [["track", ""], ["thumb", ""], ["kendoSwitchLocalizedMessages", "", "on", i18n_5, "off", i18n_6], [1, "k-switch-track"], [1, "k-switch-label-on"], [1, "k-switch-label-off"], [1, "k-switch-thumb-wrap"], [1, "k-switch-thumb"]];
  },
  template: function SwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0, 2);
      ɵɵelementStart(1, "span", 3, 0)(3, "span", 4);
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵelementStart(5, "span", 5);
      ɵɵtext(6);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "span", 6);
      ɵɵelement(8, "span", 7, 1);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵstyleProp("transition-duration", ctx.initialized ? "200ms" : "0ms");
      ɵɵadvance(2);
      ɵɵattribute("aria-hidden", true);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.onLabelMessage);
      ɵɵadvance();
      ɵɵattribute("aria-hidden", true);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.offLabelMessage);
      ɵɵadvance();
      ɵɵstyleProp("transition-duration", ctx.initialized ? "200ms" : "0ms");
    }
  },
  dependencies: [LocalizedSwitchMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSwitch",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.switch"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitchComponent)
        /* eslint-disable-line*/
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => SwitchComponent)
      }],
      selector: "kendo-switch",
      template: `
        <ng-container kendoSwitchLocalizedMessages
            i18n-on="kendo.switch.on|The **On** label of the Switch."
            on="ON"
            i18n-off="kendo.switch.off|The **Off** label of the Switch."
            off="OFF"
        >

        <span
            #track
            class="k-switch-track"
            [style.transitionDuration]="initialized ? '200ms' : '0ms'"
        >
            <span class="k-switch-label-on" [attr.aria-hidden]="true" >{{onLabelMessage}}</span>
            <span class="k-switch-label-off" [attr.aria-hidden]="true">{{offLabelMessage}}</span>
        </span>
        <span
            class="k-switch-thumb-wrap"
            [style.transitionDuration]="initialized ? '200ms' : '0ms'">
            <span #thumb class="k-switch-thumb"></span>
        </span>
  `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: Injector
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    thumbRounded: [{
      type: Input
    }],
    trackRounded: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    ieClass: [{
      type: HostBinding,
      args: ["class.k-ie"]
    }],
    hostRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hostId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    ariaChecked: [{
      type: HostBinding,
      args: ["attr.aria-checked"]
    }],
    ariaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    hostTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    ariaReadonly: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-switch"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    track: [{
      type: ViewChild,
      args: ["track", {
        static: true
      }]
    }],
    thumb: [{
      type: ViewChild,
      args: ["thumb", {
        static: true
      }]
    }]
  });
})();
var TextBoxDirective = class {
  constructor(renderer, inputElement, ngZone) {
    this.renderer = renderer;
    this.inputElement = inputElement;
    this.ngZone = ngZone;
    this.hostClasses = true;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onValueChange = new EventEmitter();
    this.autoFillStart = new EventEmitter();
    this.autoFillEnd = new EventEmitter();
    this.listeners = [];
  }
  /**
   * @hidden
   */
  set value(text) {
    if (!this.inputElement) {
      return;
    }
    this.inputElement.nativeElement.value = text === void 0 || text === null ? "" : text;
    this.onValueChange.emit();
  }
  /**
   * @hidden
   */
  get value() {
    return this.inputElement.nativeElement.value;
  }
  get id() {
    return this.inputElement.nativeElement.id;
  }
  set id(id) {
    this.renderer.setAttribute(this.inputElement.nativeElement, "id", id);
  }
  ngAfterViewInit() {
    const input = this.inputElement.nativeElement;
    this.listeners = [this.renderer.listen(input, "focus", () => this.onFocus.emit()), this.renderer.listen(input, "blur", () => this.onBlur.emit())];
    this.ngZone.runOutsideAngular(() => {
      this.renderer.listen(input, "animationstart", (e) => {
        if (e.animationName === "autoFillStart") {
          this.autoFillStart.emit();
        } else if (e.animationName === "autoFillEnd") {
          this.autoFillEnd.emit();
        }
      });
    });
  }
  ngOnDestroy() {
    this.listeners.forEach((listener) => listener());
  }
};
TextBoxDirective.ɵfac = function TextBoxDirective_Factory(t) {
  return new (t || TextBoxDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
TextBoxDirective.ɵdir = ɵɵdefineDirective({
  type: TextBoxDirective,
  selectors: [["input", "kendoTextBox", ""]],
  hostVars: 10,
  hostBindings: function TextBoxDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-textbox", ctx.hostClasses)("k-input", ctx.hostClasses)("k-input-md", ctx.hostClasses)("k-rounded-md", ctx.hostClasses)("k-input-solid", ctx.hostClasses);
    }
  },
  inputs: {
    value: "value"
  },
  features: [ɵɵProvidersFeature([{
    provide: KendoInput,
    useExisting: forwardRef(() => TextBoxDirective)
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxDirective, [{
    type: Directive,
    args: [{
      selector: "input[kendoTextBox]",
      providers: [{
        provide: KendoInput,
        useExisting: forwardRef(() => TextBoxDirective)
      }]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-textbox"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-input-md"]
    }, {
      type: HostBinding,
      args: ["class.k-rounded-md"]
    }, {
      type: HostBinding,
      args: ["class.k-input-solid"]
    }],
    value: [{
      type: Input
    }]
  });
})();
var TextAreaDirective = class {
  constructor(renderer, element, zone, changeDetector, injector, rtl) {
    this.renderer = renderer;
    this.element = element;
    this.zone = zone;
    this.changeDetector = changeDetector;
    this.injector = injector;
    this.elementClasses = true;
    this.autofillClass = true;
    this.valueChange = new EventEmitter();
    this.autoSize = false;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onValueChange = new EventEmitter();
    this.autoFillStart = new EventEmitter();
    this.autoFillEnd = new EventEmitter();
    this.listeners = [];
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    this.direction = rtl ? "rtl" : "ltr";
  }
  get id() {
    return this.element.nativeElement.id;
  }
  set id(id) {
    this.renderer.setAttribute(this.element.nativeElement, "id", id);
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.elementValue = value;
    this.resize();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.setElementProperty("disabled", isDisabled);
  }
  ngOnInit() {
    const element = this.element.nativeElement;
    this.zone.runOutsideAngular(() => {
      this.listeners = [this.renderer.listen(element, "focus", this.handleFocus.bind(this)), this.renderer.listen(element, "blur", this.handleBlur.bind(this)), this.renderer.listen(element, "animationstart", (e) => {
        if (e.animationName === "autoFillStart") {
          this.autoFillStart.emit();
        } else if (e.animationName === "autoFillEnd") {
          this.autoFillEnd.emit();
        }
      })];
      if (isDocumentAvailable() && this.autoSize) {
        this.resizeSubscription = (0, import_rxjs2.fromEvent)(window, "resize").pipe((0, import_operators2.debounceTime)(50)).subscribe(() => this.resize());
      }
      this.inputSubscription = (0, import_rxjs2.fromEvent)(element, "input").subscribe(this.handleInput.bind(this));
    });
    this.control = this.injector.get(NgControl, null);
  }
  ngOnChanges(changes) {
    const element = this.element.nativeElement;
    if (changes.value) {
      this.elementValue = this.value;
    }
    if (changes.autoSize) {
      if (this.autoSize) {
        this.initialHeight = element.offsetHeight;
        this.renderer.setStyle(element, "resize", "none");
      } else {
        this.renderer.setStyle(element, "overflow-y", "auto");
        this.renderer.setStyle(element, "resize", "both");
        element.style.height = `${this.initialHeight}px`;
      }
    }
    this.zone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => this.resize());
  }
  ngOnDestroy() {
    this.listeners.forEach((listener) => listener());
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
  get elementValue() {
    if (this.element) {
      return this.element.nativeElement.value;
    }
    return "";
  }
  set elementValue(value) {
    this.setElementProperty("value", value === void 0 || value === null ? "" : value);
  }
  setElementProperty(name, value) {
    if (this.element) {
      this.renderer.setProperty(this.element.nativeElement, name, value);
    }
  }
  resize() {
    if (!this.autoSize) {
      return;
    }
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, "overflow-y", "hidden");
    element.style.height = `${this.initialHeight}px`;
    const scrollHeight = element.scrollHeight;
    if (scrollHeight > this.initialHeight) {
      element.style.height = `${scrollHeight}px`;
    }
  }
  handleInput() {
    const value = this.elementValue;
    this.value = value;
    if (this.control || hasObservers(this.onValueChange) || hasObservers(this.valueChange)) {
      this.zone.run(() => {
        this.ngChange(value);
        this.onValueChange.emit(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
    this.resize();
  }
  handleFocus() {
    if (hasObservers(this.onFocus)) {
      this.zone.run(() => {
        this.onFocus.emit();
      });
    }
  }
  handleBlur() {
    if (hasObservers(this.onBlur) || requiresZoneOnBlur(this.control)) {
      this.zone.run(() => {
        this.ngTouched();
        this.onBlur.emit();
        this.changeDetector.markForCheck();
      });
    }
  }
};
TextAreaDirective.ɵfac = function TextAreaDirective_Factory(t) {
  return new (t || TextAreaDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(RTL, 8));
};
TextAreaDirective.ɵdir = ɵɵdefineDirective({
  type: TextAreaDirective,
  selectors: [["textarea", "kendoTextArea", ""]],
  hostVars: 13,
  hostBindings: function TextAreaDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-textarea", ctx.elementClasses)("k-input", ctx.elementClasses)("k-input-md", ctx.elementClasses)("k-rounded-md", ctx.elementClasses)("k-input-solid", ctx.elementClasses)("k-autofill", ctx.autofillClass);
    }
  },
  inputs: {
    autoSize: "autoSize",
    value: "value"
  },
  outputs: {
    valueChange: "valueChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaDirective),
    multi: true
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => TextAreaDirective)
  }]), ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextAreaDirective),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TextAreaDirective)
      }],
      selector: "textarea[kendoTextArea]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Injector
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }];
  }, {
    elementClasses: [{
      type: HostBinding,
      args: ["class.k-textarea"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-input-md"]
    }, {
      type: HostBinding,
      args: ["class.k-rounded-md"]
    }, {
      type: HostBinding,
      args: ["class.k-input-solid"]
    }],
    autofillClass: [{
      type: HostBinding,
      args: ["class.k-autofill"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    valueChange: [{
      type: Output
    }],
    autoSize: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var createMaxValidator = (maxValue) => {
  return (c) => {
    if (!isPresent3(maxValue) || !isPresent3(c.value) || c.value <= maxValue) {
      return null;
    }
    return {
      maxError: {
        maxValue,
        value: c.value
      }
    };
  };
};
var createMinValidator = (minValue) => {
  return (c) => {
    if (!isPresent3(minValue) || !isPresent3(c.value) || c.value >= minValue) {
      return null;
    }
    return {
      minError: {
        minValue,
        value: c.value
      }
    };
  };
};
var MIN_DOC_LINK = "http://www.telerik.com/kendo-angular-ui/components/inputs/api/NumericTextBoxComponent/#toc-min";
var MAX_DOC_LINK = "http://www.telerik.com/kendo-angular-ui/components/inputs/api/NumericTextBoxComponent/#toc-max";
var POINT = ".";
var INITIAL_SPIN_DELAY = 500;
var SPIN_DELAY = 50;
var EXPONENT_REGEX = /[eE][\-+]?([0-9]+)/;
var numericRegex = (options) => {
  const {
    autoCorrect,
    decimals,
    min
  } = options;
  let separator = options.separator;
  if (separator === POINT) {
    separator = "\\" + separator;
  }
  const signPattern = autoCorrect && min !== null && min >= 0 ? "" : "-?";
  let numberPattern;
  if (decimals === 0) {
    numberPattern = "\\d*";
  } else {
    numberPattern = `(?:(?:\\d+(${separator}\\d*)?)|(?:${separator}\\d*))?`;
  }
  return new RegExp(`^${signPattern}${numberPattern}$`);
};
var decimalPart = (value) => {
  return value >= 0 ? Math.floor(value) : Math.ceil(value);
};
var noop$1 = (_) => {
};
var defined = (value) => {
  return typeof value !== "undefined";
};
var isNumber2 = (value) => {
  return !isNaN(value) && value !== null;
};
function pad(value, digits) {
  const count = digits - String(value).length;
  let result = value;
  if (count > 0) {
    const padString = new Array(count + 1).join("0");
    result = parseFloat(value + padString);
  }
  return result;
}
var getDeltaFromMouseWheel = (e) => {
  let delta = 0;
  if (e.wheelDelta) {
    delta = e.wheelDelta / 120;
    delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
  } else if (e.detail) {
    delta = Math.round(-e.detail / 3);
  }
  return delta;
};
var getCaretPosition = (element) => element.selectionStart;
var extractSignificantNumericChars = (formattedString, separator) => {
  const significantCharacters = `${separator}0123456789-`;
  return formattedString.split("").reduce((acc, curr) => significantCharacters.includes(curr) ? ++acc : acc, 0);
};
var isRightClick = (event) => {
  const isRightClickIE = event.button && event.button === 2;
  const isRightClickOther = event.which && event.which === 3;
  return isRightClickIE || isRightClickOther;
};
var ArrowDirection;
(function(ArrowDirection2) {
  ArrowDirection2[ArrowDirection2["Down"] = -1] = "Down";
  ArrowDirection2[ArrowDirection2["None"] = 0] = "None";
  ArrowDirection2[ArrowDirection2["Up"] = 1] = "Up";
})(ArrowDirection || (ArrowDirection = {}));
var InputSeparatorComponent = class {
  constructor() {
    this.orientation = "vertical";
    this.hostClass = true;
  }
  get vertical() {
    return this.orientation === "vertical";
  }
  get horizontal() {
    return this.orientation === "horizontal";
  }
};
InputSeparatorComponent.ɵfac = function InputSeparatorComponent_Factory(t) {
  return new (t || InputSeparatorComponent)();
};
InputSeparatorComponent.ɵcmp = ɵɵdefineComponent({
  type: InputSeparatorComponent,
  selectors: [["kendo-input-separator"], ["kendo-textbox-separator"]],
  hostVars: 6,
  hostBindings: function InputSeparatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-input-separator-vertical", ctx.vertical)("k-input-separator-horizontal", ctx.horizontal)("k-input-separator", ctx.hostClass);
    }
  },
  inputs: {
    orientation: "orientation"
  },
  decls: 0,
  vars: 0,
  template: function InputSeparatorComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-input-separator, kendo-textbox-separator",
      template: ``
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    vertical: [{
      type: HostBinding,
      args: ["class.k-input-separator-vertical"]
    }],
    horizontal: [{
      type: HostBinding,
      args: ["class.k-input-separator-horizontal"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-separator"]
    }]
  });
})();
var SharedInputEventsDirective = class {
  constructor(ngZone, renderer, cdr) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.isFocusedChange = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.handleBlur = new EventEmitter();
    this.subscriptions = new import_rxjs2.Subscription();
  }
  ngAfterViewInit() {
    const hostElement = this.hostElement.nativeElement;
    let cursorInsideWrapper = false;
    let tabbing = false;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        this.cdr.detectChanges();
        if (!this.isFocused) {
          this.ngZone.run(() => {
            this.onFocus.emit();
            this.isFocused = true;
            this.isFocusedChange.emit(this.isFocused);
          });
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (args) => {
        if (!this.isFocused) {
          return;
        }
        if (tabbing) {
          const closestTextbox = closest2(args.relatedTarget, (element) => element === hostElement);
          if (!closestTextbox) {
            this.handleBlur.emit();
          }
          tabbing = false;
        } else {
          if (!cursorInsideWrapper && !(this === null || this === void 0 ? void 0 : this.clearButtonClicked)) {
            this.handleBlur.emit();
          }
        }
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseenter", () => {
        cursorInsideWrapper = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "mouseleave", () => {
        cursorInsideWrapper = false;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (args) => {
        if (args.keyCode === Keys.Tab) {
          tabbing = true;
        } else {
          tabbing = false;
        }
      }));
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
};
SharedInputEventsDirective.ɵfac = function SharedInputEventsDirective_Factory(t) {
  return new (t || SharedInputEventsDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
SharedInputEventsDirective.ɵdir = ɵɵdefineDirective({
  type: SharedInputEventsDirective,
  selectors: [["", "kendoInputSharedEvents", ""]],
  inputs: {
    hostElement: "hostElement",
    clearButtonClicked: "clearButtonClicked",
    isFocused: "isFocused"
  },
  outputs: {
    isFocusedChange: "isFocusedChange",
    onFocus: "onFocus",
    handleBlur: "handleBlur"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedInputEventsDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoInputSharedEvents]"
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hostElement: [{
      type: Input
    }],
    clearButtonClicked: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    isFocusedChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    handleBlur: [{
      type: Output
    }]
  });
})();
var NumericTextBoxMessages = class extends ComponentMessages {
};
NumericTextBoxMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵNumericTextBoxMessages_BaseFactory;
  return function NumericTextBoxMessages_Factory(t) {
    return (ɵNumericTextBoxMessages_BaseFactory || (ɵNumericTextBoxMessages_BaseFactory = ɵɵgetInheritedFactory(NumericTextBoxMessages)))(t || NumericTextBoxMessages);
  };
})();
NumericTextBoxMessages.ɵdir = ɵɵdefineDirective({
  type: NumericTextBoxMessages,
  selectors: [["kendo-numerictextbox-messages-base"]],
  inputs: {
    decrement: "decrement",
    increment: "increment"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-numerictextbox-messages-base"
    }]
  }], null, {
    decrement: [{
      type: Input
    }],
    increment: [{
      type: Input
    }]
  });
})();
var LocalizedNumericTextBoxMessagesDirective = class extends NumericTextBoxMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedNumericTextBoxMessagesDirective.ɵfac = function LocalizedNumericTextBoxMessagesDirective_Factory(t) {
  return new (t || LocalizedNumericTextBoxMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedNumericTextBoxMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedNumericTextBoxMessagesDirective,
  selectors: [["", "kendoNumericTextBoxLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: NumericTextBoxMessages,
    useExisting: forwardRef(() => LocalizedNumericTextBoxMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedNumericTextBoxMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: NumericTextBoxMessages,
        useExisting: forwardRef(() => LocalizedNumericTextBoxMessagesDirective)
      }],
      selector: "[kendoNumericTextBoxLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var PARSABLE_OPTIONS = ["min", "max", "step", "decimals"];
var PARSABLE_DEFAULTS = {
  decimals: null,
  max: null,
  min: null,
  step: 1
};
var FOCUSED$4 = "k-focus";
var DEFAULT_SIZE$8 = "medium";
var DEFAULT_ROUNDED$7 = "medium";
var DEFAULT_FILL_MODE$5 = "solid";
var NumericTextBoxComponent = class {
  constructor(intl, renderer, localizationService, injector, ngZone, changeDetector, hostElement) {
    this.intl = intl;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.injector = injector;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.hostElement = hostElement;
    this.focusableId = `k-${guid()}`;
    this.disabled = false;
    this.readonly = false;
    this.title = "";
    this.autoCorrect = false;
    this.decimals = null;
    this.step = 1;
    this.spinners = true;
    this.rangeValidation = true;
    this.tabindex = 0;
    this.changeValueOnScroll = true;
    this.selectOnFocus = true;
    this.value = null;
    this.valueChange = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.ArrowDirection = ArrowDirection;
    this.arrowDirection = ArrowDirection.None;
    this.hostClasses = true;
    this.arrowUpIcon = caretAltUpIcon;
    this.arrowDownIcon = caretAltDownIcon;
    this.inputValue = "";
    this.minValidateFn = noop$1;
    this.maxValidateFn = noop$1;
    this._format = "n2";
    this.isPasted = false;
    this.mouseDown = false;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this.ngChange = noop$1;
    this.ngTouched = noop$1;
    this.ngValidatorChange = noop$1;
    this.domEvents = [];
    this.parsedAttributes = {};
    this.increasePress = (e) => {
      this.arrowPress(ArrowDirection.Up, e);
    };
    this.decreasePress = (e) => {
      this.arrowPress(ArrowDirection.Down, e);
    };
    this.releaseArrow = () => {
      clearTimeout(this.spinTimeout);
      if (this.arrowDirection !== ArrowDirection.None) {
        this.arrowDirection = ArrowDirection.None;
        this.changeDetector.detectChanges();
      }
    };
    this.handlePaste = () => {
      this.isPasted = true;
    };
    this.handleInput = () => {
      const input = this.numericInput.nativeElement;
      let {
        selectionStart,
        selectionEnd,
        value: inputValue
      } = input;
      if (this.pressedKey === Keys.NumpadDecimal) {
        inputValue = this.replaceNumpadDotValue();
      }
      if (this.isPasted) {
        inputValue = this.formatInputValue(this.intl.parseNumber(inputValue));
      }
      if (!this.isValid(inputValue)) {
        input.value = this.inputValue;
        this.setSelection(selectionStart - 1, selectionEnd - 1);
        return;
      }
      const parsedValue = this.intl.parseNumber(inputValue);
      let value = this.restrictDecimals(parsedValue);
      if (this.autoCorrect) {
        const limited = this.limitInputValue(value);
        value = limited.value;
        selectionStart = limited.selectionStart;
        selectionEnd = limited.selectionEnd;
      }
      if (parsedValue !== value || this.hasTrailingZeros(inputValue) || !this.focused) {
        this.setInputValue(value);
        this.setSelection(selectionStart, selectionEnd);
      } else {
        this.inputValue = inputValue;
      }
      if (this.isPasted) {
        input.value = this.inputValue;
      }
      this.updateValue(value);
      this.previousSelection = null;
      this.isPasted = false;
    };
    this.handleDragEnter = () => {
      if (!this.focused && !this.isDisabled) {
        this.setInputValue(this.value, true);
      }
    };
    this.handleMouseDown = () => {
      this.mouseDown = true;
    };
    this.handleInputFocus = () => {
      if (!this.focused) {
        this.focused = true;
        if (!this.isDisabled) {
          const shouldSelectAll = this.selectOnFocus || !this.mouseDown;
          this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              if (shouldSelectAll) {
                this.selectAll();
              } else {
                this.selectCaret();
              }
            }, 0);
          });
        }
        if (hasObservers(this.onFocus)) {
          this.ngZone.run(() => {
            this.onFocus.emit();
          });
        }
      }
      this.mouseDown = false;
      if (hasObservers(this.inputFocus)) {
        this.ngZone.run(() => {
          this.inputFocus.emit();
        });
      }
    };
    this.handleBlur = () => {
      this.changeDetector.markForCheck();
      this.focused = false;
      if (this.inputValue !== this.elementValue) {
        this.handleInput();
      }
      this.setInputValue();
      if (hasObservers(this.onBlur)) {
        this.ngZone.run(() => {
          this.ngTouched();
          this.onBlur.emit();
        });
      }
    };
    this.handleInputBlur = () => {
      this.changeDetector.markForCheck();
      if (this.inputValue !== this.elementValue) {
        this.handleInput();
      }
      this.setInputValue();
      if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
          this.inputBlur.emit();
        });
      }
    };
    this.handleKeyDown = (e) => {
      if (this.isDisabled) {
        return;
      }
      let step;
      if (e.keyCode === Keys.ArrowDown) {
        step = -1;
      } else if (e.keyCode === Keys.ArrowUp) {
        step = 1;
      }
      if (step && this.step) {
        e.preventDefault();
        this.addStep(step);
      }
      const input = this.numericInput.nativeElement;
      this.previousSelection = {
        end: input.selectionEnd,
        start: input.selectionStart
      };
      this.pressedKey = e.keyCode;
    };
    this.handleWheel = (e) => {
      if (this.focused && !this.isDisabled && this.changeValueOnScroll) {
        e.preventDefault();
        const delta = getDeltaFromMouseWheel(e);
        this.addStep(delta);
      }
    };
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * Specifies the number format which is used when the NumericTextBox is not focused
   * ([see example]({% slug formats_numerictextbox %})).
   * If `format` is set to `null` or `undefined`, the default format will be used.
   */
  get format() {
    const format = this._format;
    return format !== null && format !== void 0 ? format : "n2";
  }
  set format(value) {
    this._format = value;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * The size property specifies padding of the NumericTextBox internal input element
   * ([see example]({% slug appearance_numerictextbox %}#toc-size)).
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$8;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The `rounded` property specifies the border radius of the NumericTextBox
   * ([see example](slug appearance_numerictextbox#toc-roundness)).
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$7;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The `fillMode` property specifies the background and border styles of the NumericTextBox
   * ([see example](slug:appearance_numerictextbox#toc-fill-mode)).
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$5;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.numericInput.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  get disableClass() {
    return this.disabled;
  }
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.tabIndex,
      placeholder: this.placeholder,
      title: this.title,
      maxlength: this.maxlength,
      "aria-valuemin": this.min,
      "aria-valuemax": this.max,
      "aria-valuenow": this.value,
      required: this.isControlRequired ? "" : null,
      "aria-invalid": this.isControlInvalid
    };
  }
  get mutableAttributes() {
    return {
      autocomplete: "off",
      autocorrect: "off",
      role: "spinbutton"
    };
  }
  ngOnInit() {
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.subscriptions.add(this.intl.changes.subscribe(this.intlChange.bind(this)));
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.control = this.injector.get(NgControl, null);
    this.ngZone.runOutsideAngular(() => {
      this.domEvents.push(this.renderer.listen(this.hostElement.nativeElement, "mousewheel", this.handleWheel.bind(this)));
      this.domEvents.push(this.renderer.listen(this.hostElement.nativeElement, "DOMMouseScroll", this.handleWheel.bind(this)));
    });
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (anyChanged(PARSABLE_OPTIONS, changes, false)) {
      this.parseOptions(PARSABLE_OPTIONS.filter((option) => changes[option]));
    }
    this.verifySettings();
    if (anyChanged(["min", "max", "rangeValidation"], changes, false)) {
      this.minValidateFn = this.rangeValidation ? createMinValidator(this.min) : noop$1;
      this.maxValidateFn = this.rangeValidation ? createMaxValidator(this.max) : noop$1;
      this.ngValidatorChange();
    }
    if (anyChanged(["autoCorrect", "decimals", "min"], changes)) {
      delete this.numericRegex;
    }
    if (anyChanged(["value", "format"], changes, false)) {
      this.verifyValue(this.value);
      this.value = this.restrictModelValue(this.value);
      if (!this.focused || this.intl.parseNumber(this.elementValue) !== this.value) {
        this.setInputValue();
      }
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    clearTimeout(this.spinTimeout);
    this.domEvents.forEach((unbindHandler) => unbindHandler());
  }
  /**
   * @hidden
   */
  validate(control) {
    return this.minValidateFn(control) || this.maxValidateFn(control);
  }
  /**
   * @hidden
   */
  registerOnValidatorChange(fn) {
    this.ngValidatorChange = fn;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.verifyValue(value);
    const restrictedValue = this.restrictModelValue(value);
    this.value = restrictedValue;
    this.setInputValue();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * Focuses the NumericTextBox.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="numerictextbox.focus()">Focus NumericTextBox</button>
   *  <kendo-numerictextbox #numerictextbox></kendo-numerictextbox>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    invokeElementMethod(this.numericInput, "focus");
  }
  /**
   * Blurs the NumericTextBox.
   */
  blur() {
    invokeElementMethod(this.numericInput, "blur");
  }
  /**
   * Notifies the `NumericTextBoxComponent` that the input value should be changed.
   * Can be used to update the input after setting the component properties directly.
   */
  notifyValueChange() {
    this.setInputValue();
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focused && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.focused = true;
    });
  }
  /**
   * @hidden
   */
  get incrementTitle() {
    return this.localizationService.get("increment");
  }
  /**
   * @hidden
   */
  get decrementTitle() {
    return this.localizationService.get("decrement");
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    var _a2;
    return isControlRequired((_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.control);
  }
  /**
   * @hidden
   */
  get focused() {
    return this.isFocused;
  }
  /**
   * @hidden
   */
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      const wrap = this.hostElement.nativeElement;
      if (value) {
        this.renderer.addClass(wrap, FOCUSED$4);
      } else {
        this.renderer.removeClass(wrap, FOCUSED$4);
      }
      this.isFocused = value;
    }
  }
  get decimalSeparator() {
    const numberSymbols = this.intl.numberSymbols();
    return numberSymbols.decimal;
  }
  get elementValue() {
    return this.numericInput.nativeElement.value;
  }
  set elementValue(value) {
    this.renderer.setProperty(this.numericInput.nativeElement, "value", value);
  }
  get hasDecimals() {
    return this.decimals !== null && this.decimals >= 0;
  }
  get isDisabled() {
    return this.disabled || this.readonly;
  }
  arrowPress(direction, e) {
    e.preventDefault();
    if (this.isDisabled || isRightClick(e)) {
      return;
    }
    if (!mobileOS) {
      this.focus();
      this.focused = true;
    }
    if (this.arrowDirection !== direction) {
      this.arrowDirection = direction;
      this.changeDetector.detectChanges();
    }
    if (this.step) {
      this.spin(direction, INITIAL_SPIN_DELAY);
    } else {
      this.setInputValue();
    }
  }
  updateValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
  }
  replaceNumpadDotValue() {
    let value = this.inputValue || "";
    if (this.previousSelection) {
      const input = this.numericInput.nativeElement;
      const {
        selectionStart,
        selectionEnd
      } = input;
      const {
        start,
        end
      } = this.previousSelection;
      input.value = value = value.substring(0, start) + this.decimalSeparator + value.substring(end);
      this.setSelection(selectionStart, selectionEnd);
    }
    return value;
  }
  isValid(value) {
    if (!this.numericRegex) {
      this.numericRegex = numericRegex({
        autoCorrect: this.autoCorrect,
        decimals: this.decimals,
        min: this.min,
        separator: this.decimalSeparator
      });
    }
    return this.numericRegex.test(value);
  }
  spin(step, timeout) {
    clearTimeout(this.spinTimeout);
    this.spinTimeout = window.setTimeout(() => {
      this.spin(step, SPIN_DELAY);
    }, timeout);
    this.addStep(step);
  }
  addStep(step) {
    let value = add(this.value || 0, this.step * step);
    value = this.limitValue(value);
    value = this.restrictDecimals(value);
    this.setInputValue(value);
    this.updateValue(value);
  }
  setSelection(start, end) {
    if (this.focused) {
      invokeElementMethod(this.numericInput, "setSelectionRange", start, end);
    }
  }
  limitValue(value) {
    let result = value;
    if (!this.isInRange(value)) {
      if (isNumber2(this.max) && value > this.max) {
        result = this.max;
      }
      if (isNumber2(this.min) && value < this.min) {
        result = this.min;
      }
    }
    return result;
  }
  limitInputValue(value) {
    const {
      selectionStart,
      selectionEnd,
      value: enteredValue
    } = this.numericInput.nativeElement;
    let limitedValue = value;
    let selectToEnd = false;
    if (!this.isInRange(value)) {
      const lengthChange = enteredValue.length - String(this.inputValue).length;
      const {
        min,
        max
      } = this;
      const hasMax = isNumber2(max);
      const hasMin = isNumber2(min);
      let padLimit, replaceNext;
      let correctedValue = value;
      if (selectionStart === 0 && this.inputValue.substr(1) === enteredValue) {
        return {
          selectionEnd,
          selectionStart,
          value: null
        };
      }
      if (hasMax && value > max) {
        if (value > 0) {
          replaceNext = true;
        } else {
          padLimit = max;
        }
      } else if (hasMin && value < min) {
        if (value > 0) {
          padLimit = min;
        } else {
          replaceNext = true;
        }
      }
      if (padLimit) {
        const paddedValue = this.tryPadValue(value, padLimit);
        if (paddedValue && decimalPart(value) !== decimalPart(padLimit)) {
          correctedValue = paddedValue;
          selectToEnd = true;
        }
      } else if (replaceNext) {
        if (this.inputValue && selectionStart !== enteredValue.length) {
          correctedValue = parseFloat(enteredValue.substr(0, selectionStart) + enteredValue.substr(selectionStart + lengthChange));
        }
      }
      limitedValue = this.limitValue(correctedValue);
      selectToEnd = (selectToEnd || limitedValue !== correctedValue) && this.previousSelection && this.previousSelection.end - this.previousSelection.start + lengthChange > 0;
    }
    return {
      selectionEnd: selectToEnd ? String(limitedValue).length : selectionEnd,
      selectionStart,
      value: limitedValue
    };
  }
  tryPadValue(value, limit) {
    const limitLength = String(Math.floor(limit)).length;
    const zeroPadded = pad(value, limitLength);
    const zeroPaddedNext = pad(value, limitLength + 1);
    let result;
    if (this.isInRange(zeroPadded)) {
      result = zeroPadded;
    } else if (this.isInRange(zeroPaddedNext)) {
      result = zeroPaddedNext;
    }
    return result;
  }
  isInRange(value) {
    return !isNumber2(value) || (!isNumber2(this.min) || this.min <= value) && (!isNumber2(this.max) || value <= this.max);
  }
  restrictModelValue(value) {
    let result = this.restrictDecimals(value, true);
    if (this.autoCorrect && this.limitValue(result) !== result) {
      result = null;
    }
    return result;
  }
  restrictDecimals(value, round) {
    let result = value;
    if (value && this.hasDecimals) {
      const decimals = this.decimals;
      const stringValue = String(value);
      if (round || EXPONENT_REGEX.test(stringValue)) {
        result = toFixedPrecision(value, decimals);
      } else {
        const parts = stringValue.split(POINT);
        let fraction = parts[1];
        if (fraction && fraction.length > decimals) {
          fraction = fraction.substr(0, decimals);
          result = parseFloat(`${parts[0]}${POINT}${fraction}`);
        }
      }
    }
    return result;
  }
  formatInputValue(value) {
    let stringValue = Object.is(value, -0) ? "-0" : String(value);
    const exponentMatch = EXPONENT_REGEX.exec(stringValue);
    if (exponentMatch) {
      stringValue = value.toFixed(limitPrecision(parseInt(exponentMatch[1], 10)));
    }
    return stringValue.replace(POINT, this.decimalSeparator);
  }
  formatValue(value, focused) {
    let formattedValue;
    if (value === null || !defined(value) || value === "") {
      formattedValue = "";
    } else if (focused && !this.readonly) {
      formattedValue = this.formatInputValue(value);
    } else {
      formattedValue = this.intl.formatNumber(value, this.format);
    }
    return formattedValue;
  }
  setInputValue(value = this.value, focused = this.focused) {
    const formattedValue = this.formatValue(value, focused);
    this.elementValue = formattedValue;
    this.inputValue = formattedValue;
  }
  verifySettings() {
    if (!isDevMode()) {
      return;
    }
    if (this.min !== null && this.max !== null && this.min > this.max) {
      throw new Error(`The max value should be bigger than the min. See ${MIN_DOC_LINK} and ${MAX_DOC_LINK}.`);
    }
  }
  verifyValue(value) {
    if (isDevMode() && value && typeof value !== "number") {
      throw new Error(`The NumericTextBox component requires value of type Number and ${JSON.stringify(value)} was set.`);
    }
  }
  parseOptions(options) {
    for (let idx = 0; idx < options.length; idx++) {
      const name = options[idx];
      const value = this[name];
      if (typeof value === "string") {
        const parsed = parseFloat(value);
        const valid = !isNaN(parsed);
        if (isDevMode() && !valid && value !== "") {
          throw new Error(`The NumericTextBox component requires value of type Number or a String representing a number for the ${name} property and ${JSON.stringify(value)} was set.`);
        }
        this[name] = valid ? parsed : PARSABLE_DEFAULTS[name];
      }
    }
  }
  intlChange() {
    delete this.numericRegex;
    if (this.numericInput && (!this.focused || !this.isValid(this.elementValue))) {
      this.setInputValue();
    }
  }
  hasTrailingZeros(inputValue) {
    if (this.hasDecimals && this.focused) {
      const fraction = inputValue.split(this.decimalSeparator)[1];
      return fraction && fraction.length > this.decimals && fraction.lastIndexOf("0") === fraction.length - 1;
    }
  }
  selectAll() {
    this.setInputValue();
    this.setSelection(0, this.inputValue.length);
  }
  selectCaret() {
    const caretPosition = getCaretPosition(this.numericInput.nativeElement);
    const formattedValue = this.elementValue;
    const partialValue = formattedValue.substring(0, caretPosition);
    this.setInputValue();
    if (partialValue.length) {
      const significantCharsInFormattedValue = extractSignificantNumericChars(partialValue, this.decimalSeparator);
      const adjustedSignificantChars = this.adjustSignificantChars(formattedValue, significantCharsInFormattedValue);
      this.setSelection(adjustedSignificantChars, adjustedSignificantChars);
    } else {
      this.setSelection(0, 0);
    }
  }
  numberOfLeadingZeroes(formattedValue) {
    const separatorIndex = formattedValue.indexOf(this.decimalSeparator);
    const matchedLeadingZeroes = formattedValue.match(/^[^1-9]*?(0+)/);
    if (matchedLeadingZeroes) {
      const lengthOfMatch = matchedLeadingZeroes[0].length;
      const lengthOfLeadingZeroesMatch = matchedLeadingZeroes[1].length;
      return lengthOfMatch === separatorIndex ? lengthOfLeadingZeroesMatch - 1 : lengthOfLeadingZeroesMatch;
    }
    return 0;
  }
  adjustSignificantChars(formattedValue, significantChars) {
    const leadingZeroes = this.numberOfLeadingZeroes(formattedValue);
    if (leadingZeroes > 0) {
      return Math.max(0, significantChars - leadingZeroes);
    }
    return significantChars;
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.numericInput.nativeElement, this.ngZone);
  }
};
NumericTextBoxComponent.ɵfac = function NumericTextBoxComponent_Factory(t) {
  return new (t || NumericTextBoxComponent)(ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
NumericTextBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: NumericTextBoxComponent,
  selectors: [["kendo-numerictextbox"]],
  contentQueries: function NumericTextBoxComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
    }
  },
  viewQuery: function NumericTextBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c13, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.numericInput = _t.first);
    }
  },
  hostVars: 9,
  hostBindings: function NumericTextBoxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-disabled", ctx.disableClass)("k-input", ctx.hostClasses)("k-numerictextbox", ctx.hostClasses);
    }
  },
  inputs: {
    focusableId: "focusableId",
    disabled: "disabled",
    readonly: "readonly",
    title: "title",
    autoCorrect: "autoCorrect",
    format: "format",
    max: "max",
    min: "min",
    decimals: "decimals",
    placeholder: "placeholder",
    step: "step",
    spinners: "spinners",
    rangeValidation: "rangeValidation",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    changeValueOnScroll: "changeValueOnScroll",
    selectOnFocus: "selectOnFocus",
    value: "value",
    maxlength: "maxlength",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    inputAttributes: "inputAttributes"
  },
  outputs: {
    valueChange: "valueChange",
    onFocus: "focus",
    onBlur: "blur",
    inputFocus: "inputFocus",
    inputBlur: "inputBlur"
  },
  exportAs: ["kendoNumericTextBox"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.numerictextbox"
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumericTextBoxComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumericTextBoxComponent),
    multi: true
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => NumericTextBoxComponent)
  }]), ɵɵNgOnChangesFeature],
  decls: 9,
  vars: 28,
  consts: () => {
    let i18n_7;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_7 = goog.getMsg("Increase value");
      i18n_7 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_7;
    } else {
      i18n_7 = $localize`:kendo.numerictextbox.increment|The title for the **Increment** button in the NumericTextBox:Increase value`;
    }
    let i18n_8;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_8 = goog.getMsg("Decrease value");
      i18n_8 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_8;
    } else {
      i18n_8 = $localize`:kendo.numerictextbox.decrement|The title for the **Decrement** button in the NumericTextBox:Decrease value`;
    }
    return [["numericInput", ""], ["kendoNumericTextBoxLocalizedMessages", "", "increment", i18n_7, "decrement", i18n_8], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], ["role", "spinbutton", "autocomplete", "off", "autocorrect", "off", 1, "k-input-inner", 3, "id", "tabindex", "disabled", "readonly", "kendoEventsOutsideAngular"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], ["class", "k-input-spinner k-spin-button", 3, "kendoEventsOutsideAngular", 4, "ngIf"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], [1, "k-input-suffix", "k-input-suffix-horizontal"], [1, "k-input-spinner", "k-spin-button", 3, "kendoEventsOutsideAngular"], ["type", "button", "tabindex", "-1", 1, "k-spinner-increase", "k-button", "k-button-md", "k-icon-button", "k-button-solid", "k-button-solid-base", 3, "kendoEventsOutsideAngular", "title"], ["name", "caret-alt-up", "innerCssClass", "k-button-icon", 3, "svgIcon"], ["type", "button", "tabindex", "-1", 1, "k-spinner-decrease", "k-button", "k-button-md", "k-icon-button", "k-button-solid", "k-button-solid-base", 3, "kendoEventsOutsideAngular", "title"], ["name", "caret-alt-down", "innerCssClass", "k-button-icon", 3, "svgIcon"]];
  },
  template: function NumericTextBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 1);
      ɵɵelementContainerStart(1, 2);
      ɵɵtwoWayListener("isFocusedChange", function NumericTextBoxComponent_Template_ng_container_isFocusedChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.focused, $event) || (ctx.focused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function NumericTextBoxComponent_Template_ng_container_handleBlur_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function NumericTextBoxComponent_Template_ng_container_onFocus_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(2, NumericTextBoxComponent_span_2_Template, 2, 1, "span", 3)(3, NumericTextBoxComponent_kendo_input_separator_3_Template, 1, 0, "kendo-input-separator", 4);
      ɵɵelement(4, "input", 5, 0);
      ɵɵtemplate(6, NumericTextBoxComponent_kendo_input_separator_6_Template, 1, 0, "kendo-input-separator", 4)(7, NumericTextBoxComponent_span_7_Template, 2, 1, "span", 6)(8, NumericTextBoxComponent_span_8_Template, 5, 22, "span", 7);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.focused);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate && ctx.prefixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("id", ctx.focusableId)("tabindex", ctx.tabIndex)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction7(20, _c14, ctx.handleMouseDown, ctx.handleDragEnter, ctx.handleKeyDown, ctx.handleInput, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handlePaste));
      ɵɵattribute("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx.value)("title", ctx.title)("placeholder", ctx.placeholder)("maxLength", ctx.maxlength)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.suffixTemplate && (ctx.suffixTemplate == null ? null : ctx.suffixTemplate.showSeparator));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.spinners);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, EventsOutsideAngularDirective, IconWrapperComponent, InputSeparatorComponent, SharedInputEventsDirective, LocalizedNumericTextBoxMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoNumericTextBox",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.numerictextbox"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NumericTextBoxComponent),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NumericTextBoxComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => NumericTextBoxComponent)
      }],
      selector: "kendo-numerictextbox",
      template: `
        <ng-container kendoNumericTextBoxLocalizedMessages
            i18n-increment="kendo.numerictextbox.increment|The title for the **Increment** button in the NumericTextBox"
            increment="Increase value"
            i18n-decrement="kendo.numerictextbox.decrement|The title for the **Decrement** button in the NumericTextBox"
            decrement="Decrease value"
        >
        </ng-container>
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="focused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <span *ngIf="prefixTemplate" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
                </ng-template>
            </span>
            <kendo-input-separator *ngIf="prefixTemplate && prefixTemplate.showSeparator"></kendo-input-separator>
            <input #numericInput
                class="k-input-inner"
                role="spinbutton"
                autocomplete="off"
                autocorrect="off"
                [id]="focusableId"
                [attr.aria-valuemin]="min"
                [attr.aria-valuemax]="max"
                [attr.aria-valuenow]="value"
                [attr.title]="title"
                [attr.placeholder]="placeholder"
                [attr.maxLength]="maxlength"
                [tabindex]="tabIndex"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.aria-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    mousedown: handleMouseDown,
                    dragenter: handleDragEnter,
                    keydown: handleKeyDown,
                    input: handleInput,
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    paste: handlePaste
                }"/>
            <kendo-input-separator *ngIf="suffixTemplate && suffixTemplate?.showSeparator"></kendo-input-separator>
            <span *ngIf="suffixTemplate" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
                </ng-template>
            </span>
            <span
                class="k-input-spinner k-spin-button" *ngIf="spinners"
                [kendoEventsOutsideAngular]="{ mouseup: releaseArrow, mouseleave: releaseArrow }"
            >
            <button
                type="button"
                [kendoEventsOutsideAngular]="{ mousedown: increasePress }"
                [attr.aria-hidden]="true"
                [attr.aria-label]="incrementTitle"
                [title]="incrementTitle"
                class="k-spinner-increase k-button k-button-md k-icon-button k-button-solid k-button-solid-base"
                [class.k-active]="arrowDirection === ArrowDirection.Up"
                tabindex="-1"
            >
                <kendo-icon-wrapper
                    name="caret-alt-up"
                    innerCssClass="k-button-icon"
                    [svgIcon]="arrowUpIcon"
                >
                </kendo-icon-wrapper>
            </button>
            <button
                type="button"
                [kendoEventsOutsideAngular]="{ mousedown: decreasePress }"
                [attr.aria-hidden]="true"
                [attr.aria-label]="decrementTitle"
                [title]="decrementTitle"
                [class.k-active]="arrowDirection === ArrowDirection.Down"
                class="k-spinner-decrease k-button k-button-md k-icon-button k-button-solid k-button-solid-base"
                tabindex="-1"
            >
                <kendo-icon-wrapper
                    name="caret-alt-down"
                    innerCssClass="k-button-icon"
                    [svgIcon]="arrowDownIcon"
                >
                    </kendo-icon-wrapper>
                </button>
            </span>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: IntlService
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: Injector
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    title: [{
      type: Input
    }],
    autoCorrect: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    decimals: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    spinners: [{
      type: Input
    }],
    rangeValidation: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    changeValueOnScroll: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    numericInput: [{
      type: ViewChild,
      args: ["numericInput", {
        static: true
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    disableClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-numerictextbox"]
    }]
  });
})();
var NumericTextBoxCustomMessagesComponent = class extends NumericTextBoxMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
NumericTextBoxCustomMessagesComponent.ɵfac = function NumericTextBoxCustomMessagesComponent_Factory(t) {
  return new (t || NumericTextBoxCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
NumericTextBoxCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: NumericTextBoxCustomMessagesComponent,
  selectors: [["kendo-numerictextbox-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: NumericTextBoxMessages,
    useExisting: forwardRef(() => NumericTextBoxCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function NumericTextBoxCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: NumericTextBoxMessages,
        useExisting: forwardRef(() => NumericTextBoxCustomMessagesComponent)
      }],
      selector: "kendo-numerictextbox-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var ResultType2;
(function(ResultType3) {
  ResultType3[ResultType3["Literal"] = 0] = "Literal";
  ResultType3[ResultType3["Mask"] = 1] = "Mask";
  ResultType3[ResultType3["Undefined"] = 2] = "Undefined";
})(ResultType2 || (ResultType2 = {}));
var Result2 = class _Result {
  constructor(value, rest, type = ResultType2.Undefined) {
    this.value = value;
    this.rest = rest;
    this.type = type;
  }
  //map :: Functor f => f a ~> (a -> b) -> f b
  map(fn) {
    return new _Result(fn(this.value), this.rest);
  }
  //chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(fn) {
    return fn(this.value, this.rest);
  }
  fold(s, _) {
    return s(this.value, this.rest);
  }
  concat(r) {
    return this.map((vs, _) => r.chain((v, __) => vs.concat([v])));
  }
  toString() {
    return `Result({ value: '${this.value}', rest: ${this.rest} })`;
  }
};
var Stream2 = class {
  constructor(input = [], control = []) {
    this.input = input;
    this.control = control;
    this.inputCursor = 0;
    this.controlCursor = 0;
  }
  eof() {
    return this.inputCursor >= this.input.length;
  }
  // Get the first value from the input.
  next() {
    return {
      char: this.input[this.inputCursor++],
      control: this.control[this.controlCursor++]
    };
  }
  peek() {
    return {
      char: this.input[this.inputCursor],
      control: this.control[this.controlCursor]
    };
  }
  eat_input() {
    this.inputCursor++;
  }
  eat_control() {
    this.controlCursor++;
  }
  eat() {
    this.inputCursor++;
    this.controlCursor++;
  }
};
var toArray2 = (value) => (value || "").split("");
var ESCAPE_CHARACTER2 = "\\";
var Parser2 = class _Parser {
  constructor(parse) {
    this.parse = parse;
  }
  run(input, control = "") {
    if (input instanceof Stream2) {
      return this.parse(input);
    } else {
      return this.parse(new Stream2(toArray2(input), toArray2(control)));
    }
  }
  //map :: Functor f => f a ~> (a -> b) -> f b
  map(f) {
    return new _Parser((stream) => this.parse(stream).map(f));
  }
  //chain :: Chain m => m a ~> (a -> m b) -> m b
  chain(f) {
    return new _Parser((stream) => this.parse(stream).chain((v, s) => f(v).run(s)));
  }
  isLiteral(c) {
    return this.run(c).type === ResultType2.Literal;
  }
};
var mask2 = ({
  prompt,
  promptPlaceholder
}) => (rule) => new Parser2((stream) => {
  while (!stream.eof()) {
    const {
      char,
      control
    } = stream.peek();
    if (char === control && control === prompt) {
      stream.eat();
      return new Result2(prompt, stream, ResultType2.Mask);
    }
    if (rule.test(char)) {
      stream.eat();
      return new Result2(char, stream, ResultType2.Mask);
    }
    if (char === promptPlaceholder) {
      stream.eat();
      return new Result2(prompt, stream, ResultType2.Mask);
    }
    stream.eat_input();
  }
  stream.eat();
  return new Result2(prompt, stream, ResultType2.Mask);
});
var literal2 = (_token) => new Parser2((stream) => {
  const char = stream.peek().char;
  if (char === _token) {
    stream.eat();
    return new Result2(_token, stream, ResultType2.Literal);
  }
  return new Result2(_token, stream, ResultType2.Literal);
});
var unmask2 = (prompt) => (rule) => new Parser2((stream) => {
  while (!stream.eof()) {
    const {
      char,
      control
    } = stream.peek();
    if (char === prompt && control === prompt) {
      stream.eat();
      return new Result2(char, stream);
    }
    if (rule.test(char)) {
      stream.eat();
      return new Result2(char, stream);
    }
    stream.eat_input();
  }
  stream.eat();
  return new Result2("", stream);
});
var unliteral2 = (_token) => new Parser2((stream) => {
  if (stream.eof()) {
    return new Result2("", stream);
  }
  const {
    char
  } = stream.peek();
  if (char === _token) {
    stream.eat();
  }
  return new Result2(_token, stream);
});
var token2 = (rules, creator) => new Parser2((stream) => {
  let {
    char
  } = stream.next();
  const rule = rules[char];
  if (char === ESCAPE_CHARACTER2) {
    char = stream.next().char;
    return new Result2(creator.literal(char), stream);
  }
  if (!rule) {
    return new Result2(creator.literal(char), stream);
  }
  return new Result2(creator.mask(rule), stream);
});
var rawMask2 = ({
  prompt,
  promptPlaceholder
}) => new Parser2((stream) => {
  const {
    char
  } = stream.next();
  if (char === prompt) {
    return new Result2(promptPlaceholder, stream);
  }
  return new Result2(char, stream);
});
var rawLiteral2 = (includeLiterals) => new Parser2((stream) => {
  const {
    char
  } = stream.next();
  if (includeLiterals) {
    return new Result2(char, stream);
  }
  return new Result2("", stream);
});
var always2 = (value) => new Parser2((stream) => new Result2(value, stream));
var append2 = (p1, p2) => p1.chain((vs) => p2.map((v) => vs.concat([v])));
var sequence2 = (list) => list.reduce((acc, parser) => append2(acc, parser), always2([]));
var greedy2 = (parser) => new Parser2((stream) => {
  let result = new Result2([], stream);
  while (!stream.eof()) {
    result = result.concat(parser.run(stream));
  }
  return result;
});
var MaskingService2 = class {
  constructor() {
    this.rules = {};
    this.prompt = "_";
    this.mask = "";
    this.promptPlaceholder = " ";
    this.includeLiterals = false;
    this.maskTokens = [];
    this.unmaskTokens = [];
    this.rawTokens = [];
    this.validationTokens = [];
  }
  update({
    mask: mask3 = "",
    prompt = "",
    promptPlaceholder = " ",
    rules = {},
    includeLiterals = false
  }) {
    this.mask = mask3;
    this.prompt = prompt;
    this.promptPlaceholder = promptPlaceholder;
    this.rules = rules;
    this.includeLiterals = includeLiterals;
    this.tokenize();
  }
  validationValue(maskedValue = "") {
    let value = maskedValue;
    sequence2(this.validationTokens).run(maskedValue).fold((unmasked) => {
      value = unmasked.join("");
    });
    return value;
  }
  rawValue(maskedValue = "") {
    let value = maskedValue;
    if (!this.rawTokens.length) {
      return value;
    }
    sequence2(this.rawTokens).run(maskedValue).fold((unmasked) => {
      value = unmasked.join("");
    });
    return value;
  }
  /**
   * @hidden
   */
  maskRaw(rawValue = "") {
    let value = rawValue;
    if (!this.maskTokens.length) {
      return value;
    }
    sequence2(this.maskTokens).run(rawValue).fold((masked) => {
      value = masked.join("");
    });
    return value;
  }
  maskInput(input, control, splitPoint) {
    if (input.length < control.length) {
      return this.maskRemoved(input, control, splitPoint);
    }
    return this.maskInserted(input, control, splitPoint);
  }
  maskInRange(pasted, oldValue, start, end) {
    let value = "";
    const selection = end;
    const beforeChange = oldValue.split("").slice(0, start);
    const afterChange = oldValue.split("").slice(end);
    sequence2(this.maskTokens.slice(start, end)).run(pasted).fold((masked) => {
      value = beforeChange.concat(masked).concat(afterChange).join("");
    });
    return {
      selection,
      value
    };
  }
  maskRemoved(input, control, splitPoint) {
    let value = "";
    let selection = splitPoint;
    const unchanged = input.split("").slice(splitPoint);
    const changed = input.split("").slice(0, splitPoint).join("");
    const take3 = this.maskTokens.length - (input.length - splitPoint);
    sequence2(this.maskTokens.slice(0, take3)).run(changed, control).fold((masked) => {
      selection = this.adjustPosition(masked, selection);
      value = masked.concat(unchanged).join("");
    });
    return {
      selection,
      value
    };
  }
  adjustPosition(input, selection) {
    const caretChar = input[selection];
    const isLiteral = this.maskTokens[selection].isLiteral(caretChar);
    if (!isLiteral && caretChar !== this.prompt) {
      return selection + 1;
    }
    return selection;
  }
  maskInserted(input, control, splitPoint) {
    let value = "";
    let selection = splitPoint;
    const changed = input.slice(0, splitPoint);
    sequence2(this.unmaskTokens).run(changed, control).chain((unmasked) => {
      selection = unmasked.join("").length;
      const unchanged = control.slice(selection);
      return sequence2(this.maskTokens).run(unmasked.join("") + unchanged, control);
    }).fold((masked) => {
      value = masked.join("");
    });
    return {
      selection,
      value
    };
  }
  get maskTokenCreator() {
    const {
      prompt,
      promptPlaceholder
    } = this;
    return {
      literal: (rule) => literal2(rule),
      mask: (rule) => mask2({
        prompt,
        promptPlaceholder
      })(rule)
    };
  }
  get unmaskTokenCreator() {
    return {
      literal: (rule) => unliteral2(rule),
      mask: (rule) => unmask2(this.prompt)(rule)
    };
  }
  get rawTokenCreator() {
    const {
      prompt,
      promptPlaceholder,
      includeLiterals
    } = this;
    return {
      literal: (_) => rawLiteral2(includeLiterals),
      mask: (_) => rawMask2({
        prompt,
        promptPlaceholder
      })
    };
  }
  get validationTokenCreator() {
    const {
      prompt
    } = this;
    return {
      literal: (_) => rawLiteral2(false),
      mask: (_) => rawMask2({
        prompt,
        promptPlaceholder: ""
      })
    };
  }
  tokenize() {
    greedy2(token2(this.rules, this.maskTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.maskTokens = tokens;
    });
    greedy2(token2(this.rules, this.unmaskTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.unmaskTokens = tokens;
    });
    greedy2(token2(this.rules, this.rawTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.rawTokens = tokens;
    });
    greedy2(token2(this.rules, this.validationTokenCreator)).run(this.mask).fold((tokens, _) => {
      this.validationTokens = tokens;
    });
  }
};
MaskingService2.ɵfac = function MaskingService_Factory(t) {
  return new (t || MaskingService2)();
};
MaskingService2.ɵprov = ɵɵdefineInjectable({
  token: MaskingService2,
  factory: MaskingService2.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskingService2, [{
    type: Injectable
  }], null, null);
})();
var resolvedPromise = Promise.resolve(null);
var FOCUSED$3 = "k-focus";
var DEFAULT_SIZE$7 = "medium";
var DEFAULT_ROUNDED$6 = "medium";
var DEFAULT_FILL_MODE$4 = "solid";
var MaskedTextBoxComponent = class {
  constructor(service, renderer, hostElement, ngZone, injector, changeDetector, rtl) {
    this.service = service;
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.ngZone = ngZone;
    this.injector = injector;
    this.changeDetector = changeDetector;
    this.focusableId = `k-${guid()}`;
    this.disabled = false;
    this.readonly = false;
    this.prompt = "_";
    this.promptPlaceholder = " ";
    this.includeLiterals = false;
    this.maskOnFocus = false;
    this.maskValidation = true;
    this.tabindex = 0;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.hostClasses = true;
    this.focusClick = false;
    this.defaultRules = {
      "#": /[\d\s\+\-]/,
      "&": /[\S]/,
      "0": /[\d]/,
      "9": /[\d\s]/,
      "?": /[a-zA-Z\s]/,
      "A": /[a-zA-Z0-9]/,
      "C": /./,
      "L": /[a-zA-Z]/,
      "a": /[a-zA-Z0-9\s]/
    };
    this.isPasted = false;
    this.selection = [0, 0];
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this.parsedAttributes = {};
    this.handleFocus = () => {
      this.ngZone.run(() => {
        if (!this.focused && hasObservers(this.onFocus)) {
          this.onFocus.emit();
        }
        this.focused = true;
      });
      if (this.maskOnFocus && this.emptyMask) {
        this.updateInput(this.service.maskRaw(this.value));
        this.ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            this.setSelection(0, 0);
          }, 0);
        });
      }
    };
    this.handleInputFocus = () => {
      this.handleFocus();
      if (hasObservers(this.inputFocus)) {
        this.ngZone.run(() => {
          this.inputFocus.emit();
        });
      }
    };
    this.handleClick = () => {
      if (this.focused && !this.focusClick) {
        this.focusClick = true;
      }
      if (this.promptPlaceholder === null || this.promptPlaceholder === "") {
        const {
          selectionStart,
          selectionEnd
        } = this.input.nativeElement;
        if (selectionStart === selectionEnd) {
          this.setFocusSelection();
        }
      }
    };
    this.handleBlur = () => {
      this.changeDetector.markForCheck();
      this.focused = false;
      this.focusClick = false;
      if (this.maskOnFocus && this.emptyMask) {
        this.updateInput(this.maskedValue);
      }
      if (hasObservers(this.onBlur)) {
        this.ngZone.run(() => {
          this.onBlur.emit();
        });
      }
      this.ngZone.run(() => {
        if (this.control) {
          this.control && !this.control.touched && this.onTouched();
        }
      });
    };
    this.handleInputBlur = () => {
      this.changeDetector.markForCheck();
      if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.inputBlur.emit();
        });
      }
    };
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    validatePackage(packageMetadata2);
    this.direction = rtl ? "rtl" : "ltr";
    this.updateService();
  }
  /**
   * The size property specifies the padding of the MaskedTextBox internal input element
   * ([see example]({% slug appearance_maskedtextbox %}#toc-size)).
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$7;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the MaskedTextBox
   * ([see example](slug:appearance_maskedtextbox#toc-roundness)).
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$6;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The `fillMode` property specifies the background and border styles of the MaskedTexBox
   * ([see example]({% slug appearance_maskedtextbox %}#toc-fill-mode)).
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$4;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Exposes the RegExp-based mask validation array ([see example]({% slug masks_maskedtextbox %})).
   */
  set rules(value) {
    this._rules = Object.assign({}, this.defaultRules, value);
  }
  get rules() {
    return this._rules || this.defaultRules;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.tabIndex,
      "aria-invalid": this.isControlInvalid,
      title: this.title,
      required: this.isControlRequired ? "" : null
    };
  }
  get mutableAttributes() {
    return {
      "aria-placeholder": this.mask,
      autocomplete: "off",
      autocorrect: "off",
      autocapitalize: "off",
      spellcheck: "false"
    };
  }
  get hostDisabledClass() {
    return this.disabled;
  }
  ngOnInit() {
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.control = this.injector.get(NgControl, null);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the MaskedTextBox is empty.
   */
  isEmpty() {
    if (this.input) {
      return !this.input.nativeElement.value;
    }
  }
  /**
   * @hidden
   */
  handleDragDrop() {
    return false;
  }
  /**
   * Focuses the MaskedTextBox.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="maskedinput.focus()">Focus the input</button>
   *  <kendo-maskedtextbox #maskedinput></kendo-maskedtextbox>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.input.nativeElement.focus();
    this.focused = true;
    this.setFocusSelection();
  }
  /**
   * Blurs the MaskedTextBox.
   */
  blur() {
    if (!this.input) {
      return;
    }
    this.input.nativeElement.blur();
    this.focused = false;
  }
  /**
   * @hidden
   */
  pasteHandler(e) {
    const {
      selectionStart,
      selectionEnd
    } = e.target;
    if (selectionEnd === selectionStart) {
      return;
    }
    this.isPasted = true;
    this.selection = [selectionStart, selectionEnd];
  }
  /**
   * @hidden
   */
  inputHandler(e) {
    const value = e.target.value;
    const [start, end] = this.selection;
    if (!this.mask) {
      this.updateValueWithEvents(value);
      this.isPasted = false;
      return;
    }
    let result;
    if (this.isPasted) {
      this.isPasted = false;
      const rightPart = this.maskedValue.length - end;
      const to = value.length - rightPart;
      result = this.service.maskInRange(value.slice(start, to), this.maskedValue, start, end);
    } else {
      result = this.service.maskInput(value, this.maskedValue || "", e.target.selectionStart);
    }
    this.updateInput(result.value, result.selection);
    this.updateValueWithEvents(result.value);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes["value"]) {
      this.value = this.normalizeValue(this.value);
    }
    const next = this.extractChanges(changes);
    this.updateService(next);
    if (!this.mask) {
      this.updateInput(this.value);
      return;
    }
    const maskedValue = this.service.maskRaw(this.value);
    this.updateInput(maskedValue, null, true);
    if (changes["includeLiterals"] || isChanged("promptPlaceholder", changes)) {
      resolvedPromise.then(() => {
        this.updateValueWithEvents(this.maskedValue, false);
      });
    }
  }
  /**
   * @hidden
   * Writes a new value to the element.
   */
  writeValue(value) {
    this.value = this.normalizeValue(value);
    this.updateInput(this.service.maskRaw(this.value));
    if (this.includeLiterals) {
      this.updateValue(this.maskedValue, false);
    }
  }
  /**
   * @hidden
   * Sets the function that will be called when a `change` event is triggered.
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * @hidden
   * Sets the function that will be called when a `touch` event is triggered.
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  validate(_) {
    if (this.maskValidation === false || !this.mask) {
      return null;
    }
    if (!this.service.validationValue(this.maskedValue)) {
      return null;
    }
    if (this.maskedValue.indexOf(this.prompt) !== -1) {
      return {
        patternError: {
          mask: this.mask,
          maskedValue: this.maskedValue,
          value: this.value
        }
      };
    }
    return null;
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && this.control.invalid;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    var _a2;
    return isControlRequired((_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.control);
  }
  /**
   * @hidden
   */
  updateValueWithEvents(maskedValue, callOnChange = true) {
    const previousValue = this.value;
    this.updateValue(maskedValue, callOnChange);
    const valueChanged = this.value !== previousValue;
    if (valueChanged && hasObservers(this.valueChange)) {
      this.valueChange.emit(this.value);
    }
  }
  updateValue(value, callOnChange = true) {
    if (this.mask && !this.service.validationValue(value) && !this.includeLiterals) {
      this.value = "";
    } else {
      this.value = this.service.rawValue(value);
    }
    callOnChange && this.onChange(this.value);
  }
  updateInput(maskedValue = "", selection, isFromOnChanges) {
    if (isFromOnChanges && maskedValue === this.maskedValue) {
      return;
    }
    this.maskedValue = maskedValue;
    const value = this.maskOnFocus && !this.focused && this.emptyMask ? "" : maskedValue;
    this.renderer.setProperty(this.input.nativeElement, "value", value);
    if (selection !== void 0) {
      this.setSelection(selection, selection);
    }
  }
  extractChanges(changes) {
    return Object.keys(changes).filter((key) => key !== "rules").reduce((obj, key) => {
      obj[key] = changes[key].currentValue;
      return obj;
    }, {});
  }
  updateService(extra) {
    const config = Object.assign({
      includeLiterals: this.includeLiterals,
      mask: this.mask,
      prompt: this.prompt,
      promptPlaceholder: this.promptPlaceholder,
      rules: this.rules
    }, extra);
    this.service.update(config);
  }
  setSelection(start = this.selection[0], end = this.selection[1]) {
    if (this.focused) {
      invokeElementMethod(this.input, "setSelectionRange", start, end);
    }
  }
  get emptyMask() {
    return this.service.maskRaw() === this.maskedValue;
  }
  setFocusSelection() {
    const selectionStart = this.input.nativeElement.selectionStart;
    const index = this.maskedValue ? this.maskedValue.indexOf(this.prompt) : 0;
    if (index >= 0 && index < selectionStart) {
      this.selection = [index, index];
      this.setSelection();
    }
  }
  /**
   * @hidden
   */
  get focused() {
    return this.isFocused;
  }
  /**
   * @hidden
   */
  set focused(value) {
    if (this.isFocused !== value && this.hostElement) {
      const element = this.hostElement.nativeElement;
      if (value) {
        this.renderer.addClass(element, FOCUSED$3);
      } else {
        this.renderer.removeClass(element, FOCUSED$3);
      }
      this.isFocused = value;
    }
  }
  normalizeValue(value) {
    const present = isPresent3(value);
    if (present && typeof value !== "string") {
      if (isDevMode()) {
        throw new Error("The MaskedTextBox component supports only string values.");
      }
      return String(value);
    }
    return present ? value : "";
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.input.nativeElement, this.ngZone);
  }
};
MaskedTextBoxComponent.ɵfac = function MaskedTextBoxComponent_Factory(t) {
  return new (t || MaskedTextBoxComponent)(ɵɵdirectiveInject(MaskingService2), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(RTL, 8));
};
MaskedTextBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: MaskedTextBoxComponent,
  selectors: [["kendo-maskedtextbox"]],
  contentQueries: function MaskedTextBoxComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
    }
  },
  viewQuery: function MaskedTextBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c17, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    }
  },
  hostVars: 9,
  hostBindings: function MaskedTextBoxComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("paste", function MaskedTextBoxComponent_paste_HostBindingHandler($event) {
        return ctx.pasteHandler($event);
      })("input", function MaskedTextBoxComponent_input_HostBindingHandler($event) {
        return ctx.inputHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-input", ctx.hostClasses)("k-maskedtextbox", ctx.hostClasses)("k-disabled", ctx.hostDisabledClass);
    }
  },
  inputs: {
    focusableId: "focusableId",
    disabled: "disabled",
    readonly: "readonly",
    title: "title",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    mask: "mask",
    value: "value",
    rules: "rules",
    prompt: "prompt",
    promptPlaceholder: "promptPlaceholder",
    includeLiterals: "includeLiterals",
    maskOnFocus: "maskOnFocus",
    maskValidation: "maskValidation",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    inputAttributes: "inputAttributes"
  },
  outputs: {
    onFocus: "focus",
    onBlur: "blur",
    inputFocus: "inputFocus",
    inputBlur: "inputBlur",
    valueChange: "valueChange"
  },
  exportAs: ["kendoMaskedTextBox"],
  features: [ɵɵProvidersFeature([MaskingService2, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaskedTextBoxComponent)
    /* eslint-disable-line*/
  }, {
    multi: true,
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaskedTextBoxComponent)
    /* eslint-disable-line*/
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => MaskedTextBoxComponent)
  }]), ɵɵNgOnChangesFeature],
  decls: 7,
  vars: 21,
  consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], ["autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "k-input-inner", 3, "id", "tabindex", "disabled", "readonly", "kendoEventsOutsideAngular"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], [1, "k-input-suffix", "k-input-suffix-horizontal"]],
  template: function MaskedTextBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainerStart(0, 1);
      ɵɵtwoWayListener("isFocusedChange", function MaskedTextBoxComponent_Template_ng_container_isFocusedChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.focused, $event) || (ctx.focused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function MaskedTextBoxComponent_Template_ng_container_handleBlur_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function MaskedTextBoxComponent_Template_ng_container_onFocus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(1, MaskedTextBoxComponent_span_1_Template, 2, 1, "span", 2)(2, MaskedTextBoxComponent_kendo_input_separator_2_Template, 1, 0, "kendo-input-separator", 3);
      ɵɵelement(3, "input", 4, 0);
      ɵɵtemplate(5, MaskedTextBoxComponent_kendo_input_separator_5_Template, 1, 0, "kendo-input-separator", 3)(6, MaskedTextBoxComponent_span_6_Template, 2, 1, "span", 5);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.focused);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefixTemplate && ctx.prefixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("id", ctx.focusableId)("tabindex", ctx.tabIndex)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction5(15, _c18, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handleClick, ctx.handleDragDrop, ctx.handleDragDrop));
      ɵɵattribute("title", ctx.title)("aria-placeholder", ctx.mask)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.suffixTemplate && ctx.suffixTemplate.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffixTemplate);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, EventsOutsideAngularDirective, InputSeparatorComponent, SharedInputEventsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskedTextBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoMaskedTextBox",
      providers: [MaskingService2, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MaskedTextBoxComponent)
        /* eslint-disable-line*/
      }, {
        multi: true,
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MaskedTextBoxComponent)
        /* eslint-disable-line*/
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => MaskedTextBoxComponent)
      }],
      selector: "kendo-maskedtextbox",
      template: `
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="focused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <span *ngIf="prefixTemplate" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefixTemplate?.templateRef">
                </ng-template>
            </span>
            <kendo-input-separator *ngIf="prefixTemplate && prefixTemplate.showSeparator"></kendo-input-separator>
            <input #input
                class="k-input-inner"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                [id]="focusableId"
                [tabindex]="tabIndex"
                [attr.title]="title"
                [attr.aria-placeholder]="mask"
                [attr.aria-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [disabled]="disabled"
                [readonly]="readonly"
                [kendoEventsOutsideAngular]="{
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    click: handleClick,
                    dragstart: handleDragDrop,
                    drop: handleDragDrop
                }"
            />
            <kendo-input-separator *ngIf="suffixTemplate && suffixTemplate.showSeparator"></kendo-input-separator>
            <span *ngIf="suffixTemplate" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffixTemplate?.templateRef">
                </ng-template>
            </span>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: MaskingService2
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Injector
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    title: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    rules: [{
      type: Input
    }],
    prompt: [{
      type: Input
    }],
    promptPlaceholder: [{
      type: Input
    }],
    includeLiterals: [{
      type: Input
    }],
    maskOnFocus: [{
      type: Input
    }],
    maskValidation: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-input"]
    }, {
      type: HostBinding,
      args: ["class.k-maskedtextbox"]
    }],
    hostDisabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    pasteHandler: [{
      type: HostListener,
      args: ["paste", ["$event"]]
    }],
    inputHandler: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var SlidersCommonModule = class {
};
SlidersCommonModule.ɵfac = function SlidersCommonModule_Factory(t) {
  return new (t || SlidersCommonModule)();
};
SlidersCommonModule.ɵmod = ɵɵdefineNgModule({
  type: SlidersCommonModule,
  declarations: [SliderTicksComponent, LabelTemplateDirective],
  imports: [CommonModule, DraggableModule, EventsModule, ResizeSensorModule],
  exports: [LabelTemplateDirective, SliderTicksComponent, DraggableModule, EventsModule, ResizeSensorModule]
});
SlidersCommonModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, DraggableModule, EventsModule, ResizeSensorModule, DraggableModule, EventsModule, ResizeSensorModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SlidersCommonModule, [{
    type: NgModule,
    args: [{
      declarations: [SliderTicksComponent, LabelTemplateDirective],
      exports: [LabelTemplateDirective, SliderTicksComponent, DraggableModule, EventsModule, ResizeSensorModule],
      imports: [CommonModule, DraggableModule, EventsModule, ResizeSensorModule]
    }]
  }], null, null);
})();
var SliderCustomMessagesComponent = class extends SliderMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
SliderCustomMessagesComponent.ɵfac = function SliderCustomMessagesComponent_Factory(t) {
  return new (t || SliderCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
SliderCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: SliderCustomMessagesComponent,
  selectors: [["kendo-slider-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: SliderMessages,
    useExisting: forwardRef(() => SliderCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function SliderCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: SliderMessages,
        useExisting: forwardRef(() => SliderCustomMessagesComponent)
      }],
      selector: "kendo-slider-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SliderModule = class {
};
SliderModule.ɵfac = function SliderModule_Factory(t) {
  return new (t || SliderModule)();
};
SliderModule.ɵmod = ɵɵdefineNgModule({
  type: SliderModule,
  declarations: [SliderComponent, SliderCustomMessagesComponent, LocalizedSliderMessagesDirective],
  imports: [CommonModule, SlidersCommonModule, IconsModule, ButtonModule],
  exports: [SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective, LocalizedSliderMessagesDirective]
});
SliderModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SlidersCommonModule, IconsModule, ButtonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderModule, [{
    type: NgModule,
    args: [{
      declarations: [SliderComponent, SliderCustomMessagesComponent, LocalizedSliderMessagesDirective],
      exports: [SliderComponent, SliderCustomMessagesComponent, LabelTemplateDirective, LocalizedSliderMessagesDirective],
      imports: [CommonModule, SlidersCommonModule, IconsModule, ButtonModule]
    }]
  }], null, null);
})();
var RangeSliderCustomMessagesComponent = class extends RangeSliderMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
RangeSliderCustomMessagesComponent.ɵfac = function RangeSliderCustomMessagesComponent_Factory(t) {
  return new (t || RangeSliderCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
RangeSliderCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: RangeSliderCustomMessagesComponent,
  selectors: [["kendo-rangeslider-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: RangeSliderMessages,
    useExisting: forwardRef(() => RangeSliderCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function RangeSliderCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: RangeSliderMessages,
        useExisting: forwardRef(() => RangeSliderCustomMessagesComponent)
      }],
      selector: "kendo-rangeslider-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var RangeSliderModule = class {
};
RangeSliderModule.ɵfac = function RangeSliderModule_Factory(t) {
  return new (t || RangeSliderModule)();
};
RangeSliderModule.ɵmod = ɵɵdefineNgModule({
  type: RangeSliderModule,
  declarations: [RangeSliderComponent, RangeSliderCustomMessagesComponent, LocalizedRangeSliderMessagesDirective],
  imports: [CommonModule, SlidersCommonModule],
  exports: [RangeSliderComponent, RangeSliderCustomMessagesComponent, LocalizedRangeSliderMessagesDirective, LabelTemplateDirective]
});
RangeSliderModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SlidersCommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeSliderModule, [{
    type: NgModule,
    args: [{
      declarations: [RangeSliderComponent, RangeSliderCustomMessagesComponent, LocalizedRangeSliderMessagesDirective],
      exports: [RangeSliderComponent, RangeSliderCustomMessagesComponent, LocalizedRangeSliderMessagesDirective, LabelTemplateDirective],
      imports: [CommonModule, SlidersCommonModule]
    }]
  }], null, null);
})();
var SwitchCustomMessagesComponent = class extends Messages2 {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
SwitchCustomMessagesComponent.ɵfac = function SwitchCustomMessagesComponent_Factory(t) {
  return new (t || SwitchCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
SwitchCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: SwitchCustomMessagesComponent,
  selectors: [["kendo-switch-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: Messages2,
    useExisting: forwardRef(() => SwitchCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function SwitchCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages2,
        useExisting: forwardRef(() => SwitchCustomMessagesComponent)
      }],
      selector: "kendo-switch-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SwitchModule = class {
};
SwitchModule.ɵfac = function SwitchModule_Factory(t) {
  return new (t || SwitchModule)();
};
SwitchModule.ɵmod = ɵɵdefineNgModule({
  type: SwitchModule,
  declarations: [SwitchComponent, SwitchCustomMessagesComponent, LocalizedSwitchMessagesDirective],
  imports: [CommonModule, EventsModule, ResizeSensorModule],
  exports: [SwitchComponent, SwitchCustomMessagesComponent, LocalizedSwitchMessagesDirective]
});
SwitchModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, ResizeSensorModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchModule, [{
    type: NgModule,
    args: [{
      declarations: [SwitchComponent, SwitchCustomMessagesComponent, LocalizedSwitchMessagesDirective],
      exports: [SwitchComponent, SwitchCustomMessagesComponent, LocalizedSwitchMessagesDirective],
      imports: [CommonModule, EventsModule, ResizeSensorModule]
    }]
  }], null, null);
})();
var SHARED_DIRECTIVES2 = [InputSeparatorComponent, TextAreaDirective];
var SharedModule2 = class {
};
SharedModule2.ɵfac = function SharedModule_Factory2(t) {
  return new (t || SharedModule2)();
};
SharedModule2.ɵmod = ɵɵdefineNgModule({
  type: SharedModule2,
  declarations: [InputSeparatorComponent, TextAreaDirective],
  exports: [InputSeparatorComponent, TextAreaDirective]
});
SharedModule2.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule2, [{
    type: NgModule,
    args: [{
      declarations: [SHARED_DIRECTIVES2],
      exports: [SHARED_DIRECTIVES2]
    }]
  }], null, null);
})();
var SharedEventsModule = class {
};
SharedEventsModule.ɵfac = function SharedEventsModule_Factory(t) {
  return new (t || SharedEventsModule)();
};
SharedEventsModule.ɵmod = ɵɵdefineNgModule({
  type: SharedEventsModule,
  declarations: [SharedInputEventsDirective],
  exports: [SharedInputEventsDirective]
});
SharedEventsModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedEventsModule, [{
    type: NgModule,
    args: [{
      declarations: [SharedInputEventsDirective],
      exports: [SharedInputEventsDirective]
    }]
  }], null, null);
})();
var NumericTextBoxModule = class {
};
NumericTextBoxModule.ɵfac = function NumericTextBoxModule_Factory(t) {
  return new (t || NumericTextBoxModule)();
};
NumericTextBoxModule.ɵmod = ɵɵdefineNgModule({
  type: NumericTextBoxModule,
  declarations: [LocalizedNumericTextBoxMessagesDirective, NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent],
  imports: [CommonModule, EventsModule, IconsModule, SharedModule2, AdornmentsModule, SharedEventsModule],
  exports: [NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, AdornmentsModule]
});
NumericTextBoxModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, IconsModule, SharedModule2, AdornmentsModule, SharedEventsModule, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericTextBoxModule, [{
    type: NgModule,
    args: [{
      declarations: [LocalizedNumericTextBoxMessagesDirective, NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent],
      exports: [NumericTextBoxComponent, NumericTextBoxCustomMessagesComponent, AdornmentsModule],
      imports: [CommonModule, EventsModule, IconsModule, SharedModule2, AdornmentsModule, SharedEventsModule]
    }]
  }], null, null);
})();
var MaskedTextBoxModule = class {
};
MaskedTextBoxModule.ɵfac = function MaskedTextBoxModule_Factory(t) {
  return new (t || MaskedTextBoxModule)();
};
MaskedTextBoxModule.ɵmod = ɵɵdefineNgModule({
  type: MaskedTextBoxModule,
  declarations: [MaskedTextBoxComponent],
  imports: [CommonModule, EventsModule, SharedModule2, AdornmentsModule, SharedEventsModule],
  exports: [MaskedTextBoxComponent, AdornmentsModule]
});
MaskedTextBoxModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, SharedModule2, AdornmentsModule, SharedEventsModule, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskedTextBoxModule, [{
    type: NgModule,
    args: [{
      declarations: [MaskedTextBoxComponent],
      exports: [MaskedTextBoxComponent, AdornmentsModule],
      imports: [CommonModule, EventsModule, SharedModule2, AdornmentsModule, SharedEventsModule]
    }]
  }], null, null);
})();
var isJapanese = (input) => {
  const japaneseRegex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
  return japaneseRegex.test(input);
};
var TextBoxSuffixTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._showSeparator = false;
  }
  /**
   * Sets the `showSeparator` attribute of the `kendoTextBoxSuffixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
};
TextBoxSuffixTemplateDirective.ɵfac = function TextBoxSuffixTemplateDirective_Factory(t) {
  return new (t || TextBoxSuffixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
TextBoxSuffixTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: TextBoxSuffixTemplateDirective,
  selectors: [["", "kendoTextBoxSuffixTemplate", ""]],
  inputs: {
    showSeparator: "showSeparator"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxSuffixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTextBoxSuffixTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var TextBoxPrefixTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._showSeparator = false;
  }
  /**
   * Sets the `showSeparator` attribute of the `kendoTextBoxPrefixTemplate`.
   *
   * @default false
   */
  set showSeparator(value) {
    this._showSeparator = value;
  }
  get showSeparator() {
    return this._showSeparator;
  }
};
TextBoxPrefixTemplateDirective.ɵfac = function TextBoxPrefixTemplateDirective_Factory(t) {
  return new (t || TextBoxPrefixTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
};
TextBoxPrefixTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: TextBoxPrefixTemplateDirective,
  selectors: [["", "kendoTextBoxPrefixTemplate", ""]],
  inputs: {
    showSeparator: "showSeparator"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxPrefixTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoTextBoxPrefixTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    showSeparator: [{
      type: Input
    }]
  });
})();
var TextBoxMessages = class extends ComponentMessages {
};
TextBoxMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵTextBoxMessages_BaseFactory;
  return function TextBoxMessages_Factory(t) {
    return (ɵTextBoxMessages_BaseFactory || (ɵTextBoxMessages_BaseFactory = ɵɵgetInheritedFactory(TextBoxMessages)))(t || TextBoxMessages);
  };
})();
TextBoxMessages.ɵdir = ɵɵdefineDirective({
  type: TextBoxMessages,
  selectors: [["kendo-textbox-messages-base"]],
  inputs: {
    clear: "clear"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-textbox-messages-base"
    }]
  }], null, {
    clear: [{
      type: Input
    }]
  });
})();
var LocalizedTextBoxMessagesDirective = class extends TextBoxMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedTextBoxMessagesDirective.ɵfac = function LocalizedTextBoxMessagesDirective_Factory(t) {
  return new (t || LocalizedTextBoxMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedTextBoxMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedTextBoxMessagesDirective,
  selectors: [["", "kendoTextBoxLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: TextBoxMessages,
    useExisting: forwardRef(() => LocalizedTextBoxMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedTextBoxMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: TextBoxMessages,
        useExisting: forwardRef(() => LocalizedTextBoxMessagesDirective)
      }],
      selector: "[kendoTextBoxLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var FOCUSED$2 = "k-focus";
var DEFAULT_SIZE$6 = "medium";
var DEFAULT_ROUNDED$5 = "medium";
var DEFAULT_FILL_MODE$3 = "solid";
var iconsMap$1 = {
  checkIcon,
  exclamationCircleIcon,
  xIcon
};
var TextBoxComponent = class {
  constructor(localizationService, ngZone, changeDetector, renderer, injector, hostElement) {
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
    this.focusableId = `k-${guid()}`;
    this.title = "";
    this.type = "text";
    this.disabled = false;
    this.readonly = false;
    this.tabindex = 0;
    this.value = null;
    this.selectOnFocus = false;
    this.showSuccessIcon = false;
    this.showErrorIcon = false;
    this.clearButton = false;
    this.valueChange = new EventEmitter();
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.hostClasses = true;
    this._isFocused = false;
    this.focusChangedProgrammatically = false;
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this.parsedAttributes = {};
    this.handleInputFocus = () => {
      if (!this.disabled) {
        if (this.selectOnFocus && this.value) {
          this.ngZone.run(() => {
            setTimeout(() => {
              this.selectAll();
            });
          });
        }
        if (!this.isFocused) {
          this.handleFocus();
        }
        if (hasObservers(this.inputFocus)) {
          if (!this.focusChangedProgrammatically || this.focusChangedProgrammatically && this.clearButtonClicked) {
            this.ngZone.run(() => {
              this.inputFocus.emit();
            });
          }
        }
      }
    };
    this.handleInputBlur = () => {
      this.changeDetector.markForCheck();
      if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
          this.inputBlur.emit();
        });
      }
    };
    this.handleInput = (ev) => {
      const target = ev.target;
      const isBrowserSafari = isSafari(navigator.userAgent);
      const incomingValue = isBrowserSafari && isJapanese(target.value) ? ev.data : target.value;
      const [caretStart, caretEnd] = [target.selectionStart, target.selectionEnd];
      this.updateValue(incomingValue);
      if (isBrowserSafari) {
        target.setSelectionRange(caretStart, caretEnd);
      }
    };
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  /**
   * The size property specifies the padding of the TextBox internal input element
   * ([see example]({% slug appearance_textbox %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$6;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The `rounded` property specifies the border radius of the TextBox
   * ([see example](slug:appearance_textbox#toc-roundness)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$5;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The `fillMode` property specifies the background and border styles of the TextBox
   * ([see example]({% slug appearance_textbox %}#toc-fill-mode)).
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$3;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  get disabledClass() {
    return this.disabled;
  }
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.disabled ? void 0 : this.tabindex,
      type: this.type,
      placeholder: this.placeholder,
      title: this.title,
      maxlength: this.maxlength,
      "aria-invalid": this.isControlInvalid,
      required: this.isControlRequired ? "" : null
    };
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
    this.checkClearButton();
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngAfterContentInit() {
    this.configureAdornments();
    this.subscriptions.add(this.textBoxPrefixTemplate.changes.subscribe(this.configureAdornments.bind(this)));
    this.subscriptions.add(this.textBoxSuffixTemplate.changes.subscribe(this.configureAdornments.bind(this)));
  }
  ngOnChanges(changes) {
    if (changes["disabled"] || changes["readonly"] || changes["value"]) {
      this.checkClearButton();
    }
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  svgIcon(name) {
    return iconsMap$1[name];
  }
  /**
   * Focuses the TextBox.
   *
   * @example
   * ```ts-no-run
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="input.focus()">Focus the input</button>
   *  <kendo-textbox #input></kendo-textbox>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.input.nativeElement.focus();
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the TextBox.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  /**
   * @hidden
   */
  clearTitle() {
    return this.localizationService.get("clear");
  }
  /**
   * @hidden
   */
  checkClearButton() {
    this.showClearButton = !this.disabled && !this.readonly && this.clearButton && !!this.value;
  }
  /**
   * @hidden
   */
  clearValue(ev) {
    if (ev) {
      ev.preventDefault();
    }
    this.clearButtonClicked = true;
    this.input.nativeElement.value = "";
    this.input.nativeElement.focus();
    this.updateValue("");
    this.checkClearButton();
    this.clearButtonClicked = false;
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.checkClearButton();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  showErrorsInitial() {
    if (!this.control) {
      return false;
    }
    const {
      invalid,
      dirty,
      touched
    } = this.control;
    return invalid && (dirty || touched);
  }
  /**
   * @hidden
   */
  showSuccessInitial() {
    if (!this.control) {
      return false;
    }
    const {
      valid,
      dirty,
      touched
    } = this.control;
    return valid && (dirty || touched);
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get successIconClasses() {
    if (!this.successIcon) {
      return `check`;
    }
  }
  /**
   * @hidden
   */
  get customSuccessIconClasses() {
    if (this.successIcon) {
      return this.successIcon;
    }
  }
  /**
   * @hidden
   */
  get errorIconClasses() {
    if (!this.errorIcon) {
      return `exclamation-circle`;
    }
  }
  /**
   * @hidden
   */
  get customIconClasses() {
    if (this.errorIcon) {
      return this.errorIcon;
    }
  }
  /**
   * @hidden
   */
  get customClearButtonClasses() {
    if (this.clearButtonIcon) {
      return this.clearButtonIcon;
    }
  }
  /**
   * @hidden
   */
  get clearButtonClass() {
    if (!this.clearButtonIcon) {
      return "x";
    }
  }
  /**
   * @hidden
   */
  get hasErrors() {
    return this.showErrorIcon === "initial" ? this.showErrorsInitial() : this.showErrorIcon;
  }
  /**
   * @hidden
   */
  get isSuccessful() {
    return this.showSuccessIcon === "initial" ? this.showSuccessInitial() : this.showSuccessIcon;
  }
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.hostElement) {
      const element = this.hostElement.nativeElement;
      if (value && !this.disabled) {
        this.renderer.addClass(element, FOCUSED$2);
      } else {
        this.renderer.removeClass(element, FOCUSED$2);
      }
      this._isFocused = value;
    }
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    var _a2;
    return isControlRequired((_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.control);
  }
  setSelection(start, end) {
    if (this.isFocused) {
      invokeElementMethod(this.input, "setSelectionRange", start, end);
    }
  }
  selectAll() {
    if (this.value) {
      this.setSelection(0, this.value.length);
    }
  }
  updateValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.checkClearButton();
        this.changeDetector.markForCheck();
      });
    }
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  configureAdornments() {
    this.prefix = this.textBoxPrefixTemplate.first || this.prefixTemplate;
    this.suffix = this.textBoxSuffixTemplate.first || this.suffixTemplate;
  }
  setInputAttributes() {
    setHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement, this.ngZone);
  }
};
TextBoxComponent.ɵfac = function TextBoxComponent_Factory(t) {
  return new (t || TextBoxComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
TextBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: TextBoxComponent,
  selectors: [["kendo-textbox"]],
  contentQueries: function TextBoxComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, SuffixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, PrefixTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, TextBoxSuffixTemplateDirective, 4);
      ɵɵcontentQuery(dirIndex, TextBoxPrefixTemplateDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefixTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textBoxSuffixTemplate = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textBoxPrefixTemplate = _t);
    }
  },
  viewQuery: function TextBoxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c17, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    }
  },
  hostVars: 9,
  hostBindings: function TextBoxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-disabled", ctx.disabledClass)("k-textbox", ctx.hostClasses)("k-input", ctx.hostClasses);
    }
  },
  inputs: {
    focusableId: "focusableId",
    title: "title",
    type: "type",
    disabled: "disabled",
    readonly: "readonly",
    tabindex: "tabindex",
    value: "value",
    selectOnFocus: "selectOnFocus",
    showSuccessIcon: "showSuccessIcon",
    showErrorIcon: "showErrorIcon",
    clearButton: "clearButton",
    successIcon: "successIcon",
    successSvgIcon: "successSvgIcon",
    errorIcon: "errorIcon",
    errorSvgIcon: "errorSvgIcon",
    clearButtonIcon: "clearButtonIcon",
    clearButtonSvgIcon: "clearButtonSvgIcon",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    tabIndex: "tabIndex",
    placeholder: "placeholder",
    maxlength: "maxlength",
    inputAttributes: "inputAttributes"
  },
  outputs: {
    valueChange: "valueChange",
    inputFocus: "inputFocus",
    inputBlur: "inputBlur",
    onFocus: "focus",
    onBlur: "blur"
  },
  exportAs: ["kendoTextBox"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.textbox"
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextBoxComponent),
    multi: true
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => TextBoxComponent)
  }]), ɵɵNgOnChangesFeature],
  decls: 12,
  vars: 26,
  consts: () => {
    let i18n_9;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_9 = goog.getMsg("Clear");
      i18n_9 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_9;
    } else {
      i18n_9 = $localize`:kendo.textbox.clear|The title for the **Clear** button in the TextBox.:Clear`;
    }
    return [["input", ""], ["kendoTextBoxLocalizedMessages", "", "clear", i18n_9], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused", "clearButtonClicked"], ["class", "k-input-prefix k-input-prefix-horizontal", 4, "ngIf"], [4, "ngIf"], [1, "k-input-inner", 3, "id", "disabled", "readonly", "value", "kendoEventsOutsideAngular"], ["role", "button", "class", "k-clear-value", 3, "tabindex", "title", "click", "mousedown", "keydown.enter", "keydown.space", 4, "ngIf"], ["innerCssClass", "k-input-validation-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-input-suffix k-input-suffix-horizontal", 4, "ngIf"], [1, "k-input-prefix", "k-input-prefix-horizontal"], [3, "ngTemplateOutlet"], ["role", "button", 1, "k-clear-value", 3, "click", "mousedown", "keydown.enter", "keydown.space", "tabindex", "title"], [3, "name", "customFontClass", "svgIcon"], ["innerCssClass", "k-input-validation-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-input-suffix", "k-input-suffix-horizontal"]];
  },
  template: function TextBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 1);
      ɵɵelementContainerStart(1, 2);
      ɵɵtwoWayListener("isFocusedChange", function TextBoxComponent_Template_ng_container_isFocusedChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function TextBoxComponent_Template_ng_container_handleBlur_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function TextBoxComponent_Template_ng_container_onFocus_1_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵtemplate(2, TextBoxComponent_span_2_Template, 2, 1, "span", 3)(3, TextBoxComponent_kendo_input_separator_3_Template, 1, 0, "kendo-input-separator", 4);
      ɵɵelement(4, "input", 5, 0);
      ɵɵtemplate(6, TextBoxComponent_span_6_Template, 2, 6, "span", 6)(7, TextBoxComponent_kendo_icon_wrapper_7_Template, 1, 3, "kendo-icon-wrapper", 7)(8, TextBoxComponent_kendo_icon_wrapper_8_Template, 1, 3, "kendo-icon-wrapper", 7)(9, TextBoxComponent_kendo_input_separator_9_Template, 1, 0, "kendo-input-separator", 4)(10, TextBoxComponent_span_10_Template, 2, 1, "span", 8);
      ɵɵelementContainer(11);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵproperty("clearButtonClicked", ctx.clearButtonClicked);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefix);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.prefix && ctx.prefix.showSeparator);
      ɵɵadvance();
      ɵɵproperty("id", ctx.focusableId)("disabled", ctx.disabled)("readonly", ctx.readonly)("value", ctx.value)("kendoEventsOutsideAngular", ɵɵpureFunction3(22, _c19, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handleInput));
      ɵɵattribute("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("type", ctx.type)("placeholder", ctx.placeholder)("title", ctx.title)("maxlength", ctx.maxlength)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showClearButton);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasErrors);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isSuccessful);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffix && ctx.suffix.showSeparator);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.suffix);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, EventsOutsideAngularDirective, InputSeparatorComponent, IconWrapperComponent, SharedInputEventsDirective, LocalizedTextBoxMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextBox",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.textbox"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextBoxComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TextBoxComponent)
      }],
      selector: "kendo-textbox",
      template: `
        <ng-container kendoTextBoxLocalizedMessages
            i18n-clear="kendo.textbox.clear|The title for the **Clear** button in the TextBox."
            clear="Clear">
        </ng-container>
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
            [clearButtonClicked]="clearButtonClicked"
        >
            <span *ngIf="prefix" class="k-input-prefix k-input-prefix-horizontal">
                <ng-template [ngTemplateOutlet]="prefix?.templateRef">
                </ng-template>
            </span>
            <kendo-input-separator *ngIf="prefix && prefix.showSeparator"></kendo-input-separator>
            <input #input
                class="k-input-inner"
                [id]="focusableId"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [value]="value"
                [attr.type]="type"
                [attr.placeholder]="placeholder"
                [attr.title]="title"
                [attr.maxlength]="maxlength"
                [attr.aria-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    input: handleInput}"
            />
            <span
                role="button"
                class="k-clear-value"
                *ngIf="showClearButton"
                (click)="clearValue()"
                (mousedown)="$event.preventDefault()"
                [tabindex]="tabIndex"
                [attr.aria-label]="clearTitle()"
                [title]="clearTitle()"
                (keydown.enter)="clearValue($event)"
                (keydown.space)="clearValue($event)">
                    <kendo-icon-wrapper
                        [name]="clearButtonClass"
                        [customFontClass]="customClearButtonClasses"
                        [svgIcon]="clearButtonSvgIcon || svgIcon('xIcon')"
                    >
                    </kendo-icon-wrapper>
            </span>
            <kendo-icon-wrapper
                *ngIf="hasErrors"
                innerCssClass="k-input-validation-icon"
                [name]="errorIconClasses"
                [customFontClass]="customIconClasses"
                [svgIcon]="errorSvgIcon || svgIcon('exclamationCircleIcon')"
            >
            </kendo-icon-wrapper>
            <kendo-icon-wrapper
                *ngIf="isSuccessful"
                innerCssClass="k-input-validation-icon"
                [name]="successIconClasses"
                [customFontClass]="customSuccessIconClasses"
                [svgIcon]="successSvgIcon || svgIcon('checkIcon')"
            >
            </kendo-icon-wrapper>
            <kendo-input-separator *ngIf="suffix && suffix.showSeparator"></kendo-input-separator>
            <span *ngIf="suffix" class="k-input-suffix k-input-suffix-horizontal">
                <ng-template [ngTemplateOutlet]="suffix?.templateRef">
                </ng-template>
            </span>
        <ng-container>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    showSuccessIcon: [{
      type: Input
    }],
    showErrorIcon: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    successIcon: [{
      type: Input
    }],
    successSvgIcon: [{
      type: Input
    }],
    errorIcon: [{
      type: Input
    }],
    errorSvgIcon: [{
      type: Input
    }],
    clearButtonIcon: [{
      type: Input
    }],
    clearButtonSvgIcon: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    textBoxSuffixTemplate: [{
      type: ContentChildren,
      args: [TextBoxSuffixTemplateDirective, {
        descendants: false
      }]
    }],
    textBoxPrefixTemplate: [{
      type: ContentChildren,
      args: [TextBoxPrefixTemplateDirective, {
        descendants: false
      }]
    }],
    suffixTemplate: [{
      type: ContentChild,
      args: [SuffixTemplateDirective]
    }],
    prefixTemplate: [{
      type: ContentChild,
      args: [PrefixTemplateDirective]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-textbox"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var TextBoxCustomMessagesComponent = class extends TextBoxMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
TextBoxCustomMessagesComponent.ɵfac = function TextBoxCustomMessagesComponent_Factory(t) {
  return new (t || TextBoxCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
TextBoxCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: TextBoxCustomMessagesComponent,
  selectors: [["kendo-textbox-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: TextBoxMessages,
    useExisting: forwardRef(() => TextBoxCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function TextBoxCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: TextBoxMessages,
        useExisting: forwardRef(() => TextBoxCustomMessagesComponent)
      }],
      selector: "kendo-textbox-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var TextBoxModule = class {
};
TextBoxModule.ɵfac = function TextBoxModule_Factory(t) {
  return new (t || TextBoxModule)();
};
TextBoxModule.ɵmod = ɵɵdefineNgModule({
  type: TextBoxModule,
  declarations: [TextBoxDirective, TextBoxComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, LocalizedTextBoxMessagesDirective],
  imports: [CommonModule, EventsModule, SharedModule2, IconsModule, AdornmentsModule, SharedEventsModule],
  exports: [TextBoxDirective, TextBoxComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, EventsModule, TextBoxCustomMessagesComponent, LocalizedTextBoxMessagesDirective, AdornmentsModule, InputSeparatorComponent, TextAreaDirective]
});
TextBoxModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, SharedModule2, IconsModule, AdornmentsModule, SharedEventsModule, EventsModule, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextBoxModule, [{
    type: NgModule,
    args: [{
      declarations: [TextBoxDirective, TextBoxComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, TextBoxCustomMessagesComponent, LocalizedTextBoxMessagesDirective],
      exports: [TextBoxDirective, TextBoxComponent, TextBoxSuffixTemplateDirective, TextBoxPrefixTemplateDirective, EventsModule, TextBoxCustomMessagesComponent, LocalizedTextBoxMessagesDirective, AdornmentsModule, SHARED_DIRECTIVES2],
      imports: [CommonModule, EventsModule, SharedModule2, IconsModule, AdornmentsModule, SharedEventsModule]
    }]
  }], null, null);
})();
var TextFieldsBase = class {
  constructor(localizationService, ngZone, changeDetector, renderer, injector, hostElement) {
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
    this.title = "";
    this.disabled = false;
    this.readonly = false;
    this.value = null;
    this.selectOnFocus = false;
    this.inputFocus = new EventEmitter();
    this.inputBlur = new EventEmitter();
    this.subscriptions = new import_rxjs2.Subscription();
    this._isFocused = false;
    this.focusChangedProgrammatically = false;
    this.handleInputBlur = () => {
      this.changeDetector.markForCheck();
      if (hasObservers(this.inputBlur) || requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
          this.inputBlur.emit();
        });
      }
    };
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
  }
  get disabledClass() {
    return this.disabled;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.changeDetector.markForCheck();
    this.disabled = isDisabled;
  }
};
TextFieldsBase.ɵfac = function TextFieldsBase_Factory(t) {
  return new (t || TextFieldsBase)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
TextFieldsBase.ɵcmp = ɵɵdefineComponent({
  type: TextFieldsBase,
  selectors: [["kendo-textfield-base"]],
  viewQuery: function TextFieldsBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c17, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    }
  },
  hostVars: 5,
  hostBindings: function TextFieldsBase_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    title: "title",
    disabled: "disabled",
    readonly: "readonly",
    value: "value",
    selectOnFocus: "selectOnFocus",
    placeholder: "placeholder"
  },
  outputs: {
    inputFocus: "inputFocus",
    inputBlur: "inputBlur"
  },
  decls: 0,
  vars: 0,
  template: function TextFieldsBase_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldsBase, [{
    type: Component,
    args: [{
      selector: "kendo-textfield-base",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    title: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    value: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    inputFocus: [{
      type: Output
    }],
    inputBlur: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var TextAreaPrefixComponent = class {
  constructor() {
    this.flow = "vertical";
    this.orientation = "horizontal";
    this.hostClass = true;
  }
  get verticalOrientation() {
    return this.orientation === "vertical";
  }
  get horizontalOrientation() {
    return this.orientation === "horizontal";
  }
  get alignItems() {
    return this.flow === this.orientation;
  }
};
TextAreaPrefixComponent.ɵfac = function TextAreaPrefixComponent_Factory(t) {
  return new (t || TextAreaPrefixComponent)();
};
TextAreaPrefixComponent.ɵcmp = ɵɵdefineComponent({
  type: TextAreaPrefixComponent,
  selectors: [["kendo-textarea-prefix"]],
  hostVars: 8,
  hostBindings: function TextAreaPrefixComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-input-prefix", ctx.hostClass)("k-input-prefix-vertical", ctx.verticalOrientation)("k-input-prefix-horizontal", ctx.horizontalOrientation)("!k-align-items-start", ctx.alignItems);
    }
  },
  inputs: {
    flow: "flow",
    orientation: "orientation"
  },
  exportAs: ["kendoTextAreaPrefix"],
  ngContentSelectors: _c20,
  decls: 1,
  vars: 0,
  template: function TextAreaPrefixComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaPrefixComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextAreaPrefix",
      selector: "kendo-textarea-prefix",
      template: `<ng-content></ng-content>`
    }]
  }], null, {
    flow: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-prefix"]
    }],
    verticalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-prefix-vertical"]
    }],
    horizontalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-prefix-horizontal"]
    }],
    alignItems: [{
      type: HostBinding,
      args: ["class.!k-align-items-start"]
    }]
  });
})();
var TextAreaSuffixComponent = class {
  constructor() {
    this.flow = "vertical";
    this.orientation = "horizontal";
    this.hostClass = true;
  }
  get verticalOrientation() {
    return this.orientation === "vertical";
  }
  get horizontalOrientation() {
    return this.orientation === "horizontal";
  }
  get alignItems() {
    return this.flow === this.orientation;
  }
};
TextAreaSuffixComponent.ɵfac = function TextAreaSuffixComponent_Factory(t) {
  return new (t || TextAreaSuffixComponent)();
};
TextAreaSuffixComponent.ɵcmp = ɵɵdefineComponent({
  type: TextAreaSuffixComponent,
  selectors: [["kendo-textarea-suffix"]],
  hostVars: 8,
  hostBindings: function TextAreaSuffixComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-input-suffix", ctx.hostClass)("k-input-suffix-vertical", ctx.verticalOrientation)("k-input-suffix-horizontal", ctx.horizontalOrientation)("!k-align-items-start", ctx.alignItems);
    }
  },
  inputs: {
    flow: "flow",
    orientation: "orientation"
  },
  exportAs: ["kendoTextAreaSuffix"],
  ngContentSelectors: _c20,
  decls: 1,
  vars: 0,
  template: function TextAreaSuffixComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaSuffixComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextAreaSuffix",
      selector: "kendo-textarea-suffix",
      template: `<ng-content></ng-content>`
    }]
  }], null, {
    flow: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-input-suffix"]
    }],
    verticalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-suffix-vertical"]
    }],
    horizontalOrientation: [{
      type: HostBinding,
      args: ["class.k-input-suffix-horizontal"]
    }],
    alignItems: [{
      type: HostBinding,
      args: ["class.!k-align-items-start"]
    }]
  });
})();
var resizeClasses = {
  "vertical": "k-resize-y",
  "horizontal": "k-resize-x",
  "both": "k-resize",
  "none": "k-resize-none",
  "auto": "k-resize-none"
};
var FOCUSED$1 = "k-focus";
var DEFAULT_SIZE$5 = "medium";
var DEFAULT_ROUNDED$4 = "medium";
var DEFAULT_FILL_MODE$2 = "solid";
var TextAreaComponent = class extends TextFieldsBase {
  constructor(localizationService, ngZone, changeDetector, renderer, injector, hostElement) {
    super(localizationService, ngZone, changeDetector, renderer, injector, hostElement);
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.injector = injector;
    this.hostElement = hostElement;
    this.focusableId = `k-${guid()}`;
    this.hostClasses = true;
    this._flow = "vertical";
    this.tabindex = 0;
    this.resizable = "vertical";
    this.showPrefixSeparator = false;
    this.showSuffixSeparator = false;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.valueChange = new EventEmitter();
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this._adornmentsOrientation = "horizontal";
    this.parsedAttributes = {};
    this.handleInput = (ev) => {
      const incomingValue = ev.target.value;
      this.updateValue(incomingValue);
      this.resize();
    };
    this.handleInputFocus = () => {
      if (!this.disabled) {
        if (this.selectOnFocus && this.value) {
          this.ngZone.run(() => {
            setTimeout(() => {
              this.selectAll();
            });
          });
        }
        if (!this.isFocused) {
          this.handleFocus();
        }
        if (hasObservers(this.inputFocus)) {
          if (!this.focusChangedProgrammatically) {
            this.ngZone.run(() => {
              this.inputFocus.emit();
            });
          }
        }
      }
    };
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  get flowCol() {
    return this.flow === "vertical";
  }
  get flowRow() {
    return this.flow === "horizontal";
  }
  /**
   * Specifies the flow direction of the TextArea sections. This property is useful when adornments are used, in order to specify
   * their position in relation to the textarea element.
   *
   * The possible values are:
   * * `vertical`(Default) &mdash;TextArea sections are placed from top to bottom.
   * * `horizontal`&mdash;TextArea sections are placed from left to right in `ltr`, and from right to left in `rtl` mode.
   */
  set flow(flow) {
    this._flow = flow;
    if (this.prefix) {
      this.prefix.flow = flow;
    }
    if (this.suffix) {
      this.suffix.flow = flow;
    }
  }
  get flow() {
    return this._flow;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  /**
   * Specifies the orientation of the TextArea adornments. This property is used in order to specify
   * the adornments' position relative to themselves.
   *
   * The possible values are:
   * * `horizontal`(Default) &mdash;TextArea adornments are placed from left to right in `ltr`, and from right to left in `rtl` mode.
   * * `vertical`&mdash;TextArea adornments are placed from top to bottom.
   */
  set adornmentsOrientation(orientation) {
    this._adornmentsOrientation = orientation;
    if (this.prefix) {
      this.prefix.orientation = orientation;
    }
    if (this.suffix) {
      this.suffix.orientation = orientation;
    }
  }
  get adornmentsOrientation() {
    return this._adornmentsOrientation;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * The size property specifies the padding of the internal textarea element
   * ([see example]({% slug appearance_textarea %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$5;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The `rounded` property specifies the border radius of the TextArea
   * ([see example](slug:appearance_textarea#toc-roundness)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$4;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The `fillMode` property specifies the background and border styles of the TextArea
   * ([see example](slug:appearance_textarea#toc-fill-mode)).
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  get defaultAttributes() {
    return {
      id: this.focusableId,
      disabled: this.disabled ? "" : null,
      readonly: this.readonly ? "" : null,
      tabindex: this.disabled ? void 0 : this.tabIndex,
      placeholder: this.placeholder,
      title: this.title,
      maxlength: this.maxlength,
      rows: this.rows,
      cols: this.cols,
      "aria-disabled": this.disabled ? true : void 0,
      "aria-readonly": this.readonly ? true : void 0,
      "aria-invalid": this.isControlInvalid,
      required: this.isControlRequired ? "" : null
    };
  }
  get mutableAttributes() {
    return {
      "aria-multiline": "true"
    };
  }
  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.handleFlow();
    });
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
    if (isDocumentAvailable() && this.resizable === "auto") {
      this.resizeSubscription = (0, import_rxjs2.fromEvent)(window, "resize").pipe((0, import_operators2.debounceTime)(50)).subscribe(() => this.resize());
    }
    if (this.hostElement) {
      this.renderer.removeAttribute(this.hostElement.nativeElement, "tabindex");
    }
    this.subscriptions = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngOnChanges(changes) {
    const hostElement = this.hostElement.nativeElement;
    const element = this.input.nativeElement;
    if (changes.flow) {
      this.handleFlow();
    }
    if (changes.resizable) {
      if (this.resizable === "auto") {
        this.renderer.removeClass(element, "!k-overflow-y-auto");
        this.initialHeight = element.offsetHeight;
      } else {
        this.renderer.addClass(element, "!k-overflow-y-auto");
        element.style.height = `${this.initialHeight}px`;
      }
    }
    if (changes.cols) {
      if (isPresent3(changes.cols.currentValue)) {
        this.renderer.setStyle(hostElement, "width", "auto");
      } else {
        this.renderer.removeStyle(hostElement, "width");
      }
    }
    if (changes.value) {
      this.resize();
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.resize();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  updateValue(value) {
    if (!areSame(this.value, value)) {
      this.ngZone.run(() => {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        this.changeDetector.markForCheck();
      });
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
  /**
   * @hidden
   */
  get resizableClass() {
    return resizeClasses[this.resizable];
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    var _a2;
    return isControlRequired((_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.control);
  }
  /**
   * @hidden
   */
  get separatorOrientation() {
    return this.flow === "horizontal" ? "vertical" : "horizontal";
  }
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.hostElement) {
      const element = this.hostElement.nativeElement;
      if (value && !this.disabled) {
        this.renderer.addClass(element, FOCUSED$1);
      } else {
        this.renderer.removeClass(element, FOCUSED$1);
      }
      this._isFocused = value;
    }
  }
  /**
   * Focuses the TextArea component.
   *
   * @example
   * ```ts
   * _@Component({
   * selector: 'my-app',
   * template: `
   *  <button (click)="textarea.focus()">Focus the textarea</button>
   *  <kendo-textarea #textarea></kendo-textarea>
   * `
   * })
   * class AppComponent { }
   * ```
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.input.nativeElement.focus();
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the TextArea component.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  resize() {
    if (this.resizable !== "auto") {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const hostElement = this.hostElement.nativeElement;
        const element = this.input.nativeElement;
        this.renderer.setStyle(element, "height", `${this.initialHeight}px`);
        const scrollHeight = element.scrollHeight;
        this.renderer.setStyle(hostElement, "min-height", `${scrollHeight}px`);
        if (scrollHeight > this.initialHeight) {
          this.renderer.setStyle(element, "height", `${scrollHeight}px`);
        }
      }, 0);
    });
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  setSelection(start, end) {
    if (this.isFocused) {
      invokeElementMethod(this.input, "setSelectionRange", start, end);
    }
  }
  selectAll() {
    if (this.value) {
      this.setSelection(0, this.value.length);
    }
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("input", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleFlow() {
    const isVertical = this.flow === "vertical";
    const element = this.input.nativeElement;
    this.renderer[isVertical ? "addClass" : "removeClass"](element, "!k-flex-none");
  }
  setInputAttributes() {
    const attributesToRender = Object.assign({}, this.mutableAttributes, this.parsedAttributes);
    setHTMLAttributes(attributesToRender, this.renderer, this.input.nativeElement, this.ngZone);
  }
};
TextAreaComponent.ɵfac = function TextAreaComponent_Factory(t) {
  return new (t || TextAreaComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ElementRef));
};
TextAreaComponent.ɵcmp = ɵɵdefineComponent({
  type: TextAreaComponent,
  selectors: [["kendo-textarea"]],
  contentQueries: function TextAreaComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TextAreaPrefixComponent, 5);
      ɵɵcontentQuery(dirIndex, TextAreaSuffixComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prefix = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suffix = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function TextAreaComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-textarea", ctx.hostClasses)("k-input", ctx.hostClasses)("!k-flex-col", ctx.flowCol)("!k-flex-row", ctx.flowRow);
    }
  },
  inputs: {
    focusableId: "focusableId",
    flow: "flow",
    inputAttributes: "inputAttributes",
    adornmentsOrientation: "adornmentsOrientation",
    rows: "rows",
    cols: "cols",
    maxlength: "maxlength",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    resizable: "resizable",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    showPrefixSeparator: "showPrefixSeparator",
    showSuffixSeparator: "showSuffixSeparator"
  },
  outputs: {
    onFocus: "focus",
    onBlur: "blur",
    valueChange: "valueChange"
  },
  exportAs: ["kendoTextArea"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.textarea"
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaComponent),
    multi: true
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => TextAreaComponent)
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  ngContentSelectors: _c222,
  decls: 7,
  vars: 26,
  consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], [3, "orientation", 4, "ngIf"], [1, "k-input-inner", "!k-overflow-auto", 3, "id", "ngClass", "value", "disabled", "readonly", "kendoEventsOutsideAngular"], [3, "orientation"]],
  template: function TextAreaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c21);
      ɵɵelementContainerStart(0, 1);
      ɵɵtwoWayListener("isFocusedChange", function TextAreaComponent_Template_ng_container_isFocusedChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function TextAreaComponent_Template_ng_container_handleBlur_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function TextAreaComponent_Template_ng_container_onFocus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵprojection(1);
      ɵɵtemplate(2, TextAreaComponent_kendo_input_separator_2_Template, 1, 1, "kendo-input-separator", 2);
      ɵɵelement(3, "textarea", 3, 0);
      ɵɵtemplate(5, TextAreaComponent_kendo_input_separator_5_Template, 1, 1, "kendo-input-separator", 2);
      ɵɵprojection(6, 1);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.prefix && ctx.showPrefixSeparator);
      ɵɵadvance();
      ɵɵproperty("id", ctx.focusableId)("ngClass", ctx.resizableClass)("value", ctx.value)("disabled", ctx.disabled)("readonly", ctx.readonly)("kendoEventsOutsideAngular", ɵɵpureFunction3(22, _c19, ctx.handleInputFocus, ctx.handleInputBlur, ctx.handleInput));
      ɵɵattribute("aria-multiline", true)("aria-disabled", ctx.disabled ? true : void 0)("aria-readonly", ctx.readonly ? true : void 0)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null)("placeholder", ctx.placeholder)("rows", ctx.rows)("cols", ctx.cols)("tabindex", ctx.tabIndex)("title", ctx.title)("maxlength", ctx.maxlength)("aria-invalid", ctx.isControlInvalid);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.suffix && ctx.showSuffixSeparator);
    }
  },
  dependencies: [NgClass, NgIf, EventsOutsideAngularDirective, InputSeparatorComponent, SharedInputEventsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoTextArea",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.textarea"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextAreaComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => TextAreaComponent)
      }],
      selector: "kendo-textarea",
      template: `
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <ng-content select="kendo-textarea-prefix"></ng-content>
            <kendo-input-separator
                *ngIf="prefix && showPrefixSeparator"
                [orientation]="separatorOrientation"
            ></kendo-input-separator>
            <textarea #input
                class="k-input-inner !k-overflow-auto"
                [attr.aria-multiline]="true"
                [attr.aria-disabled]="disabled ? true : undefined"
                [attr.aria-readonly]="readonly ? true : undefined"
                [attr.aria-invalid]="isControlInvalid"
                [id]="focusableId"
                [attr.required]="isControlRequired ? '' : null"
                [ngClass]="resizableClass"
                [value]="value"
                [attr.placeholder]="placeholder"
                [disabled]="disabled"
                [readonly]="readonly"
                [attr.rows]="rows"
                [attr.cols]="cols"
                [attr.tabindex]="tabIndex"
                [attr.title]="title"
                [attr.maxlength]="maxlength"
                [attr.aria-invalid]="isControlInvalid"
                [kendoEventsOutsideAngular]="{
                    focus: handleInputFocus,
                    blur: handleInputBlur,
                    input: handleInput}"
            ></textarea>
            <kendo-input-separator
                *ngIf="suffix && showSuffixSeparator"
                [orientation]="separatorOrientation"
            ></kendo-input-separator>
            <ng-content select="kendo-textarea-suffix"></ng-content>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-textarea"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    flowCol: [{
      type: HostBinding,
      args: ["class.!k-flex-col"]
    }],
    flowRow: [{
      type: HostBinding,
      args: ["class.!k-flex-row"]
    }],
    flow: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    adornmentsOrientation: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    resizable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    showPrefixSeparator: [{
      type: Input
    }],
    showSuffixSeparator: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    valueChange: [{
      type: Output
    }],
    prefix: [{
      type: ContentChild,
      args: [TextAreaPrefixComponent]
    }],
    suffix: [{
      type: ContentChild,
      args: [TextAreaSuffixComponent]
    }]
  });
})();
var TextAreaModule = class {
};
TextAreaModule.ɵfac = function TextAreaModule_Factory(t) {
  return new (t || TextAreaModule)();
};
TextAreaModule.ɵmod = ɵɵdefineNgModule({
  type: TextAreaModule,
  declarations: [TextAreaComponent, TextAreaPrefixComponent, TextAreaSuffixComponent],
  imports: [CommonModule, EventsModule, SharedModule2, AdornmentsModule, SharedEventsModule],
  exports: [TextAreaComponent, EventsModule, TextAreaPrefixComponent, TextAreaSuffixComponent, AdornmentsModule, InputSeparatorComponent, TextAreaDirective]
});
TextAreaModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, SharedModule2, AdornmentsModule, SharedEventsModule, EventsModule, AdornmentsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextAreaModule, [{
    type: NgModule,
    args: [{
      declarations: [TextAreaComponent, TextAreaPrefixComponent, TextAreaSuffixComponent],
      exports: [TextAreaComponent, EventsModule, TextAreaPrefixComponent, TextAreaSuffixComponent, AdornmentsModule, SHARED_DIRECTIVES2],
      imports: [CommonModule, EventsModule, SharedModule2, AdornmentsModule, SharedEventsModule]
    }]
  }], null, null);
})();
var PALETTEPRESETS = {
  basic: {
    colors: "000000,7f7f7f,880015,ed1c24,ff7f27,fff200,22b14c,00a2e8,3f48cc,a349a4,ffffff,c3c3c3,b97a57,ffaec9,ffc90e,efe4b0,b5e61d,99d9ea,7092be,c8bfe7",
    columns: 10
  },
  office: {
    colors: "ffffff, 000000, e6e6e6, 435569, 4371c4, ed7e32, a5a4a5, febf04, 5a9bd5, 71ae48, f2f2f3, 7f7f7f, d1cece, d5dde3, dae1f4, fce5d4, deeded, fff2cc, deeaf6, e1efd9, d7d8d8, 585959, aeabab, adbaca, b4c5e7, f6caac, dbdbdb, ffe498, bcd6ee, c5e0b2, bfbfc0, 3f3f3f, 767070, 8595b1, 8fabdb, f5b183, c9c8c9, fed965, 9bc4e5, a8d08d, a5a5a6, 262625, 393939, 334050, 2e5496, c45a11, 7b7b7a, bf9000, 2f75b5, 548235, 7f7f7f, 0b0c0c, 161616, 222a34, 203764, 843d0b, 525252, 7f6000, 1d4d79, 375623",
    columns: 10
  },
  apex: {
    colors: "ffffff, 000000, c9c2d1, 69676d, ceb966, 9cb084, 6bb1c9, 6585cf, 7e6bc9, a379bb, f2f2f2, 7f7f7f, f4f2f5, e0e0e2, f5f1e0, ebefe6, e1eff4, e0e6f5, e5e1f4, ece4f1, d8d8d8, 595959, e9e6ec, c2c1c5, ebe3c1, d7dfcd, c3dfe9, c1ceeb, cbc3e9, dac9e3, bfbfbf, 3f3f3f, dedae3, a4a3a8, e1d5a3, c3cfb5, a6d0de, a2b5e2, b1a6de, c7aed6, a5a5a5, 262626, 9688a5, 4e4d51, ae9638, 758c5a, 3d8da9, 365bb0, 533da9, 7d4d99, 7f7f7f, 0c0c0c, 635672, 343336, 746425, 4e5d3c, 295e70, 243c75, 372970, 533366",
    columns: 10
  },
  austin: {
    colors: "ffffff, 000000, caf278, 3e3d2d, 94c600, 71685a, ff6700, 909465, 956b43, fea022, f2f2f2, 7f7f7f, f4fce4, dddcd0, efffc0, e3e1dc, ffe0cb, e8e9df, ece1d6, feecd2, d8d8d8, 595959, e9f9c9, bbb9a1, dfff82, c8c3ba, ffc299, d2d4c0, dac3ad, fed9a6, bfbfbf, 3f3f3f, dff7ae, ada598, cfff43, ada598, ffa365, bcbfa1, c8a585, fec67a, a5a5a5, 262626, a9ea25, 2e2d21, 6f9400, 544e43, bf4d00, 6c6f4b, 6f5032, d77b00, 7f7f7f, 0c0c0c, 74a50f, 1f1e16, 4a6300, 38342d, 7f3300, 484a32, 4a3521, 8f5200",
    columns: 10
  },
  clarity: {
    colors: "ffffff, 292934, f3f2dc, d2533c, 93a299, ad8f67, 726056, 4c5a6a, 808da0, 79463d, f2f2f2, e7e7ec, e7e5b9, f6dcd8, e9ecea, eee8e0, e4dedb, d8dde3, e5e8ec, e9d6d3, d8d8d8, c4c4d1, d5d185, edbab1, d3d9d6, ded2c2, c9beb8, b2bcc8, ccd1d9, d3aea7, bfbfbf, 8a8aa3, aca73b, e4978a, bec7c1, cdbba3, af9e94, 8c9bac, b2bac6, bd857c, a5a5a5, 56566e, 56531d, a43925, 6b7c72, 866b48, 554840, 39434f, 5c697b, 5a342d, 7f7f7f, 3b3b4b, 22210b, 6d2619, 47534c, 594730, 39302b, 262d35, 3d4652, 3c231e",
    columns: 10
  },
  slipstream: {
    colors: "ffffff, 000000, b4dcfa, 212745, 4e67c8, 5eccf3, a7ea52, 5dceaf, ff8021, f14124, f2f2f2, 7f7f7f, 8bc9f7, c7cce4, dbe0f4, def4fc, edfadc, def5ef, ffe5d2, fcd9d3, d8d8d8, 595959, 4facf3, 909aca, b8c2e9, beeafa, dbf6b9, beebdf, ffcca6, f9b3a7, bfbfbf, 3f3f3f, 0d78c9, 5967af, 94a3de, 9ee0f7, caf297, 9de1cf, ffb279, f68d7b, a5a5a5, 262626, 063c64, 181d33, 31479f, 11b2eb, 81d319, 34ac8b, d85c00, c3260c, 7f7f7f, 0c0c0c, 021828, 101322, 202f6a, 0b769c, 568c11, 22725c, 903d00, 821908",
    columns: 10
  },
  metro: {
    colors: "ffffff, 000000, d6ecff, 4e5b6f, 7fd13b, ea157a, feb80a, 00addc, 738ac8, 1ab39f, f2f2f2, 7f7f7f, a7d6ff, d9dde4, e5f5d7, fad0e4, fef0cd, c5f2ff, e2e7f4, c9f7f1, d8d8d8, 595959, 60b5ff, b3bcca, cbecb0, f6a1c9, fee29c, 8be6ff, c7d0e9, 94efe3, bfbfbf, 3f3f3f, 007dea, 8d9baf, b2e389, f272af, fed46b, 51d9ff, aab8de, 5fe7d5, a5a5a5, 262626, 003e75, 3a4453, 5ea226, af0f5b, c58c00, 0081a5, 425ea9, 138677, 7f7f7f, 0c0c0c, 00192e, 272d37, 3f6c19, 750a3d, 835d00, 00566e, 2c3f71, 0c594f",
    columns: 10
  },
  flow: {
    colors: "ffffff, 000000, dbf5f9, 04617b, 0f6fc6, 009dd9, 0bd0d9, 10cf9b, 7cca62, a5c249, f2f2f2, 7f7f7f, b2e9f2, b4ecfc, c7e2fa, c4eeff, c9fafc, c9faed, e4f4df, edf2da, d8d8d8, 595959, 76d9e8, 6adafa, 90c6f6, 89deff, 93f5f9, 94f6db, cae9c0, dbe6b6, bfbfbf, 3f3f3f, 21b2c8, 20c8f7, 59a9f2, 4fceff, 5df0f6, 5ff2ca, b0dfa0, c9da91, a5a5a5, 262626, 105964, 02485c, 0b5394, 0075a2, 089ca2, 0b9b74, 54a838, 7e9532, 7f7f7f, 0c0c0c, 062328, 01303d, 073763, 004e6c, 05686c, 07674d, 387025, 546321",
    columns: 10
  },
  hardcover: {
    colors: "ffffff, 000000, ece9c6, 895d1d, 873624, d6862d, d0be40, 877f6c, 972109, aeb795, f2f2f2, 7f7f7f, e1dca5, f2e0c6, f0d0c9, f6e6d5, f5f2d8, e7e5e1, fbc7bc, eef0e9, d8d8d8, 595959, d0c974, e6c28d, e2a293, eeceaa, ece5b2, cfccc3, f78f7a, dee2d4, bfbfbf, 3f3f3f, a29a36, daa454, d4735e, e6b681, e2d88c, b7b2a5, f35838, ced3bf, a5a5a5, 262626, 514d1b, 664515, 65281a, a2641f, a39428, 655f50, 711806, 879464, 7f7f7f, 0c0c0c, 201e0a, 442e0e, 431b11, 6c4315, 6d621a, 433f35, 4b1004, 5a6243",
    columns: 10
  },
  trek: {
    colors: "ffffff, 000000, fbeec9, 4e3b30, f0a22e, a5644e, b58b80, c3986d, a19574, c17529, f2f2f2, 7f7f7f, f7e09e, e1d6cf, fcecd5, eddfda, f0e7e5, f3eae1, ece9e3, f5e3d1, d8d8d8, 595959, f3cc5f, c4ad9f, f9d9ab, dcc0b6, e1d0cc, e7d5c4, d9d4c7, ebc7a3, bfbfbf, 3f3f3f, d29f0f, a78470, f6c781, cba092, d2b9b2, dbc1a7, c6bfab, e1ac76, a5a5a5, 262626, 694f07, 3a2c24, c87d0e, 7b4b3a, 926255, a17242, 7b7153, 90571e, 7f7f7f, 0c0c0c, 2a1f03, 271d18, 855309, 523226, 614138, 6b4c2c, 524b37, 603a14",
    columns: 10
  },
  verve: {
    colors: "ffffff, 000000, d2d2d2, 666666, ff388c, e40059, 9c007f, 68007f, 005bd3, 00349e, f2f2f2, 7f7f7f, bdbdbd, e0e0e0, ffd7e8, ffc6dc, ffb8f1, f1b2ff, c3dcff, b8cfff, d8d8d8, 595959, 9d9d9d, c1c1c1, ffafd1, ff8eba, ff71e4, e365ff, 87baff, 72a0ff, bfbfbf, 3f3f3f, 696969, a3a3a3, ff87ba, ff5597, ff2ad7, d519ff, 4b98ff, 2b71ff, a5a5a5, 262626, 343434, 4c4c4c, e90062, ab0042, 75005f, 4e005f, 00449e, 002676, 7f7f7f, 0c0c0c, 151515, 333333, 9b0041, 72002c, 4e003f, 34003f, 002d69, 00194f",
    columns: 10
  },
  monochrome: {
    colors: "000000, 1a1a1a, 333333, 4d4d4d, 666666, 808080, 999999, b3b3b3, cccccc, e6e6e6, f2f2f2, ffffff",
    columns: 12
  },
  accessible: {
    colors: "black, grey, darkred, red, darkorange, gold, green, blue, darkblue, purple, white, darkgrey, saddlebrown, pink, orange, yellow, lightgreen, lightskyblue, lightblue, mediumpurple",
    columns: 10
  }
};
var ColorPickerCancelEvent = class extends PreventableEvent {
  constructor(originalEvent) {
    super();
    this.originalEvent = originalEvent;
  }
};
var ColorPickerCloseEvent = class extends PreventableEvent {
};
var ColorPickerOpenEvent = class extends PreventableEvent {
};
var ActiveColorClickEvent = class {
  /**
   * @hidden
   * @param color Represents the current value of the ColorPicker.
   */
  constructor(color) {
    this.color = color;
    this.openPrevented = false;
  }
  /**
   * Prevents the opening of the popup.
   */
  preventOpen() {
    this.openPrevented = true;
  }
  /**
   * Returns `true` if the popup opening is prevented by any of its subscribers.
   *
   * @returns - Returns `true` if the open action was prevented. Otherwise, returns `false`.
   */
  isOpenPrevented() {
    return this.openPrevented;
  }
};
var parseColor2 = (value, format, opacityEnabled = false, safe = true) => {
  const allowedFormats = ["hex", "rgba", "name"];
  if (allowedFormats.indexOf(format) === -1) {
    throw new Error(`Unsupported color output format '${format}'. The available options are 'hex', 'rgba' or 'name'.`);
  }
  if (!isPresent3(value)) {
    return;
  }
  if (format === "name") {
    return nameFormat(value, safe);
  }
  const parsedColor = parseColor(value.trim(), safe);
  if (!isPresent3(parsedColor)) {
    return;
  }
  const parsedColorResult = format === "hex" ? getHexValue(parsedColor, opacityEnabled) : parsedColor.toCssRgba();
  return parsedColorResult;
};
var getHSV = (value, safe = true) => {
  const parsed = parseColor(value, safe);
  if (!isPresent3(parsed)) {
    return {};
  }
  return parsed.toHSV();
};
var getRGBA = (value, safe = true) => {
  const parsed = parseColor(value, safe);
  if (!isPresent3(parsed)) {
    return {};
  }
  return parsed.toBytes();
};
var getColorFromHSV = (hsva, format = "rgba", opacityEnabled = false) => {
  const hue = fitIntoBounds(hsva.h, 0, 359.9);
  const saturation = fitIntoBounds(hsva.s, 0, 1);
  const value = fitIntoBounds(hsva.v, 0, 1);
  const alpha = fitIntoBounds(hsva.a, 0, 1);
  const color = color_default.fromHSV(hue, saturation, value, alpha);
  return format === "hex" ? getHexValue(color, opacityEnabled) : color.toCssRgba();
};
var getHexValue = (color, opacity) => {
  return opacity && color.a < 1 ? color.toCss({
    alpha: true
  }) : color.toCss();
};
var getColorFromHue = (hue) => {
  return getColorFromHSV({
    h: hue,
    s: 1,
    v: 1,
    a: 1
  });
};
var getColorFromRGBA = (rgba) => {
  const red = fitIntoBounds(rgba.r, 0, 255);
  const green = fitIntoBounds(rgba.g, 0, 255);
  const blue = fitIntoBounds(rgba.b, 0, 255);
  const alpha = fitIntoBounds(rgba.a, 0, 1);
  return color_default.fromBytes(red, green, blue, alpha).toCssRgba();
};
function nameFormat(value, safe) {
  value = value.toLowerCase().trim();
  if (isPresent3(named_colors_default[value])) {
    return value;
  }
  if (parseColor(value, safe)) {
    value = parseColor(value, safe).toHex();
  }
  const key = Object.keys(named_colors_default).find((key2) => named_colors_default[key2] === value);
  if (!key && !safe) {
    throw new Error(`The provided color ${value} is not supported for 'format="name"' property.To display ${value} color, the component 'format' property should be set to 'hex' or 'rgba' `);
  }
  return key;
}
var getRGBFromRGBA = (foregroundColor, backgroundColor) => {
  const r1 = fitIntoBounds(foregroundColor.r, 0, 255);
  const g1 = fitIntoBounds(foregroundColor.g, 0, 255);
  const b1 = fitIntoBounds(foregroundColor.b, 0, 255);
  const a1 = fitIntoBounds(foregroundColor.a, 0, 1);
  const r2 = fitIntoBounds(backgroundColor.r, 0, 255);
  const g2 = fitIntoBounds(backgroundColor.g, 0, 255);
  const b2 = fitIntoBounds(backgroundColor.b, 0, 255);
  return {
    r: Math.round((1 - a1) * r2 + a1 * r1),
    g: Math.round((1 - a1) * g2 + a1 * g1),
    b: Math.round((1 - a1) * b2 + a1 * b1)
  };
};
var getLuminance = (rgb) => {
  const a = [rgb.r, rgb.g, rgb.b].map(function(v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
var getContrast = (luminance1, luminance2) => {
  const brightest = Math.max(luminance1, luminance2);
  const darkest = Math.min(luminance1, luminance2);
  return (brightest + 0.05) / (darkest + 0.05);
};
var getContrastFromTwoRGBAs = (a, b) => {
  return getContrast(getLuminance(getRGBFromRGBA(a, b)), getLuminance(getRGBFromRGBA(b, {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  })));
};
var bezierCommand = (controlPointCalc) => (point, i, a) => {
  const [cpsX, cpsY] = controlPointCalc(a[i - 1], a[i - 2], point);
  const [cpeX, cpeY] = controlPointCalc(point, a[i - 1], a[i + 1], true);
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};
var controlPoint = (lineCalc) => (current, previous, next, reverse) => {
  const p = previous || current;
  const n = next || current;
  const smooth = 0.1;
  const l = lineCalc(p, n);
  const angle = l.angle + (reverse ? Math.PI : 0);
  const length = l.length * smooth;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};
var line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};
var svgPath = (points, command) => {
  if (points.length === 0) {
    return "";
  }
  const d = points.reduce((acc, point, i, a) => i === 0 ? (
    // if first point
    `M ${point[0]},${point[1]}`
  ) : (
    // else
    `${acc} ${command(point, i, a)}`
  ), "");
  return d;
};
var ColorPickerLocalizationService = class extends LocalizationService {
  constructor(prefix, messageService, _rtl) {
    super(prefix, messageService, _rtl);
  }
};
ColorPickerLocalizationService.ɵfac = function ColorPickerLocalizationService_Factory(t) {
  return new (t || ColorPickerLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8));
};
ColorPickerLocalizationService.ɵprov = ɵɵdefineInjectable({
  token: ColorPickerLocalizationService,
  factory: ColorPickerLocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerLocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }];
  }, null);
})();
var DEFAULT_OUTPUT_FORMAT = "rgba";
var DEFAULT_GRADIENT_BACKGROUND_COLOR = "rgba(255, 0, 0, 1)";
var DRAGHANDLE_MOVE_SPEED = 5;
var DRAGHANDLE_MOVE_SPEED_SMALL_STEP = 2;
var AAA_RATIO = 7;
var AA_RATIO = 4.5;
var DEFAULT_PRESET$1 = "office";
var DEFAULT_ACCESSIBLE_PRESET$1 = "accessible";
var STEP_COUNT = 16;
var FlatColorPickerLocalizationService = class extends LocalizationService {
  constructor(prefix, messageService, _rtl, colorPickerLocalization) {
    super(prefix, messageService, _rtl);
    this.colorPickerLocalization = colorPickerLocalization;
  }
  get(shortKey) {
    if (this.colorPickerLocalization) {
      return this.colorPickerLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
};
FlatColorPickerLocalizationService.ɵfac = function FlatColorPickerLocalizationService_Factory(t) {
  return new (t || FlatColorPickerLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(ColorPickerLocalizationService, 8));
};
FlatColorPickerLocalizationService.ɵprov = ɵɵdefineInjectable({
  token: FlatColorPickerLocalizationService,
  factory: FlatColorPickerLocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerLocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }, {
      type: ColorPickerLocalizationService,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [ColorPickerLocalizationService]
      }]
    }];
  }, null);
})();
var FlatColorPickerService = class {
  getPaletteSettings(settings, format) {
    const defaultPreset = format !== "name" ? DEFAULT_PRESET$1 : DEFAULT_ACCESSIBLE_PRESET$1;
    const settingsPalette = settings.palette;
    const presetColumns = typeof settingsPalette === "string" && PALETTEPRESETS[settingsPalette] ? PALETTEPRESETS[settingsPalette].columns : void 0;
    return {
      palette: settingsPalette || defaultPreset,
      tileSize: settings.tileSize || 24,
      columns: settings.columns || presetColumns || 10
    };
  }
  paletteTileLayout(tileSize) {
    if (typeof tileSize === "number") {
      return {
        width: tileSize,
        height: tileSize
      };
    }
    return {
      width: tileSize.width ? tileSize.width : tileSize.height,
      height: tileSize.height ? tileSize.height : tileSize.width
    };
  }
};
FlatColorPickerService.ɵfac = function FlatColorPickerService_Factory(t) {
  return new (t || FlatColorPickerService)();
};
FlatColorPickerService.ɵprov = ɵɵdefineInjectable({
  token: FlatColorPickerService,
  factory: FlatColorPickerService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerService, [{
    type: Injectable
  }], null, null);
})();
var ColorPaletteLocalizationService = class extends LocalizationService {
  constructor(prefix, messageService, _rtl, flatColorPickerLocalization) {
    super(prefix, messageService, _rtl);
    this.flatColorPickerLocalization = flatColorPickerLocalization;
  }
  get(shortKey) {
    if (this.flatColorPickerLocalization) {
      return this.flatColorPickerLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
};
ColorPaletteLocalizationService.ɵfac = function ColorPaletteLocalizationService_Factory(t) {
  return new (t || ColorPaletteLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(FlatColorPickerLocalizationService, 8));
};
ColorPaletteLocalizationService.ɵprov = ɵɵdefineInjectable({
  token: ColorPaletteLocalizationService,
  factory: ColorPaletteLocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPaletteLocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }, {
      type: FlatColorPickerLocalizationService,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [FlatColorPickerLocalizationService]
      }]
    }];
  }, null);
})();
var ColorPaletteService = class {
  constructor() {
    this.colorRows = [];
  }
  setColorMatrix(palette, columns) {
    this.colorRows = [];
    if (!(isPresent3(palette) && palette.length)) {
      return;
    }
    columns = columns || palette.length;
    for (let start = 0; start < palette.length; start += columns) {
      const row = palette.slice(start, columns + start);
      this.colorRows.push(row);
    }
  }
  getCellCoordsFor(color) {
    if (!isPresent3(color)) {
      return;
    }
    for (let row = 0; row < this.colorRows.length; row++) {
      for (let col = 0; col < this.colorRows[row].length; col++) {
        if (this.colorRows[row][col] === color) {
          return {
            row,
            col
          };
        }
      }
    }
  }
  getColorAt(cellCoords) {
    if (!(isPresent3(cellCoords) && isPresent3(this.colorRows[cellCoords.row]))) {
      return;
    }
    return this.colorRows[cellCoords.row][cellCoords.col];
  }
  getNextCell(current, horizontalStep, verticalStep) {
    if (!(isPresent3(current) && isPresent3(current.row) && isPresent3(current.col))) {
      return {
        row: 0,
        col: 0
      };
    }
    const row = this.clampIndex(current.row + verticalStep, this.colorRows.length - 1);
    const col = this.clampIndex(current.col + horizontalStep, this.colorRows[row].length - 1);
    return {
      row,
      col
    };
  }
  clampIndex(index, max) {
    const minArrayIndex = 0;
    if (index < minArrayIndex) {
      return minArrayIndex;
    }
    if (index > max) {
      return max;
    }
    return index;
  }
};
ColorPaletteService.ɵfac = function ColorPaletteService_Factory(t) {
  return new (t || ColorPaletteService)();
};
ColorPaletteService.ɵprov = ɵɵdefineInjectable({
  token: ColorPaletteService,
  factory: ColorPaletteService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPaletteService, [{
    type: Injectable
  }], null, null);
})();
var ColorPickerMessages = class extends ComponentMessages {
};
ColorPickerMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵColorPickerMessages_BaseFactory;
  return function ColorPickerMessages_Factory(t) {
    return (ɵColorPickerMessages_BaseFactory || (ɵColorPickerMessages_BaseFactory = ɵɵgetInheritedFactory(ColorPickerMessages)))(t || ColorPickerMessages);
  };
})();
ColorPickerMessages.ɵdir = ɵɵdefineDirective({
  type: ColorPickerMessages,
  selectors: [["kendo-colorpicker-messages-base"]],
  inputs: {
    colorPaletteNoColor: "colorPaletteNoColor",
    colorGradientNoColor: "colorGradientNoColor",
    flatColorPickerNoColor: "flatColorPickerNoColor",
    colorPickerNoColor: "colorPickerNoColor",
    colorGradientHandle: "colorGradientHandle",
    clearButton: "clearButton",
    hueSliderHandle: "hueSliderHandle",
    opacitySliderHandle: "opacitySliderHandle",
    hexInputPlaceholder: "hexInputPlaceholder",
    redInputPlaceholder: "redInputPlaceholder",
    greenInputPlaceholder: "greenInputPlaceholder",
    blueInputPlaceholder: "blueInputPlaceholder",
    alphaInputPlaceholder: "alphaInputPlaceholder",
    redChannelLabel: "redChannelLabel",
    greenChannelLabel: "greenChannelLabel",
    blueChannelLabel: "blueChannelLabel",
    alphaChannelLabel: "alphaChannelLabel",
    passContrast: "passContrast",
    failContrast: "failContrast",
    contrastRatio: "contrastRatio",
    previewColor: "previewColor",
    revertSelection: "revertSelection",
    gradientView: "gradientView",
    paletteView: "paletteView",
    formatButton: "formatButton",
    applyButton: "applyButton",
    cancelButton: "cancelButton"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-colorpicker-messages-base"
    }]
  }], null, {
    colorPaletteNoColor: [{
      type: Input
    }],
    colorGradientNoColor: [{
      type: Input
    }],
    flatColorPickerNoColor: [{
      type: Input
    }],
    colorPickerNoColor: [{
      type: Input
    }],
    colorGradientHandle: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    hueSliderHandle: [{
      type: Input
    }],
    opacitySliderHandle: [{
      type: Input
    }],
    hexInputPlaceholder: [{
      type: Input
    }],
    redInputPlaceholder: [{
      type: Input
    }],
    greenInputPlaceholder: [{
      type: Input
    }],
    blueInputPlaceholder: [{
      type: Input
    }],
    alphaInputPlaceholder: [{
      type: Input
    }],
    redChannelLabel: [{
      type: Input
    }],
    greenChannelLabel: [{
      type: Input
    }],
    blueChannelLabel: [{
      type: Input
    }],
    alphaChannelLabel: [{
      type: Input
    }],
    passContrast: [{
      type: Input
    }],
    failContrast: [{
      type: Input
    }],
    contrastRatio: [{
      type: Input
    }],
    previewColor: [{
      type: Input
    }],
    revertSelection: [{
      type: Input
    }],
    gradientView: [{
      type: Input
    }],
    paletteView: [{
      type: Input
    }],
    formatButton: [{
      type: Input
    }],
    applyButton: [{
      type: Input
    }],
    cancelButton: [{
      type: Input
    }]
  });
})();
var LocalizedColorPickerMessagesDirective = class extends ColorPickerMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedColorPickerMessagesDirective.ɵfac = function LocalizedColorPickerMessagesDirective_Factory(t) {
  return new (t || LocalizedColorPickerMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedColorPickerMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedColorPickerMessagesDirective,
  selectors: [["", "kendoColorPickerLocalizedMessages", ""], ["", "kendoFlatColorPickerLocalizedMessages", ""], ["", "kendoColorGradientLocalizedMessages", ""], ["", "kendoColorPaletteLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: ColorPickerMessages,
    useExisting: forwardRef(() => LocalizedColorPickerMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedColorPickerMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ColorPickerMessages,
        useExisting: forwardRef(() => LocalizedColorPickerMessagesDirective)
      }],
      selector: "[kendoColorPickerLocalizedMessages], [kendoFlatColorPickerLocalizedMessages], [kendoColorGradientLocalizedMessages], [kendoColorPaletteLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var DEFAULT_TILE_SIZE = 24;
var DEFAULT_COLUMNS_COUNT = 10;
var DEFAULT_PRESET = "office";
var DEFAULT_ACCESSIBLE_PRESET = "accessible";
var serial$3 = 0;
var ColorPaletteComponent = class {
  constructor(host, service, cdr, renderer, localizationService, ngZone) {
    this.host = host;
    this.service = service;
    this.cdr = cdr;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.role = "grid";
    this.id = `k-colorpalette-${serial$3++}`;
    this.format = "hex";
    this.disabled = false;
    this.readonly = false;
    this.tileSize = {
      width: DEFAULT_TILE_SIZE,
      height: DEFAULT_TILE_SIZE
    };
    this.selectionChange = new EventEmitter();
    this.valueChange = new EventEmitter();
    this.cellSelection = new EventEmitter();
    this.hostClasses = true;
    this.uniqueId = guid();
    this._tabindex = 0;
    this.subs = new import_rxjs2.Subscription();
    this.notifyNgTouched = () => {
    };
    this.notifyNgChanged = () => {
    };
    validatePackage(packageMetadata2);
    this.dynamicRTLSubscription = localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  /**
   * @hidden
   */
  get activeDescendant() {
    return this.activeCellId;
  }
  /**
   * @hidden
   */
  get paletteId() {
    return this.id;
  }
  /**
   * Specifies the value of the initially selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format);
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies the number of columns that will be displayed.
   * Defaults to `10`.
   */
  set columns(value) {
    const minColumnsCount = 1;
    this._columns = value > minColumnsCount ? value : minColumnsCount;
  }
  get columns() {
    return this._columns;
  }
  /**
   * The color palette that will be displayed.
   *
   * The supported values are:
   * * The name of the predefined palette preset (for example, `office`, `basic`, and `apex`).
   * * A string with comma-separated colors.
   * * A string array.
   */
  set palette(value) {
    if (!isPresent3(value)) {
      value = DEFAULT_PRESET;
    }
    if (typeof value === "string" && isPresent3(PALETTEPRESETS[value])) {
      this.columns = this.columns || PALETTEPRESETS[value].columns;
      value = PALETTEPRESETS[value].colors;
    }
    const colors = typeof value === "string" ? value.split(",") : value;
    this._palette = colors.map((color) => parseColor2(color, this.format, false, false));
  }
  get palette() {
    return this._palette;
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * @hidden
   */
  get tileLayout() {
    if (typeof this.tileSize !== "number") {
      return this.tileSize;
    }
    return {
      width: this.tileSize,
      height: this.tileSize
    };
  }
  /**
   * @hidden
   */
  get colorRows() {
    return this.service.colorRows;
  }
  /**
   * @hidden
   */
  get hostTabindex() {
    return this.tabindex;
  }
  /**
   * @hidden
   */
  get disabledClass() {
    return this.disabled;
  }
  /**
   * @hidden
   */
  get readonlyAttribute() {
    return this.readonly;
  }
  ngOnInit() {
    if (this.colorRows.length === 0) {
      const defaultPreset = this.format !== "name" ? DEFAULT_PRESET : DEFAULT_ACCESSIBLE_PRESET;
      this.palette = this.palette || defaultPreset;
      this.setRows();
    }
    const elem = this.host.nativeElement;
    this.subs.add(this.renderer.listen(elem, "keydown", (event) => this.handleKeydown(event)));
    this.subs.add(this.renderer.listen(elem, "focus", () => this.handleFocus()));
    this.subs.add(this.renderer.listen(elem, "blur", () => this.handleHostBlur()));
  }
  ngAfterViewInit() {
    this.setHostElementAriaLabel();
    if (this.value) {
      this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
        this.selectCell(this.value);
      });
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    if (changes["palette"] || changes["columns"]) {
      this.setRows();
    }
    if (changes["palette"] || changes["value"] || changes["columns"]) {
      this.selectCell(this.value);
      this.setHostElementAriaLabel();
    }
  }
  /**
   * @hidden
   */
  handleKeydown(event) {
    const isRTL = this.direction === "rtl";
    switch (event.keyCode) {
      case Keys.ArrowDown:
        this.handleCellNavigation(0, 1);
        break;
      case Keys.ArrowUp:
        this.handleCellNavigation(0, -1);
        break;
      case Keys.ArrowRight:
        this.handleCellNavigation(isRTL ? -1 : 1, 0);
        break;
      case Keys.ArrowLeft:
        this.handleCellNavigation(isRTL ? 1 : -1, 0);
        break;
      case Keys.Enter:
        this.handleEnter();
        break;
      default:
        return;
    }
    event.preventDefault();
  }
  /**
   * @hidden
   */
  handleFocus() {
    if (!this.focusInComponent) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  handleHostBlur() {
    this.notifyNgTouched();
    this.handleCellFocusOnBlur();
  }
  /**
   * @hidden
   */
  handleCellSelection(value, focusedCell) {
    if (this.readonly) {
      return;
    }
    this.selectedCell = focusedCell;
    this.focusedCell = this.selectedCell;
    this.focusInComponent = true;
    const parsedColor = parseColor2(value, this.format, false, false);
    this.cellSelection.emit(parsedColor);
    this.handleValueChange(parsedColor);
    if (this.selection !== parsedColor) {
      this.selection = parsedColor;
      this.selectionChange.emit(parsedColor);
    }
    if (focusedCell) {
      this.activeCellId = `k-${this.selectedCell.row}-${this.selectedCell.col}-${this.uniqueId}`;
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.selectCell(value);
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  focus() {
    this.host.nativeElement.focus();
    if (!this.focusedCell && !this.readonly && !this.disabled) {
      this.focusedCell = {
        row: 0,
        col: 0
      };
      this.activeCellId = `k-${this.focusedCell.row}-${this.focusedCell.col}-${this.uniqueId}`;
    }
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  /**
   * Clears the color value of the ColorPalette.
   */
  reset() {
    this.focusedCell = null;
    if (isPresent3(this.value)) {
      this.handleValueChange(void 0);
    }
    this.selectedCell = void 0;
  }
  handleValueChange(color) {
    if (this.value === color) {
      return;
    }
    this.value = color;
    this.valueChange.emit(color);
    this.notifyNgChanged(color);
    this.setHostElementAriaLabel();
  }
  handleCellFocusOnBlur() {
    this.focusInComponent = false;
    this.focusedCell = this.selectedCell;
  }
  selectCell(value) {
    const parsedColor = parseColor2(value, "hex");
    this.selectedCell = this.service.getCellCoordsFor(parsedColor);
    this.focusedCell = this.selectedCell;
  }
  setRows() {
    if (!isPresent3(this.palette)) {
      return;
    }
    this.columns = this.columns || DEFAULT_COLUMNS_COUNT;
    this.service.setColorMatrix(this.palette, this.columns);
  }
  handleCellNavigation(horizontalStep, verticalStep) {
    if (this.readonly) {
      return;
    }
    this.focusedCell = this.service.getNextCell(this.focusedCell, horizontalStep, verticalStep);
    this.focusInComponent = true;
    if (this.focusedCell) {
      this.activeCellId = `k-${this.focusedCell.row}-${this.focusedCell.col}-${this.uniqueId}`;
    }
  }
  setHostElementAriaLabel() {
    const parsed = parseColor2(this.value, this.format);
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", `${this.value ? parsed : this.localizationService.get("colorPaletteNoColor")}`);
  }
  handleEnter() {
    if (!isPresent3(this.focusedCell)) {
      return;
    }
    const selectedColor = this.service.getColorAt(this.focusedCell);
    this.handleCellSelection(selectedColor, this.focusedCell);
  }
};
ColorPaletteComponent.ɵfac = function ColorPaletteComponent_Factory(t) {
  return new (t || ColorPaletteComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ColorPaletteService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
};
ColorPaletteComponent.ɵcmp = ɵɵdefineComponent({
  type: ColorPaletteComponent,
  selectors: [["kendo-colorpalette"]],
  hostVars: 13,
  hostBindings: function ColorPaletteComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction)("role", ctx.role)("aria-activedescendant", ctx.activeDescendant)("id", ctx.paletteId)("tabindex", ctx.hostTabindex)("aria-disabled", ctx.disabledClass)("aria-readonly", ctx.readonlyAttribute);
      ɵɵclassProp("k-readonly", ctx.readonly)("k-colorpalette", ctx.hostClasses)("k-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    id: "id",
    format: "format",
    value: "value",
    columns: "columns",
    palette: "palette",
    tabindex: "tabindex",
    disabled: "disabled",
    readonly: "readonly",
    tileSize: "tileSize"
  },
  outputs: {
    selectionChange: "selectionChange",
    valueChange: "valueChange",
    cellSelection: "cellSelection"
  },
  exportAs: ["kendoColorPalette"],
  features: [ɵɵProvidersFeature([{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPaletteComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => ColorPaletteComponent)
  }, ColorPaletteService, ColorPaletteLocalizationService, {
    provide: LocalizationService,
    useExisting: ColorPaletteLocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.colorpalette"
  }]), ɵɵNgOnChangesFeature],
  decls: 4,
  vars: 1,
  consts: () => {
    let i18n_10;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_10 = goog.getMsg("Colorpalette no color chosen");
      i18n_10 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_10;
    } else {
      i18n_10 = $localize`:kendo.colorpalette.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty.:Colorpalette no color chosen`;
    }
    return [["kendoColorPaletteLocalizedMessages", "", "colorPaletteNoColor", i18n_10], ["role", "presentation", 1, "k-colorpalette-table"], ["role", "row", 4, "ngFor", "ngForOf"], ["role", "row"], ["role", "gridcell", "class", "k-colorpalette-tile", 3, "k-selected", "k-focus", "id", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "k-colorpalette-tile", 3, "click", "id", "ngStyle"]];
  },
  template: function ColorPaletteComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 0);
      ɵɵelementStart(1, "table", 1)(2, "tbody");
      ɵɵtemplate(3, ColorPaletteComponent_tr_3_Template, 2, 1, "tr", 2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.colorRows);
    }
  },
  dependencies: [NgForOf, NgStyle, LocalizedColorPickerMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPaletteComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoColorPalette",
      selector: "kendo-colorpalette",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPaletteComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ColorPaletteComponent)
      }, ColorPaletteService, ColorPaletteLocalizationService, {
        provide: LocalizationService,
        useExisting: ColorPaletteLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.colorpalette"
      }],
      template: `
        <ng-container kendoColorPaletteLocalizedMessages
            i18n-colorPaletteNoColor="kendo.colorpalette.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty."
            colorPaletteNoColor="Colorpalette no color chosen">
        </ng-container>
        <table role="presentation" class="k-colorpalette-table">
            <tbody>
                <tr *ngFor="let row of colorRows; let rowIndex = index" role="row">
                    <td *ngFor="let color of row; let colIndex = index"
                        role="gridcell"
                        [class.k-selected]="selectedCell?.row === rowIndex && selectedCell?.col === colIndex"
                        [class.k-focus]="focusInComponent && focusedCell?.row === rowIndex && focusedCell?.col === colIndex"
                        [attr.aria-selected]="selectedCell?.row === rowIndex && selectedCell?.col === colIndex ? 'true' : undefined"
                        [attr.aria-label]="color"
                        class="k-colorpalette-tile"
                        [id]="'k-' + rowIndex + '-' + colIndex + '-' + uniqueId"
                        [attr.value]="color"
                        (click)="handleCellSelection(color, { row: rowIndex, col: colIndex })"
                        [ngStyle]="{
                            backgroundColor: color,
                            width: tileLayout.width + 'px',
                            height: tileLayout.height + 'px',
                            minWidth: tileLayout.width + 'px'
                        }">
                    </td>
                </tr>
            </tbody>
        </table>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ColorPaletteService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    activeDescendant: [{
      type: HostBinding,
      args: ["attr.aria-activedescendant"]
    }],
    paletteId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    id: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    palette: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tileSize: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }],
    cellSelection: [{
      type: Output
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-colorpalette"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    readonlyAttribute: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }]
  });
})();
var ColorGradientLocalizationService = class extends LocalizationService {
  constructor(prefix, messageService, _rtl, flatColorPickerLocalization) {
    super(prefix, messageService, _rtl);
    this.flatColorPickerLocalization = flatColorPickerLocalization;
  }
  get(shortKey) {
    if (this.flatColorPickerLocalization) {
      return this.flatColorPickerLocalization.get(shortKey);
    }
    return super.get(shortKey);
  }
};
ColorGradientLocalizationService.ɵfac = function ColorGradientLocalizationService_Factory(t) {
  return new (t || ColorGradientLocalizationService)(ɵɵinject(L10N_PREFIX), ɵɵinject(MessageService, 8), ɵɵinject(RTL, 8), ɵɵinject(FlatColorPickerLocalizationService, 8));
};
ColorGradientLocalizationService.ɵprov = ɵɵdefineInjectable({
  token: ColorGradientLocalizationService,
  factory: ColorGradientLocalizationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGradientLocalizationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [L10N_PREFIX]
      }]
    }, {
      type: MessageService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [RTL]
      }]
    }, {
      type: FlatColorPickerLocalizationService,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [FlatColorPickerLocalizationService]
      }]
    }];
  }, null);
})();
var NumericLabelDirective = class {
  constructor(host) {
    this.host = host;
  }
  ngOnInit() {
    const localizationToken = `${this.kendoAdditionalNumericLabel}ChannelLabel`;
    this.host.numericInput.nativeElement.setAttribute("aria-label", this.localizationService.get(localizationToken));
  }
};
NumericLabelDirective.ɵfac = function NumericLabelDirective_Factory(t) {
  return new (t || NumericLabelDirective)(ɵɵdirectiveInject(NumericTextBoxComponent));
};
NumericLabelDirective.ɵdir = ɵɵdefineDirective({
  type: NumericLabelDirective,
  selectors: [["", "kendoAdditionalNumericLabel", ""]],
  inputs: {
    kendoAdditionalNumericLabel: "kendoAdditionalNumericLabel",
    localizationService: "localizationService"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoAdditionalNumericLabel]"
    }]
  }], function() {
    return [{
      type: NumericTextBoxComponent
    }];
  }, {
    kendoAdditionalNumericLabel: [{
      type: Input
    }],
    localizationService: [{
      type: Input
    }]
  });
})();
var ColorInputComponent = class {
  constructor(host, renderer, localizationService) {
    this.host = host;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.focusableId = `k-${guid()}`;
    this.tabindex = -1;
    this.opacity = true;
    this.disabled = false;
    this.readonly = false;
    this.valueChange = new EventEmitter();
    this.tabOut = new EventEmitter();
    this.colorInputClass = true;
    this.rgba = {};
    this.caretAltExpandIcon = caretAltExpandIcon;
    this.subscriptions = new import_rxjs2.Subscription();
  }
  /**
   * Indicates whether any of the inputs are focused.
   */
  get isFocused() {
    if (!(isDocumentAvailable() && isPresent3(this.host))) {
      return false;
    }
    const activeElement = document.activeElement;
    return this.host.nativeElement.contains(activeElement);
  }
  /**
   * Indicates whether any of the rgba inputs have value.
   */
  get rgbaInputValid() {
    return Object.keys(this.rgba).every((key) => isPresent3(this.rgba[key]));
  }
  ngAfterViewInit() {
    this.initDomEvents();
  }
  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    if (isPresent3(changes["value"]) && !this.isFocused) {
      this.hex = parseColor2(this.value, "hex", this.opacity);
      this.rgba = getRGBA(this.value);
      this.rgba.a = parseColor2(this.value, "rgba", this.opacity) ? this.rgba.a : 1;
    }
  }
  get formatButtonTitle() {
    return this.localizationService.get("formatButton");
  }
  handleRgbaValueChange() {
    const color = getColorFromRGBA(this.rgba);
    if (!this.rgbaInputValid || color === this.value) {
      return;
    }
    this.value = color;
    this.rgba = getRGBA(this.value);
    this.hex = parseColor2(color, "hex", this.opacity);
    this.valueChange.emit(color);
  }
  focusDragHandle(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.tabOut.emit();
  }
  handleHexValueChange(hex) {
    this.hex = hex;
    const color = parseColor2(hex, "rgba", this.opacity);
    if (!isPresent3(color) || color === this.value) {
      return;
    }
    this.value = color;
    this.rgba = getRGBA(color);
    this.valueChange.emit(color);
  }
  handleRgbaInputBlur() {
    if (!this.rgbaInputValid) {
      this.rgba = getRGBA(this.value);
    }
  }
  handleHexInputBlur() {
    this.hex = parseColor2(this.value, "hex", this.opacity);
  }
  focusLast() {
    this.lastInput().focus();
  }
  onTab() {
    if (this.opacity) {
      return;
    }
  }
  toggleFormatView() {
    this.formatView = this.formatView === "hex" ? "rgba" : "hex";
  }
  initDomEvents() {
    if (!this.host) {
      return;
    }
    this.subscriptions.add(this.renderer.listen(this.toggleFormatButton.nativeElement, "click", () => this.toggleFormatView()));
  }
  lastInput() {
    var _a2;
    return ((_a2 = this.hexInput) === null || _a2 === void 0 ? void 0 : _a2.nativeElement) || this.opacityInput || this.blueInput;
  }
};
ColorInputComponent.ɵfac = function ColorInputComponent_Factory(t) {
  return new (t || ColorInputComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
};
ColorInputComponent.ɵcmp = ɵɵdefineComponent({
  type: ColorInputComponent,
  selectors: [["kendo-colorinput"]],
  viewQuery: function ColorInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c24, 5);
      ɵɵviewQuery(_c25, 5);
      ɵɵviewQuery(_c26, 5);
      ɵɵviewQuery(_c27, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.opacityInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hexInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.blueInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toggleFormatButton = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function ColorInputComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-colorgradient-inputs", ctx.colorInputClass)("k-hstack", ctx.colorInputClass);
    }
  },
  inputs: {
    focusableId: "focusableId",
    formatView: "formatView",
    tabindex: "tabindex",
    value: "value",
    opacity: "opacity",
    disabled: "disabled",
    readonly: "readonly"
  },
  outputs: {
    valueChange: "valueChange",
    tabOut: "tabOut"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 5,
  vars: 7,
  consts: [["toggleFormatButton", ""], ["hexInput", ""], ["red", ""], ["green", ""], ["blue", ""], ["opacityInput", "", "alpha", ""], [1, "k-vstack"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "caret-alt-expand", 1, "k-colorgradient-toggle-mode", 3, "svgIcon", "disabled", "tabindex"], ["class", "k-vstack", 4, "ngIf"], [4, "ngIf"], [1, "k-input", "k-textbox", "k-input-solid", "k-input-md", "k-rounded-md", "k-hex-value", 3, "blur", "input", "keydown.tab", "id", "disabled", "readonly", "value", "tabindex"], [1, "k-colorgradient-input-label", 3, "for"], ["kendoAdditionalNumericLabel", "red", 3, "valueChange", "blur", "localizationService", "disabled", "readonly", "tabindex", "min", "max", "value", "autoCorrect", "spinners", "format", "decimals"], ["kendoAdditionalNumericLabel", "green", 3, "valueChange", "blur", "localizationService", "disabled", "readonly", "tabindex", "min", "max", "value", "autoCorrect", "spinners", "format", "decimals"], ["kendoAdditionalNumericLabel", "blue", 3, "valueChange", "blur", "keydown.tab", "localizationService", "disabled", "readonly", "tabindex", "min", "max", "value", "autoCorrect", "spinners", "format", "decimals"], ["kendoAdditionalNumericLabel", "alpha", 3, "valueChange", "blur", "keydown.tab", "localizationService", "disabled", "readonly", "tabindex", "min", "max", "value", "autoCorrect", "spinners", "step", "format", "decimals"]],
  template: function ColorInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 6);
      ɵɵelement(1, "button", 7, 0);
      ɵɵelementEnd();
      ɵɵtemplate(3, ColorInputComponent_div_3_Template, 5, 8, "div", 8)(4, ColorInputComponent_ng_container_4_Template, 17, 37, "ng-container", 9);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("svgIcon", ctx.caretAltExpandIcon)("disabled", ctx.disabled)("tabindex", ctx.tabindex.toString());
      ɵɵattribute("aria-label", ctx.formatButtonTitle)("title", ctx.formatButtonTitle);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.formatView === "hex");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.formatView === "rgba");
    }
  },
  dependencies: [NumericTextBoxComponent, NgIf, ButtonComponent, NumericLabelDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorInputComponent, [{
    type: Component,
    args: [{
      selector: "kendo-colorinput",
      template: `
        <div class="k-vstack">
            <button 
                kendoButton
                type="button"
                fillMode="flat"
                #toggleFormatButton
                icon="caret-alt-expand"
                [svgIcon]="caretAltExpandIcon"
                class="k-colorgradient-toggle-mode"
                [attr.aria-label]="formatButtonTitle"
                [attr.title]="formatButtonTitle"
                [disabled]="disabled"
                [tabindex]="tabindex.toString()"
            >
            </button>
        </div>
        <div *ngIf="formatView === 'hex'" class="k-vstack">
            <input
                #hexInput
                [id]="focusableId"
                class="k-input k-textbox k-input-solid k-input-md k-rounded-md k-hex-value"
                [class.k-readonly]="readonly"
                [disabled]="disabled"
                [readonly]="readonly"
                [value]="hex || ''"
                (blur)="handleHexInputBlur()"
                (input)="handleHexValueChange(hexInput.value)"
                [tabindex]="tabindex.toString()"
                (keydown.tab)="focusDragHandle($event)"
            />
            <label [for]="focusableId" class="k-colorgradient-input-label">HEX</label>
        </div>
        <ng-container *ngIf="formatView === 'rgba'">
            <div class="k-vstack">
                <kendo-numerictextbox
                    #red
                    kendoAdditionalNumericLabel="red"
                    [localizationService]="localizationService"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [tabindex]="tabindex"
                    [min]="0"
                    [max]="255"
                    [(value)]="rgba.r"
                    [autoCorrect]="true"
                    [spinners]="false"
                    [format]="'n'"
                    [decimals]="0"
                    (blur)="handleRgbaInputBlur()"
                    (valueChange)="handleRgbaValueChange()">
                </kendo-numerictextbox>
                <label [for]="red.focusableId" class="k-colorgradient-input-label">R</label>
            </div>
            <div class="k-vstack">
                <kendo-numerictextbox
                    #green
                    kendoAdditionalNumericLabel="green"
                    [localizationService]="localizationService"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [tabindex]="tabindex"
                    [min]="0"
                    [max]="255"
                    [(value)]="rgba.g"
                    [autoCorrect]="true"
                    [spinners]="false"
                    [format]="'n'"
                    [decimals]="0"
                    (blur)="handleRgbaInputBlur()"
                    (valueChange)="handleRgbaValueChange()">
                </kendo-numerictextbox>
                <label [for]="green.focusableId" class="k-colorgradient-input-label">G</label>
            </div>
            <div class="k-vstack">
                <kendo-numerictextbox
                    #blue
                    kendoAdditionalNumericLabel="blue"
                    [localizationService]="localizationService"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [tabindex]="tabindex"
                    [min]="0"
                    [max]="255"
                    [(value)]="rgba.b"
                    [autoCorrect]="true"
                    [spinners]="false"
                    [format]="'n'"
                    [decimals]="0"
                    (blur)="handleRgbaInputBlur()"
                    (valueChange)="handleRgbaValueChange()"
                    (keydown.tab)="onTab()">
                </kendo-numerictextbox>
                <label [for]="blue.focusableId" class="k-colorgradient-input-label">B</label>
            </div>
            <div class="k-vstack" *ngIf="opacity">
                <kendo-numerictextbox  #opacityInput
                    #alpha
                    kendoAdditionalNumericLabel="alpha"
                    [localizationService]="localizationService"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [tabindex]="tabindex"
                    [min]="0"
                    [max]="1"
                    [(value)]="rgba.a"
                    [autoCorrect]="true"
                    [spinners]="false"
                    [step]="0.01"
                    [format]="'n2'"
                    [decimals]="2"
                    (blur)="handleRgbaInputBlur()"
                    (valueChange)="handleRgbaValueChange()"
                    (keydown.tab)="focusDragHandle($event)">
                </kendo-numerictextbox>
                <label [for]="alpha.focusableId" class="k-colorgradient-input-label">A</label>
            </div>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    formatView: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    tabOut: [{
      type: Output
    }],
    colorInputClass: [{
      type: HostBinding,
      args: ["class.k-colorgradient-inputs"]
    }, {
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    opacityInput: [{
      type: ViewChild,
      args: ["opacityInput"]
    }],
    hexInput: [{
      type: ViewChild,
      args: ["hexInput"]
    }],
    blueInput: [{
      type: ViewChild,
      args: ["blue"]
    }],
    toggleFormatButton: [{
      type: ViewChild,
      args: ["toggleFormatButton", {
        static: false,
        read: ElementRef
      }]
    }]
  });
})();
var ContrastValidationComponent = class {
  constructor(localization) {
    this.localization = localization;
    this.checkIcon = checkIcon;
    this.xCircleIcon = xCircleIcon;
  }
  get passMessage() {
    return this.localization.get("passContrast");
  }
  get failMessage() {
    return this.localization.get("failContrast");
  }
  get contrastText() {
    const ratio = this.type === "AA" ? AA_RATIO : AAA_RATIO;
    return `${this.type}: ${ratio.toFixed(1)}`;
  }
};
ContrastValidationComponent.ɵfac = function ContrastValidationComponent_Factory(t) {
  return new (t || ContrastValidationComponent)(ɵɵdirectiveInject(LocalizationService));
};
ContrastValidationComponent.ɵcmp = ɵɵdefineComponent({
  type: ContrastValidationComponent,
  selectors: [["", "kendoContrastValidation", ""]],
  inputs: {
    type: "type",
    pass: "pass",
    value: "value"
  },
  attrs: _c28,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "k-contrast-validation k-text-success", 4, "ngIf"], ["class", "k-contrast-validation k-text-error", 4, "ngIf"], [1, "k-contrast-validation", "k-text-success"], ["name", "check", 3, "svgIcon"], [1, "k-contrast-validation", "k-text-error"], ["name", "x", 3, "svgIcon"]],
  template: function ContrastValidationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span");
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, ContrastValidationComponent_ng_container_2_Template, 3, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.contrastText);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.value);
    }
  },
  dependencies: [NgIf, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContrastValidationComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoContrastValidation]",
      template: `
        <span>{{contrastText}}</span>
        <ng-container *ngIf="value">
            <span class="k-contrast-validation k-text-success" *ngIf="pass">
                {{passMessage}}
                <kendo-icon-wrapper name="check" [svgIcon]="checkIcon"></kendo-icon-wrapper>
            </span>
            <span class="k-contrast-validation k-text-error" *ngIf="!pass">
                {{failMessage}}
                <kendo-icon-wrapper name="x" [svgIcon]="xCircleIcon"></kendo-icon-wrapper>
            </span>
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    type: [{
      type: Input
    }],
    pass: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var ContrastComponent = class {
  constructor(localization) {
    this.localization = localization;
    this.checkIcon = checkIcon;
    this.xCircleIcon = xCircleIcon;
  }
  get formatedRatio() {
    return this.contrastRatio.toFixed(2);
  }
  get contrastRatioText() {
    return `${this.localization.get("contrastRatio")}: ${this.value ? this.formatedRatio : "n/a"}`;
  }
  get satisfiesAACondition() {
    return this.contrastRatio >= AA_RATIO;
  }
  get satisfiesAAACondition() {
    return this.contrastRatio >= AAA_RATIO;
  }
  get contrastRatio() {
    const contrast = getContrastFromTwoRGBAs(getRGBA(this.value), getRGBA(this.ratio));
    return contrast;
  }
};
ContrastComponent.ɵfac = function ContrastComponent_Factory(t) {
  return new (t || ContrastComponent)(ɵɵdirectiveInject(LocalizationService));
};
ContrastComponent.ɵcmp = ɵɵdefineComponent({
  type: ContrastComponent,
  selectors: [["", "kendoContrastTool", ""]],
  inputs: {
    value: "value",
    ratio: "ratio"
  },
  attrs: _c29,
  decls: 6,
  vars: 6,
  consts: [[1, "k-contrast-ratio"], [1, "k-contrast-ratio-text"], [4, "ngIf"], ["kendoContrastValidation", "", "type", "AA", 3, "value", "pass"], ["kendoContrastValidation", "", "type", "AAA", 3, "value", "pass"], ["class", "k-contrast-validation k-text-success", 4, "ngIf"], ["class", "k-contrast-validation k-text-error", 4, "ngIf"], [1, "k-contrast-validation", "k-text-success"], ["name", "check", 3, "svgIcon"], ["name", "check", 3, "svgIcon", 4, "ngIf"], [1, "k-contrast-validation", "k-text-error"], ["name", "x", 3, "svgIcon"]],
  template: function ContrastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "span", 1);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, ContrastComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵelement(4, "div", 3)(5, "div", 4);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.contrastRatioText);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.value);
      ɵɵadvance();
      ɵɵproperty("value", ctx.value)("pass", ctx.satisfiesAACondition);
      ɵɵadvance();
      ɵɵproperty("value", ctx.value)("pass", ctx.satisfiesAAACondition);
    }
  },
  dependencies: [NgIf, IconWrapperComponent, ContrastValidationComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContrastComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoContrastTool]",
      template: `
        <div class="k-contrast-ratio">
            <span class="k-contrast-ratio-text">{{contrastRatioText}}</span>
            <ng-container *ngIf="value">
                <span class="k-contrast-validation k-text-success" *ngIf="satisfiesAACondition">
                    <kendo-icon-wrapper name="check" [svgIcon]="checkIcon"></kendo-icon-wrapper>
                    <kendo-icon-wrapper *ngIf="satisfiesAAACondition" name="check" [svgIcon]="checkIcon"></kendo-icon-wrapper>
                </span>
                <span class="k-contrast-validation k-text-error" *ngIf="!satisfiesAACondition">
                    <kendo-icon-wrapper name="x" [svgIcon]="xCircleIcon"></kendo-icon-wrapper>
                </span>
            </ng-container>
        </div>
        <div kendoContrastValidation
            type="AA"
            [value]="value"
            [pass]="satisfiesAACondition">
        </div>
        <div kendoContrastValidation
            type="AAA"
            [value]="value"
            [pass]="satisfiesAAACondition">
        </div>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    value: [{
      type: Input
    }],
    ratio: [{
      type: Input
    }]
  });
})();
var ColorContrastSvgComponent = class {
  constructor() {
    this.hostClass = true;
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.metrics = this.wrapper.getBoundingClientRect();
    this.oldA = this.hsva.value.a;
    this.oldH = this.hsva.value.h;
    this.hsva.subscribe((value) => {
      if (value.h !== this.oldH || value.a !== this.oldA) {
        this.oldH = value.h;
        this.oldA = value.a;
        this.setPaths();
      }
    });
  }
  ngOnChanges(changes) {
    if (isPresent3(changes["backgroundColor"]) && this.metrics) {
      this.setPaths();
    }
  }
  setPaths() {
    const bezierCommandCalc = bezierCommand(controlPoint(line));
    this.paths = [svgPath(this.getPaths(AA_RATIO, STEP_COUNT), bezierCommandCalc), svgPath(this.getPaths(AA_RATIO, STEP_COUNT, true), bezierCommandCalc), svgPath(this.getPaths(AAA_RATIO, STEP_COUNT), bezierCommandCalc), svgPath(this.getPaths(AAA_RATIO, STEP_COUNT, true), bezierCommandCalc)];
  }
  findValue(contrast, saturation, low, high, comparer) {
    const mid = (low + high) / 2;
    const hsva = Object.assign({}, this.hsva.value, {
      s: saturation / this.metrics.width,
      v: 1 - mid / this.metrics.height
    });
    const currentContrast = getContrastFromTwoRGBAs(getRGBA(getColorFromHSV(hsva)), getRGBA(this.backgroundColor || ""));
    if (low + 0.5 > high) {
      if (currentContrast < contrast + 1 && currentContrast > contrast - 1) {
        return mid;
      } else {
        return null;
      }
    }
    if (comparer(currentContrast, contrast)) {
      return this.findValue(contrast, saturation, low, high - (high - low) / 2, comparer);
    }
    return this.findValue(contrast, saturation, low + (high - low) / 2, high, comparer);
  }
  getPaths(contrast, stepCount, reversed = false) {
    const points = [];
    for (let i = 0; i <= this.metrics.width; i += this.metrics.width / stepCount) {
      const value = this.findValue(contrast, i, 0, this.metrics.height, reversed ? (a, b) => a < b : (a, b) => a > b);
      if (value !== null) {
        points.push([i, value]);
      }
    }
    return points;
  }
};
ColorContrastSvgComponent.ɵfac = function ColorContrastSvgComponent_Factory(t) {
  return new (t || ColorContrastSvgComponent)();
};
ColorContrastSvgComponent.ɵcmp = ɵɵdefineComponent({
  type: ColorContrastSvgComponent,
  selectors: [["", "kendoColorContrastSvg", ""]],
  hostVars: 2,
  hostBindings: function ColorContrastSvgComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-color-contrast-svg", ctx.hostClass);
    }
  },
  inputs: {
    wrapper: "wrapper",
    hsva: "hsva",
    backgroundColor: "backgroundColor"
  },
  features: [ɵɵNgOnChangesFeature],
  attrs: _c30,
  decls: 1,
  vars: 1,
  consts: [["fill", "none", "stroke", "white", "stroke-width", "1", 4, "ngFor", "ngForOf"], ["fill", "none", "stroke", "white", "stroke-width", "1"]],
  template: function ColorContrastSvgComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ColorContrastSvgComponent__svg_path_0_Template, 1, 1, "path", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.paths);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorContrastSvgComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoColorContrastSvg]",
      template: `
        <svg:path *ngFor="let path of paths" [attr.d]="path" fill="none" stroke="white" stroke-width="1"></svg:path>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-color-contrast-svg"]
    }],
    wrapper: [{
      type: Input
    }],
    hsva: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }]
  });
})();
var serial$2 = 0;
var ColorGradientComponent = class {
  constructor(host, ngZone, renderer, cdr, localizationService, injector) {
    this.host = host;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.cdr = cdr;
    this.localizationService = localizationService;
    this.injector = injector;
    this.hostClasses = true;
    this.ariaRole = "textbox";
    this.id = `k-colorgradient-${serial$2++}`;
    this.opacity = true;
    this.disabled = false;
    this.readonly = false;
    this.clearButton = false;
    this.delay = 0;
    this.format = DEFAULT_OUTPUT_FORMAT;
    this.valueChange = new EventEmitter();
    this.backgroundColor = DEFAULT_GRADIENT_BACKGROUND_COLOR;
    this.hsva = new import_rxjs2.BehaviorSubject({});
    this.gradientSliderStep = DRAGHANDLE_MOVE_SPEED;
    this.gradientSliderSmallStep = DRAGHANDLE_MOVE_SPEED_SMALL_STEP;
    this.internalNavigation = false;
    this.dropletSlashIcon = dropletSlashIcon;
    this._tabindex = 0;
    this.listeners = [];
    this.hueSliderTouched = false;
    this.alphaSliderTouched = false;
    this.updateValues = new import_rxjs2.Subject();
    this.hsvHandleCoordinates = {
      x: 0,
      y: 0
    };
    this.notifyNgChanged = () => {
    };
    this.notifyNgTouched = () => {
    };
    validatePackage(packageMetadata2);
    this.dynamicRTLSubscription = localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  get readonlyAttribute() {
    return this.readonly;
  }
  get disabledClass() {
    return this.disabled;
  }
  get gradientId() {
    return this.id;
  }
  get hostTabindex() {
    var _a2;
    return ((_a2 = this.tabindex) === null || _a2 === void 0 ? void 0 : _a2.toString()) || "0";
  }
  get isControlInvalid() {
    var _a2, _b;
    return (_b = (_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.invalid) === null || _b === void 0 ? void 0 : _b.toString();
  }
  get isDisabled() {
    var _a2;
    return ((_a2 = this.disabled) === null || _a2 === void 0 ? void 0 : _a2.toString()) || void 0;
  }
  /**
   * @hidden
   */
  enterHandler(event) {
    if (event.target !== this.host.nativeElement) {
      return;
    }
    this.internalNavigation = true;
    this.gradientDragHandle.nativeElement.focus();
  }
  /**
   * @hidden
   */
  escapeHandler(event) {
    if (!this.host.nativeElement.matches(":focus")) {
      event.stopImmediatePropagation();
    }
    this.internalNavigation = false;
    this.host.nativeElement.focus();
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    this.internalNavigation = ev.target !== this.host.nativeElement;
  }
  /**
   * Specifies the value of the initially selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format, this.opacity);
  }
  get value() {
    return this._value;
  }
  /**
   * Enables the color contrast tool. Accepts the background color that will be compared to the selected value.
   * The tool will calculate the contrast ratio between the two colors.
   */
  set contrastTool(value) {
    this._contrastTool = parseColor2(value, this.format, this.opacity);
  }
  get contrastTool() {
    return this._contrastTool;
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    if (isPresent3(value)) {
      const tabindex = Number(value);
      this._tabindex = !isNaN(tabindex) ? tabindex : 0;
    } else {
      this._tabindex = value;
    }
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Indicates whether the ColorGradient or any of its content is focused.
   */
  get isFocused() {
    if (!(isDocumentAvailable() && isPresent3(this.host))) {
      return false;
    }
    return this.host.nativeElement === document.activeElement || this.host.nativeElement.contains(document.activeElement);
  }
  /**
   * @hidden
   */
  get alphaSliderValue() {
    if (!(isPresent3(this.hsva.value) && isPresent3(this.hsva.value.a))) {
      return;
    }
    return this.hsva.value.a * 100;
  }
  get gradientRect() {
    return this.gradientWrapper.nativeElement.getBoundingClientRect();
  }
  /**
   * @hidden
   */
  get hsvSliderValueText() {
    return `X: ${this.hsvHandleCoordinates.x} Y: ${this.hsvHandleCoordinates.y}`;
  }
  /**
   * @hidden
   */
  get contrastToolVisible() {
    return this.contrastTool && this.contrastTool.length > 0;
  }
  /**
   * @hidden
   */
  get innerTabIndex() {
    return this.internalNavigation ? 0 : -1;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
  }
  ngAfterViewInit() {
    this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
      this.updateUI();
      this.cdr.detectChanges();
    });
    this.addEventListeners();
    this.subscribeChanges();
  }
  ngOnChanges(changes) {
    if (isChanged("value", changes) && !this.isFocused) {
      this.updateUI();
    }
    if (isChanged("delay", changes)) {
      this.unsubscribeChanges();
      this.subscribeChanges();
    }
  }
  ngOnDestroy() {
    this.listeners.forEach((removeListener) => removeListener());
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.unsubscribeChanges();
  }
  /**
   * Focuses the component.
   */
  focus() {
    if (this.disabled) {
      return;
    }
    this.gradientDragHandle.nativeElement.focus();
  }
  /**
   * @hidden
   */
  reset() {
    this.handleValueChange(void 0);
    this.updateUI();
  }
  /**
   * @hidden
   */
  handleDragPress(args) {
    if (this.disabled || this.readonly || !isPresent3(args.originalEvent)) {
      return;
    }
    this.focus();
    args.originalEvent.preventDefault();
  }
  /**
   * @hidden
   */
  onHandleDrag(args) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.renderer.addClass(this.gradientWrapper.nativeElement, "k-dragging");
    this.changePosition(args);
  }
  /**
   * @hidden
   */
  onHandleRelease() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.renderer.removeClass(this.gradientWrapper.nativeElement, "k-dragging");
    this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity));
  }
  /**
   * @hidden
   */
  onKeyboardAction(args) {
    if (this.disabled || this.readonly) {
      return;
    }
    if (args.key && args.key.indexOf("Arrow") !== -1) {
      args.preventDefault();
      const dragHandleElement = this.gradientDragHandle.nativeElement;
      this.renderer.addClass(this.gradientWrapper.nativeElement, "k-dragging");
      let keyboardMoveX = 0;
      let keyboardMoveY = 0;
      const shiftKey = args.shiftKey;
      switch (args.key) {
        case "ArrowRight":
          keyboardMoveX = shiftKey ? this.gradientSliderSmallStep : this.gradientSliderStep;
          break;
        case "ArrowLeft":
          keyboardMoveX = shiftKey ? -this.gradientSliderSmallStep : -this.gradientSliderStep;
          break;
        case "ArrowUp":
          keyboardMoveY = shiftKey ? -this.gradientSliderSmallStep : -this.gradientSliderStep;
          break;
        case "ArrowDown":
          keyboardMoveY = shiftKey ? this.gradientSliderSmallStep : this.gradientSliderStep;
          break;
        default:
          break;
      }
      const newY = parseInt(dragHandleElement.style.top, 10) + keyboardMoveY;
      const newX = parseInt(dragHandleElement.style.left, 10) + keyboardMoveX;
      this.renderer.setStyle(dragHandleElement, "top", `${newY}px`);
      this.renderer.setStyle(dragHandleElement, "left", `${newX}px`);
      this.ngZone.run(() => this.moveDragHandle(newX, newY));
    }
  }
  /**
   * @hidden
   */
  changePosition(position) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.gradientDragHandle.nativeElement.focus();
    const gradientRect = this.gradientRect;
    const newX = position.clientX - gradientRect.left;
    const newY = position.clientY - gradientRect.top;
    this.ngZone.run(() => this.moveDragHandle(newX, newY));
  }
  /**
   * @hidden
   */
  handleHueSliderChange(hue) {
    const hsva = this.hsva.value;
    hsva.h = hue;
    this.hsva.next(hsva);
    this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity));
    this.backgroundColor = getColorFromHue(hue);
    this.setBackgroundColor(this.backgroundColor);
    this.setAlphaSliderBackground(this.backgroundColor);
    this.hueSliderTouched = true;
  }
  /**
   * @hidden
   */
  handleAlphaSliderChange(alpha) {
    const hsva = this.hsva.value;
    hsva.a = alpha / 100;
    this.hsva.next(hsva);
    this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity));
    this.alphaSliderTouched = true;
  }
  /**
   * @hidden
   */
  handleInputsValueChange(color) {
    const parsed = parseColor2(color, this.format, this.opacity);
    if (this.value !== parsed) {
      this.handleValueChange(parsed);
      this.updateUI();
    }
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    if (isPresent3(this.gradientWrapper)) {
      this.updateUI();
    }
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  get colorGradientHandleTitle() {
    return this.localizationService.get("colorGradientHandle");
  }
  /**
   * @hidden
   */
  get colorGradientHandleAriaLabel() {
    const parsed = parseColor2(this.value, this.format, this.opacity);
    return `${this.value ? parsed : this.localizationService.get("colorGradientNoColor")}`;
  }
  /**
   * @hidden
   */
  get hueSliderTitle() {
    return this.localizationService.get("hueSliderHandle");
  }
  /**
   * @hidden
   */
  get opacitySliderTitle() {
    return this.localizationService.get("opacitySliderHandle");
  }
  /**
   * @hidden
   */
  get clearButtonTitle() {
    return this.localizationService.get("clearButton");
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  moveDragHandle(positionX, positionY) {
    const gradientRect = this.gradientRect;
    const gradientRectWidth = gradientRect.width;
    const gradientRectHeight = gradientRect.height;
    const top = fitIntoBounds(positionY, 0, gradientRectHeight);
    const left = fitIntoBounds(positionX, 0, gradientRectWidth);
    this.setDragHandleElementPosition(top, left);
    const hsva = this.hsva.value;
    hsva.s = left / gradientRectWidth;
    hsva.v = 1 - top / gradientRectHeight;
    this.hsva.next(hsva);
    this.updateValues.next(getColorFromHSV(this.hsva.value, this.format, this.opacity));
    this.setAlphaSliderBackground(getColorFromHSV(Object.assign(Object.assign({}, this.hsva.value), {
      a: 1
    }), this.format, this.opacity));
  }
  handleValueChange(color) {
    if (this.value === color) {
      return;
    }
    this.value = color;
    this.valueChange.emit(color);
    this.notifyNgChanged(color);
    this.setHostElementAriaLabel();
  }
  setDragHandleElementPosition(top, left) {
    const dragHandle = this.gradientDragHandle.nativeElement;
    this.hsvHandleCoordinates = {
      x: left,
      y: top
    };
    this.renderer.setStyle(dragHandle, "top", `${top}px`);
    this.renderer.setStyle(dragHandle, "left", `${left}px`);
  }
  setAlphaSliderBackground(backgroundColor) {
    if (!isPresent3(this.alphaSlider)) {
      return;
    }
    const sliderTrack = this.alphaSlider.track.nativeElement;
    this.renderer.setStyle(sliderTrack, "background", `linear-gradient(to top, transparent, ${backgroundColor})`);
  }
  setHostElementAriaLabel() {
    const parsed = parseColor2(this.value, this.format, this.opacity);
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", `${this.value ? parsed : this.localizationService.get("colorGradientNoColor")}`);
  }
  setBackgroundColor(color) {
    this.renderer.setStyle(this.hsvRectangle.nativeElement, "background", color);
  }
  updateUI() {
    if (!isDocumentAvailable()) {
      return;
    }
    if (this.hueSliderTouched || this.alphaSliderTouched) {
      this.hueSliderTouched = false;
      this.alphaSliderTouched = false;
      return;
    }
    this.hsva.next(this.value ? getHSV(this.value) : {
      h: 0,
      s: 0,
      v: 1,
      a: 1
    });
    const gradientRect = this.gradientRect;
    const top = (1 - this.hsva.value.v) * gradientRect.height;
    const left = this.hsva.value.s * gradientRect.width;
    this.setDragHandleElementPosition(top, left);
    this.backgroundColor = getColorFromHue(this.hsva.value.h);
    this.setBackgroundColor(this.backgroundColor);
    this.setAlphaSliderBackground(this.backgroundColor);
    this.setHostElementAriaLabel();
  }
  addEventListeners() {
    this.ngZone.runOutsideAngular(() => {
      const focusOutListener = this.renderer.listen(this.host.nativeElement, "focusout", (event) => {
        if (!containsFocus(this.host.nativeElement, event.relatedTarget) && isUntouched(this.host)) {
          this.ngZone.run(() => this.notifyNgTouched());
        }
      });
      const keydownListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "keydown", (event) => {
        this.onKeyboardAction(event);
      });
      const keyupListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "keyup", () => {
        this.renderer.removeClass(this.gradientWrapper.nativeElement, "k-dragging");
        if (!this.readonly && !this.disabled) {
          this.ngZone.run(() => this.handleValueChange(getColorFromHSV(this.hsva.value, this.format, this.opacity)));
        }
      });
      const dragHandleFocusInListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "focusin", () => {
        this.renderer.addClass(this.gradientDragHandle.nativeElement, "k-focus");
      });
      const dragHandleFocusOutListener = this.renderer.listen(this.gradientDragHandle.nativeElement, "focusout", () => {
        this.renderer.removeClass(this.gradientDragHandle.nativeElement, "k-focus");
      });
      this.listeners.push(focusOutListener, keydownListener, keyupListener, dragHandleFocusInListener, dragHandleFocusOutListener);
    });
  }
  subscribeChanges() {
    this.changeRequestsSubscription = this.updateValues.pipe((0, import_operators2.throttleTime)(this.delay)).subscribe((value) => {
      this.handleValueChange(value);
    });
  }
  unsubscribeChanges() {
    if (this.changeRequestsSubscription) {
      this.changeRequestsSubscription.unsubscribe();
    }
  }
};
ColorGradientComponent.ɵfac = function ColorGradientComponent_Factory(t) {
  return new (t || ColorGradientComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Injector));
};
ColorGradientComponent.ɵcmp = ɵɵdefineComponent({
  type: ColorGradientComponent,
  selectors: [["kendo-colorgradient"]],
  viewQuery: function ColorGradientComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c31, 5);
      ɵɵviewQuery(_c322, 5);
      ɵɵviewQuery(_c33, 5);
      ɵɵviewQuery(_c34, 5);
      ɵɵviewQuery(_c35, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradientDragHandle = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputs = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.alphaSlider = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradientWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hsvRectangle = _t.first);
    }
  },
  hostVars: 13,
  hostBindings: function ColorGradientComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.enter", function ColorGradientComponent_keydown_enter_HostBindingHandler($event) {
        return ctx.enterHandler($event);
      })("keydown.escape", function ColorGradientComponent_keydown_escape_HostBindingHandler($event) {
        return ctx.escapeHandler($event);
      })("focusin", function ColorGradientComponent_focusin_HostBindingHandler($event) {
        return ctx.focusHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-readonly", ctx.readonlyAttribute)("id", ctx.gradientId)("dir", ctx.direction)("tabindex", ctx.hostTabindex)("role", ctx.ariaRole)("aria-invalid", ctx.isControlInvalid)("aria-disabled", ctx.isDisabled);
      ɵɵclassProp("k-colorgradient", ctx.hostClasses)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
    }
  },
  inputs: {
    id: "id",
    opacity: "opacity",
    disabled: "disabled",
    readonly: "readonly",
    clearButton: "clearButton",
    delay: "delay",
    value: "value",
    contrastTool: "contrastTool",
    tabindex: "tabindex",
    format: "format",
    gradientSliderStep: "gradientSliderStep",
    gradientSliderSmallStep: "gradientSliderSmallStep"
  },
  outputs: {
    valueChange: "valueChange"
  },
  exportAs: ["kendoColorGradient"],
  features: [ɵɵProvidersFeature([{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorGradientComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => ColorGradientComponent)
  }, ColorGradientLocalizationService, {
    provide: LocalizationService,
    useExisting: ColorGradientLocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.colorgradient"
  }]), ɵɵNgOnChangesFeature],
  decls: 16,
  vars: 37,
  consts: () => {
    let i18n_11;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_11 = goog.getMsg("Colorgradient no color chosen");
      i18n_11 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_11;
    } else {
      i18n_11 = $localize`:kendo.colorgradient.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty.:Colorgradient no color chosen`;
    }
    let i18n_12;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_12 = goog.getMsg("Choose color");
      i18n_12 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_12;
    } else {
      i18n_12 = $localize`:kendo.colorgradient.colorGradientHandle|The title for the gradient color drag handle chooser.:Choose color`;
    }
    let i18n_13;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_13 = goog.getMsg("Clear value");
      i18n_13 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_13;
    } else {
      i18n_13 = $localize`:kendo.colorgradient.clearButton|The title for the clear button.:Clear value`;
    }
    let i18n_14;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_14 = goog.getMsg("Set hue");
      i18n_14 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_14;
    } else {
      i18n_14 = $localize`:kendo.colorgradient.hueSliderHandle|The title for the hue slider handle.:Set hue`;
    }
    let i18n_15;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_15 = goog.getMsg("Set opacity");
      i18n_15 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_15;
    } else {
      i18n_15 = $localize`:kendo.colorgradient.opacitySliderHandle|The title for the opacity slider handle.:Set opacity`;
    }
    let i18n_16;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_16 = goog.getMsg("Pass");
      i18n_16 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_16;
    } else {
      i18n_16 = $localize`:kendo.colorgradient.passContrast|The pass message for the contrast tool.:Pass`;
    }
    let i18n_17;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_17 = goog.getMsg("Fail");
      i18n_17 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_17;
    } else {
      i18n_17 = $localize`:kendo.colorgradient.failContrast|The fail message for the contrast tool.:Fail`;
    }
    let i18n_18;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_18 = goog.getMsg("Contrast ratio");
      i18n_18 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_18;
    } else {
      i18n_18 = $localize`:kendo.colorgradient.contrastRatio|The contrast ratio message for the contrast tool.:Contrast ratio`;
    }
    let i18n_19;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_19 = goog.getMsg("Change color format");
      i18n_19 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_19;
    } else {
      i18n_19 = $localize`:kendo.colorgradient.formatButton|The message for the input format toggle button.:Change color format`;
    }
    let i18n_20;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_20 = goog.getMsg("Red channel");
      i18n_20 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_20;
    } else {
      i18n_20 = $localize`:kendo.colorgradient.redChannelLabel|The label of the NumericTextBox representing the red color channel.:Red channel`;
    }
    let i18n_21;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_21 = goog.getMsg("Green channel");
      i18n_21 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_21;
    } else {
      i18n_21 = $localize`:kendo.colorgradient.greenChannelLabel|The label of the NumericTextBox representing the green color channel.:Green channel`;
    }
    let i18n_22;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_22 = goog.getMsg("Blue channel");
      i18n_22 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_22;
    } else {
      i18n_22 = $localize`:kendo.colorgradient.blueChannelLabel|The label of the NumericTextBox representing the blue color channel.:Blue channel`;
    }
    let i18n_23;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_23 = goog.getMsg("Alpha channel");
      i18n_23 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_23;
    } else {
      i18n_23 = $localize`:kendo.colorgradient.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel.:Alpha channel`;
    }
    let i18n_24;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_24 = goog.getMsg("R");
      i18n_24 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_24;
    } else {
      i18n_24 = $localize`:kendo.colorgradient.redChannelLabel|The label of the NumericTextBox representing the red color channel.:R`;
    }
    let i18n_25;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_25 = goog.getMsg("G");
      i18n_25 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_25;
    } else {
      i18n_25 = $localize`:kendo.colorgradient.greenInputPlaceholder|The placeholder for the green color input.:G`;
    }
    let i18n_26;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_26 = goog.getMsg("B");
      i18n_26 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_26;
    } else {
      i18n_26 = $localize`:kendo.colorgradient.blueInputPlaceholder|The placeholder for the blue color input.:B`;
    }
    let i18n_27;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_27 = goog.getMsg("HEX");
      i18n_27 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_27;
    } else {
      i18n_27 = $localize`:kendo.colorgradient.hexInputPlaceholder|The placeholder for the HEX color input.:HEX`;
    }
    return [["hsvRectangle", ""], ["gradientWrapper", ""], ["gradientDragHandle", ""], ["inputs", ""], ["alphaSlider", ""], ["kendoColorGradientLocalizedMessages", "", "colorGradientNoColor", i18n_11, "colorGradientHandle", i18n_12, "clearButton", i18n_13, "hueSliderHandle", i18n_14, "opacitySliderHandle", i18n_15, "passContrast", i18n_16, "failContrast", i18n_17, "contrastRatio", i18n_18, "formatButton", i18n_19, "redChannelLabel", i18n_20, "greenChannelLabel", i18n_21, "blueChannelLabel", i18n_22, "alphaChannelLabel", i18n_23, "redChannelLabel", i18n_24, "greenInputPlaceholder", i18n_25, "blueInputPlaceholder", i18n_26, "hexInputPlaceholder", i18n_27], [1, "k-colorgradient-canvas", "k-hstack"], [1, "k-hsv-rectangle"], ["kendoDraggable", "", 1, "k-hsv-gradient", 3, "click", "kendoPress", "kendoDrag", "kendoRelease"], ["role", "slider", 1, "k-hsv-draghandle", "k-draghandle", 3, "keydown.shift.tab", "tabindex"], ["kendoColorContrastSvg", "", "class", "k-color-contrast-svg", "xmlns", "http://www.w3.org/2000/svg", 3, "wrapper", "hsva", "backgroundColor", "style", 4, "ngIf"], ["kendoButton", "", "class", "k-clear-color", "fillMode", "flat", "icon", "droplet-slash", 3, "svgIcon", "tabindex", "style", "click", "keydown.enter", "keydown.space", 4, "ngIf"], ["tickPlacement", "none", 1, "k-hue-slider", "k-colorgradient-slider", 3, "valueChange", "ngClass", "dragHandleTitle", "tabindex", "disabled", "readonly", "showButtons", "vertical", "min", "max", "value", "smallStep", "largeStep"], ["class", "k-alpha-slider k-colorgradient-slider", "tickPlacement", "none", 3, "tabindex", "ngClass", "height", "dragHandleTitle", "disabled", "readonly", "showButtons", "vertical", "min", "max", "smallStep", "largeStep", "value", "valueChange", 4, "ngIf"], [3, "valueChange", "tabOut", "tabindex", "opacity", "formatView", "value", "disabled", "readonly"], ["class", "k-colorgradient-color-contrast k-vbox", "kendoContrastTool", "", 3, "value", "ratio", 4, "ngIf"], ["kendoColorContrastSvg", "", "xmlns", "http://www.w3.org/2000/svg", 1, "k-color-contrast-svg", 3, "wrapper", "hsva", "backgroundColor"], ["kendoButton", "", "fillMode", "flat", "icon", "droplet-slash", 1, "k-clear-color", 3, "click", "keydown.enter", "keydown.space", "svgIcon", "tabindex"], ["tickPlacement", "none", 1, "k-alpha-slider", "k-colorgradient-slider", 3, "valueChange", "tabindex", "ngClass", "dragHandleTitle", "disabled", "readonly", "showButtons", "vertical", "min", "max", "smallStep", "largeStep", "value"], ["kendoContrastTool", "", 1, "k-colorgradient-color-contrast", "k-vbox", 3, "value", "ratio"]];
  },
  template: function ColorGradientComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainer(0, 5);
      ɵɵelementStart(1, "div", 6)(2, "div", 7, 0)(4, "div", 8, 1);
      ɵɵlistener("click", function ColorGradientComponent_Template_div_click_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.changePosition($event));
      })("kendoPress", function ColorGradientComponent_Template_div_kendoPress_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleDragPress($event));
      })("kendoDrag", function ColorGradientComponent_Template_div_kendoDrag_4_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onHandleDrag($event));
      })("kendoRelease", function ColorGradientComponent_Template_div_kendoRelease_4_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onHandleRelease());
      });
      ɵɵelementStart(6, "div", 9, 2);
      ɵɵlistener("keydown.shift.tab", function ColorGradientComponent_Template_div_keydown_shift_tab_6_listener($event) {
        ɵɵrestoreView(_r1);
        const inputs_r2 = ɵɵreference(14);
        $event.preventDefault();
        return ɵɵresetView(inputs_r2.focusLast());
      });
      ɵɵelementEnd()();
      ɵɵtemplate(8, ColorGradientComponent__svg_svg_8_Template, 1, 5, "svg", 10);
      ɵɵelementEnd();
      ɵɵelementStart(9, "div");
      ɵɵtemplate(10, ColorGradientComponent_button_10_Template, 1, 6, "button", 11);
      ɵɵelementStart(11, "kendo-slider", 12);
      ɵɵlistener("valueChange", function ColorGradientComponent_Template_kendo_slider_valueChange_11_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleHueSliderChange($event));
      });
      ɵɵelementEnd();
      ɵɵtemplate(12, ColorGradientComponent_kendo_slider_12_Template, 2, 16, "kendo-slider", 13);
      ɵɵelementEnd()();
      ɵɵelementStart(13, "kendo-colorinput", 14, 3);
      ɵɵlistener("valueChange", function ColorGradientComponent_Template_kendo_colorinput_valueChange_13_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInputsValueChange($event));
      })("tabOut", function ColorGradientComponent_Template_kendo_colorinput_tabOut_13_listener() {
        ɵɵrestoreView(_r1);
        const gradientDragHandle_r7 = ɵɵreference(7);
        return ɵɵresetView(gradientDragHandle_r7.focus());
      });
      ɵɵelementEnd();
      ɵɵtemplate(15, ColorGradientComponent_div_15_Template, 1, 2, "div", 15);
    }
    if (rf & 2) {
      const gradientWrapper_r4 = ɵɵreference(5);
      ɵɵadvance(6);
      ɵɵproperty("tabindex", ctx.innerTabIndex.toString());
      ɵɵattribute("title", ctx.colorGradientHandleTitle)("aria-label", ctx.colorGradientHandleTitle + " " + ctx.colorGradientHandleAriaLabel)("aria-valuetext", ctx.hsvSliderValueText)("aria-readonly", ctx.readonly ? ctx.readonly : void 0)("aria-disabled", ctx.disabled ? ctx.disabled : void 0)("aria-orientation", "undefined")("aria-valuenow", "0");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.contrastToolVisible && gradientWrapper_r4);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("k-hsv-controls k-hstack ", ctx.clearButton ? "k-sliders-wrap-clearable" : "", "");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.clearButton);
      ɵɵadvance();
      ɵɵstyleProp("height", ctx.clearButton ? "140" : null, "px");
      ɵɵproperty("ngClass", ɵɵpureFunction1(35, _c36, ctx.clearButton))("dragHandleTitle", ctx.hueSliderTitle)("tabindex", ctx.innerTabIndex)("disabled", ctx.disabled)("readonly", ctx.readonly)("showButtons", false)("vertical", true)("min", 0)("max", 360)("value", ctx.hsva.value.h)("smallStep", 5)("largeStep", 10);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.opacity);
      ɵɵadvance();
      ɵɵproperty("tabindex", ctx.innerTabIndex)("opacity", ctx.opacity)("formatView", ctx.format)("value", ctx.value)("disabled", ctx.disabled)("readonly", ctx.readonly);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.contrastToolVisible);
    }
  },
  dependencies: [SliderComponent, NgClass, NgIf, DraggableDirective, ButtonComponent, LocalizedColorPickerMessagesDirective, ColorInputComponent, ContrastComponent, ColorContrastSvgComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorGradientComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoColorGradient",
      selector: "kendo-colorgradient",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorGradientComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ColorGradientComponent)
      }, ColorGradientLocalizationService, {
        provide: LocalizationService,
        useExisting: ColorGradientLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.colorgradient"
      }],
      template: `
        <ng-container kendoColorGradientLocalizedMessages
            i18n-colorGradientNoColor="kendo.colorgradient.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty."
            colorGradientNoColor="Colorgradient no color chosen"
            i18n-colorGradientHandle="kendo.colorgradient.colorGradientHandle|The title for the gradient color drag handle chooser."
            colorGradientHandle="Choose color"
            i18n-clearButton="kendo.colorgradient.clearButton|The title for the clear button."
            clearButton="Clear value"
            i18n-hueSliderHandle="kendo.colorgradient.hueSliderHandle|The title for the hue slider handle."
            hueSliderHandle="Set hue"
            i18n-opacitySliderHandle="kendo.colorgradient.opacitySliderHandle|The title for the opacity slider handle."
            opacitySliderHandle="Set opacity"
            i18n-passContrast="kendo.colorgradient.passContrast|The pass message for the contrast tool."
            passContrast="Pass"
            i18n-failContrast="kendo.colorgradient.failContrast|The fail message for the contrast tool."
            failContrast="Fail"
            i18n-contrastRatio="kendo.colorgradient.contrastRatio|The contrast ratio message for the contrast tool."
            contrastRatio="Contrast ratio"
            i18n-formatButton="kendo.colorgradient.formatButton|The message for the input format toggle button."
            formatButton="Change color format"
            i18n-redChannelLabel="kendo.colorgradient.redChannelLabel|The label of the NumericTextBox representing the red color channel."
            redChannelLabel="Red channel"
            i18n-greenChannelLabel="kendo.colorgradient.greenChannelLabel|The label of the NumericTextBox representing the green color channel."
            greenChannelLabel="Green channel"
            i18n-blueChannelLabel="kendo.colorgradient.blueChannelLabel|The label of the NumericTextBox representing the blue color channel."
            blueChannelLabel="Blue channel"
            i18n-alphaChannelLabel="kendo.colorgradient.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel."
            alphaChannelLabel="Alpha channel"
            i18n-redInputPlaceholder="kendo.colorgradient.redInputPlaceholder|The placeholder for the red color input."
            redChannelLabel="R"
            i18n-greenInputPlaceholder="kendo.colorgradient.greenInputPlaceholder|The placeholder for the green color input."
            greenInputPlaceholder="G"
            i18n-blueInputPlaceholder="kendo.colorgradient.blueInputPlaceholder|The placeholder for the blue color input."
            blueInputPlaceholder="B"
            i18n-hexInputPlaceholder="kendo.colorgradient.hexInputPlaceholder|The placeholder for the HEX color input."
            hexInputPlaceholder="HEX">
        </ng-container>
        <div class="k-colorgradient-canvas k-hstack">
            <div class="k-hsv-rectangle" #hsvRectangle>
                <div
                    #gradientWrapper
                    kendoDraggable
                    class="k-hsv-gradient"
                    (click)="changePosition($event)"
                    (kendoPress)="handleDragPress($event)"
                    (kendoDrag)="onHandleDrag($event)"
                    (kendoRelease)="onHandleRelease()">
                    <div
                        #gradientDragHandle
                        class="k-hsv-draghandle k-draghandle"
                        [tabindex]="innerTabIndex.toString()"
                        [attr.title]="colorGradientHandleTitle"
                        [attr.aria-label]="colorGradientHandleTitle + ' ' + colorGradientHandleAriaLabel"
                        role="slider"
                        [attr.aria-valuetext]="hsvSliderValueText"
                        [attr.aria-readonly]="readonly ? readonly : undefined"
                        [attr.aria-disabled]="disabled ? disabled : undefined"
                        [attr.aria-orientation]="'undefined'"
                        [attr.aria-valuenow]="'0'"
                        (keydown.shift.tab)="$event.preventDefault(); inputs.focusLast();">
                    </div>
                </div>
                <svg kendoColorContrastSvg
                    *ngIf="contrastToolVisible && gradientWrapper"
                    class="k-color-contrast-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    [wrapper]="gradientWrapper ? gradientWrapper : undefined"
                    [hsva]="hsva"
                    [backgroundColor]="contrastTool"
                    [style]="'position: absolute; overflow: visible; pointer-events: none; left: 0px; top: 0px;'">
                </svg>
            </div>
            <div class="k-hsv-controls k-hstack {{ clearButton ? 'k-sliders-wrap-clearable' : '' }}">

                <button
                    kendoButton
                    *ngIf="clearButton"
                    class="k-clear-color"
                    fillMode="flat"
                    icon="droplet-slash"
                    [svgIcon]="dropletSlashIcon"
                    (click)="reset()"
                    (keydown.enter)="reset()"
                    (keydown.space)="reset()"
                    [attr.aria-label]="clearButtonTitle"
                    [attr.title]="clearButtonTitle"
                    [tabindex]="innerTabIndex.toString()"
                    [style]="'position: absolute; top: 0; left: 50%; transform: translateX(-50%);'"
                >
                </button>
                <kendo-slider
                    [ngClass]="{'k-align-self-end': clearButton}"
                    [style.height.px]="clearButton ? '140' : null"
                    class="k-hue-slider k-colorgradient-slider"
                    [dragHandleTitle]="hueSliderTitle"
                    [tabindex]="innerTabIndex"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [showButtons]="false"
                    tickPlacement="none"
                    [vertical]="true"
                    [min]="0"
                    [max]="360"
                    [value]="hsva.value.h"
                    [smallStep]="5"
                    [largeStep]="10"
                    (valueChange)="handleHueSliderChange($event)"
                >
                </kendo-slider>
                <kendo-slider
                    *ngIf="opacity"
                    #alphaSlider
                    [tabindex]="innerTabIndex"
                    [ngClass]="{'k-align-self-end': clearButton}"
                    [style.height.px]="clearButton ? '140' : null"
                    class="k-alpha-slider k-colorgradient-slider"
                    [dragHandleTitle]="opacitySliderTitle"
                    [disabled]="disabled"
                    [readonly]="readonly"
                    [showButtons]="false"
                    tickPlacement="none"
                    [vertical]="true"
                    [min]="0"
                    [max]="100"
                    [smallStep]="1"
                    [largeStep]="10"
                    [value]="alphaSliderValue"
                    (valueChange)="handleAlphaSliderChange($event)"
                >
                </kendo-slider>
            </div>
        </div>
        <kendo-colorinput  #inputs
            [tabindex]="innerTabIndex"
            [opacity]="opacity"
            [formatView]="format"
            [value]="value"
            [disabled]="disabled"
            [readonly]="readonly"
            (valueChange)="handleInputsValueChange($event)"
            (tabOut)="gradientDragHandle.focus()"
        >
        </kendo-colorinput>
        <div class="k-colorgradient-color-contrast k-vbox"
            *ngIf="contrastToolVisible"
            kendoContrastTool
            [value]="value"
            [ratio]="contrastTool">
        </div>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }, {
      type: Injector
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-colorgradient"]
    }],
    readonlyAttribute: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    gradientId: [{
      type: HostBinding,
      args: ["attr.id"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    enterHandler: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    escapeHandler: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    focusHandler: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }],
    id: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    clearButton: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    contrastTool: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    gradientSliderStep: [{
      type: Input
    }],
    gradientSliderSmallStep: [{
      type: Input
    }],
    gradientDragHandle: [{
      type: ViewChild,
      args: ["gradientDragHandle"]
    }],
    inputs: [{
      type: ViewChild,
      args: ["inputs"]
    }],
    alphaSlider: [{
      type: ViewChild,
      args: ["alphaSlider"]
    }],
    gradientWrapper: [{
      type: ViewChild,
      args: ["gradientWrapper"]
    }],
    hsvRectangle: [{
      type: ViewChild,
      args: ["hsvRectangle"]
    }]
  });
})();
var FlatColorPickerHeaderComponent = class {
  constructor(localizationService, renderer) {
    this.localizationService = localizationService;
    this.renderer = renderer;
    this.hostClasses = true;
    this.innerTabIndex = -1;
    this.viewChange = new EventEmitter();
    this.valuePaneClick = new EventEmitter();
    this.clearButtonClick = new EventEmitter();
    this.tabOut = new EventEmitter();
    this.dropletSliderIcon = dropletSliderIcon;
    this.paletteIcon = paletteIcon;
    this.dropletSlashIcon = dropletSlashIcon;
  }
  ngAfterViewInit() {
    if (this.viewButtonsCollection.length > 0) {
      this.viewButtonsCollection.forEach((button) => {
        const buttonElem = button.nativeElement;
        const isViewActive = buttonElem.getAttribute("aria-pressed") === "true";
        if (isViewActive) {
          this.renderer.addClass(buttonElem, "k-selected");
        }
      });
    }
  }
  onViewButtonClick(view) {
    this.activeView = view;
    this.viewChange.emit(view);
  }
  get viewButtons() {
    return this.views && this.views.indexOf("gradient") >= 0 && this.views.indexOf("palette") >= 0;
  }
  getViewButtonIcon(view) {
    return view === "gradient" ? "color-canvas" : "palette";
  }
  getViewButtonsSVGIcon(view) {
    return view === "gradient" ? this.dropletSliderIcon : this.paletteIcon;
  }
  getText(text) {
    return this.localizationService.get(text);
  }
  onHeaderTabOut(ev, index) {
    if (index === 0) {
      ev.preventDefault();
      this.tabOut.emit(ev);
    }
  }
};
FlatColorPickerHeaderComponent.ɵfac = function FlatColorPickerHeaderComponent_Factory(t) {
  return new (t || FlatColorPickerHeaderComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2));
};
FlatColorPickerHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: FlatColorPickerHeaderComponent,
  selectors: [["", "kendoFlatColorPickerHeader", ""]],
  viewQuery: function FlatColorPickerHeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c37, 5, ElementRef);
      ɵɵviewQuery(_c38, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearButtonElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.viewButtonsCollection = _t);
    }
  },
  hostVars: 4,
  hostBindings: function FlatColorPickerHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-coloreditor-header", ctx.hostClasses)("k-hstack", ctx.hostClasses);
    }
  },
  inputs: {
    clearButton: "clearButton",
    activeView: "activeView",
    views: "views",
    preview: "preview",
    innerTabIndex: "innerTabIndex",
    value: "value",
    selection: "selection"
  },
  outputs: {
    viewChange: "viewChange",
    valuePaneClick: "valuePaneClick",
    clearButtonClick: "clearButtonClick",
    tabOut: "tabOut"
  },
  attrs: _c39,
  decls: 6,
  vars: 3,
  consts: [["viewButtons", ""], ["clearButton", ""], [1, "k-coloreditor-header-actions", "k-hstack"], ["class", "k-button-group k-button-group-flat", "role", "group", 4, "ngIf"], [1, "k-spacer"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "reset-color", "class", "k-coloreditor-reset", 3, "tabindex", "svgIcon", "click", 4, "ngIf"], ["class", "k-coloreditor-preview k-vstack", "aria-hidden", "true", 4, "ngIf"], ["role", "group", 1, "k-button-group", "k-button-group-flat"], ["kendoButton", "", "type", "button", "fillMode", "flat", "class", "k-button k-button-md k-button-flat k-button-flat-base k-icon-button", 3, "tabindex", "icon", "svgIcon", "ngClass", "click", "keydown.shift.tab", 4, "ngFor", "ngForOf"], ["kendoButton", "", "type", "button", "fillMode", "flat", 1, "k-button", "k-button-md", "k-button-flat", "k-button-flat-base", "k-icon-button", 3, "click", "keydown.shift.tab", "tabindex", "icon", "svgIcon", "ngClass"], ["kendoButton", "", "type", "button", "fillMode", "flat", "icon", "reset-color", 1, "k-coloreditor-reset", 3, "click", "tabindex", "svgIcon"], ["aria-hidden", "true", 1, "k-coloreditor-preview", "k-vstack"], [1, "k-coloreditor-preview-color", "k-color-preview"], [1, "k-coloreditor-current-color", "k-color-preview", 3, "click"]],
  template: function FlatColorPickerHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 2);
      ɵɵtemplate(1, FlatColorPickerHeaderComponent_div_1_Template, 2, 1, "div", 3);
      ɵɵelementEnd();
      ɵɵelement(2, "div", 4);
      ɵɵelementStart(3, "div", 2);
      ɵɵtemplate(4, FlatColorPickerHeaderComponent_button_4_Template, 2, 4, "button", 5)(5, FlatColorPickerHeaderComponent_div_5_Template, 3, 6, "div", 6);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.viewButtons);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.clearButton);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.preview);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, ButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerHeaderComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoFlatColorPickerHeader]",
      template: `
        <div class="k-coloreditor-header-actions k-hstack">
            <div 
                *ngIf="viewButtons" 
                class="k-button-group k-button-group-flat"
                role="group"
            >
                <button 
                    *ngFor="let view of views; let i = index;"
                    kendoButton
                    type="button"
                    #viewButtons
                    fillMode="flat"
                    [tabindex]="innerTabIndex.toString()"
                    (click)="onViewButtonClick(view)"
                    [icon]="getViewButtonIcon(view)"
                    [svgIcon]="getViewButtonsSVGIcon(view)"
                    (keydown.shift.tab)="onHeaderTabOut($event, i)"
                    class="k-button k-button-md k-button-flat k-button-flat-base k-icon-button"
                    [attr.title]="getText(view === 'gradient' ? 'gradientView' : 'paletteView')"
                    [attr.aria-label]="getText(view === 'gradient' ? 'gradientView' : 'paletteView')"
                    [attr.aria-pressed]="activeView === view"
                    [ngClass]="activeView === view ? 'k-selected' : ''">
                </button>
            </div>
        </div>
        <div class="k-spacer"></div>
        <div class="k-coloreditor-header-actions k-hstack">
            <button
                kendoButton
                type="button"
                [tabindex]="innerTabIndex.toString()"
                *ngIf="clearButton"
                #clearButton
                fillMode="flat"
                icon="reset-color"
                [svgIcon]="dropletSlashIcon"
                class="k-coloreditor-reset"
                [attr.aria-label]="getText('clearButton')"
                [attr.title]="getText('clearButton')"
                (click)="clearButtonClick.emit()">
            </button>
            <div class="k-coloreditor-preview k-vstack" *ngIf="preview" aria-hidden="true">
                <span
                    class="k-coloreditor-preview-color k-color-preview"
                    [attr.title]="getText('previewColor')"
                    [style.background-color]="selection">
                </span>
                <span class="k-coloreditor-current-color k-color-preview"
                    [style.background-color]="value"
                    [attr.title]="getText('revertSelection')"
                    (click)="valuePaneClick.emit($event)">
                </span>
            </div>
        </div>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-coloreditor-header"]
    }, {
      type: HostBinding,
      args: ["class.k-hstack"]
    }],
    clearButton: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    innerTabIndex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    viewChange: [{
      type: Output
    }],
    valuePaneClick: [{
      type: Output
    }],
    clearButtonClick: [{
      type: Output
    }],
    tabOut: [{
      type: Output
    }],
    viewButtonsCollection: [{
      type: ViewChildren,
      args: ["viewButtons", {
        read: ElementRef
      }]
    }],
    clearButtonElement: [{
      type: ViewChild,
      args: ["clearButton", {
        read: ElementRef
      }]
    }]
  });
})();
var FlatColorPickerActionButtonsComponent = class {
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.hostClasses = true;
    this.innerTabIndex = -1;
    this.actionButtonClick = new EventEmitter();
    this.tabOut = new EventEmitter();
  }
  getText(text) {
    return this.localizationService.get(text);
  }
  onActionButtonClick(type, ev) {
    const args = {
      target: type,
      originalEvent: ev
    };
    this.actionButtonClick.emit(args);
  }
};
FlatColorPickerActionButtonsComponent.ɵfac = function FlatColorPickerActionButtonsComponent_Factory(t) {
  return new (t || FlatColorPickerActionButtonsComponent)(ɵɵdirectiveInject(LocalizationService));
};
FlatColorPickerActionButtonsComponent.ɵcmp = ɵɵdefineComponent({
  type: FlatColorPickerActionButtonsComponent,
  selectors: [["", "kendoFlatColorPickerActionButtons", ""]],
  viewQuery: function FlatColorPickerActionButtonsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c40, 5, ElementRef);
      ɵɵviewQuery(_c41, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastButton = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function FlatColorPickerActionButtonsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-coloreditor-footer", ctx.hostClasses)("k-actions", ctx.hostClasses)("k-actions-horizontal", ctx.hostClasses);
    }
  },
  inputs: {
    innerTabIndex: "innerTabIndex"
  },
  outputs: {
    actionButtonClick: "actionButtonClick",
    tabOut: "tabOut"
  },
  attrs: _c422,
  decls: 6,
  vars: 6,
  consts: [["first", ""], ["last", ""], ["type", "button", 1, "k-coloreditor-cancel", "k-button", "k-button-md", "k-button-solid", "k-button-solid-base", 3, "click", "tabindex"], ["type", "button", 1, "k-coloreditor-apply", "k-button", "k-button-md", "k-button-solid", "k-button-solid-primary", 3, "click", "keydown.tab", "tabindex"]],
  template: function FlatColorPickerActionButtonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "button", 2, 0);
      ɵɵlistener("click", function FlatColorPickerActionButtonsComponent_Template_button_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onActionButtonClick("cancel", $event));
      });
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "button", 3, 1);
      ɵɵlistener("click", function FlatColorPickerActionButtonsComponent_Template_button_click_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onActionButtonClick("apply", $event));
      })("keydown.tab", function FlatColorPickerActionButtonsComponent_Template_button_keydown_tab_3_listener($event) {
        ɵɵrestoreView(_r1);
        $event.preventDefault();
        return ɵɵresetView(ctx.tabOut.emit());
      });
      ɵɵtext(5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("tabindex", ctx.innerTabIndex.toString());
      ɵɵattribute("title", ctx.getText("cancelButton"));
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.getText("cancelButton"));
      ɵɵadvance();
      ɵɵproperty("tabindex", ctx.innerTabIndex.toString());
      ɵɵattribute("title", ctx.getText("applyButton"));
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.getText("applyButton"));
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerActionButtonsComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoFlatColorPickerActionButtons]",
      template: `
        <button #first
            class="k-coloreditor-cancel k-button k-button-md k-button-solid k-button-solid-base"
            [attr.title]="getText('cancelButton')"
            (click)="onActionButtonClick('cancel', $event)"
            type="button"
            [tabindex]="innerTabIndex.toString()"
        >{{getText('cancelButton')}}</button>
        <button #last
            class="k-coloreditor-apply k-button k-button-md k-button-solid k-button-solid-primary"
            [attr.title]="getText('applyButton')"
            (click)="onActionButtonClick('apply', $event)"
            type="button"
            [tabindex]="innerTabIndex.toString()"
            (keydown.tab)="$event.preventDefault(); tabOut.emit();"
        >{{getText('applyButton')}}</button>
    `
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-coloreditor-footer"]
    }, {
      type: HostBinding,
      args: ["class.k-actions"]
    }, {
      type: HostBinding,
      args: ["class.k-actions-horizontal"]
    }],
    innerTabIndex: [{
      type: Input
    }],
    actionButtonClick: [{
      type: Output
    }],
    tabOut: [{
      type: Output
    }],
    firstButton: [{
      type: ViewChild,
      args: ["first", {
        read: ElementRef
      }]
    }],
    lastButton: [{
      type: ViewChild,
      args: ["last", {
        read: ElementRef
      }]
    }]
  });
})();
var FlatColorPickerComponent = class {
  constructor(host, service, localizationService, cdr, renderer, ngZone, injector) {
    this.host = host;
    this.service = service;
    this.localizationService = localizationService;
    this.cdr = cdr;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.injector = injector;
    this.hostClasses = true;
    this.ariaRole = "textbox";
    this.readonly = false;
    this.disabled = false;
    this.format = "rgba";
    this.clearButton = true;
    this.preview = true;
    this.actionsLayout = "end";
    this.views = ["gradient", "palette"];
    this.valueChange = new EventEmitter();
    this.cancel = new EventEmitter();
    this.activeViewChange = new EventEmitter();
    this.clearButtonClick = new EventEmitter();
    this.actionButtonClick = new EventEmitter();
    this._tabindex = 0;
    this._gradientSettings = {
      opacity: true,
      delay: 0,
      gradientSliderStep: DRAGHANDLE_MOVE_SPEED,
      gradientSliderSmallStep: DRAGHANDLE_MOVE_SPEED_SMALL_STEP
    };
    this._paletteSettings = {};
    this.subscriptions = new import_rxjs2.Subscription();
    this.internalNavigation = false;
    this.notifyNgChanged = () => {
    };
    this.notifyNgTouched = () => {
    };
    validatePackage(packageMetadata2);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  get disabledClass() {
    return this.disabled;
  }
  get ariaReadonly() {
    return this.readonly;
  }
  get hostTabindex() {
    var _a2;
    return ((_a2 = this.tabindex) === null || _a2 === void 0 ? void 0 : _a2.toString()) || "0";
  }
  get isControlInvalid() {
    var _a2, _b;
    return (_b = (_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.invalid) === null || _b === void 0 ? void 0 : _b.toString();
  }
  get isDisabled() {
    var _a2;
    return ((_a2 = this.disabled) === null || _a2 === void 0 ? void 0 : _a2.toString()) || void 0;
  }
  /**
   * @hidden
   */
  enterHandler(event) {
    if (event.target !== this.host.nativeElement) {
      return;
    }
    event.preventDefault();
    this.internalNavigation = true;
    this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
      var _a2;
      return (_a2 = this.firstFocusable) === null || _a2 === void 0 ? void 0 : _a2.focus();
    });
  }
  /**
   * @hidden
   */
  escapeHandler() {
    this.internalNavigation = false;
    this.host.nativeElement.focus();
  }
  /**
   * @hidden
   */
  focusHandler(ev) {
    this.internalNavigation = ev.target !== this.host.nativeElement;
  }
  /**
   * Specifies the initially selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format, this.gradientSettings.opacity);
  }
  get value() {
    return this._value;
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    if (isPresent3(value)) {
      const tabindex = Number(value);
      this._tabindex = !isNaN(tabindex) ? tabindex : 0;
    } else {
      this._tabindex = value;
    }
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * Configures the gradient view.
   */
  set gradientSettings(value) {
    Object.assign(this._gradientSettings, value);
  }
  get gradientSettings() {
    return this._gradientSettings;
  }
  /**
   * Configures the palette view.
   */
  set paletteSettings(value) {
    Object.assign(this._paletteSettings, value);
  }
  get paletteSettings() {
    return this._paletteSettings;
  }
  /**
   * @hidden
   */
  get innerTabIndex() {
    return this.internalNavigation ? 0 : -1;
  }
  /**
   * @hidden
   */
  get firstFocusable() {
    if (this.headerHasContent) {
      return this.headerElement.nativeElement.querySelector(".k-button");
    }
    return this.activeView === "gradient" ? this.gradient : this.palette;
  }
  ngOnInit() {
    this.selection = this.value;
    this.control = this.injector.get(NgControl, null);
    this._paletteSettings = this.service.getPaletteSettings(this._paletteSettings, this.format);
    this.setActiveView();
  }
  ngAfterViewInit() {
    this.setHostElementAriaLabel();
    this.initDomEvents();
    this.setSizingVariables();
    this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => this.removeGradientAttributes());
  }
  ngOnChanges(changes) {
    if (isChanged("value", changes)) {
      this.selection = this.value;
      this.setHostElementAriaLabel();
    }
    if (isChanged("paletteSettings", changes)) {
      this.setSizingVariables();
    }
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }
  /**
   * @hidden
   */
  focusFirstHeaderButton() {
    if (this.gradientElement.nativeElement === document.activeElement) {
      if (this.headerHasContent && !this.preview) {
        const firstHeaderButton = this.headerElement.nativeElement.querySelector(".k-button");
        firstHeaderButton.focus();
      }
    }
  }
  /**
   * @hidden
   */
  lastFocusable(event) {
    var _a2, _b;
    if (this.preview) {
      this.footer.lastButton.nativeElement.focus();
      return;
    }
    event.stopImmediatePropagation();
    const gradient = (_a2 = this.gradientElement) === null || _a2 === void 0 ? void 0 : _a2.nativeElement;
    const palette = (_b = this.palette) === null || _b === void 0 ? void 0 : _b.host.nativeElement;
    this.activeView === "gradient" ? gradient.focus() : palette.focus();
  }
  /**
   * @hidden
   */
  onTab(ev) {
    const {
      shiftKey
    } = ev;
    const nextTabStop = this.preview ? this.footer.firstButton.nativeElement : this.headerHasContent ? findFocusableChild(this.headerElement.nativeElement) : null;
    const previousTabStop = this.headerHasContent ? findFocusableChild(this.headerElement.nativeElement) : this.preview ? this.footer.lastButton.nativeElement : null;
    if (!nextTabStop && !previousTabStop) {
      return;
    }
    ev.preventDefault();
    shiftKey ? previousTabStop === null || previousTabStop === void 0 ? void 0 : previousTabStop.focus() : nextTabStop === null || nextTabStop === void 0 ? void 0 : nextTabStop.focus();
  }
  /**
   * @hidden
   */
  get headerHasContent() {
    return this.preview || this.views.length > 1 || this.clearButton;
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  /**
   * Focuses the wrapper of the FlatColorPicker.
   */
  focus() {
    if (this.disabled || this.focused) {
      return;
    }
    this.host.nativeElement.focus();
    this.focused = true;
  }
  /**
   * Blurs the wrapper of the FlatColorPicker.
   */
  blur() {
    if (!this.focused) {
      return;
    }
    this.notifyNgTouched();
    this.host.nativeElement.blur();
    this.focused = false;
  }
  /**
   * Clears the value of the FlatColorPicker.
   */
  reset() {
    if (!isPresent3(this.value)) {
      return;
    }
    this.value = void 0;
    this.notifyNgChanged(void 0);
    this.setHostElementAriaLabel();
  }
  /**
   * @hidden
   */
  onViewChange(view) {
    if (this.activeView === view) {
      return;
    }
    this.activeView = view;
    this.activeViewChange.emit(view);
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        var _a2;
        (_a2 = this[this.activeView]) === null || _a2 === void 0 ? void 0 : _a2.focus();
      });
    });
    if (this.activeView === "gradient") {
      this.removeGradientAttributes();
    }
  }
  /**
   * @hidden
   */
  onClearButtonClick() {
    this.resetInnerComponentValue();
    this.clearButtonClick.emit();
  }
  /**
   * @hidden
   */
  handleValueChange(color) {
    this.preview ? this.changeCurrentValue(color) : this.setFlatColorPickerValue(color);
  }
  /**
   * @hidden
   */
  onAction(ev) {
    ev.target === "apply" ? this.setFlatColorPickerValue(this.selection) : this.resetSelection(ev.originalEvent);
    this.actionButtonClick.emit();
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  resetSelection(ev) {
    const eventArgs = new ColorPickerCancelEvent(ev);
    this.cancel.emit(eventArgs);
    if (!eventArgs.isDefaultPrevented()) {
      this.selection = this.value;
    }
    this.notifyNgTouched();
  }
  setHostElementAriaLabel() {
    const parsed = parseColor2(this.value, this.format, this.gradientSettings.opacity);
    const ariaLabelValue = `${this.value ? parsed : this.localizationService.get("flatColorPickerNoColor")}`;
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", ariaLabelValue);
  }
  setSizingVariables() {
    const paletteTileSize = this.service.paletteTileLayout(this.paletteSettings.tileSize);
    const element = this.host.nativeElement.querySelector(".k-coloreditor-views.k-vstack");
    const cssProperties = `
            --kendo-color-preview-columns: ${this.paletteSettings.columns};
            --kendo-color-preview-width: ${paletteTileSize.width}px;
            --kendo-color-preview-height: ${paletteTileSize.height}px;
        `;
    this.renderer.setProperty(element, "style", cssProperties);
  }
  changeCurrentValue(color) {
    this.selection = color;
    this.notifyNgTouched();
  }
  resetInnerComponentValue() {
    this.selection = null;
    if (this.gradient) {
      this.gradient.reset();
      return;
    }
    this.palette.reset();
  }
  setFlatColorPickerValue(color) {
    if (this.value === color) {
      return;
    }
    this.value = color;
    this.valueChange.emit(color);
    this.notifyNgChanged(color);
    this.setHostElementAriaLabel();
  }
  setActiveView() {
    if (!isPresent3(this.activeView)) {
      this.activeView = this.views[0];
      return;
    }
    if (isDevMode() && this.views.indexOf(this.activeView) === -1) {
      throw new Error("Invalid configuration: The current activeView is not present in the views collection");
    }
  }
  initDomEvents() {
    if (!this.host) {
      return;
    }
    const hostElement = this.host.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focus", () => {
        this.focused = true;
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "blur", () => {
        this.focused = false;
        this.notifyNgTouched();
      }));
    });
  }
  removeGradientAttributes() {
    this.gradientElement && this.renderer.removeAttribute(this.gradientElement.nativeElement, "role");
    this.gradientElement && this.renderer.removeAttribute(this.gradientElement.nativeElement, "aria-label");
  }
};
FlatColorPickerComponent.ɵfac = function FlatColorPickerComponent_Factory(t) {
  return new (t || FlatColorPickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FlatColorPickerService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector));
};
FlatColorPickerComponent.ɵcmp = ɵɵdefineComponent({
  type: FlatColorPickerComponent,
  selectors: [["kendo-flatcolorpicker"]],
  viewQuery: function FlatColorPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c43, 5);
      ɵɵviewQuery(_c43, 5, ElementRef);
      ɵɵviewQuery(_c44, 5);
      ɵɵviewQuery(_c44, 5, ElementRef);
      ɵɵviewQuery(_c45, 5);
      ɵɵviewQuery(_c46, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.header = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradient = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.gradientElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.palette = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footer = _t.first);
    }
  },
  hostVars: 14,
  hostBindings: function FlatColorPickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.enter", function FlatColorPickerComponent_keydown_enter_HostBindingHandler($event) {
        return ctx.enterHandler($event);
      })("keydown.escape", function FlatColorPickerComponent_keydown_escape_HostBindingHandler() {
        return ctx.escapeHandler();
      })("focusin", function FlatColorPickerComponent_focusin_HostBindingHandler($event) {
        return ctx.focusHandler($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.isDisabled)("aria-readonly", ctx.ariaReadonly)("dir", ctx.direction)("tabindex", ctx.hostTabindex)("role", ctx.ariaRole)("aria-invalid", ctx.isControlInvalid);
      ɵɵclassProp("k-flatcolorpicker", ctx.hostClasses)("k-coloreditor", ctx.hostClasses)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
    }
  },
  inputs: {
    readonly: "readonly",
    disabled: "disabled",
    format: "format",
    value: "value",
    tabindex: "tabindex",
    clearButton: "clearButton",
    preview: "preview",
    actionsLayout: "actionsLayout",
    activeView: "activeView",
    views: "views",
    gradientSettings: "gradientSettings",
    paletteSettings: "paletteSettings"
  },
  outputs: {
    valueChange: "valueChange",
    cancel: "cancel",
    activeViewChange: "activeViewChange",
    clearButtonClick: "clearButtonClick",
    actionButtonClick: "actionButtonClick"
  },
  exportAs: ["kendoFlatColorPicker"],
  features: [ɵɵProvidersFeature([{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FlatColorPickerComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => FlatColorPickerComponent)
  }, FlatColorPickerService, FlatColorPickerLocalizationService, {
    provide: LocalizationService,
    useExisting: FlatColorPickerLocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.flatcolorpicker"
  }]), ɵɵNgOnChangesFeature],
  decls: 6,
  vars: 4,
  consts: () => {
    let i18n_28;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_28 = goog.getMsg("Flatcolorpicker no color chosen");
      i18n_28 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_28;
    } else {
      i18n_28 = $localize`:kendo.flatcolorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty.:Flatcolorpicker no color chosen`;
    }
    let i18n_29;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_29 = goog.getMsg("Colorgradient no color chosen");
      i18n_29 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_29;
    } else {
      i18n_29 = $localize`:kendo.flatcolorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty.:Colorgradient no color chosen`;
    }
    let i18n_30;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_30 = goog.getMsg("Colorpalette no color chosen");
      i18n_30 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_30;
    } else {
      i18n_30 = $localize`:kendo.flatcolorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty.:Colorpalette no color chosen`;
    }
    let i18n_31;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_31 = goog.getMsg("Choose color");
      i18n_31 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_31;
    } else {
      i18n_31 = $localize`:kendo.flatcolorpicker.colorGradientHandle|The title for the gradient color drag handle chooser.:Choose color`;
    }
    let i18n_32;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_32 = goog.getMsg("Clear value");
      i18n_32 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_32;
    } else {
      i18n_32 = $localize`:kendo.flatcolorpicker.clearButton|The title for the clear button.:Clear value`;
    }
    let i18n_33;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_33 = goog.getMsg("Set hue");
      i18n_33 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_33;
    } else {
      i18n_33 = $localize`:kendo.flatcolorpicker.hueSliderHandle|The title for the hue slider handle.:Set hue`;
    }
    let i18n_34;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_34 = goog.getMsg("Set opacity");
      i18n_34 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_34;
    } else {
      i18n_34 = $localize`:kendo.flatcolorpicker.opacitySliderHandle|The title for the opacity slider handle.:Set opacity`;
    }
    let i18n_35;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_35 = goog.getMsg("Contrast ratio");
      i18n_35 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_35;
    } else {
      i18n_35 = $localize`:kendo.flatcolorpicker.contrastRatio|The contrast ratio message for the contrast tool.:Contrast ratio`;
    }
    let i18n_36;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_36 = goog.getMsg("Color preview");
      i18n_36 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_36;
    } else {
      i18n_36 = $localize`:kendo.flatcolorpicker.previewColor|The message for the color preview pane.:Color preview`;
    }
    let i18n_37;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_37 = goog.getMsg("Revert selection");
      i18n_37 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_37;
    } else {
      i18n_37 = $localize`:kendo.flatcolorpicker.revertSelection|The message for the selected color pane.:Revert selection`;
    }
    let i18n_38;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_38 = goog.getMsg("Gradient view");
      i18n_38 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_38;
    } else {
      i18n_38 = $localize`:kendo.flatcolorpicker.gradientView|The message for the gradient view button.:Gradient view`;
    }
    let i18n_39;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_39 = goog.getMsg("Palette view");
      i18n_39 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_39;
    } else {
      i18n_39 = $localize`:kendo.flatcolorpicker.paletteView|The message for the palette view button.:Palette view`;
    }
    let i18n_40;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_40 = goog.getMsg("Change color format");
      i18n_40 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_40;
    } else {
      i18n_40 = $localize`:kendo.flatcolorpicker.formatButton|The message for the input format toggle button.:Change color format`;
    }
    let i18n_41;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_41 = goog.getMsg("Apply");
      i18n_41 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_41;
    } else {
      i18n_41 = $localize`:kendo.flatcolorpicker.applyButton|The message for the Apply action button.:Apply`;
    }
    let i18n_42;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_42 = goog.getMsg("Cancel");
      i18n_42 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_42;
    } else {
      i18n_42 = $localize`:kendo.flatcolorpicker.cancelButton|The message for the Cancel action button.:Cancel`;
    }
    let i18n_43;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_43 = goog.getMsg("Red channel");
      i18n_43 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_43;
    } else {
      i18n_43 = $localize`:kendo.flatcolorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:Red channel`;
    }
    let i18n_44;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_44 = goog.getMsg("Green channel");
      i18n_44 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_44;
    } else {
      i18n_44 = $localize`:kendo.flatcolorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel.:Green channel`;
    }
    let i18n_45;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_45 = goog.getMsg("Blue channel");
      i18n_45 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_45;
    } else {
      i18n_45 = $localize`:kendo.flatcolorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel.:Blue channel`;
    }
    let i18n_46;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_46 = goog.getMsg("Alpha channel");
      i18n_46 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_46;
    } else {
      i18n_46 = $localize`:kendo.flatcolorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel.:Alpha channel`;
    }
    let i18n_47;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_47 = goog.getMsg("R");
      i18n_47 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_47;
    } else {
      i18n_47 = $localize`:kendo.flatcolorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:R`;
    }
    let i18n_48;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_48 = goog.getMsg("G");
      i18n_48 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_48;
    } else {
      i18n_48 = $localize`:kendo.flatcolorpicker.greenInputPlaceholder|The placeholder for the green color input.:G`;
    }
    let i18n_49;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_49 = goog.getMsg("B");
      i18n_49 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_49;
    } else {
      i18n_49 = $localize`:kendo.flatcolorpicker.blueInputPlaceholder|The placeholder for the blue color input.:B`;
    }
    let i18n_50;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_50 = goog.getMsg("HEX");
      i18n_50 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_50;
    } else {
      i18n_50 = $localize`:kendo.flatcolorpicker.hexInputPlaceholder|The placeholder for the HEX color input.:HEX`;
    }
    return [["header", ""], ["gradient", ""], ["palette", ""], ["footer", ""], ["kendoFlatColorPickerLocalizedMessages", "", "flatColorPickerNoColor", i18n_28, "colorGradientNoColor", i18n_29, "colorPaletteNoColor", i18n_30, "colorGradientHandle", i18n_31, "clearButton", i18n_32, "hueSliderHandle", i18n_33, "opacitySliderHandle", i18n_34, "contrastRatio", i18n_35, "previewColor", i18n_36, "revertSelection", i18n_37, "gradientView", i18n_38, "paletteView", i18n_39, "formatButton", i18n_40, "applyButton", i18n_41, "cancelButton", i18n_42, "redChannelLabel", i18n_43, "greenChannelLabel", i18n_44, "blueChannelLabel", i18n_45, "alphaChannelLabel", i18n_46, "redChannelLabel", i18n_47, "greenInputPlaceholder", i18n_48, "blueInputPlaceholder", i18n_49, "hexInputPlaceholder", i18n_50], ["kendoFlatColorPickerHeader", "", 3, "innerTabIndex", "clearButton", "activeView", "views", "value", "selection", "preview", "clearButtonClick", "viewChange", "valuePaneClick", "tabOut", 4, "ngIf"], [1, "k-coloreditor-views", "k-vstack"], [3, "tabindex", "value", "format", "opacity", "delay", "contrastTool", "gradientSliderSmallStep", "gradientSliderStep", "readonly", "keydown.tab", "valueChange", 4, "ngIf"], [3, "tabindex", "palette", "columns", "tileSize", "format", "value", "readonly", "valueChange", 4, "ngIf"], ["kendoFlatColorPickerActionButtons", "", 3, "innerTabIndex", "ngClass", "actionButtonClick", "tabOut", 4, "ngIf"], ["kendoFlatColorPickerHeader", "", 3, "clearButtonClick", "viewChange", "valuePaneClick", "tabOut", "innerTabIndex", "clearButton", "activeView", "views", "value", "selection", "preview"], [3, "keydown.tab", "valueChange", "tabindex", "value", "format", "opacity", "delay", "contrastTool", "gradientSliderSmallStep", "gradientSliderStep", "readonly"], [3, "valueChange", "tabindex", "palette", "columns", "tileSize", "format", "value", "readonly"], ["kendoFlatColorPickerActionButtons", "", 3, "actionButtonClick", "tabOut", "innerTabIndex", "ngClass"]];
  },
  template: function FlatColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 4);
      ɵɵtemplate(1, FlatColorPickerComponent_div_1_Template, 2, 7, "div", 5);
      ɵɵelementStart(2, "div", 6);
      ɵɵtemplate(3, FlatColorPickerComponent_kendo_colorgradient_3_Template, 2, 9, "kendo-colorgradient", 7)(4, FlatColorPickerComponent_kendo_colorpalette_4_Template, 2, 7, "kendo-colorpalette", 8);
      ɵɵelementEnd();
      ɵɵtemplate(5, FlatColorPickerComponent_div_5_Template, 2, 2, "div", 9);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.headerHasContent);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.activeView === "gradient");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.activeView === "palette");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.preview);
    }
  },
  dependencies: [NgClass, NgIf, ColorPaletteComponent, ColorGradientComponent, LocalizedColorPickerMessagesDirective, FlatColorPickerHeaderComponent, FlatColorPickerActionButtonsComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatColorPickerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoFlatColorPicker",
      selector: "kendo-flatcolorpicker",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FlatColorPickerComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => FlatColorPickerComponent)
      }, FlatColorPickerService, FlatColorPickerLocalizationService, {
        provide: LocalizationService,
        useExisting: FlatColorPickerLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.flatcolorpicker"
      }],
      template: `
        <ng-container kendoFlatColorPickerLocalizedMessages
            i18n-flatColorPickerNoColor="kendo.flatcolorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty."
            flatColorPickerNoColor="Flatcolorpicker no color chosen"
            i18n-colorGradientNoColor="kendo.flatcolorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty."
            colorGradientNoColor="Colorgradient no color chosen"
            i18n-colorPaletteNoColor="kendo.flatcolorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty."
            colorPaletteNoColor="Colorpalette no color chosen"
            i18n-colorGradientHandle="kendo.flatcolorpicker.colorGradientHandle|The title for the gradient color drag handle chooser."
            colorGradientHandle="Choose color"
            i18n-clearButton="kendo.flatcolorpicker.clearButton|The title for the clear button."
            clearButton="Clear value"
            i18n-hueSliderHandle="kendo.flatcolorpicker.hueSliderHandle|The title for the hue slider handle."
            hueSliderHandle="Set hue"
            i18n-opacitySliderHandle="kendo.flatcolorpicker.opacitySliderHandle|The title for the opacity slider handle."
            opacitySliderHandle="Set opacity"
            i18n-contrastRatio="kendo.flatcolorpicker.contrastRatio|The contrast ratio message for the contrast tool."
            contrastRatio="Contrast ratio"
            i18n-previewColor="kendo.flatcolorpicker.previewColor|The message for the color preview pane."
            previewColor="Color preview"
            i18n-revertSelection="kendo.flatcolorpicker.revertSelection|The message for the selected color pane."
            revertSelection="Revert selection"
            i18n-gradientView="kendo.flatcolorpicker.gradientView|The message for the gradient view button."
            gradientView="Gradient view"
            i18n-paletteView="kendo.flatcolorpicker.paletteView|The message for the palette view button."
            paletteView="Palette view"
            i18n-formatButton="kendo.flatcolorpicker.formatButton|The message for the input format toggle button."
            formatButton="Change color format"
            i18n-applyButton="kendo.flatcolorpicker.applyButton|The message for the Apply action button."
            applyButton="Apply"
            i18n-cancelButton="kendo.flatcolorpicker.cancelButton|The message for the Cancel action button."
            cancelButton="Cancel"
            i18n-redChannelLabel="kendo.flatcolorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel."
            redChannelLabel="Red channel"
            i18n-greenChannelLabel="kendo.flatcolorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel."
            greenChannelLabel="Green channel"
            i18n-blueChannelLabel="kendo.flatcolorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel."
            blueChannelLabel="Blue channel"
            i18n-alphaChannelLabel="kendo.flatcolorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel."
            alphaChannelLabel="Alpha channel"
            i18n-redInputPlaceholder="kendo.flatcolorpicker.redInputPlaceholder|The placeholder for the red color input."
            redChannelLabel="R"
            i18n-greenInputPlaceholder="kendo.flatcolorpicker.greenInputPlaceholder|The placeholder for the green color input."
            greenInputPlaceholder="G"
            i18n-blueInputPlaceholder="kendo.flatcolorpicker.blueInputPlaceholder|The placeholder for the blue color input."
            blueInputPlaceholder="B"
            i18n-hexInputPlaceholder="kendo.flatcolorpicker.hexInputPlaceholder|The placeholder for the HEX color input."
            hexInputPlaceholder="HEX">
        </ng-container>
        <div kendoFlatColorPickerHeader
            [innerTabIndex]="innerTabIndex"
            *ngIf="headerHasContent"
            #header
            [clearButton]="clearButton"
            [activeView]="activeView"
            [views]="views"
            [value]="value"
            [selection]="selection"
            [preview]="preview"
            (clearButtonClick)="onClearButtonClick()"
            (viewChange)="onViewChange($event)"
            (valuePaneClick)="resetSelection($event)"
            (tabOut)="lastFocusable($event)"></div>
        <div class="k-coloreditor-views k-vstack">
            <kendo-colorgradient #gradient
                [tabindex]="innerTabIndex"
                *ngIf="activeView === 'gradient'"
                [value]="selection"
                [format]="format"
                [opacity]="gradientSettings.opacity"
                [delay]="gradientSettings.delay"
                [contrastTool]="gradientSettings.contrastTool"
                [gradientSliderSmallStep]="gradientSettings.gradientSliderSmallStep"
                [gradientSliderStep]="gradientSettings.gradientSliderStep"
                [readonly]="readonly"
                (keydown.tab)="focusFirstHeaderButton()"
                (valueChange)="handleValueChange($event)"
            ></kendo-colorgradient>
            <kendo-colorpalette #palette
                [tabindex]="innerTabIndex"
                *ngIf="activeView === 'palette'"
                [palette]="paletteSettings.palette"
                [columns]="paletteSettings.columns"
                [tileSize]="paletteSettings.tileSize"
                [format]="format"
                [value]="selection"
                [readonly]="readonly"
                (valueChange)="handleValueChange($event)"
            ></kendo-colorpalette>
        </div>
        <div kendoFlatColorPickerActionButtons
            [innerTabIndex]="innerTabIndex"
            *ngIf="preview"
            #footer
            [ngClass]="'k-justify-content-' + actionsLayout"
            (actionButtonClick)="onAction($event)"
            (tabOut)="firstFocusable.focus()"></div>
`
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: FlatColorPickerService
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: Injector
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-flatcolorpicker"]
    }, {
      type: HostBinding,
      args: ["class.k-coloreditor"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    ariaReadonly: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    isDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    enterHandler: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    escapeHandler: [{
      type: HostListener,
      args: ["keydown.escape"]
    }],
    focusHandler: [{
      type: HostListener,
      args: ["focusin", ["$event"]]
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    disabled: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    views: [{
      type: Input
    }],
    gradientSettings: [{
      type: Input
    }],
    paletteSettings: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    activeViewChange: [{
      type: Output
    }],
    clearButtonClick: [{
      type: Output
    }],
    actionButtonClick: [{
      type: Output
    }],
    header: [{
      type: ViewChild,
      args: ["header"]
    }],
    headerElement: [{
      type: ViewChild,
      args: ["header", {
        read: ElementRef
      }]
    }],
    gradient: [{
      type: ViewChild,
      args: ["gradient"]
    }],
    gradientElement: [{
      type: ViewChild,
      args: ["gradient", {
        read: ElementRef
      }]
    }],
    palette: [{
      type: ViewChild,
      args: ["palette"]
    }],
    footer: [{
      type: ViewChild,
      args: ["footer"]
    }]
  });
})();
var DOM_FOCUS_EVENTS = ["focus", "blur"];
var DEFAULT_SIZE$4 = "medium";
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_FILL_MODE$1 = "solid";
var nextColorPickerId = 0;
var ColorPickerComponent = class {
  constructor(host, popupService, cdr, localizationService, ngZone, renderer, injector) {
    this.host = host;
    this.popupService = popupService;
    this.cdr = cdr;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.injector = injector;
    this.hostClasses = true;
    this.role = "combobox";
    this.hasPopup = "dialog";
    this.views = ["gradient", "palette"];
    this.readonly = false;
    this.disabled = false;
    this.format = "rgba";
    this.clearButton = true;
    this.preview = false;
    this.actionsLayout = "end";
    this.valueChange = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.cancel = new EventEmitter();
    this.activeColorClick = new EventEmitter();
    this.clearButtonClick = new EventEmitter();
    this.activeViewChange = new EventEmitter();
    this.isFocused = false;
    this.arrowDownIcon = caretAltDownIcon;
    this._tabindex = 0;
    this._popupSettings = {
      animate: true
    };
    this._paletteSettings = {};
    this._gradientSettings = {
      opacity: true,
      delay: 0
    };
    this._size = "medium";
    this._rounded = "medium";
    this._fillMode = "solid";
    this.subscriptions = new import_rxjs2.Subscription();
    this.popupSubs = new import_rxjs2.Subscription();
    this.notifyNgTouched = () => {
    };
    this.notifyNgChanged = () => {
    };
    this.domFocusListener = (event) => event.stopImmediatePropagation();
    validatePackage(packageMetadata2);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
    this.colorPickerId = nextColorPickerId++;
  }
  get focusedClass() {
    return this.isFocused;
  }
  get disabledClass() {
    return this.disabled;
  }
  get ariaReadonly() {
    return this.readonly;
  }
  get ariaExpanded() {
    return this.isOpen;
  }
  get hostTabindex() {
    return this.tabindex;
  }
  get isControlInvalid() {
    var _a2, _b;
    return (_b = (_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.invalid) === null || _b === void 0 ? void 0 : _b.toString();
  }
  /**
   * @hidden
   */
  set view(view) {
    this.views = [view];
  }
  get view() {
    return this.views && this.views.length > 0 ? this.views[0] : null;
  }
  /**
   * Specifies the value of the initially selected color.
   */
  set value(value) {
    this._value = parseColor2(value, this.format, this.gradientSettings.opacity);
  }
  get value() {
    return this._value;
  }
  /**
   * Configures the popup of the ColorPicker.
   */
  set popupSettings(value) {
    this._popupSettings = Object.assign(this._popupSettings, value);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Configures the palette that is displayed in the ColorPicker popup.
   */
  set paletteSettings(value) {
    this._paletteSettings = Object.assign(this._paletteSettings, value);
  }
  get paletteSettings() {
    return this._paletteSettings;
  }
  /**
   * Configures the gradient that is displayed in the ColorPicker popup.
   */
  set gradientSettings(value) {
    this._gradientSettings = Object.assign(this._gradientSettings, value);
  }
  get gradientSettings() {
    return this._gradientSettings;
  }
  /**
   * Defines an SVGIcon to be rendered within the button.
   * The input can take either an [existing Kendo SVG icon](slug:svgicon_list) or a custom one.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * The size property specifies the padding of the ColorPicker internal elements
   * ([see example]({% slug appearance_colorpicker %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$4;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the ColorPicker
   * ([see example](slug:appearance_colorpicker#toc-roundness)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `full`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$3;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * The fillMode property specifies the background and border styles of the ColorPicker
   * ([see example]({% slug appearance_colorpicker %}#toc-fill-mode)).
   *
   * The possible values are:
   * * `flat`
   * * `solid` (default)
   * * `outline`
   * * `none`
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$1;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Indicates whether the ColorPicker popup is open.
   */
  get isOpen() {
    return isPresent3(this.popupRef);
  }
  /**
   * @hidden
   */
  get customIconStyles() {
    if (this.iconClass) {
      let parsedIconClass = "";
      parseCSSClassNames(this.iconClass).forEach((iconClass) => {
        parsedIconClass += iconClass + " ";
      });
      return parsedIconClass.slice(0, -1);
    }
    return "";
  }
  /**
   * @hidden
   */
  get iconStyles() {
    if (this.icon && !this.iconClass) {
      return `${this.icon}`;
    }
    return "";
  }
  ngOnInit() {
    const defaultPreset = this.format !== "name" ? DEFAULT_PRESET$1 : DEFAULT_ACCESSIBLE_PRESET$1;
    const settingsPalette = this._paletteSettings.palette;
    const presetColumns = typeof settingsPalette === "string" && PALETTEPRESETS[settingsPalette] ? PALETTEPRESETS[settingsPalette].columns : void 0;
    this._paletteSettings = {
      palette: settingsPalette || defaultPreset,
      tileSize: this._paletteSettings.tileSize || 24,
      columns: this._paletteSettings.columns || presetColumns || 10
    };
    this.handleHostId();
    this.renderer.setAttribute(this.host.nativeElement, "aria-controls", `k-colorpicker-popup-${this.colorPickerId}`);
    this.control = this.injector.get(NgControl, null);
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded", "fillMode"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.setHostElementAriaLabel();
    this.initDomEvents();
  }
  ngOnChanges(changes) {
    if (changes.format && changes.format.currentValue === "name") {
      this.activeView = "palette";
    }
    if (this.activeView === "gradient" && this.gradientSettings.opacity) {
      this.format = "rgba";
      this.value = parseColor2(this.value, this.format, this.gradientSettings.opacity);
    }
    if (isChanged("value", changes)) {
      this.setHostElementAriaLabel();
    }
  }
  ngOnDestroy() {
    this.closePopup();
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
    this.handleDomEvents("remove", DOM_FOCUS_EVENTS);
  }
  /**
   * @hidden
   */
  handleCancelEvent(ev) {
    this.cancel.emit(ev);
  }
  /**
   * @hidden
   */
  togglePopup() {
    this.focus();
    this.toggleWithEvents(!this.isOpen);
  }
  /**
   * @hidden
   */
  handleWrapperClick(event) {
    if (this.disabled) {
      return;
    }
    this.focus();
    if (closest(event.target, (element) => element === this.activeColor.nativeElement)) {
      const event2 = new ActiveColorClickEvent(this.value);
      this.activeColorClick.emit(event2);
      if (!event2.isOpenPrevented() || this.isOpen) {
        this.toggleWithEvents(!this.isOpen);
      }
      return;
    }
    this.toggleWithEvents(!this.isOpen);
  }
  /**
   * Focuses the wrapper of the ColorPicker.
   */
  focus() {
    this.isFocused = true;
    this.host.nativeElement.focus();
  }
  /**
   * @hidden
   */
  handleWrapperFocus() {
    if (this.isFocused) {
      return;
    }
    this.ngZone.run(() => {
      this.focus();
      this.onFocus.emit();
    });
  }
  /**
   * Blurs the ColorPicker.
   */
  blur() {
    this.isFocused = false;
    this.host.nativeElement.blur();
    this.notifyNgTouched();
  }
  /**
   * @hidden
   */
  handleWrapperBlur() {
    if (this.isOpen) {
      return;
    }
    this.ngZone.run(() => {
      this.onBlur.emit();
      this.isFocused = false;
    });
  }
  /**
   * Clears the value of the ColorPicker.
   */
  reset() {
    if (!isPresent3(this.value)) {
      return;
    }
    this._value = void 0;
    this.setHostElementAriaLabel();
    this.notifyNgChanged(void 0);
  }
  /**
   * Toggles the popup of the ColorPicker.
   * Does not trigger the `open` and `close` events of the component.
   *
   * @param open An optional parameter. Specifies whether the popup will be opened or closed.
   */
  toggle(open) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.cdr.markForCheck();
    this.closePopup();
    open = isPresent3(open) ? open : !this.isOpen;
    if (open) {
      this.openPopup();
      this.focusFirstElement();
    }
  }
  /**
   * @hidden
   */
  handleValueChange(color) {
    const parsedColor = parseColor2(color, this.format, this.gradientSettings.opacity);
    const valueChange = parsedColor !== this.value;
    if (valueChange) {
      this.value = parsedColor;
      this.valueChange.emit(parsedColor);
      this.setHostElementAriaLabel();
      this.notifyNgChanged(parsedColor);
    }
  }
  /**
   * @hidden
   */
  handlePopupBlur(event) {
    if (this.popupBlurInvalid(event)) {
      return;
    }
    this.isFocused = false;
    this.onBlur.emit();
    this.notifyNgTouched();
    this.toggleWithEvents(false);
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  /**
   * @hidden
   */
  handleWrapperKeyDown(event) {
    if (event.keyCode === Keys.ArrowDown || event.keyCode === Keys.Enter) {
      event.preventDefault();
      this.ngZone.run(() => {
        this.toggleWithEvents(true);
      });
    }
  }
  /**
   * @hidden
   */
  handlePopupKeyDown(event) {
    if (event.keyCode === Keys.Escape) {
      this.toggleWithEvents(false);
      this.host.nativeElement.focus();
    }
    if (event.keyCode === Keys.Tab) {
      const currentElement = event.shiftKey ? this.firstFocusableElement.nativeElement : this.lastFocusableElement.nativeElement;
      const nextElement = event.shiftKey ? this.lastFocusableElement.nativeElement : this.firstFocusableElement.nativeElement;
      if (event.target === currentElement) {
        event.preventDefault();
        nextElement.focus();
      }
    }
  }
  /**
   * @hidden
   * Used by the FloatingLabel to determine if the component is empty.
   */
  isEmpty() {
    return false;
  }
  setHostElementAriaLabel() {
    const ariaLabelValue = `${this.value ? this.value : this.localizationService.get("colorPickerNoColor")}`;
    this.renderer.setAttribute(this.host.nativeElement, "aria-label", ariaLabelValue);
  }
  handleClasses(value, input) {
    const elem = this.host.nativeElement;
    const classes = getStylingClasses("picker", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  popupBlurInvalid(ev) {
    const focusInFlatColorPickerElement = this.popupRef.popupElement.contains(ev.relatedTarget);
    const hostClicked = closest(ev.relatedTarget, (element) => element === this.host.nativeElement);
    return Boolean(hostClicked || focusInFlatColorPickerElement);
  }
  toggleWithEvents(open) {
    const sameState = this.isOpen === open;
    if (this.disabled || this.readonly || sameState) {
      return;
    }
    let eventArgs;
    if (open) {
      eventArgs = new ColorPickerOpenEvent();
      this.open.emit(eventArgs);
    } else {
      eventArgs = new ColorPickerCloseEvent();
      this.close.emit(eventArgs);
    }
    if (!eventArgs.isDefaultPrevented()) {
      this.toggle(open);
    }
    if (open) {
      this.focusFirstElement();
    }
  }
  focusFirstElement() {
    this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
      var _a2, _b;
      if (this.flatColorPicker) {
        const gradientDragHandle = (_a2 = this.flatColorPicker.gradient) === null || _a2 === void 0 ? void 0 : _a2.gradientDragHandle;
        const palette = (_b = this.flatColorPicker.palette) === null || _b === void 0 ? void 0 : _b.host;
        const elementToFocus = gradientDragHandle ? gradientDragHandle : palette;
        elementToFocus.nativeElement.focus();
      }
    });
  }
  openPopup() {
    const horizontalAlign = this.direction === "rtl" ? "right" : "left";
    const anchorPosition = {
      horizontal: horizontalAlign,
      vertical: "bottom"
    };
    const popupPosition = {
      horizontal: horizontalAlign,
      vertical: "top"
    };
    this.popupRef = this.popupService.open({
      anchor: this.activeColor,
      animate: this.popupSettings.animate,
      appendTo: this.popupSettings.appendTo,
      popupAlign: popupPosition,
      anchorAlign: anchorPosition,
      popupClass: "k-colorpicker-popup",
      content: this.popupTemplate,
      positionMode: "absolute"
    });
    this.renderer.setAttribute(this.popupRef.popupElement.querySelector(".k-colorpicker-popup"), "id", `k-colorpicker-popup-${this.colorPickerId}`);
    this.popupSubs.add(this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.toggleWithEvents(false);
      if (!this.isOpen) {
        this.host.nativeElement.focus({
          preventScroll: true
        });
      }
    }));
  }
  closePopup() {
    if (!this.isOpen) {
      return;
    }
    this.popupSubs.unsubscribe();
    this.popupRef.close();
    this.popupRef = null;
  }
  get firstFocusableElement() {
    if (!this.flatColorPicker.header || this.views.length <= 1 && !this.flatColorPicker.clearButton) {
      const gradient = this.flatColorPicker.gradient;
      return gradient ? gradient.gradientDragHandle : this.flatColorPicker.palette.host;
    }
    return this.views.length > 1 ? this.flatColorPicker.header.viewButtonsCollection.toArray()[0] : this.flatColorPicker.header.clearButtonElement;
  }
  get lastFocusableElement() {
    if (this.preview) {
      return this.flatColorPicker.footer.lastButton;
    }
    if (this.flatColorPicker.palette) {
      return this.flatColorPicker.palette.host;
    }
    const gradient = this.flatColorPicker.gradient;
    const inputs = gradient && gradient.inputs;
    if (gradient && inputs && inputs.formatView === "hex") {
      return inputs.hexInput;
    }
    return this.gradientSettings.opacity ? inputs.opacityInput.numericInput : inputs.blueInput.numericInput;
  }
  handleDomEvents(action, events) {
    const hostElement = this.host.nativeElement;
    events.forEach((ev) => hostElement[`${action}EventListener`](ev, this.domFocusListener, true));
  }
  initDomEvents() {
    if (!this.host) {
      return;
    }
    const hostElement = this.host.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subscriptions.add(this.renderer.listen(hostElement, "focusin", () => {
        this.handleWrapperFocus();
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "focusout", (event) => {
        const closestPopup = this.popupRef ? closest(event.relatedTarget, (element) => element === this.flatColorPicker.host.nativeElement) : false;
        const closestWrapper = closest(event.relatedTarget, (element) => element === this.host.nativeElement);
        if (!closestPopup && !closestWrapper) {
          this.handleWrapperBlur();
        }
      }));
      this.handleDomEvents("add", DOM_FOCUS_EVENTS);
      this.subscriptions.add(this.renderer.listen(hostElement, "keydown", (event) => {
        this.handleWrapperKeyDown(event);
      }));
      this.subscriptions.add(this.renderer.listen(hostElement, "click", (event) => {
        this.ngZone.run(() => {
          this.handleWrapperClick(event);
        });
      }));
    });
  }
  handleHostId() {
    const hostElement = this.host.nativeElement;
    const existingId = hostElement.getAttribute("id");
    if (existingId) {
      this.focusableId = existingId;
    } else {
      const id = `k-${guid()}`;
      hostElement.setAttribute("id", id);
      this.focusableId = id;
    }
  }
};
ColorPickerComponent.ɵfac = function ColorPickerComponent_Factory(t) {
  return new (t || ColorPickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Injector));
};
ColorPickerComponent.ɵcmp = ɵɵdefineComponent({
  type: ColorPickerComponent,
  selectors: [["kendo-colorpicker"]],
  viewQuery: function ColorPickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c47, 7, ViewContainerRef);
      ɵɵviewQuery(_c48, 7);
      ɵɵviewQuery(_c49, 7);
      ɵɵviewQuery(_c50, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.activeColor = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.flatColorPicker = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function ColorPickerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.disabledClass)("aria-readonly", ctx.ariaReadonly)("aria-expanded", ctx.ariaExpanded)("tabindex", ctx.hostTabindex)("dir", ctx.direction)("role", ctx.role)("aria-haspopup", ctx.hasPopup)("aria-invalid", ctx.isControlInvalid);
      ɵɵclassProp("k-colorpicker", ctx.hostClasses)("k-icon-picker", ctx.hostClasses)("k-picker", ctx.hostClasses)("k-focus", ctx.focusedClass)("k-disabled", ctx.disabledClass)("k-readonly", ctx.readonly);
    }
  },
  inputs: {
    views: "views",
    view: "view",
    activeView: "activeView",
    readonly: "readonly",
    disabled: "disabled",
    format: "format",
    value: "value",
    popupSettings: "popupSettings",
    paletteSettings: "paletteSettings",
    gradientSettings: "gradientSettings",
    icon: "icon",
    iconClass: "iconClass",
    svgIcon: "svgIcon",
    clearButton: "clearButton",
    tabindex: "tabindex",
    preview: "preview",
    actionsLayout: "actionsLayout",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode"
  },
  outputs: {
    valueChange: "valueChange",
    open: "open",
    close: "close",
    onFocus: "focus",
    onBlur: "blur",
    cancel: "cancel",
    activeColorClick: "activeColorClick",
    clearButtonClick: "clearButtonClick",
    activeViewChange: "activeViewChange"
  },
  exportAs: ["kendoColorPicker"],
  features: [ɵɵProvidersFeature([{
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ColorPickerComponent)
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => ColorPickerComponent)
  }, ColorPickerLocalizationService, {
    provide: LocalizationService,
    useExisting: ColorPickerLocalizationService
  }, {
    provide: L10N_PREFIX,
    useValue: "kendo.colorpicker"
  }]), ɵɵNgOnChangesFeature],
  decls: 11,
  vars: 8,
  consts: () => {
    let i18n_51;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_51 = goog.getMsg("Colorpicker no color chosen");
      i18n_51 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_51;
    } else {
      i18n_51 = $localize`:kendo.colorpicker.colorPickerNoColor|The aria-label applied to the ColorPicker component when the value is empty.:Colorpicker no color chosen`;
    }
    let i18n_52;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_52 = goog.getMsg("Flatcolorpicker no color chosen");
      i18n_52 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_52;
    } else {
      i18n_52 = $localize`:kendo.colorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty.:Flatcolorpicker no color chosen`;
    }
    let i18n_53;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_53 = goog.getMsg("Colorgradient no color chosen");
      i18n_53 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_53;
    } else {
      i18n_53 = $localize`:kendo.colorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty.:Colorgradient no color chosen`;
    }
    let i18n_54;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_54 = goog.getMsg("Colorpalette no color chosen");
      i18n_54 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_54;
    } else {
      i18n_54 = $localize`:kendo.colorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty.:Colorpalette no color chosen`;
    }
    let i18n_55;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_55 = goog.getMsg("Choose color");
      i18n_55 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_55;
    } else {
      i18n_55 = $localize`:kendo.colorpicker.colorGradientHandle|The title for the gradient color drag handle chooser.:Choose color`;
    }
    let i18n_56;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_56 = goog.getMsg("Clear value");
      i18n_56 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_56;
    } else {
      i18n_56 = $localize`:kendo.colorpicker.clearButton|The title for the clear button.:Clear value`;
    }
    let i18n_57;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_57 = goog.getMsg("Set hue");
      i18n_57 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_57;
    } else {
      i18n_57 = $localize`:kendo.colorpicker.hueSliderHandle|The title for the hue slider handle.:Set hue`;
    }
    let i18n_58;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_58 = goog.getMsg("Set opacity");
      i18n_58 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_58;
    } else {
      i18n_58 = $localize`:kendo.colorpicker.opacitySliderHandle|The title for the opacity slider handle.:Set opacity`;
    }
    let i18n_59;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_59 = goog.getMsg("Contrast ratio");
      i18n_59 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_59;
    } else {
      i18n_59 = $localize`:kendo.colorpicker.contrastRatio|The contrast ratio message for the contrast tool.:Contrast ratio`;
    }
    let i18n_60;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_60 = goog.getMsg("Color preview");
      i18n_60 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_60;
    } else {
      i18n_60 = $localize`:kendo.colorpicker.previewColor|The message for the color preview pane.:Color preview`;
    }
    let i18n_61;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_61 = goog.getMsg("Revert selection");
      i18n_61 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_61;
    } else {
      i18n_61 = $localize`:kendo.colorpicker.revertSelection|The message for the selected color pane.:Revert selection`;
    }
    let i18n_62;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_62 = goog.getMsg("Gradient view");
      i18n_62 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_62;
    } else {
      i18n_62 = $localize`:kendo.colorpicker.gradientView|The message for the gradient view button.:Gradient view`;
    }
    let i18n_63;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_63 = goog.getMsg("Palette view");
      i18n_63 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_63;
    } else {
      i18n_63 = $localize`:kendo.colorpicker.paletteView|The message for the palette view button.:Palette view`;
    }
    let i18n_64;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_64 = goog.getMsg("Change color format");
      i18n_64 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_64;
    } else {
      i18n_64 = $localize`:kendo.colorpicker.formatButton|The message for the input format toggle button.:Change color format`;
    }
    let i18n_65;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_65 = goog.getMsg("Apply");
      i18n_65 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_65;
    } else {
      i18n_65 = $localize`:kendo.colorpicker.applyButton|The message for the Apply action button.:Apply`;
    }
    let i18n_66;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_66 = goog.getMsg("Cancel");
      i18n_66 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_66;
    } else {
      i18n_66 = $localize`:kendo.colorpicker.cancelButton|The message for the Cancel action button.:Cancel`;
    }
    let i18n_67;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_67 = goog.getMsg("Red channel");
      i18n_67 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_67;
    } else {
      i18n_67 = $localize`:kendo.colorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:Red channel`;
    }
    let i18n_68;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_68 = goog.getMsg("Green channel");
      i18n_68 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_68;
    } else {
      i18n_68 = $localize`:kendo.colorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel.:Green channel`;
    }
    let i18n_69;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_69 = goog.getMsg("Blue channel");
      i18n_69 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_69;
    } else {
      i18n_69 = $localize`:kendo.colorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel.:Blue channel`;
    }
    let i18n_70;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_70 = goog.getMsg("Alpha channel");
      i18n_70 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_70;
    } else {
      i18n_70 = $localize`:kendo.colorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel.:Alpha channel`;
    }
    let i18n_71;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_71 = goog.getMsg("R");
      i18n_71 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_71;
    } else {
      i18n_71 = $localize`:kendo.colorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel.:R`;
    }
    let i18n_72;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_72 = goog.getMsg("G");
      i18n_72 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_72;
    } else {
      i18n_72 = $localize`:kendo.colorpicker.greenInputPlaceholder|The placeholder for the green color input.:G`;
    }
    let i18n_73;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_73 = goog.getMsg("B");
      i18n_73 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_73;
    } else {
      i18n_73 = $localize`:kendo.colorpicker.blueInputPlaceholder|The placeholder for the blue color input.:B`;
    }
    let i18n_74;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_74 = goog.getMsg("HEX");
      i18n_74 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_74;
    } else {
      i18n_74 = $localize`:kendo.colorpicker.hexInputPlaceholder|The placeholder for the HEX color input.:HEX`;
    }
    return [["activeColor", ""], ["popupTemplate", ""], ["container", ""], ["flatColorPicker", ""], ["kendoColorPickerLocalizedMessages", "", "colorPickerNoColor", i18n_51, "flatColorPickerNoColor", i18n_52, "colorGradientNoColor", i18n_53, "colorPaletteNoColor", i18n_54, "colorGradientHandle", i18n_55, "clearButton", i18n_56, "hueSliderHandle", i18n_57, "opacitySliderHandle", i18n_58, "contrastRatio", i18n_59, "previewColor", i18n_60, "revertSelection", i18n_61, "gradientView", i18n_62, "paletteView", i18n_63, "formatButton", i18n_64, "applyButton", i18n_65, "cancelButton", i18n_66, "redChannelLabel", i18n_67, "greenChannelLabel", i18n_68, "blueChannelLabel", i18n_69, "alphaChannelLabel", i18n_70, "redChannelLabel", i18n_71, "greenInputPlaceholder", i18n_72, "blueInputPlaceholder", i18n_73, "hexInputPlaceholder", i18n_74], [1, "k-input-inner"], [1, "k-value-icon", "k-color-preview", 3, "ngClass"], ["innerCssClass", "k-color-preview-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], [1, "k-color-preview-mask"], ["kendoButton", "", "tabindex", "-1", "type", "button", "icon", "caret-alt-down", "aria-hidden", "true", 1, "k-input-button", 3, "svgIcon"], ["innerCssClass", "k-color-preview-icon", 3, "name", "customFontClass", "svgIcon"], [3, "cancel", "focusout", "valueChange", "keydown", "activeViewChange", "clearButtonClick", "actionButtonClick", "value", "format", "views", "activeView", "actionsLayout", "preview", "gradientSettings", "paletteSettings", "clearButton"]];
  },
  template: function ColorPickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 4);
      ɵɵelementStart(1, "span", 5, 0)(3, "span", 6);
      ɵɵtemplate(4, ColorPickerComponent_kendo_icon_wrapper_4_Template, 1, 3, "kendo-icon-wrapper", 7);
      ɵɵelement(5, "span", 8);
      ɵɵelementEnd()();
      ɵɵelement(6, "button", 9);
      ɵɵtemplate(7, ColorPickerComponent_ng_template_7_Template, 2, 9, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      ɵɵelementContainer(9, null, 2);
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c51, ctx.customIconStyles || ctx.iconStyles || ctx.svgIcon, !ctx.value));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.iconClass || ctx.icon || ctx.svgIcon);
      ɵɵadvance();
      ɵɵstyleProp("background-color", ctx.value);
      ɵɵadvance();
      ɵɵproperty("svgIcon", ctx.arrowDownIcon);
    }
  },
  dependencies: [NgClass, NgIf, ButtonComponent, IconWrapperComponent, FlatColorPickerComponent, LocalizedColorPickerMessagesDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoColorPicker",
      selector: "kendo-colorpicker",
      providers: [{
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ColorPickerComponent)
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => ColorPickerComponent)
      }, ColorPickerLocalizationService, {
        provide: LocalizationService,
        useExisting: ColorPickerLocalizationService
      }, {
        provide: L10N_PREFIX,
        useValue: "kendo.colorpicker"
      }],
      template: `
        <ng-container kendoColorPickerLocalizedMessages
            i18n-colorPickerNoColor="kendo.colorpicker.colorPickerNoColor|The aria-label applied to the ColorPicker component when the value is empty."
            colorPickerNoColor="Colorpicker no color chosen"
            i18n-flatColorPickerNoColor="kendo.colorpicker.flatColorPickerNoColor|The aria-label applied to the FlatColorPicker component when the value is empty."
            flatColorPickerNoColor="Flatcolorpicker no color chosen"
            i18n-colorGradientNoColor="kendo.colorpicker.colorGradientNoColor|The aria-label applied to the ColorGradient component when the value is empty."
            colorGradientNoColor="Colorgradient no color chosen"
            i18n-colorPaletteNoColor="kendo.colorpicker.colorPaletteNoColor|The aria-label applied to the ColorPalette component when the value is empty."
            colorPaletteNoColor="Colorpalette no color chosen"
            i18n-colorGradientHandle="kendo.colorpicker.colorGradientHandle|The title for the gradient color drag handle chooser."
            colorGradientHandle="Choose color"
            i18n-clearButton="kendo.colorpicker.clearButton|The title for the clear button."
            clearButton="Clear value"
            i18n-hueSliderHandle="kendo.colorpicker.hueSliderHandle|The title for the hue slider handle."
            hueSliderHandle="Set hue"
            i18n-opacitySliderHandle="kendo.colorpicker.opacitySliderHandle|The title for the opacity slider handle."
            opacitySliderHandle="Set opacity"
            i18n-contrastRatio="kendo.colorpicker.contrastRatio|The contrast ratio message for the contrast tool."
            contrastRatio="Contrast ratio"
            i18n-previewColor="kendo.colorpicker.previewColor|The message for the color preview pane."
            previewColor="Color preview"
            i18n-revertSelection="kendo.colorpicker.revertSelection|The message for the selected color pane."
            revertSelection="Revert selection"
            i18n-gradientView="kendo.colorpicker.gradientView|The message for the gradient view button."
            gradientView="Gradient view"
            i18n-paletteView="kendo.colorpicker.paletteView|The message for the palette view button."
            paletteView="Palette view"
            i18n-formatButton="kendo.colorpicker.formatButton|The message for the input format toggle button."
            formatButton="Change color format"
            i18n-applyButton="kendo.colorpicker.applyButton|The message for the Apply action button."
            applyButton="Apply"
            i18n-cancelButton="kendo.colorpicker.cancelButton|The message for the Cancel action button."
            cancelButton="Cancel"
            i18n-redChannelLabel="kendo.colorpicker.redChannelLabel|The label of the NumericTextBox representing the red color channel."
            redChannelLabel="Red channel"
            i18n-greenChannelLabel="kendo.colorpicker.greenChannelLabel|The label of the NumericTextBox representing the green color channel."
            greenChannelLabel="Green channel"
            i18n-blueChannelLabel="kendo.colorpicker.blueChannelLabel|The label of the NumericTextBox representing the blue color channel."
            blueChannelLabel="Blue channel"
            i18n-alphaChannelLabel="kendo.colorpicker.alphaChannelLabel|The label of the NumericTextBox representing the alpha color channel."
            alphaChannelLabel="Alpha channel"
            i18n-redInputPlaceholder="kendo.colorpicker.redInputPlaceholder|The placeholder for the red color input."
            redChannelLabel="R"
            i18n-greenInputPlaceholder="kendo.colorpicker.greenInputPlaceholder|The placeholder for the green color input."
            greenInputPlaceholder="G"
            i18n-blueInputPlaceholder="kendo.colorpicker.blueInputPlaceholder|The placeholder for the blue color input."
            blueInputPlaceholder="B"
            i18n-hexInputPlaceholder="kendo.colorpicker.hexInputPlaceholder|The placeholder for the HEX color input."
            hexInputPlaceholder="HEX">
        </ng-container>
        <span #activeColor class="k-input-inner">
            <span
                class="k-value-icon k-color-preview"
                [ngClass]="{'k-icon-color-preview': customIconStyles || iconStyles || svgIcon, 'k-no-color': !value}"
            >
                <kendo-icon-wrapper
                    *ngIf="iconClass || icon || svgIcon"
                    [name]="iconStyles"
                    innerCssClass="k-color-preview-icon"
                    [customFontClass]="customIconStyles"
                    [svgIcon]="svgIcon"
                >
                </kendo-icon-wrapper>
                <span class="k-color-preview-mask" [style.background-color]="value"></span>
            </span>

        </span>
        <button
            kendoButton
            tabindex="-1"
            type="button"
            icon="caret-alt-down"
            [svgIcon]="arrowDownIcon"
            aria-hidden="true"
            class="k-input-button"
        >
        </button>
        <ng-template #popupTemplate>
            <kendo-flatcolorpicker
                #flatColorPicker
                [value]="value"
                [format]="format"
                [views]="views"
                [activeView]="activeView"
                [actionsLayout]="actionsLayout"
                [preview]="preview"
                [gradientSettings]="gradientSettings"
                [paletteSettings]="paletteSettings"
                [clearButton]="clearButton"
                (cancel)="handleCancelEvent($event)"
                (focusout)="handlePopupBlur($event)"
                (valueChange)="handleValueChange($event)"
                (keydown)="handlePopupKeyDown($event)"
                (activeViewChange)="activeViewChange.emit($event)"
                (clearButtonClick)="clearButtonClick.emit()"
                (actionButtonClick)="togglePopup()">
            </kendo-flatcolorpicker>
        </ng-template>
        <ng-container #container></ng-container>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: PopupService
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }, {
      type: Injector
    }];
  }, {
    hostClasses: [{
      type: HostBinding,
      args: ["class.k-colorpicker"]
    }, {
      type: HostBinding,
      args: ["class.k-icon-picker"]
    }, {
      type: HostBinding,
      args: ["class.k-picker"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    ariaReadonly: [{
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }],
    ariaExpanded: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    hostTabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    hasPopup: [{
      type: HostBinding,
      args: ["attr.aria-haspopup"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    views: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    activeView: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    disabled: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    paletteSettings: [{
      type: Input
    }],
    gradientSettings: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    clearButton: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    preview: [{
      type: Input
    }],
    actionsLayout: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    cancel: [{
      type: Output
    }],
    activeColorClick: [{
      type: Output
    }],
    clearButtonClick: [{
      type: Output
    }],
    activeViewChange: [{
      type: Output
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    activeColor: [{
      type: ViewChild,
      args: ["activeColor", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    flatColorPicker: [{
      type: ViewChild,
      args: ["flatColorPicker", {
        static: false
      }]
    }]
  });
})();
var ColorPickerCustomMessagesComponent = class extends ColorPickerMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
ColorPickerCustomMessagesComponent.ɵfac = function ColorPickerCustomMessagesComponent_Factory(t) {
  return new (t || ColorPickerCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
ColorPickerCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: ColorPickerCustomMessagesComponent,
  selectors: [["kendo-colorpicker-messages"], ["kendo-flatcolorpicker-messages"], ["kendo-colorgradient-messages"], ["kendo-colorpalette-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: ColorPickerMessages,
    useExisting: forwardRef(() => ColorPickerCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function ColorPickerCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ColorPickerMessages,
        useExisting: forwardRef(() => ColorPickerCustomMessagesComponent)
      }],
      selector: "kendo-colorpicker-messages, kendo-flatcolorpicker-messages, kendo-colorgradient-messages, kendo-colorpalette-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var FocusOnDomReadyDirective = class {
  constructor(host, ngZone) {
    this.host = host;
    this.ngZone = ngZone;
  }
  ngAfterContentInit() {
    this.focusOnNextTick();
  }
  focusOnNextTick() {
    this.ngZone.runOutsideAngular(() => setTimeout(() => this.host.nativeElement.focus()));
  }
};
FocusOnDomReadyDirective.ɵfac = function FocusOnDomReadyDirective_Factory(t) {
  return new (t || FocusOnDomReadyDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
FocusOnDomReadyDirective.ɵdir = ɵɵdefineDirective({
  type: FocusOnDomReadyDirective,
  selectors: [["", "kendoFocusOnDomReady", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusOnDomReadyDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFocusOnDomReady]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var PUBLIC_DIRECTIVES$1 = [ColorPickerComponent, ColorPaletteComponent, ColorGradientComponent, FlatColorPickerComponent, LocalizedColorPickerMessagesDirective, ColorPickerCustomMessagesComponent];
var INTERNAL_DIRECTIVES = [NumericLabelDirective, ColorInputComponent, FocusOnDomReadyDirective, ContrastComponent, ContrastValidationComponent, FlatColorPickerHeaderComponent, FlatColorPickerActionButtonsComponent, ColorContrastSvgComponent];
var ColorPickerModule = class {
};
ColorPickerModule.ɵfac = function ColorPickerModule_Factory(t) {
  return new (t || ColorPickerModule)();
};
ColorPickerModule.ɵmod = ɵɵdefineNgModule({
  type: ColorPickerModule,
  declarations: [ColorPickerComponent, ColorPaletteComponent, ColorGradientComponent, FlatColorPickerComponent, LocalizedColorPickerMessagesDirective, ColorPickerCustomMessagesComponent, NumericLabelDirective, ColorInputComponent, FocusOnDomReadyDirective, ContrastComponent, ContrastValidationComponent, FlatColorPickerHeaderComponent, FlatColorPickerActionButtonsComponent, ColorContrastSvgComponent],
  imports: [SliderModule, NumericTextBoxModule, CommonModule, PopupModule, DraggableModule, ButtonModule, IconsModule],
  exports: [ColorPickerComponent, ColorPaletteComponent, ColorGradientComponent, FlatColorPickerComponent, LocalizedColorPickerMessagesDirective, ColorPickerCustomMessagesComponent]
});
ColorPickerModule.ɵinj = ɵɵdefineInjector({
  imports: [SliderModule, NumericTextBoxModule, CommonModule, PopupModule, DraggableModule, ButtonModule, IconsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorPickerModule, [{
    type: NgModule,
    args: [{
      declarations: [PUBLIC_DIRECTIVES$1, INTERNAL_DIRECTIVES],
      exports: [PUBLIC_DIRECTIVES$1],
      imports: [SliderModule, NumericTextBoxModule, CommonModule, PopupModule, DraggableModule, ButtonModule, IconsModule]
    }]
  }], null, null);
})();
var DEFAULT_SIZE$3 = "medium";
var DEFAULT_ROUNDED$2 = "medium";
var CheckBoxDirective = class {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.kendoClass = true;
    this._size = "medium";
    this._rounded = "medium";
  }
  /**
   * The size property specifies the width and height of the CheckBox
   * ([see example]({% slug appearance_checkboxdirective %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$3;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * The rounded property specifies the border radius of the CheckBox
   * ([see example](slug appearance_checkboxdirective#toc-roundness)).
   *
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("checkbox", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
};
CheckBoxDirective.ɵfac = function CheckBoxDirective_Factory(t) {
  return new (t || CheckBoxDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
CheckBoxDirective.ɵdir = ɵɵdefineDirective({
  type: CheckBoxDirective,
  selectors: [["input", "kendoCheckBox", ""]],
  hostVars: 2,
  hostBindings: function CheckBoxDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-checkbox", ctx.kendoClass);
    }
  },
  inputs: {
    size: "size",
    rounded: "rounded"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxDirective, [{
    type: Directive,
    args: [{
      selector: "input[kendoCheckBox]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    kendoClass: [{
      type: HostBinding,
      args: ["class.k-checkbox"]
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }]
  });
})();
var FOCUSED = "k-focus";
var DEFAULT_SIZE$2 = "medium";
var RadioCheckBoxBase = class {
  constructor(componentType, hostElement, renderer, cdr, ngZone, injector) {
    this.componentType = componentType;
    this.hostElement = hostElement;
    this.renderer = renderer;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
    this.focusableId = `k-${guid()}`;
    this.disabled = false;
    this.tabindex = 0;
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.handleInputBlur = () => {
      this.cdr.markForCheck();
      if (requiresZoneOnBlur(this.control)) {
        this.ngZone.run(() => {
          this.ngTouched();
        });
      }
    };
    this.focusChangedProgrammatically = false;
    this.parsedAttributes = {};
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    this._isFocused = false;
    this._size = DEFAULT_SIZE$2;
  }
  /**
   * @hidden
   */
  set tabIndex(tabIndex) {
    this.tabindex = tabIndex;
  }
  get tabIndex() {
    return this.tabindex;
  }
  /**
   * The size property specifies the width and height of the component.
   *
   * @default 'medium'
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$2;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the HTML attributes of the inner focusable input element. Attributes which are essential for certain component functionalities cannot be changed.
   */
  set inputAttributes(attributes) {
    if (isObjectPresent(this.parsedAttributes)) {
      removeHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement);
    }
    this._inputAttributes = attributes;
    this.parsedAttributes = this.inputAttributes ? parseAttributes(this.inputAttributes, this.defaultAttributes) : this.inputAttributes;
    this.setInputAttributes();
  }
  get inputAttributes() {
    return this._inputAttributes;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl, null);
  }
  /**
   * Focuses the component.
   */
  focus() {
    if (!this.input) {
      return;
    }
    this.focusChangedProgrammatically = true;
    this.isFocused = true;
    this.input.nativeElement.focus();
    this.focusChangedProgrammatically = false;
  }
  /**
   * Blurs the component.
   */
  blur() {
    this.focusChangedProgrammatically = true;
    const isFocusedElement = this.hostElement.nativeElement.querySelector(":focus");
    if (isFocusedElement) {
      isFocusedElement.blur();
    }
    this.isFocused = false;
    this.focusChangedProgrammatically = false;
  }
  /**
   * @hidden
   */
  handleFocus() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically && hasObservers(this.onFocus)) {
        this.onFocus.emit();
      }
      this.isFocused = true;
    });
  }
  /**
   * @hidden
   */
  handleBlur() {
    this.ngZone.run(() => {
      if (!this.focusChangedProgrammatically) {
        this.ngTouched();
        this.onBlur.emit();
      }
      this.isFocused = false;
    });
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  /**
   * @hidden
   */
  get isControlRequired() {
    var _a2;
    return isControlRequired((_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.control);
  }
  /**
   * @hidden
   */
  get isControlInvalid() {
    return this.control && this.control.touched && !this.control.valid;
  }
  /**
   * @hidden
   */
  get isFocused() {
    return this._isFocused;
  }
  /**
   * @hidden
   */
  set isFocused(value) {
    if (this._isFocused !== value && this.input) {
      const element = this.input.nativeElement;
      if (value && !this.disabled) {
        this.renderer.addClass(element, FOCUSED);
      } else {
        this.renderer.removeClass(element, FOCUSED);
      }
      this._isFocused = value;
    }
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.cdr.markForCheck();
    this.disabled = isDisabled;
  }
  get defaultAttributes() {
    return;
  }
  /**
   * @hidden
   */
  writeValue(_value) {
  }
  handleClasses(value, input) {
    if (!isPresent(this.input)) {
      return;
    }
    const inputElem = this.input.nativeElement;
    const classes = getStylingClasses(this.componentType, input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(inputElem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(inputElem, classes.toAdd);
    }
  }
  setInputAttributes() {
    setHTMLAttributes(this.parsedAttributes, this.renderer, this.input.nativeElement, this.ngZone);
  }
};
RadioCheckBoxBase.ɵfac = function RadioCheckBoxBase_Factory(t) {
  return new (t || RadioCheckBoxBase)(ɵɵdirectiveInject(COMPONENT_TYPE), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector));
};
RadioCheckBoxBase.ɵcmp = ɵɵdefineComponent({
  type: RadioCheckBoxBase,
  selectors: [["ng-component"]],
  viewQuery: function RadioCheckBoxBase_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c17, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    }
  },
  inputs: {
    focusableId: "focusableId",
    title: "title",
    name: "name",
    disabled: "disabled",
    tabindex: "tabindex",
    tabIndex: "tabIndex",
    value: "value",
    size: "size",
    inputAttributes: "inputAttributes"
  },
  outputs: {
    onFocus: "focus",
    onBlur: "blur"
  },
  decls: 0,
  vars: 0,
  template: function RadioCheckBoxBase_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioCheckBoxBase, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [COMPONENT_TYPE]
      }]
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: Injector
    }];
  }, {
    focusableId: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    inputAttributes: [{
      type: Input
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        static: true
      }]
    }]
  });
})();
var DEFAULT_ROUNDED$1 = "medium";
var CheckBoxComponent = class extends RadioCheckBoxBase {
  constructor(renderer, hostElement, cdr, ngZone, injector) {
    super("checkbox", hostElement, renderer, cdr, ngZone, injector);
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
    this.hostClass = true;
    this.checkedStateChange = new EventEmitter();
    this._rounded = DEFAULT_ROUNDED$1;
    this._checkedState = false;
    this.handleChange = ($event) => {
      this.ngZone.run(() => {
        this.checkedState = $event && $event.target && $event.target.checked;
        this.checkedStateChange.emit(this.checkedState);
        this.ngChange(this.checkedState);
      });
    };
    validatePackage(packageMetadata2);
  }
  /**
   * Sets the checked state of the component.
   *
   * @default false
   */
  set checkedState(value) {
    this._checkedState = value;
    if (!isPresent(this.input)) {
      return;
    }
    this.input.nativeElement.indeterminate = value === "indeterminate";
  }
  get checkedState() {
    return this._checkedState;
  }
  /**
   * The rounded property specifies the border radius of the CheckBox
   * ([see example](slug:appearance_checkboxdirective#toc-roundness)).
   *
   * @default 'medium'
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `none`
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * @hidden
   */
  get isChecked() {
    return typeof this.checkedState === "boolean" && this.checkedState;
  }
  /**
   * @hidden
   */
  get isIndeterminate() {
    return typeof this.checkedState === "string" && this.checkedState === "indeterminate";
  }
  get defaultAttributes() {
    return {
      type: "checkbox",
      id: this.focusableId,
      title: this.title,
      tabindex: this.tabindex,
      tabIndex: this.tabindex,
      disabled: this.disabled ? "" : null,
      value: this.value,
      checked: this.isChecked,
      "aria-invalid": this.isControlInvalid
    };
  }
  ngAfterViewInit() {
    const stylingInputs = ["size", "rounded"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.input.nativeElement.indeterminate = this.checkedState === "indeterminate";
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.checkedState = value;
  }
};
CheckBoxComponent.ɵfac = function CheckBoxComponent_Factory(t) {
  return new (t || CheckBoxComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector));
};
CheckBoxComponent.ɵcmp = ɵɵdefineComponent({
  type: CheckBoxComponent,
  selectors: [["kendo-checkbox"]],
  hostVars: 2,
  hostBindings: function CheckBoxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-checkbox-wrap", ctx.hostClass);
    }
  },
  inputs: {
    checkedState: "checkedState",
    rounded: "rounded"
  },
  outputs: {
    checkedStateChange: "checkedStateChange"
  },
  exportAs: ["kendoCheckBox"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.checkbox"
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckBoxComponent),
    multi: true
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => CheckBoxComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 22,
  consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["type", "checkbox", 1, "k-checkbox", 3, "id", "disabled", "value", "checked", "kendoEventsOutsideAngular"]],
  template: function CheckBoxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainerStart(0, 1);
      ɵɵtwoWayListener("isFocusedChange", function CheckBoxComponent_Template_ng_container_isFocusedChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function CheckBoxComponent_Template_ng_container_handleBlur_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function CheckBoxComponent_Template_ng_container_onFocus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵelement(1, "input", 2, 0);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance();
      ɵɵclassProp("k-disabled", ctx.disabled)("k-checked", ctx.isChecked)("k-indeterminate", ctx.isIndeterminate)("k-invalid", ctx.isControlInvalid);
      ɵɵproperty("id", ctx.focusableId)("disabled", ctx.disabled)("value", ctx.value)("checked", ctx.isChecked)("kendoEventsOutsideAngular", ɵɵpureFunction2(19, _c522, ctx.handleInputBlur, ctx.handleChange));
      ɵɵattribute("title", ctx.title)("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
    }
  },
  dependencies: [EventsOutsideAngularDirective, SharedInputEventsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoCheckBox",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.checkbox"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckBoxComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => CheckBoxComponent)
      }],
      selector: "kendo-checkbox",
      template: `
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <input #input
                type="checkbox"
                class="k-checkbox"
                [id]="focusableId"
                [attr.title]="title"
                [disabled]="disabled"
                [class.k-disabled]="disabled"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [value]="value"
                [checked]="isChecked"
                [class.k-checked]="isChecked"
                [class.k-indeterminate]="isIndeterminate"
                [class.k-invalid]="isControlInvalid"
                [attr.aria-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    blur: handleInputBlur,
                    change: handleChange
                }"
            />
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: Injector
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-checkbox-wrap"]
    }],
    checkedState: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    checkedStateChange: [{
      type: Output
    }]
  });
})();
var CheckBoxModule = class {
};
CheckBoxModule.ɵfac = function CheckBoxModule_Factory(t) {
  return new (t || CheckBoxModule)();
};
CheckBoxModule.ɵmod = ɵɵdefineNgModule({
  type: CheckBoxModule,
  declarations: [CheckBoxDirective, CheckBoxComponent],
  imports: [CommonModule, EventsModule, SharedEventsModule],
  exports: [CheckBoxDirective, CheckBoxComponent]
});
CheckBoxModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, SharedEventsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckBoxModule, [{
    type: NgModule,
    args: [{
      declarations: [CheckBoxDirective, CheckBoxComponent],
      exports: [CheckBoxDirective, CheckBoxComponent],
      imports: [CommonModule, EventsModule, SharedEventsModule]
    }]
  }], null, null);
})();
var DEFAULT_SIZE$1 = "medium";
var RadioButtonDirective = class {
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.kendoClass = true;
    this._size = "medium";
    validatePackage(packageMetadata2);
  }
  /**
   * The size property specifies the width and height of the RadioButton
   * ([see example]({% slug appearance_radiobuttondirective %}#toc-size)).
   * The possible values are:
   * * `small`
   * * `medium` (default)
   * * `large`
   * * `none`
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  handleClasses(value, input) {
    const elem = this.hostElement.nativeElement;
    const classes = getStylingClasses("radio", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
};
RadioButtonDirective.ɵfac = function RadioButtonDirective_Factory(t) {
  return new (t || RadioButtonDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
};
RadioButtonDirective.ɵdir = ɵɵdefineDirective({
  type: RadioButtonDirective,
  selectors: [["input", "kendoRadioButton", ""]],
  hostVars: 2,
  hostBindings: function RadioButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("k-radio", ctx.kendoClass);
    }
  },
  inputs: {
    size: "size"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonDirective, [{
    type: Directive,
    args: [{
      selector: "input[kendoRadioButton]"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    kendoClass: [{
      type: HostBinding,
      args: ["class.k-radio"]
    }],
    size: [{
      type: Input
    }]
  });
})();
var RadioButtonComponent = class extends RadioCheckBoxBase {
  constructor(renderer, hostElement, cdr, ngZone, injector, localizationService) {
    super("radio", hostElement, renderer, cdr, ngZone, injector);
    this.renderer = renderer;
    this.hostElement = hostElement;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.injector = injector;
    this.localizationService = localizationService;
    this.hostClass = true;
    this.checked = false;
    this.checkedChange = new EventEmitter();
    this.subs = new import_rxjs2.Subscription();
    this.handleChange = ($event) => {
      this.ngZone.run(() => {
        this.checked = $event.target.checked;
        this.checkedChange.emit(this.checked);
        this.ngChange($event.target.value);
      });
    };
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  get defaultAttributes() {
    return {
      type: "radio",
      id: this.focusableId,
      title: this.title,
      tabindex: this.tabindex,
      tabIndex: this.tabindex,
      disabled: this.disabled ? "" : null,
      value: this.value,
      checked: this.checked,
      name: this.name,
      "aria-invalid": this.isControlInvalid
    };
  }
  ngOnInit() {
    super.ngOnInit();
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    if (this.control) {
      this.subs.add(this.control.valueChanges.subscribe((e) => {
        this.control.control.setValue(e, {
          emitEvent: false
        });
      }));
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.checked = value === this.value;
  }
};
RadioButtonComponent.ɵfac = function RadioButtonComponent_Factory(t) {
  return new (t || RadioButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(LocalizationService));
};
RadioButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: RadioButtonComponent,
  selectors: [["kendo-radiobutton"]],
  hostVars: 3,
  hostBindings: function RadioButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-radio-wrap", ctx.hostClass);
    }
  },
  inputs: {
    checked: "checked"
  },
  outputs: {
    checkedChange: "checkedChange"
  },
  exportAs: ["kendoRadioButton"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.radiobutton"
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => RadioButtonComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 3,
  vars: 21,
  consts: [["input", ""], ["kendoInputSharedEvents", "", 3, "isFocusedChange", "handleBlur", "onFocus", "hostElement", "isFocused"], ["type", "radio", 1, "k-radio", 3, "id", "disabled", "value", "name", "checked", "kendoEventsOutsideAngular"]],
  template: function RadioButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementContainerStart(0, 1);
      ɵɵtwoWayListener("isFocusedChange", function RadioButtonComponent_Template_ng_container_isFocusedChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isFocused, $event) || (ctx.isFocused = $event);
        return ɵɵresetView($event);
      });
      ɵɵlistener("handleBlur", function RadioButtonComponent_Template_ng_container_handleBlur_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleBlur());
      })("onFocus", function RadioButtonComponent_Template_ng_container_onFocus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleFocus());
      });
      ɵɵelement(1, "input", 2, 0);
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵproperty("hostElement", ctx.hostElement);
      ɵɵtwoWayProperty("isFocused", ctx.isFocused);
      ɵɵadvance();
      ɵɵclassProp("k-disabled", ctx.disabled)("k-checked", ctx.checked)("k-invalid", ctx.isControlInvalid);
      ɵɵproperty("id", ctx.focusableId)("disabled", ctx.disabled)("value", ctx.value)("name", ctx.name)("checked", ctx.checked)("kendoEventsOutsideAngular", ɵɵpureFunction2(18, _c522, ctx.handleInputBlur, ctx.handleChange));
      ɵɵattribute("title", ctx.title)("tabindex", ctx.disabled ? void 0 : ctx.tabindex)("aria-invalid", ctx.isControlInvalid)("required", ctx.isControlRequired ? "" : null);
    }
  },
  dependencies: [EventsOutsideAngularDirective, SharedInputEventsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoRadioButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.radiobutton"
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioButtonComponent),
        multi: true
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => RadioButtonComponent)
      }],
      selector: "kendo-radiobutton",
      template: `
        <ng-container
            kendoInputSharedEvents
            [hostElement]="hostElement"
            [(isFocused)]="isFocused"
            (handleBlur)="handleBlur()"
            (onFocus)="handleFocus()"
        >
            <input #input
                type="radio"
                class="k-radio"
                [id]="focusableId"
                [attr.title]="title"
                [disabled]="disabled"
                [class.k-disabled]="disabled"
                [attr.tabindex]="disabled ? undefined : tabindex"
                [value]="value"
                [name]="name"
                [checked]="checked"
                [class.k-checked]="checked"
                [attr.aria-invalid]="isControlInvalid"
                [class.k-invalid]="isControlInvalid"
                [attr.required]="isControlRequired ? '' : null"
                [kendoEventsOutsideAngular]="{
                    blur: handleInputBlur,
                    change: handleChange
                }"
            />
        </ng-container>
    `
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: Injector
    }, {
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-radio-wrap"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    checked: [{
      type: Input
    }],
    checkedChange: [{
      type: Output
    }]
  });
})();
var RadioButtonModule = class {
};
RadioButtonModule.ɵfac = function RadioButtonModule_Factory(t) {
  return new (t || RadioButtonModule)();
};
RadioButtonModule.ɵmod = ɵɵdefineNgModule({
  type: RadioButtonModule,
  declarations: [RadioButtonDirective, RadioButtonComponent],
  imports: [CommonModule, EventsModule, SharedEventsModule],
  exports: [RadioButtonDirective, RadioButtonComponent]
});
RadioButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, EventsModule, SharedEventsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      declarations: [RadioButtonDirective, RadioButtonComponent],
      exports: [RadioButtonDirective, RadioButtonComponent],
      imports: [CommonModule, EventsModule, SharedEventsModule]
    }]
  }], null, null);
})();
var serial$1 = 0;
var ErrorComponent = class {
  constructor() {
    this.hostClass = true;
    this.align = "start";
    this.id = `kendo-error-${serial$1++}`;
    this.roleAttribute = "alert";
  }
  get startClass() {
    return this.align === "start";
  }
  get endClass() {
    return this.align === "end";
  }
  get idAttribute() {
    return this.id;
  }
};
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
};
ErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: ErrorComponent,
  selectors: [["kendo-formerror"]],
  hostVars: 8,
  hostBindings: function ErrorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.roleAttribute)("id", ctx.idAttribute);
      ɵɵclassProp("k-form-error", ctx.hostClass)("k-text-start", ctx.startClass)("k-text-end", ctx.endClass);
    }
  },
  inputs: {
    align: "align"
  },
  ngContentSelectors: _c20,
  decls: 1,
  vars: 0,
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "kendo-formerror",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], null, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-error"]
    }],
    align: [{
      type: Input
    }],
    roleAttribute: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    startClass: [{
      type: HostBinding,
      args: ["class.k-text-start"]
    }],
    endClass: [{
      type: HostBinding,
      args: ["class.k-text-end"]
    }],
    idAttribute: [{
      type: HostBinding,
      args: ["attr.id"]
    }]
  });
})();
var serial = 0;
var HintComponent = class {
  constructor() {
    this.align = "start";
    this.id = `kendo-hint-${serial++}`;
    this.hostClass = true;
  }
  get startClass() {
    return this.align === "start";
  }
  get endClass() {
    return this.align === "end";
  }
  get idAttribute() {
    return this.id;
  }
};
HintComponent.ɵfac = function HintComponent_Factory(t) {
  return new (t || HintComponent)();
};
HintComponent.ɵcmp = ɵɵdefineComponent({
  type: HintComponent,
  selectors: [["kendo-formhint"]],
  hostVars: 7,
  hostBindings: function HintComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("id", ctx.idAttribute);
      ɵɵclassProp("k-form-hint", ctx.hostClass)("k-text-start", ctx.startClass)("k-text-end", ctx.endClass);
    }
  },
  inputs: {
    align: "align"
  },
  ngContentSelectors: _c20,
  decls: 1,
  vars: 0,
  template: function HintComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HintComponent, [{
    type: Component,
    args: [{
      selector: "kendo-formhint",
      template: `
        <ng-content></ng-content>
    `
    }]
  }], null, {
    align: [{
      type: Input
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-hint"]
    }],
    startClass: [{
      type: HostBinding,
      args: ["class.k-text-start"]
    }],
    endClass: [{
      type: HostBinding,
      args: ["class.k-text-end"]
    }],
    idAttribute: [{
      type: HostBinding,
      args: ["attr.id"]
    }]
  });
})();
var FormFieldComponent = class {
  constructor(renderer, localizationService, hostElement) {
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.hostElement = hostElement;
    this.hostClass = true;
    this.showHints = "initial";
    this.orientation = "vertical";
    this.showErrors = "initial";
    this.subscriptions = new import_rxjs2.Subscription();
    this.rtl = false;
    validatePackage(packageMetadata2);
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
  }
  get errorClass() {
    if (!this.control) {
      return false;
    }
    return this.control.invalid && (this.control.touched || this.control.dirty);
  }
  get disabledClass() {
    if (!this.control) {
      return false;
    }
    if (this.isRadioControl(this.control)) {
      return false;
    }
    return this.disabledControl() || this.disabledElement() || this.disabledKendoInput();
  }
  set formControls(formControls) {
    this.validateFormControl(formControls);
    this.control = formControls.first;
  }
  /**
   * @hidden
   */
  get horizontal() {
    return this.orientation === "horizontal";
  }
  /**
   * @hidden
   */
  get hasHints() {
    return this.showHints === "always" ? true : this.showHintsInitial();
  }
  /**
   * @hidden
   */
  get hasErrors() {
    return this.showErrors === "always" ? true : this.showErrorsInitial();
  }
  ngAfterViewInit() {
    this.setDescription();
  }
  ngAfterViewChecked() {
    this.updateDescription();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  disabledKendoInput() {
    return this.kendoInput && this.kendoInput.disabled;
  }
  disabledControl() {
    return this.control.disabled;
  }
  disabledElement() {
    const elements = this.controlElementRefs.toArray();
    return elements.every((e) => e.nativeElement.hasAttribute("disabled"));
  }
  validateFormControl(formControls) {
    if (isDevMode() && formControls.length !== 1 && !this.isControlGroup(formControls)) {
      throw new Error("The `kendo-formfield` component should contain only one control of type NgControl with a formControlName(https://angular.io/api/forms/FormControlName)or an ngModel(https://angular.io/api/forms/NgModel) binding.");
    }
  }
  isControlGroup(formControls) {
    if (!formControls.length) {
      return false;
    }
    const name = formControls.first.name;
    return formControls.toArray().every((c) => c.name === name && this.isRadioControl(c));
  }
  isRadioControl(control) {
    return control.valueAccessor instanceof RadioControlValueAccessor;
  }
  updateDescription() {
    const controls = this.findControlElements();
    if (!controls) {
      return;
    }
    controls.forEach((control) => {
      if (this.errorChildren.length > 0 || this.hintChildren.length > 0) {
        const ariaIds = this.generateDescriptionIds(control);
        if (ariaIds !== "") {
          this.renderer.setAttribute(control, "aria-describedby", ariaIds);
        } else {
          this.renderer.removeAttribute(control, "aria-describedby");
        }
      }
    });
  }
  findControlElements() {
    if (!this.controlElementRefs) {
      return;
    }
    if (this.kendoInput && this.kendoInput.focusableId && isDocumentAvailable()) {
      return [this.hostElement.nativeElement.querySelector(`#${this.kendoInput.focusableId}`)];
    }
    return this.controlElementRefs.map((el) => el.nativeElement);
  }
  generateDescriptionIds(control) {
    const ids = /* @__PURE__ */ new Set();
    let errorAttribute = "";
    if (control.hasAttribute("aria-describedby")) {
      const attributes = control.getAttribute("aria-describedby").split(" ");
      errorAttribute = attributes.filter((attr) => attr.includes("kendo-error-"))[0];
      attributes.forEach((attr) => {
        if (attr.includes("kendo-hint-") || attr.includes("kendo-error-")) {
          return;
        }
        ids.add(attr);
      });
    }
    this.hintChildren.forEach((hint) => {
      ids.add(hint.id);
    });
    if (this.hasErrors) {
      this.errorChildren.forEach((error) => {
        ids.add(error.id);
      });
    } else {
      ids.delete(errorAttribute);
    }
    return Array.from(ids).join(" ");
  }
  showHintsInitial() {
    if (!this.control) {
      return true;
    }
    const {
      valid,
      untouched,
      pristine
    } = this.control;
    return valid || untouched && pristine;
  }
  showErrorsInitial() {
    if (!this.control) {
      return false;
    }
    const {
      invalid,
      dirty,
      touched
    } = this.control;
    return invalid && (dirty || touched);
  }
  setDescription() {
    this.updateDescription();
    this.subscriptions.add(this.errorChildren.changes.subscribe(() => this.updateDescription()));
    this.subscriptions.add(this.hintChildren.changes.subscribe(() => this.updateDescription()));
  }
};
FormFieldComponent.ɵfac = function FormFieldComponent_Factory(t) {
  return new (t || FormFieldComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef));
};
FormFieldComponent.ɵcmp = ɵɵdefineComponent({
  type: FormFieldComponent,
  selectors: [["kendo-formfield"]],
  contentQueries: function FormFieldComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, KendoInput, 7);
      ɵɵcontentQuery(dirIndex, NgControl, 5);
      ɵɵcontentQuery(dirIndex, NgControl, 5, ElementRef);
      ɵɵcontentQuery(dirIndex, ErrorComponent, 5);
      ɵɵcontentQuery(dirIndex, HintComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.kendoInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.formControls = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.controlElementRefs = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.errorChildren = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hintChildren = _t);
    }
  },
  hostVars: 7,
  hostBindings: function FormFieldComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵclassProp("k-form-field", ctx.hostClass)("k-form-field-error", ctx.errorClass)("k-form-field-disabled", ctx.disabledClass);
    }
  },
  inputs: {
    showHints: "showHints",
    orientation: "orientation",
    showErrors: "showErrors"
  },
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.formfield"
  }])],
  ngContentSelectors: _c54,
  decls: 5,
  vars: 2,
  consts: [[1, "k-form-field-wrap"], [4, "ngIf"]],
  template: function FormFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c53);
      ɵɵprojection(0);
      ɵɵelementStart(1, "div", 0);
      ɵɵprojection(2, 1);
      ɵɵtemplate(3, FormFieldComponent_ng_content_3_Template, 1, 0, "ng-content", 1)(4, FormFieldComponent_ng_content_4_Template, 1, 0, "ng-content", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.hasHints);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasErrors);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{
      selector: "kendo-formfield",
      template: `
        <ng-content select="label, kendo-label"></ng-content>
        <div class="k-form-field-wrap">
            <ng-content></ng-content>
            <ng-content select="kendo-formhint" *ngIf="hasHints"></ng-content>
            <ng-content select="kendo-formerror" *ngIf="hasErrors"></ng-content>
        </div>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.formfield"
      }]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-form-field"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    errorClass: [{
      type: HostBinding,
      args: ["class.k-form-field-error"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-form-field-disabled"]
    }],
    formControls: [{
      type: ContentChildren,
      args: [NgControl, {
        descendants: true
      }]
    }],
    controlElementRefs: [{
      type: ContentChildren,
      args: [NgControl, {
        read: ElementRef,
        descendants: true
      }]
    }],
    kendoInput: [{
      type: ContentChild,
      args: [KendoInput, {
        static: true
      }]
    }],
    errorChildren: [{
      type: ContentChildren,
      args: [ErrorComponent, {
        descendants: true
      }]
    }],
    hintChildren: [{
      type: ContentChildren,
      args: [HintComponent, {
        descendants: true
      }]
    }],
    showHints: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    showErrors: [{
      type: Input
    }]
  });
})();
var FormFieldModule = class {
};
FormFieldModule.ɵfac = function FormFieldModule_Factory(t) {
  return new (t || FormFieldModule)();
};
FormFieldModule.ɵmod = ɵɵdefineNgModule({
  type: FormFieldModule,
  declarations: [HintComponent, ErrorComponent, FormFieldComponent],
  imports: [CommonModule],
  exports: [HintComponent, ErrorComponent, FormFieldComponent]
});
FormFieldModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldModule, [{
    type: NgModule,
    args: [{
      declarations: [HintComponent, ErrorComponent, FormFieldComponent],
      exports: [HintComponent, ErrorComponent, FormFieldComponent],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var SignatureMessages = class extends ComponentMessages {
};
SignatureMessages.ɵfac = /* @__PURE__ */ (() => {
  let ɵSignatureMessages_BaseFactory;
  return function SignatureMessages_Factory(t) {
    return (ɵSignatureMessages_BaseFactory || (ɵSignatureMessages_BaseFactory = ɵɵgetInheritedFactory(SignatureMessages)))(t || SignatureMessages);
  };
})();
SignatureMessages.ɵdir = ɵɵdefineDirective({
  type: SignatureMessages,
  selectors: [["kendo-signature-messages-base"]],
  inputs: {
    clear: "clear",
    minimize: "minimize",
    maximize: "maximize",
    canvasLabel: "canvasLabel"
  },
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-signature-messages-base"
    }]
  }], null, {
    clear: [{
      type: Input
    }],
    minimize: [{
      type: Input
    }],
    maximize: [{
      type: Input
    }],
    canvasLabel: [{
      type: Input
    }]
  });
})();
var SignatureCustomMessagesComponent = class extends SignatureMessages {
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
};
SignatureCustomMessagesComponent.ɵfac = function SignatureCustomMessagesComponent_Factory(t) {
  return new (t || SignatureCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
};
SignatureCustomMessagesComponent.ɵcmp = ɵɵdefineComponent({
  type: SignatureCustomMessagesComponent,
  selectors: [["kendo-signature-messages"]],
  features: [ɵɵProvidersFeature([{
    provide: SignatureMessages,
    useExisting: forwardRef(() => SignatureCustomMessagesComponent)
  }]), ɵɵInheritDefinitionFeature],
  decls: 0,
  vars: 0,
  template: function SignatureCustomMessagesComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: SignatureMessages,
        useExisting: forwardRef(() => SignatureCustomMessagesComponent)
      }],
      selector: "kendo-signature-messages",
      template: ``
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var LocalizedSignatureMessagesDirective = class extends SignatureMessages {
  constructor(service) {
    super();
    this.service = service;
  }
};
LocalizedSignatureMessagesDirective.ɵfac = function LocalizedSignatureMessagesDirective_Factory(t) {
  return new (t || LocalizedSignatureMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
};
LocalizedSignatureMessagesDirective.ɵdir = ɵɵdefineDirective({
  type: LocalizedSignatureMessagesDirective,
  selectors: [["", "kendoSignatureLocalizedMessages", ""]],
  features: [ɵɵProvidersFeature([{
    provide: SignatureMessages,
    useExisting: forwardRef(() => LocalizedSignatureMessagesDirective)
  }]), ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSignatureMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: SignatureMessages,
        useExisting: forwardRef(() => LocalizedSignatureMessagesDirective)
      }],
      selector: "[kendoSignatureLocalizedMessages]"
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SignatureCloseEvent = class extends PreventableEvent {
};
var SignatureOpenEvent = class extends PreventableEvent {
};
var noop2 = () => {
};
var _id = 0;
var nextId = () => "k-signature-focusable-" + _id++;
var FOCUSED_CLASS = "k-focus";
var DEFAULT_SIZE = "medium";
var DEFAULT_ROUNDED = "medium";
var DEFAULT_FILL_MODE = "solid";
var DEFAULT_POPUP_SCALE = 3;
var DEFAULT_EXPORT_SCALE2 = 2;
var DEFAULT_COLOR2 = "#000000";
var DEFAULT_BACKGROUND_COLOR2 = "#ffffff";
var iconsMap = {
  xIcon,
  hyperlinkOpenIcon
};
var SignatureComponent = class {
  constructor(element, renderer, ngZone, cd, localization, cdr) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.cd = cd;
    this.localization = localization;
    this.cdr = cdr;
    this.staticHostClasses = true;
    this.focusableId = nextId();
    this.readonly = false;
    this.disabled = false;
    this.size = DEFAULT_SIZE;
    this.rounded = DEFAULT_ROUNDED;
    this.fillMode = DEFAULT_FILL_MODE;
    this.strokeWidth = 1;
    this.smooth = false;
    this.maximizable = true;
    this.maximized = false;
    this.popupScale = DEFAULT_POPUP_SCALE;
    this.exportScale = DEFAULT_EXPORT_SCALE2;
    this.hideLine = false;
    this.valueChange = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.minimize = new EventEmitter();
    this.isFocused = false;
    this.isDrawing = false;
    this.notifyNgTouched = noop2;
    this.notifyNgChanged = noop2;
    this._tabindex = 0;
    this.hostClasses = [];
    validatePackage(packageMetadata2);
    this.direction = localization.rtl ? "rtl" : "ltr";
  }
  /**
   * Gets or sets the value of the signature.
   *
   * The value is a Base64-encoded PNG image.
   */
  set value(value) {
    if (value !== this._value) {
      this._value = value;
      if (this.instance) {
        this.instance.loadImage(value);
      }
    }
  }
  get value() {
    return this._value;
  }
  /**
   * @hidden
   */
  svgIcon(name) {
    return iconsMap[name];
  }
  /**
   * Specifies the [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   *
   * @default 0
   */
  set tabindex(value) {
    const tabindex = Number(value);
    const defaultValue = 0;
    this._tabindex = !isNaN(tabindex) ? tabindex : defaultValue;
  }
  get tabindex() {
    return !this.disabled ? this._tabindex : void 0;
  }
  /**
   * @hidden
   */
  get isEmpty() {
    return !this.value;
  }
  /**
   * @hidden
   */
  get canvasLabel() {
    return this.getMessage("canvasLabel");
  }
  /**
   * @hidden
   */
  get clearTitle() {
    return this.getMessage("clear");
  }
  /**
   * @hidden
   */
  get minimizeTitle() {
    return this.getMessage("minimize");
  }
  /**
   * @hidden
   */
  get maximizeTitle() {
    return this.getMessage("maximize");
  }
  /**
   * @hidden
   */
  get baseWidth() {
    return this.width || this.element.nativeElement.offsetWidth;
  }
  /**
   * @hidden
   */
  get baseHeight() {
    return this.height || this.element.nativeElement.offsetHeight;
  }
  /**
   * @hidden
   */
  get popupWidth() {
    return this.baseWidth * this.popupScale;
  }
  /**
   * @hidden
   */
  get popupHeight() {
    return this.baseHeight * this.popupScale;
  }
  /**
   * @hidden
   */
  get showMaximize() {
    return !(this.maximized || this.isDrawing || !this.maximizable || this.disabled);
  }
  /**
   * @hidden
   */
  get showMinimize() {
    return this.maximized && !this.isDrawing;
  }
  /**
   * @hidden
   */
  get showClear() {
    return !(this.isEmpty || this.isDrawing || this.readonly || this.disabled);
  }
  /**
   * @hidden
   */
  get focused() {
    return this.isFocused;
  }
  set focused(value) {
    if (this.isFocused !== value && this.element) {
      const wrap = this.element.nativeElement;
      if (value && !this.maximized) {
        this.renderer.addClass(wrap, FOCUSED_CLASS);
      } else {
        this.renderer.removeClass(wrap, FOCUSED_CLASS);
      }
      this.isFocused = value;
    }
  }
  get options() {
    return {
      scale: this.maximized ? this.popupScale : 1,
      color: this.color,
      backgroundColor: this.backgroundColor,
      strokeWidth: this.strokeWidth,
      smooth: this.smooth,
      readonly: this.readonly
    };
  }
  ngOnInit() {
    this.subscriptions = this.localization.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.applyHostClasses();
    this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
      this.readThemeColors();
      this.instance.setOptions(this.options);
    });
    this.ngZone.runOutsideAngular(() => {
      const element = this.canvas.nativeElement;
      this.instance = new SignaturePad(element, Object.assign(Object.assign({}, this.options), {
        onChange: () => this.onValueChange(),
        onDraw: () => this.onDraw(),
        onDrawEnd: () => this.onDrawEnd()
      }));
      if (this.value) {
        this.instance.loadImage(this.value);
      }
      if (this.maximized) {
        this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
          var _a2;
          (_a2 = this.minimizeButton) === null || _a2 === void 0 ? void 0 : _a2.nativeElement.focus();
        });
      }
      this.addEventListeners();
    });
  }
  ngOnChanges(changes) {
    if (anyChanged(["readonly", "color", "backgroundColor", "strokeWidth", "smooth"], changes, true)) {
      this.instance.setOptions(this.options);
    }
    this.applyHostClasses();
  }
  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
      this.subscriptions = null;
    }
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }
  /**
   * @hidden
   */
  onClear() {
    this.reset();
    this.valueChange.emit(void 0);
    this.canvas.nativeElement.focus();
  }
  /**
   * @hidden
   */
  onValueChange() {
    return __awaiter(this, void 0, void 0, function* () {
      const value = yield this.instance.exportImage({
        width: this.baseWidth * this.exportScale,
        height: this.baseHeight * this.exportScale
      });
      this._value = value;
      this.cd.markForCheck();
      this.ngZone.run(() => {
        this.valueChange.emit(value);
        this.notifyNgChanged(value);
      });
    });
  }
  /**
   * @hidden
   */
  onDialogValueChange(value) {
    this.value = value;
    this.valueChange.emit(value);
    this.notifyNgTouched();
    this.notifyNgChanged(value);
  }
  /**
   * @hidden
   */
  onDialogClick(e) {
    var _a2;
    if (e.target.classList.contains("k-overlay")) {
      this.isOpen = false;
      (_a2 = this.maximizeButton) === null || _a2 === void 0 ? void 0 : _a2.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onDialogKeydown(e) {
    var _a2;
    if (e.keyCode === Keys.Escape) {
      this.isOpen = false;
      this.cd.detectChanges();
      (_a2 = this.maximizeButton) === null || _a2 === void 0 ? void 0 : _a2.nativeElement.focus();
    }
  }
  /**
   * @hidden
   */
  onDialogClose() {
    const args = new SignatureCloseEvent();
    this.close.next(args);
    if (!args.isDefaultPrevented()) {
      this.isOpen = false;
      this.ngZone.onStable.pipe((0, import_operators2.take)(1)).subscribe(() => {
        var _a2, _b;
        (_b = (_a2 = this.maximizeButton || this.element) === null || _a2 === void 0 ? void 0 : _a2.nativeElement) === null || _b === void 0 ? void 0 : _b.focus();
      });
    }
  }
  /**
   * Clears the value of the Signature.
   */
  reset() {
    var _a2;
    if (!isPresent3(this.value)) {
      return;
    }
    (_a2 = this.instance) === null || _a2 === void 0 ? void 0 : _a2.clear();
    this.value = this._value = void 0;
    this.notifyNgChanged(void 0);
  }
  /**
   * Toggles the popup of the Signature.
   * Does not trigger the `open` and `close` events of the component.
   *
   * @param open An optional parameter. Specifies whether the popup will be opened or closed.
   */
  toggle(open) {
    if (this.disabled || this.readonly) {
      return;
    }
    open = isPresent3(open) ? open : !this.isOpen;
    this.isOpen = open;
  }
  /**
   * @hidden
   */
  onMaximize() {
    return __awaiter(this, void 0, void 0, function* () {
      const args = new SignatureOpenEvent();
      this.open.next(args);
      if (!args.isDefaultPrevented()) {
        this.popupValue = yield this.instance.exportImage({
          width: this.popupWidth * this.exportScale,
          height: this.popupHeight * this.exportScale
        });
        this.isOpen = true;
        this.cd.detectChanges();
      }
    });
  }
  /**
   * @hidden
   */
  onMinimize() {
    this.minimize.next();
  }
  applyHostClasses() {
    const classList = this.element.nativeElement.classList;
    this.hostClasses.forEach(([name]) => classList.remove(name));
    this.hostClasses = [[`k-signature-${SIZE_MAP[this.size || DEFAULT_SIZE]}`, !isNone(this.size)], [`k-input-${this.fillMode || DEFAULT_FILL_MODE}`, !isNone(this.fillMode)], [`k-rounded-${ROUNDED_MAP[this.rounded || DEFAULT_ROUNDED]}`, !isNone(this.rounded)]];
    this.hostClasses.forEach(([name, enabled]) => classList.toggle(name, enabled));
  }
  readThemeColors() {
    let defaultColor = DEFAULT_COLOR2;
    let defaultBackgroundColor = DEFAULT_BACKGROUND_COLOR2;
    if (isDocumentAvailable()) {
      const el = this.element.nativeElement;
      defaultColor = getComputedStyle(el).color;
      defaultBackgroundColor = getComputedStyle(el).backgroundColor;
    }
    this.color = this.color || defaultColor;
    this.backgroundColor = this.backgroundColor || defaultBackgroundColor;
  }
  /**
   * Focuses the wrapper of the Signature.
   */
  focus() {
    this.focused = true;
    this.element.nativeElement.focus();
  }
  /**
   * @hidden
   */
  onWrapperFocus() {
    if (this.focused) {
      return;
    }
    this.ngZone.run(() => {
      this.focus();
      this.onFocus.emit();
    });
  }
  /**
   * Blurs the Signature.
   */
  blur() {
    this.focused = false;
    this.element.nativeElement.blur();
    this.notifyNgTouched();
  }
  /**
   * @hidden
   */
  onWrapperBlur() {
    if (this.isOpen) {
      return;
    }
    this.ngZone.run(() => {
      this.onBlur.emit();
      this.focused = false;
      this.notifyNgTouched();
    });
  }
  /**
   * @hidden
   */
  onWrapperClick(_event) {
    if (this.disabled) {
      return;
    }
    this.focus();
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.notifyNgChanged = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.notifyNgTouched = fn;
  }
  /**
   * @hidden
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  onDraw() {
    this.isDrawing = true;
    this.cd.markForCheck();
  }
  onDrawEnd() {
    this.isDrawing = false;
    this.cd.markForCheck();
  }
  addEventListeners() {
    const element = this.element.nativeElement;
    const focusIn = this.renderer.listen(element, "focusin", () => this.onWrapperFocus());
    const focusOut = this.renderer.listen(element, "focusout", (e) => {
      const insideWrapper = closest(e.relatedTarget, (element2) => element2 === this.element.nativeElement);
      if (!insideWrapper) {
        this.onWrapperBlur();
      }
    });
    const click = this.renderer.listen(element, "click", () => {
      this.ngZone.run((e) => {
        this.onWrapperClick(e);
      });
    });
    this.unsubscribe = () => {
      focusIn();
      focusOut();
      click();
    };
  }
  getMessage(key) {
    if (this.maximized && this.parentLocalization) {
      return this.parentLocalization.get(key);
    }
    return this.localization.get(key);
  }
};
SignatureComponent.ɵfac = function SignatureComponent_Factory(t) {
  return new (t || SignatureComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef));
};
SignatureComponent.ɵcmp = ɵɵdefineComponent({
  type: SignatureComponent,
  selectors: [["kendo-signature"]],
  viewQuery: function SignatureComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c55, 5);
      ɵɵviewQuery(_c56, 5, ElementRef);
      ɵɵviewQuery(_c57, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.minimizeButton = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.maximizeButton = _t.first);
    }
  },
  hostVars: 13,
  hostBindings: function SignatureComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("dir", ctx.direction);
      ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
      ɵɵclassProp("k-signature", ctx.staticHostClasses)("k-input", ctx.staticHostClasses)("k-readonly", ctx.readonly)("k-disabled", ctx.disabled);
    }
  },
  inputs: {
    focusableId: "focusableId",
    readonly: "readonly",
    disabled: "disabled",
    width: "width",
    height: "height",
    value: "value",
    tabindex: "tabindex",
    size: "size",
    rounded: "rounded",
    fillMode: "fillMode",
    color: "color",
    backgroundColor: "backgroundColor",
    strokeWidth: "strokeWidth",
    smooth: "smooth",
    maximizable: "maximizable",
    maximized: "maximized",
    popupScale: "popupScale",
    exportScale: "exportScale",
    parentLocalization: "parentLocalization",
    hideLine: "hideLine"
  },
  outputs: {
    valueChange: "valueChange",
    open: "open",
    close: "close",
    onFocus: "focus",
    onBlur: "blur",
    minimize: "minimize"
  },
  exportAs: ["kendoSignature"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.signature"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SignatureComponent)
  }]), ɵɵNgOnChangesFeature],
  decls: 10,
  vars: 8,
  consts: () => {
    let i18n_75;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_75 = goog.getMsg("Clear");
      i18n_75 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_75;
    } else {
      i18n_75 = $localize`:kendo.signature.clear|The message for the Clear button.:Clear`;
    }
    let i18n_76;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_76 = goog.getMsg("Maximize");
      i18n_76 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_76;
    } else {
      i18n_76 = $localize`:kendo.signature.maximize|The message for the Maximize button.:Maximize`;
    }
    let i18n_77;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_77 = goog.getMsg("Minimize");
      i18n_77 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_77;
    } else {
      i18n_77 = $localize`:kendo.signature.minimize|The message for the Minimize button.:Minimize`;
    }
    let i18n_78;
    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_78 = goog.getMsg("Signature canvas");
      i18n_78 = MSG_C__ANGULAR_ARM_NODE_MODULES__PROGRESS_KENDO_ANGULAR_INPUTS_FESM2015_PROGRESS_KENDO_ANGULAR_INPUTS_MJS_78;
    } else {
      i18n_78 = $localize`:kendo.signature.canvasLabel|The message for the Canvas element aria-label.:Signature canvas`;
    }
    return [["canvas", ""], ["maximize", ""], ["minimize", ""], ["kendoSignatureLocalizedMessages", "", "clear", i18n_75, "maximize", i18n_76, "minimize", i18n_77, "canvasLabel", i18n_78], ["role", "img", 1, "k-signature-canvas", 3, "id"], [1, "k-signature-actions", "k-signature-actions-top"], ["kendoButton", "", "type", "button", "class", "k-signature-action k-signature-maximize", "icon", "hyperlink-open", "fillMode", "flat", 3, "svgIcon", "size", "title", "click", 4, "ngIf"], ["kendoButton", "", "type", "button", "class", "k-signature-action k-signature-minimize k-rotate-180", "icon", "hyperlink-open", "fillMode", "flat", 3, "svgIcon", "size", "title", "click", 4, "ngIf"], ["class", "k-signature-line", 4, "ngIf"], [1, "k-signature-actions", "k-signature-actions-bottom"], ["kendoButton", "", "class", "k-signature-action k-signature-clear", "icon", "close", "type", "button", "fillMode", "flat", 3, "svgIcon", "size", "title", "click", 4, "ngIf"], ["autoFocusedElement", ".k-signature-action.k-signature-minimize", 3, "click", "keydown", 4, "ngIf"], ["kendoButton", "", "type", "button", "icon", "hyperlink-open", "fillMode", "flat", 1, "k-signature-action", "k-signature-maximize", 3, "click", "svgIcon", "size", "title"], ["kendoButton", "", "type", "button", "icon", "hyperlink-open", "fillMode", "flat", 1, "k-signature-action", "k-signature-minimize", "k-rotate-180", 3, "click", "svgIcon", "size", "title"], [1, "k-signature-line"], ["kendoButton", "", "icon", "close", "type", "button", "fillMode", "flat", 1, "k-signature-action", "k-signature-clear", 3, "click", "svgIcon", "size", "title"], ["autoFocusedElement", ".k-signature-action.k-signature-minimize", 3, "click", "keydown"], [3, "valueChange", "minimize", "readonly", "disabled", "size", "rounded", "fillMode", "color", "backgroundColor", "strokeWidth", "smooth", "value", "hideLine", "maximized", "width", "height", "popupScale", "exportScale", "parentLocalization"]];
  },
  template: function SignatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainer(0, 3);
      ɵɵelement(1, "div", 4, 0);
      ɵɵelementStart(3, "div", 5);
      ɵɵtemplate(4, SignatureComponent_button_4_Template, 2, 4, "button", 6)(5, SignatureComponent_button_5_Template, 2, 4, "button", 7);
      ɵɵelementEnd();
      ɵɵtemplate(6, SignatureComponent_div_6_Template, 1, 0, "div", 8);
      ɵɵelementStart(7, "div", 9);
      ɵɵtemplate(8, SignatureComponent_button_8_Template, 1, 4, "button", 10);
      ɵɵelementEnd();
      ɵɵtemplate(9, SignatureComponent_kendo_dialog_9_Template, 2, 19, "kendo-dialog", 11);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("id", ctx.focusableId);
      ɵɵattribute("tabindex", ctx.tabindex)("aria-label", ctx.canvasLabel);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.showMaximize);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showMinimize);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.hideLine);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showClear);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isOpen);
    }
  },
  dependencies: [ButtonComponent, NgIf, DialogComponent, SignatureComponent, LocalizedSignatureMessagesDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSignature",
      selector: "kendo-signature",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.signature"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SignatureComponent)
      }],
      template: `
        <ng-container kendoSignatureLocalizedMessages
            i18n-clear="kendo.signature.clear|The message for the Clear button."
            clear="Clear"
            i18n-maximize="kendo.signature.maximize|The message for the Maximize button."
            maximize="Maximize"
            i18n-minimize="kendo.signature.minimize|The message for the Minimize button."
            minimize="Minimize"
            i18n-canvasLabel="kendo.signature.canvasLabel|The message for the Canvas element aria-label."
            canvasLabel="Signature canvas">
        </ng-container>

        <div
            #canvas
            class="k-signature-canvas"
            [attr.tabindex]="tabindex"
            [id]="focusableId"
            role="img"
            [attr.aria-label]="canvasLabel"
        ></div>

        <div class="k-signature-actions k-signature-actions-top">
            <button
                #maximize
                *ngIf="showMaximize"
                kendoButton
                type="button"
                class="k-signature-action k-signature-maximize"
                icon="hyperlink-open"
                [svgIcon]="svgIcon('hyperlinkOpenIcon')"
                fillMode="flat"
                [size]="size"
                (click)="onMaximize()"
                [attr.aria-label]="maximizeTitle"
                [title]="maximizeTitle">
            </button>
            <button
                #minimize
                *ngIf="showMinimize"
                kendoButton
                type="button"
                class="k-signature-action k-signature-minimize k-rotate-180"
                icon="hyperlink-open"
                [svgIcon]="svgIcon('hyperlinkOpenIcon')"
                fillMode="flat"
                [size]="size"
                (click)="onMinimize()"
                [attr.aria-label]="minimizeTitle"
                [title]="minimizeTitle">
            </button>
        </div>
        <div
            *ngIf="!hideLine"
            class="k-signature-line"
        ></div>
        <div class="k-signature-actions k-signature-actions-bottom">
            <button
                *ngIf="showClear"
                kendoButton
                class="k-signature-action k-signature-clear"
                icon="close"
                type="button"
                [svgIcon]="svgIcon('xIcon')"
                fillMode="flat"
                [size]="size"
                [attr.aria-label]="clearTitle"
                [title]="clearTitle"
                (click)="onClear()" >
            </button>
        </div>

        <kendo-dialog
            *ngIf="isOpen"
            autoFocusedElement=".k-signature-action.k-signature-minimize"
            (click)="onDialogClick($event)"
            (keydown)="onDialogKeydown($event)">
            <kendo-signature
                [readonly]="readonly"
                [disabled]="disabled"
                [size]="size"
                [rounded]="rounded"
                [fillMode]="fillMode"
                [color]="color"
                [backgroundColor]="backgroundColor"
                [strokeWidth]="strokeWidth"
                [smooth]="smooth"
                [value]="popupValue"
                (valueChange)="onDialogValueChange($event)"
                [hideLine]="hideLine"
                [class.k-signature-maximized]="true"
                [maximized]="true"
                (minimize)="onDialogClose()"
                [width]="popupWidth"
                [height]="popupHeight"
                [popupScale]="popupScale"
                [exportScale]="(1 / popupScale) * exportScale"
                [parentLocalization]="localization">
            </kendo-signature>
        </kendo-dialog>
    `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    staticHostClasses: [{
      type: HostBinding,
      args: ["class.k-signature"]
    }, {
      type: HostBinding,
      args: ["class.k-input"]
    }],
    focusableId: [{
      type: Input
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    readonly: [{
      type: HostBinding,
      args: ["class.k-readonly"]
    }, {
      type: Input
    }],
    disabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }, {
      type: Input
    }],
    width: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.width.px"]
    }],
    height: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.height.px"]
    }],
    value: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    backgroundColor: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    smooth: [{
      type: Input
    }],
    maximizable: [{
      type: Input
    }],
    maximized: [{
      type: Input
    }],
    popupScale: [{
      type: Input
    }],
    exportScale: [{
      type: Input
    }],
    parentLocalization: [{
      type: Input
    }],
    hideLine: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    minimize: [{
      type: Output
    }],
    canvas: [{
      type: ViewChild,
      args: ["canvas"]
    }],
    minimizeButton: [{
      type: ViewChild,
      args: ["minimize", {
        read: ElementRef
      }]
    }],
    maximizeButton: [{
      type: ViewChild,
      args: ["maximize", {
        read: ElementRef
      }]
    }]
  });
})();
var SignatureModule = class {
};
SignatureModule.ɵfac = function SignatureModule_Factory(t) {
  return new (t || SignatureModule)();
};
SignatureModule.ɵmod = ɵɵdefineNgModule({
  type: SignatureModule,
  declarations: [SignatureComponent, SignatureCustomMessagesComponent, LocalizedSignatureMessagesDirective],
  imports: [ButtonModule, CommonModule, DialogsModule, IconsModule],
  exports: [SignatureComponent, SignatureCustomMessagesComponent]
});
SignatureModule.ɵinj = ɵɵdefineInjector({
  imports: [ButtonModule, CommonModule, DialogsModule, IconsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignatureModule, [{
    type: NgModule,
    args: [{
      declarations: [SignatureComponent, SignatureCustomMessagesComponent, LocalizedSignatureMessagesDirective],
      exports: [SignatureComponent, SignatureCustomMessagesComponent],
      imports: [ButtonModule, CommonModule, DialogsModule, IconsModule]
    }]
  }], null, null);
})();
var RatingItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
RatingItemTemplateDirective.ɵfac = function RatingItemTemplateDirective_Factory(t) {
  return new (t || RatingItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
RatingItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: RatingItemTemplateDirective,
  selectors: [["", "kendoRatingItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoRatingItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var RatingHoveredItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
RatingHoveredItemTemplateDirective.ɵfac = function RatingHoveredItemTemplateDirective_Factory(t) {
  return new (t || RatingHoveredItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
RatingHoveredItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: RatingHoveredItemTemplateDirective,
  selectors: [["", "kendoRatingHoveredItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingHoveredItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoRatingHoveredItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var RatingSelectedItemTemplateDirective = class {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
RatingSelectedItemTemplateDirective.ɵfac = function RatingSelectedItemTemplateDirective_Factory(t) {
  return new (t || RatingSelectedItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
};
RatingSelectedItemTemplateDirective.ɵdir = ɵɵdefineDirective({
  type: RatingSelectedItemTemplateDirective,
  selectors: [["", "kendoRatingSelectedItemTemplate", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingSelectedItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoRatingSelectedItemTemplate]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var RatingComponent = class {
  constructor(element, renderer, localizationService, cdr, zone) {
    this.element = element;
    this.renderer = renderer;
    this.localizationService = localizationService;
    this.cdr = cdr;
    this.zone = zone;
    this.disabled = false;
    this.readonly = false;
    this.tabindex = 0;
    this.itemsCount = 5;
    this.svgIcon = starIcon;
    this.svgIconOutline = starOutlineIcon;
    this.valueChange = new EventEmitter();
    this.hostClass = true;
    this.valueMin = 0;
    this.ariaRole = "slider";
    this.ratingItems = [];
    this.ngChange = (_) => {
    };
    this.ngTouched = () => {
    };
    this._selection = "continuous";
    this._precision = "item";
    this.subscriptions = new import_rxjs2.Subscription();
    validatePackage(packageMetadata2);
  }
  /**
   * The initial value of the Rating component.
   * The component can use either NgModel or the `value` binding but not both of them at the same time.
   *
   */
  set value(value) {
    this._value = value;
    this.updateRatingItems();
  }
  get value() {
    return this._value;
  }
  /**
   * Sets the selection mode of the Rating ([see example]({% slug selection_rating %})).
   *
   * @default 'continuous'
   *
   */
  set selection(selection) {
    this._selection = selection;
    this.updateRatingItems();
  }
  get selection() {
    return this._selection;
  }
  /**
   * Determines the precision of the Rating ([see example]({% slug precision_rating %})).
   *
   * @default 'item'
   *
   */
  set precision(precision) {
    this._precision = precision;
    this.updateRatingItems();
  }
  get precision() {
    return this._precision;
  }
  get isControlInvalid() {
    var _a2, _b;
    return (_b = (_a2 = this.control) === null || _a2 === void 0 ? void 0 : _a2.invalid) === null || _b === void 0 ? void 0 : _b.toString();
  }
  get valueMax() {
    return this.itemsCount;
  }
  get valueNow() {
    return this.value;
  }
  ngOnInit() {
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.direction = rtl ? "rtl" : "ltr";
    }));
    this.subscriptions.add(this.renderer.listen(this.element.nativeElement, "blur", () => this.ngTouched()));
    this.subscriptions.add(this.renderer.listen(this.element.nativeElement, "keydown", (event) => this.onKeyDown(event)));
    this.createRatingItems();
  }
  ngAfterViewInit() {
    const items = this.element.nativeElement.querySelectorAll(".k-rating-item");
    this.zone.runOutsideAngular(() => {
      items.forEach((item, index) => this.subscriptions.add(this.renderer.listen(item, "mousemove", (event) => this.onMouseMove(index, event))));
    });
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Focuses the Rating component.
   */
  focus() {
    if (isDocumentAvailable() && !this.disabled) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Rating component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  createRatingItems() {
    for (let i = 0; i < this.itemsCount; i++) {
      const item = {
        title: this.isHalf(i, this.value) ? String(i + 0.5) : String(i + 1),
        selected: this.isSelected(i, this.value),
        selectedIndicator: false,
        hovered: false,
        half: this.isHalf(i, this.value)
      };
      this.ratingItems.push(item);
    }
  }
  /**
   * @hidden
   */
  onMouseEnter(event) {
    this.rect = event.target.getBoundingClientRect();
  }
  /**
   * @hidden
   */
  onMouseMove(value, event) {
    const halfPrecision = this.precision === "half";
    const isFirstHalf = halfPrecision && this.isFirstHalf(this.rect, event.clientX);
    this.zone.run(() => this.ratingItems.forEach((item, index) => {
      item.title = halfPrecision && value === index && isFirstHalf ? String(index + 0.5) : String(index + 1);
      item.selected = item.hovered = this.isSelected(index, value + 1);
      item.selectedIndicator = this.isSelected(index, this.value);
      item.half = halfPrecision && value === index ? isFirstHalf : false;
    }));
  }
  /**
   * @hidden
   */
  onMouseOut() {
    this.rect = null;
    this.updateRatingItems();
  }
  /**
   * @hidden
   * Called when the status of the component changes to or from `disabled`.
   * Depending on the value, it enables or disables the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  changeValue(index, event) {
    const rect = event.target.getBoundingClientRect();
    const isFirstHalf = this.isFirstHalf(rect, event.clientX);
    const value = this.precision === "half" && isFirstHalf ? index + 0.5 : index + 1;
    if (!areSame(this.value, value)) {
      this.value = value;
      this.ngChange(this.value);
      this.valueChange.emit(this.value);
      this.updateRatingItems();
      this.cdr.markForCheck();
    }
  }
  /**
   * @hidden
   */
  updateRatingItems() {
    this.ratingItems.forEach((item, index) => {
      item.title = this.isHalf(index, this.value) ? String(index + 0.5) : String(index + 1);
      item.selected = this.isSelected(index, this.value);
      item.selectedIndicator = this.isSelected(index, this.value);
      item.hovered = false;
      item.half = this.isHalf(index, this.value);
    });
  }
  /**
   * @hidden
   */
  writeValue(value) {
    this.value = value;
    this.updateRatingItems();
    this.cdr.markForCheck();
  }
  /**
   * @hidden
   */
  registerOnChange(fn) {
    this.ngChange = fn;
  }
  /**
   * @hidden
   */
  registerOnTouched(fn) {
    this.ngTouched = fn;
  }
  isSelected(index, value) {
    return this.selection === "single" ? index === Math.ceil(value - 1) : index <= Math.ceil(value - 1);
  }
  isHalf(index, value) {
    return this.precision === "half" && value > index && value < index + 1;
  }
  isFirstHalf(rect, clientX) {
    const elementPosition = rect.x + rect.width / 2;
    return this.direction === "ltr" ? clientX < elementPosition : clientX > elementPosition;
  }
  onKeyDown(event) {
    const decreaseValue = () => {
      if (this.value <= 0) {
        return;
      }
      this.value = this.precision === "half" ? this.value - 0.5 : this.value - 1;
      this.ngChange(this.value);
      this.valueChange.emit(this.value);
      this.updateRatingItems();
      this.cdr.markForCheck();
    };
    const increaseValue = () => {
      if (this.value >= this.itemsCount) {
        return;
      }
      this.value = this.precision === "half" ? this.value + 0.5 : this.value + 1;
      this.ngChange(this.value);
      this.valueChange.emit(this.value);
      this.updateRatingItems();
      this.cdr.markForCheck();
    };
    const setMinValue = () => {
      if (!areSame(this.value, this.valueMin)) {
        this.value = this.valueMin;
        this.ngChange(this.value);
        this.valueChange.emit(this.value);
        this.updateRatingItems();
        this.cdr.markForCheck();
      }
    };
    const setMaxValue = () => {
      if (!areSame(this.value, this.valueMax)) {
        this.value = this.valueMax;
        this.ngChange(this.value);
        this.valueChange.emit(this.value);
        this.updateRatingItems();
        this.cdr.markForCheck();
      }
    };
    if (event.keyCode === Keys.ArrowDown) {
      decreaseValue();
    }
    if (event.keyCode === Keys.ArrowLeft) {
      if (this.direction === "ltr") {
        decreaseValue();
      } else {
        increaseValue();
      }
    }
    if (event.keyCode === Keys.ArrowUp) {
      increaseValue();
    }
    if (event.keyCode === Keys.ArrowRight) {
      if (this.direction === "ltr") {
        increaseValue();
      } else {
        decreaseValue();
      }
    }
    if (event.keyCode === Keys.Home) {
      setMinValue();
    }
    if (event.keyCode === Keys.End) {
      setMaxValue();
    }
  }
};
RatingComponent.ɵfac = function RatingComponent_Factory(t) {
  return new (t || RatingComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
};
RatingComponent.ɵcmp = ɵɵdefineComponent({
  type: RatingComponent,
  selectors: [["kendo-rating"]],
  contentQueries: function RatingComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, RatingItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, RatingHoveredItemTemplateDirective, 5);
      ɵɵcontentQuery(dirIndex, RatingSelectedItemTemplateDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hoveredItemTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectedItemTemplate = _t.first);
    }
  },
  hostVars: 15,
  hostBindings: function RatingComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-disabled", ctx.disabled)("aria-readonly", ctx.readonly)("tabindex", ctx.tabindex)("dir", ctx.direction)("aria-invalid", ctx.isControlInvalid)("aria-valuemin", ctx.valueMin)("aria-valuemax", ctx.valueMax)("aria-valuenow", ctx.valueNow)("role", ctx.ariaRole);
      ɵɵclassProp("k-disabled", ctx.disabled)("k-readonly", ctx.readonly)("k-rating", ctx.hostClass);
    }
  },
  inputs: {
    disabled: "disabled",
    readonly: "readonly",
    tabindex: "tabindex",
    itemsCount: "itemsCount",
    value: "value",
    selection: "selection",
    precision: "precision",
    label: "label",
    icon: "icon",
    svgIcon: "svgIcon",
    svgIconOutline: "svgIconOutline"
  },
  outputs: {
    valueChange: "valueChange"
  },
  exportAs: ["kendoRating"],
  features: [ɵɵProvidersFeature([LocalizationService, {
    provide: L10N_PREFIX,
    useValue: "kendo.rating"
  }, {
    multi: true,
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent)
    /* eslint-disable-line*/
  }, {
    provide: KendoInput,
    useExisting: forwardRef(() => RatingComponent)
  }])],
  decls: 3,
  vars: 2,
  consts: [[1, "k-rating-container"], ["class", "k-rating-item", 3, "title", "ngClass", "mouseenter", "mouseout", "click", 4, "ngFor", "ngForOf"], ["class", "k-rating-label", 4, "ngIf"], [1, "k-rating-item", 3, "mouseenter", "mouseout", "click", "title", "ngClass"], [4, "ngIf"], ["size", "xlarge", 3, "name", "svgIcon", 4, "ngIf"], ["size", "xlarge", 3, "name", 4, "ngIf"], ["size", "xlarge", 3, "name", "svgIcon"], ["size", "xlarge", 3, "name"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-rating-precision-complement"], ["class", "k-rating-precision-part", 3, "ngStyle", 4, "ngIf"], [1, "k-rating-precision-part", 3, "ngStyle"], [1, "k-rating-label"]],
  template: function RatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵtemplate(1, RatingComponent_span_1_Template, 3, 7, "span", 1);
      ɵɵelementEnd();
      ɵɵtemplate(2, RatingComponent_span_2_Template, 2, 1, "span", 2);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.ratingItems);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.label);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, IconWrapperComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoRating",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.rating"
      }, {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RatingComponent)
        /* eslint-disable-line*/
      }, {
        provide: KendoInput,
        useExisting: forwardRef(() => RatingComponent)
      }],
      selector: "kendo-rating",
      template: `
        <span class="k-rating-container">
            <span
                *ngFor="let item of ratingItems; index as i"
                class="k-rating-item"
                [title]="item.title"
                [ngClass]="{
                    'k-selected': item.selected || item.selectedIndicator,
                    'k-hover': item.hovered
                }"
                (mouseenter)="onMouseEnter($event)"
                (mouseout)="onMouseOut()"
                (click)="changeValue(i, $event)"
            >
                <ng-container *ngIf="!item.half">
                    <ng-container *ngIf="!itemTemplate">
                        <kendo-icon-wrapper
                            *ngIf="!icon"
                            size="xlarge"
                            [name]="item.selected || item.hovered ? 'star' : 'star-outline'"
                            [svgIcon]="item.selected || item.hovered ? svgIcon : svgIconOutline"
                        >
                        </kendo-icon-wrapper>

                        <kendo-icon-wrapper
                            *ngIf="icon"
                            size="xlarge"
                            [name]="item.selected || item.hovered ? icon : icon + '-outline'"
                        >
                        </kendo-icon-wrapper>
                    </ng-container>

                    <ng-template
                        *ngIf="itemTemplate && (!item.selected && !item.hovered)"
                        [ngTemplateOutlet]="itemTemplate?.templateRef"
                        [ngTemplateOutletContext]="{index: i}"
                    >
                    </ng-template>

                    <ng-template
                        *ngIf="hoveredItemTemplate && item.hovered"
                        [ngTemplateOutlet]="hoveredItemTemplate?.templateRef"
                        [ngTemplateOutletContext]="{index: i}"
                    >
                    </ng-template>

                    <ng-template
                        *ngIf="selectedItemTemplate && (item.selected && !item.hovered)"
                        [ngTemplateOutlet]="selectedItemTemplate?.templateRef"
                        [ngTemplateOutletContext]="{index: i}"
                    >
                    </ng-template>
                </ng-container>

                <ng-container *ngIf="item.half">
                    <ng-container *ngIf="!itemTemplate">
                        <span class="k-rating-precision-complement">
                            <kendo-icon-wrapper
                                *ngIf="!icon"
                                size="xlarge"
                                [name]="'star-outline'"
                                [svgIcon]="svgIconOutline"
                            >
                            </kendo-icon-wrapper>

                            <kendo-icon-wrapper
                                *ngIf="icon"
                                size="xlarge"
                                [name]="icon + '-outline'"
                            >
                            </kendo-icon-wrapper>
                        </span>

                        <span
                            class="k-rating-precision-part"
                            [ngStyle]="{'clipPath': direction === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)'}"
                        >
                            <kendo-icon-wrapper
                                *ngIf="!icon"
                                size="xlarge"
                                [name]="'star'"
                                [svgIcon]="svgIcon"
                            >
                            </kendo-icon-wrapper>

                            <kendo-icon-wrapper
                                *ngIf="icon"
                                size="xlarge"
                                [name]="icon"
                            >
                            </kendo-icon-wrapper>
                        </span>
                    </ng-container>

                    <span
                        class="k-rating-precision-complement"
                    >
                        <ng-template
                            [ngTemplateOutlet]="itemTemplate?.templateRef"
                            [ngTemplateOutletContext]="{index: i}"
                        >
                        </ng-template>
                    </span>

                    <span
                        *ngIf="hoveredItemTemplate && item.hovered"
                        class="k-rating-precision-part"
                        [ngStyle]="{'clipPath': direction === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)'}"
                    >
                        <ng-template
                            [ngTemplateOutlet]="hoveredItemTemplate?.templateRef"
                            [ngTemplateOutletContext]="{index: i}"
                        >
                        </ng-template>
                    </span>

                    <span
                        *ngIf="selectedItemTemplate && (item.selected && !item.hovered)"
                        class="k-rating-precision-part"
                        [ngStyle]="{'clipPath': direction === 'rtl' ? 'inset(0 0 0 50%)' : 'inset(0 50% 0 0)'}"
                    >
                        <ng-template
                            [ngTemplateOutlet]="selectedItemTemplate?.templateRef"
                            [ngTemplateOutletContext]="{index: i}"
                        >
                        </ng-template>
                    </span>

                    <span [style.width.px]="24" [style.height.px]="24" [style.display]="'block'"></span>
                </ng-container>
            </span>
        </span>

        <span 
            *ngIf="label"
            class="k-rating-label"
        >{{ label }}</span>
  `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }];
  }, {
    itemTemplate: [{
      type: ContentChild,
      args: [RatingItemTemplateDirective]
    }],
    hoveredItemTemplate: [{
      type: ContentChild,
      args: [RatingHoveredItemTemplateDirective]
    }],
    selectedItemTemplate: [{
      type: ContentChild,
      args: [RatingSelectedItemTemplateDirective]
    }],
    disabled: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    readonly: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.aria-readonly"]
    }, {
      type: HostBinding,
      args: ["class.k-readonly"]
    }],
    tabindex: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    itemsCount: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    precision: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    svgIconOutline: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-rating"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    isControlInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    valueMin: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    valueMax: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }],
    valueNow: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    ariaRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }]
  });
})();
var PUBLIC_DIRECTIVES = [RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective];
var RatingModule = class {
};
RatingModule.ɵfac = function RatingModule_Factory(t) {
  return new (t || RatingModule)();
};
RatingModule.ɵmod = ɵɵdefineNgModule({
  type: RatingModule,
  declarations: [RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective],
  imports: [CommonModule, IconsModule],
  exports: [RatingComponent, RatingItemTemplateDirective, RatingHoveredItemTemplateDirective, RatingSelectedItemTemplateDirective]
});
RatingModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      declarations: [PUBLIC_DIRECTIVES],
      exports: [PUBLIC_DIRECTIVES],
      imports: [CommonModule, IconsModule]
    }]
  }], null, null);
})();
var InputsModule = class {
};
InputsModule.ɵfac = function InputsModule_Factory(t) {
  return new (t || InputsModule)();
};
InputsModule.ɵmod = ɵɵdefineNgModule({
  type: InputsModule,
  imports: [CommonModule],
  exports: [TextAreaModule, TextBoxModule, SliderModule, RangeSliderModule, SwitchModule, NumericTextBoxModule, MaskedTextBoxModule, ColorPickerModule, CheckBoxModule, RadioButtonModule, FormFieldModule, SignatureModule, RatingModule]
});
InputsModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, TextAreaModule, TextBoxModule, SliderModule, RangeSliderModule, SwitchModule, NumericTextBoxModule, MaskedTextBoxModule, ColorPickerModule, CheckBoxModule, RadioButtonModule, FormFieldModule, SignatureModule, RatingModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputsModule, [{
    type: NgModule,
    args: [{
      exports: [TextAreaModule, TextBoxModule, SliderModule, RangeSliderModule, SwitchModule, NumericTextBoxModule, MaskedTextBoxModule, ColorPickerModule, CheckBoxModule, RadioButtonModule, FormFieldModule, SignatureModule, RatingModule],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var SwitchBlurEvent = class {
};
var SwitchFocusEvent = class {
};

export {
  LabelTemplateDirective,
  SliderTicksComponent,
  LocalizedSliderMessagesDirective,
  SliderComponent,
  LocalizedRangeSliderMessagesDirective,
  RangeSliderComponent,
  LocalizedSwitchMessagesDirective,
  SwitchComponent,
  TextBoxDirective,
  TextAreaDirective,
  InputSeparatorComponent,
  LocalizedNumericTextBoxMessagesDirective,
  NumericTextBoxComponent,
  NumericTextBoxCustomMessagesComponent,
  MaskingService2 as MaskingService,
  MaskedTextBoxComponent,
  SliderCustomMessagesComponent,
  SliderModule,
  RangeSliderCustomMessagesComponent,
  RangeSliderModule,
  SwitchCustomMessagesComponent,
  SwitchModule,
  SharedModule2 as SharedModule,
  NumericTextBoxModule,
  MaskedTextBoxModule,
  TextBoxSuffixTemplateDirective,
  TextBoxPrefixTemplateDirective,
  LocalizedTextBoxMessagesDirective,
  TextBoxComponent,
  TextBoxCustomMessagesComponent,
  TextBoxModule,
  TextAreaPrefixComponent,
  TextAreaSuffixComponent,
  TextAreaComponent,
  TextAreaModule,
  ColorPickerCancelEvent,
  ColorPickerCloseEvent,
  ColorPickerOpenEvent,
  ActiveColorClickEvent,
  LocalizedColorPickerMessagesDirective,
  ColorPaletteComponent,
  NumericLabelDirective,
  ColorGradientComponent,
  FlatColorPickerComponent,
  ColorPickerComponent,
  ColorPickerCustomMessagesComponent,
  ColorPickerModule,
  CheckBoxDirective,
  CheckBoxComponent,
  CheckBoxModule,
  RadioButtonDirective,
  RadioButtonComponent,
  RadioButtonModule,
  ErrorComponent,
  HintComponent,
  FormFieldComponent,
  FormFieldModule,
  SignatureMessages,
  SignatureCustomMessagesComponent,
  LocalizedSignatureMessagesDirective,
  SignatureCloseEvent,
  SignatureOpenEvent,
  SignatureComponent,
  SignatureModule,
  RatingItemTemplateDirective,
  RatingHoveredItemTemplateDirective,
  RatingSelectedItemTemplateDirective,
  RatingComponent,
  RatingModule,
  InputsModule,
  SwitchBlurEvent,
  SwitchFocusEvent
};
//# sourceMappingURL=chunk-NQPUMHIO.js.map
