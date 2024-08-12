import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-DJ5S5XYK.js";
import {
  ResizeSensorComponent,
  ResizeSensorModule,
  hasObservers,
  isDocumentAvailable
} from "./chunk-NEHKRBA2.js";
import {
  validatePackage
} from "./chunk-RRG7PLXH.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-YYSCT43L.js";
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver$1,
  ElementRef,
  EventEmitter,
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
  auditTime,
  from,
  fromEvent,
  isDevMode,
  merge,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DJXTNQ22.js";

// node_modules/@progress/kendo-svg-icons/dist/index.es.js
var caretAltUpIcon = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
};
var caretAltRightIcon = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
};
var caretAltDownIcon = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
};
var caretAltLeftIcon = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
};
var caretAltToRightIcon = {
  name: "caret-alt-to-right",
  content: '<path d="m128 128 192 128-192 128zm224 256V128h-32v256z" />',
  viewBox: "0 0 512 512"
};
var caretAltToLeftIcon = {
  name: "caret-alt-to-left",
  content: '<path d="M352 384 160 256l192-128zM128 128v256h32V128z" />',
  viewBox: "0 0 512 512"
};
var caretAltExpandIcon = {
  name: "caret-alt-expand",
  content: '<path d="M128 288h256L256 480zM256 32 128 224h256.001z" />',
  viewBox: "0 0 512 512"
};
var chevronUpIcon = {
  name: "chevron-up",
  content: '<path d="m129.941 353.941 126.06-126.06 126.061 126.06L416 320 256.001 160 96 320z" />',
  viewBox: "0 0 512 512"
};
var chevronRightIcon = {
  name: "chevron-right",
  content: '<path d="m158.059 129.941 126.06 126.06-126.06 126.061L192 416l160-159.999L192 96z" />',
  viewBox: "0 0 512 512"
};
var chevronDownIcon = {
  name: "chevron-down",
  content: '<path d="m382.059 158.059-126.06 126.06-126.061-126.06L96 192l159.999 160L416 192z" />',
  viewBox: "0 0 512 512"
};
var chevronLeftIcon = {
  name: "chevron-left",
  content: '<path d="m353.941 382.059-126.06-126.06 126.06-126.061L320 96 160 255.999 320 416z" />',
  viewBox: "0 0 512 512"
};
var arrowRightIcon = {
  name: "arrow-right",
  content: '<path d="M224 384v-96H96v-64h128v-96l192 128z" />',
  viewBox: "0 0 512 512"
};
var arrowLeftIcon = {
  name: "arrow-left",
  content: '<path d="M288 128v96h128v64l-128 .001V384L96 256.001z" />',
  viewBox: "0 0 512 512"
};
var columnsIcon = {
  name: "columns",
  content: '<path d="M64 32h96v448H64zm128 448h96V32h-96zM320 32v448h96V32z" />',
  viewBox: "0 0 512 512"
};
var reorderIcon = {
  name: "reorder",
  content: '<path d="M480 128v64H32v-64zM32 224v64h448v-64zm448 96H32v64h448z" />',
  viewBox: "0 0 512 512"
};
var moreVerticalIcon = {
  name: "more-vertical",
  content: '<path d="M240 128c26.4 0 48-21.6 48-48s-21.6-48-48-48-48 21.6-48 48 21.6 48 48 48m0 64c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48m0 160c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48" />',
  viewBox: "0 0 512 512"
};
var displayInlineFlexIcon = {
  name: "display-inline-flex",
  content: '<path d="M96 416h320V96H96zm32-288h256v256H128zm32 32h64v192h-64zm128 0h64v192h-64zM32 32h32v448H32zm416 0h32v448h-32z" />',
  viewBox: "0 0 512 512"
};
var dropletSliderIcon = {
  name: "droplet-slider",
  content: '<path d="M192 384v32c-53 0-96-43-96-96h32c0 35.3 28.7 64 64 64m160-72c0 92.8-71.6 168-160 168S32 404.8 32 312C32 181.3 192 32 192 32s160 149.3 160 280m-32 0c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-47.8 64.3-73 122.8-73 169 0 75 57.4 136 128 136s128-61 128-136m128-88h-32v256h32zm0-192h-32v64h32zm-64 96v64h96v-64z" />',
  viewBox: "0 0 512 512"
};
var maxWidthIcon = {
  name: "max-width",
  content: '<path d="M0 96v288h32V96zm479 0v143.4L352 160v64H160v-64L32 240l128 80v-64h192v64l127-79.4V384h32V96z" />',
  viewBox: "0 0 512 512"
};
var clockIcon = {
  name: "clock",
  content: '<path d="M256 128h-32v160h160v-32H256zm0-96C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m0 416c-105.9 0-192-86.1-192-192S150.1 64 256 64s192 86.1 192 192-86.1 192-192 192" />',
  viewBox: "0 0 512 512"
};
var calendarIcon = {
  name: "calendar",
  content: '<path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z" />',
  viewBox: "0 0 512 512"
};
var lockIcon = {
  name: "lock",
  content: '<path d="M384 224h-32v-96c0-53-43-96-96-96s-96 43-96 96v96h-32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V256c0-17.6-14.4-32-32-32m-192-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96H192zm64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32" />',
  viewBox: "0 0 512 512"
};
var unlockIcon = {
  name: "unlock",
  content: '<path d="M416 224H224v-96c0-53-43-96-96-96s-96 43-96 96v128h32V128c0-35.3 28.7-64 64-64s64 28.7 64 64v96h-32c-17.6 0-32 14.4-32 32v192c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V256c0-17.6-14.4-32-32-32M288 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32" />',
  viewBox: "0 0 512 512"
};
var cancelIcon = {
  name: "cancel",
  content: '<path d="M256 32c-50.3 0-96.8 16.6-134.1 44.6-17.2 12.8-32.4 28.1-45.3 45.3C48.6 159.2 32 205.7 32 256c0 123.7 100.3 224 224 224 50.3 0 96.8-16.6 134.1-44.6 17.2-12.8 32.4-28.1 45.3-45.3 28-37.4 44.6-83.8 44.6-134.1 0-123.7-100.3-224-224-224m0 384c-88.2 0-160-71.8-160-160 0-32.6 9.8-62.9 26.6-88.2l221.6 221.6C318.9 406.2 288.6 416 256 416m133.4-71.8L167.8 122.6C193.1 105.8 223.4 96 256 96c88.2 0 160 71.8 160 160 0 32.6-9.8 62.9-26.6 88.2" />',
  viewBox: "0 0 512 512"
};
var checkIcon = {
  name: "check",
  content: '<path d="M434.7 82.7 480 128 192 416 32 256l45.3-45.3L192 325.5z" />',
  viewBox: "0 0 512 512"
};
var checkCircleIcon = {
  name: "check-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m-32 352L96 256l45-45 83 83 147-147 45 45z" />',
  viewBox: "0 0 512 512"
};
var xIcon = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
};
var xCircleIcon = {
  name: "x-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7z" />',
  viewBox: "0 0 512 512"
};
var plusIcon = {
  name: "plus",
  content: '<path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z" />',
  viewBox: "0 0 512 512"
};
var minusIcon = {
  name: "minus",
  content: '<path d="M96 224v64h320v-64z" />',
  viewBox: "0 0 512 512"
};
var sortAscSmallIcon = {
  name: "sort-asc-small",
  content: '<path d="M256 192v224h-32V192h-96L240 64l112 128z" />',
  viewBox: "0 0 512 512"
};
var sortDescSmallIcon = {
  name: "sort-desc-small",
  content: '<path d="M352 288 240 416 128 288h96V64h32v224z" />',
  viewBox: "0 0 512 512"
};
var filterIcon = {
  name: "filter",
  content: '<path d="M64 64v32l160 160v224l64-64V256L448 96V64z" />',
  viewBox: "0 0 512 512"
};
var filterClearIcon = {
  name: "filter-clear",
  content: '<path d="m143.5 64 168.2 168.2L288 256v160l-64 64V256L64 96V64zm236.1 100.4L448 96V64H279.3l-64-64L192 22l298 298 22-23.3z" />',
  viewBox: "0 0 512 512"
};
var hyperlinkOpenIcon = {
  name: "hyperlink-open",
  content: '<path d="M32 480h448V256h-32v192H64V64h192V32H32zM320 32l56.9 56.9.5.5L224 242.7l45.3 45.3 153.3-153.4L480 192V32z" />',
  viewBox: "0 0 512 512"
};
var windowIcon = {
  name: "window",
  content: '<path d="M96 96v320h320V96zm288 288H128V192h256z" />',
  viewBox: "0 0 512 512"
};
var windowRestoreIcon = {
  name: "window-restore",
  content: '<path d="M448 32v288h-32V128H160V32zM64 192h288v288H64zm32 256h224V288H96z" />',
  viewBox: "0 0 512 512"
};
var windowMinimizeIcon = {
  name: "window-minimize",
  content: '<path d="M416 288v64H96v-64z" />',
  viewBox: "0 0 512 512"
};
var searchIcon = {
  name: "search",
  content: '<path d="M365.3 320h-22.7l-26.7-26.7C338.5 265.7 352 230.4 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192s71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1l26.7 26.7v22.7L434.7 480l45.3-45.3zM64 192c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128S64 262.7 64 192" />',
  viewBox: "0 0 512 512"
};
var stickIcon = {
  name: "stick",
  content: '<path d="M192 96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v32h128zm128 160c0 35.3-28.7 64-64 64s-64-28.7-64-64v-96H64v96c0 106 86 192 192 192s192-86 192-192v-96H320zm96-192h-64c-17.7 0-32 14.3-32 32v32h128V96c0-17.7-14.3-32-32-32" />',
  viewBox: "0 0 512 512"
};
var unstickIcon = {
  name: "unstick",
  content: '<path d="M290.6 131.4c12.4-12.4 12.4-32.6 0-45l-45-45c-12.4-12.4-32.6-12.4-45 0L178 63.8l90.1 90zM268.1 334c-24.9 24.9-65.2 24.9-90.1 0s-24.9-65.2 0-90.1l67.5-67.5-90-90.1L88 153.9C13.4 228.5 13.4 349.4 88 424s195.5 74.6 270.1 0l67.5-67.5-90-90.1zm202.6-67.5-45-45c-12.4-12.4-32.6-12.4-45 0L358.2 244l90 90 22.5-22.5c12.4-12.4 12.4-32.6 0-45" />',
  viewBox: "0 0 512 512"
};
var setColumnPositionIcon = {
  name: "set-column-position",
  content: '<path d="M448 32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32M192 416H96V96h96zm224 0H224v-32h192zm0-64H224v-64h192zm0-96H224v-64h192zm0-96H224V96h192z" />',
  viewBox: "0 0 512 512"
};
var starOutlineIcon = {
  name: "star-outline",
  content: '<path d="M480 202.4 319.1 188 256 32l-63.1 156L32 202.4l122 111.7L117.2 480 256 391.5 394.8 480 358 314.1zM256 353.6l-90.8 57.9 24-108.5-82.1-75.2 108.1-9.7L256 117.3l40.8 100.8 108.1 9.7-82.1 75.2 24.1 108.5z" />',
  viewBox: "0 0 512 512"
};
var starIcon = {
  name: "star",
  content: '<path d="M256 391.5 117.2 480 154 314.1 32 202.4 192.9 188 256 32l63.1 156L480 202.4 358 314.1 394.8 480z" />',
  viewBox: "0 0 512 512"
};
var exclamationCircleIcon = {
  name: "exclamation-circle",
  content: '<path d="M224 128h64v160h-64zm0 256h64v-64h-64zm256-128c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224m-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192" />',
  viewBox: "0 0 512 512"
};
var paletteIcon = {
  name: "palette",
  content: '<path d="m206 256.6 160-160c-2.2-5.7-4.8-11.1-7.9-16.3-24.2-40.8-60.1-66-107.8-75.9-2.3-.5-4.7-1-7.1-1.4C192-5.8 143.1 4.8 96.5 34.6 49.3 64.7 19.2 107.2 6.1 162c-13 54.8-5.2 106.4 23.4 154.6 14.2 23.8 31.3 43.2 51.4 58.4 3.8-25.2 13.4-52 36.4-75 31.3-31.4 64-41.3 88.7-43.4M288 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m-96-32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32M64 256c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m0-128c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m438.7 12.9L480 118.3c-12.4-12.4-32.8-12.4-45.3 0L281.1 271.9c11.5 5.8 20.8 12.2 27.7 17.6 5.3 4.2 9.2 7.7 11.3 9.8l11.3 12.7c5.4 6.8 11.8 16.2 17.6 27.6l153.5-153.5c12.6-12.4 12.6-32.8.2-45.2M354.3 289.3c-4.8-5.8-8.6-9.9-10.6-11.9-2.3-2.3-6.3-6.1-12-10.7L457.4 141h.1l22.5 22.5zm-78.7 169c-23.8 23.7-48.4 33-70.7 37.7-49.6 10.4-96 16-96 16s34.7-17.3 33.9-77c-.4-32.7-3.7-66.4 19.7-89.8 56.6-56.7 113.3.2 113.3.2s56.7 56-.2 112.9" />',
  viewBox: "0 0 512 512"
};
var slidersIcon = {
  name: "sliders",
  content: '<path d="M480 96v32H285.3c-6.6 18.6-24.4 32-45.3 32s-38.7-13.4-45.3-32H32V96h162.7c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32zm-112 96c-20.9 0-38.7 13.4-45.3 32H32v32h290.7c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v-32h-66.7c-6.6-18.6-24.4-32-45.3-32M176 320c-20.9 0-38.7 13.4-45.3 32H32v32h98.7c6.6 18.6 24.4 32 45.3 32s38.7-13.4 45.3-32H480v-32H221.3c-6.6-18.6-24.4-32-45.3-32" />',
  viewBox: "0 0 512 512"
};
var dropletSlashIcon = {
  name: "droplet-slash",
  content: '<path d="m317.9 431 23.2 23.2C316.5 470.6 287.3 480 256 480c-88.4 0-160-75.2-160-168 0-27.8 7.2-56.4 18.6-84.2l24.8 24.8C131.9 274 128 293.9 128 312c0 75 57.4 136 128 136 22.4 0 43.5-6.2 61.9-17M256 416v-32c-35.3 0-64-28.7-64-64h-32c0 53 43 96 96 96m224 41.4L457.4 480 32 54.6 54.6 32l108.7 108.7C207 77.7 256 32 256 32s160 149.3 160 280c0 24.1-4.9 47.1-13.6 67.8zM384 312c0-46.3-25.3-104.7-73-169-20-27-40.3-49.8-55-65.4-14.7 15.6-34.9 38.5-55 65.4-1.4 1.9-2.7 3.7-4.1 5.6-.8 1.1-1.5 2.1-2.3 3.2l-1.5 2.1-3 4.2c-.2.3-.4.5-.6.8-1 1.5-2.1 3-3.1 4.5-.1.1-.1.2-.2.3l191.2 191.2c.5-1.6 1-3.3 1.4-4.9 0-.2.1-.4.1-.5.4-1.5.8-2.9 1.1-4.4.1-.3.1-.6.2-.9.3-1.4.6-2.7.9-4.1.1-.4.2-.8.2-1.2.2-1.3.5-2.6.7-3.9.1-.5.2-1 .2-1.5.2-1.2.3-2.5.5-3.7.1-.5.1-1.1.2-1.6l.3-3.6c0-.6.1-1.1.1-1.7.1-1.3.2-2.5.2-3.8 0-.5.1-1 .1-1.6.4-1.9.4-3.7.4-5.5" />',
  viewBox: "0 0 512 512"
};
var insertTopIcon = {
  name: "insert-top",
  content: '<path d="M192 320h192v32H192zm0-128h288v-32H192zm192 64H192v32h192zM32 64v224l96-112z" />',
  viewBox: "0 0 512 512"
};
var insertMiddleIcon = {
  name: "insert-middle",
  content: '<path d="M192 128h192v32H192zm0 128h288v-32H192zm192 64H192v32h192zM32 128v224l96-112z" />',
  viewBox: "0 0 512 512"
};
var insertBottomIcon = {
  name: "insert-bottom",
  content: '<path d="M192 224h192v32H192zm0 128h288v-32H192zm192-192H192v32h192zM32 224v224l96-112z" />',
  viewBox: "0 0 512 512"
};

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
  return element.ownerDocument || element.document || element;
}

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return ownerDocument(element).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element) {
  return ownerDocument(element).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div = document.createElement("div");
    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    cachedWidth = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element) {
  var win = window_default(element);
  var document2 = document_default(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var ref = element.style;
  var display = ref.display;
  var left = ref.left;
  var position2 = ref.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return rect;
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element) {
  var documentElement = document_default(element);
  var win = window_default(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element) {
  var parent = offset_parent_default(element);
  return parent ? element_scroll_position_default(parent) : {
    x: 0,
    y: 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = window_default(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset_default(element);
  var parentElement = parent || offset_parent_default(element);
  var ownerDocument2 = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = {
    top: 0,
    left: 0
  };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element, parent, scale) {
  if (scale === void 0) scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(ref) {
  var offset2 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element) {
  var result = [];
  var sibling = element.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(function(list, p) {
      return list.concat(siblingElements.filter(function(s) {
        return s === p;
      }));
    }, [])[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};

// node_modules/@progress/kendo-angular-popup/fesm2020/progress-kendo-angular-popup.mjs
var _c0 = ["container"];
var _c1 = ["*"];
function PopupComponent_ng_template_4_Template(rf, ctx) {
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
    return null;
  }
  const sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents_default(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class {
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align_default(settings);
  }
  boundingOffset(el) {
    return bounding_offset_default(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset_default(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset_default(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return position_with_scroll_default(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrict_to_view_default(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset_default(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
};
DOMService.ɵfac = function DOMService_Factory(t) {
  return new (t || DOMService)();
};
DOMService.ɵprov = ɵɵdefineInjectable({
  token: DOMService,
  factory: DOMService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
};
AlignService.ɵfac = function AlignService_Factory(t) {
  return new (t || AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
AlignService.ɵprov = ɵɵdefineInjectable({
  token: AlignService,
  factory: AlignService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var PositionService = class {
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
};
PositionService.ɵfac = function PositionService_Factory(t) {
  return new (t || PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
};
PositionService.ɵprov = ɵɵdefineInjectable({
  token: PositionService,
  factory: PositionService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var ResizeService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
};
ResizeService.ɵfac = function ResizeService_Factory(t) {
  return new (t || ResizeService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ResizeService.ɵprov = ɵɵdefineInjectable({
  token: ResizeService,
  factory: ResizeService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class {
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
};
ScrollableService.ɵfac = function ScrollableService_Factory(t) {
  return new (t || ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
};
ScrollableService.ɵprov = ɵɵdefineInjectable({
  token: ScrollableService,
  factory: ScrollableService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class {
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
    this.start = new EventEmitter();
    this.end = new EventEmitter();
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
};
AnimationService.ɵfac = function AnimationService_Factory(t) {
  return new (t || AnimationService)(ɵɵinject(AnimationBuilder));
};
AnimationService.ɵprov = ɵɵdefineInjectable({
  token: AnimationService,
  factory: AnimationService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationBuilder
    }];
  }, null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCodes: ["KENDOUIANGULAR", "KENDOUICOMPLETE"],
  publishDate: 1720607721,
  version: "16.4.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class {
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    this.animate = true;
    this.anchorAlign = {
      horizontal: "left",
      vertical: "bottom"
    };
    this.collision = {
      horizontal: "fit",
      vertical: "flip"
    };
    this.popupAlign = {
      horizontal: "left",
      vertical: "top"
    };
    this.copyAnchorStyles = false;
    this.positionMode = "fixed";
    this.offset = DEFAULT_OFFSET;
    this.anchorViewportLeave = new EventEmitter();
    this.close = new EventEmitter();
    this.open = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.resolvedPromise = Promise.resolve(null);
    this.initialCheck = true;
    validatePackage(packageMetadata);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
};
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
PopupComponent.ɵcmp = ɵɵdefineComponent({
  type: PopupComponent,
  selectors: [["kendo-popup"]],
  viewQuery: function PopupComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(ResizeSensorComponent, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
    }
  },
  inputs: {
    animate: "animate",
    anchor: "anchor",
    anchorAlign: "anchorAlign",
    collision: "collision",
    popupAlign: "popupAlign",
    copyAnchorStyles: "copyAnchorStyles",
    popupClass: "popupClass",
    positionMode: "positionMode",
    offset: "offset",
    margin: "margin"
  },
  outputs: {
    anchorViewportLeave: "anchorViewportLeave",
    close: "close",
    open: "open",
    positionChange: "positionChange"
  },
  exportAs: ["kendo-popup"],
  features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 4,
  consts: [["container", ""], [1, "k-child-animation-container"], [1, "k-popup", 3, "ngClass"], [3, "ngTemplateOutlet", "ngIf"], [3, "resize", "rateLimit"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1)(1, "div", 2, 0);
      ɵɵprojection(3);
      ɵɵtemplate(4, PopupComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      ɵɵelementStart(5, "kendo-resize-sensor", 4);
      ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onResize());
      });
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngClass", ctx.popupClass);
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", ctx.content)("ngIf", ctx.content);
      ɵɵadvance();
      ɵɵproperty("rateLimit", 100);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, ResizeSensorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
            <div class="k-popup" [ngClass]="popupClass" #container>
                <ng-content></ng-content>
                <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
                <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
                </kendo-resize-sensor>
            </div>
        </div>
     `
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AlignService
    }, {
      type: DOMService
    }, {
      type: PositionService
    }, {
      type: ResizeService
    }, {
      type: ScrollableService
    }, {
      type: AnimationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class {
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Gets the root view container into which the component will be injected.
   *
   * @returns {ComponentRef<any>}
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See http://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Sets or gets the HTML element of the root component container.
   *
   * @returns {HTMLElement}
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  /**
   * Opens a Popup component. Created Popups are mounted
   * in the DOM directly in the root application component.
   *
   * @param {PopupSettings} options - The options which define the Popup.
   * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <ng-template #template>
   *      Popup content
   *     </ng-template>
   *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
   *   `
   * })
   * export class AppComponent {
   *     public popupRef: PopupRef;
   *
   *     constructor( private popupService: PopupService ) {}
   *
   *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
   *         if (this.popupRef) {
   *              this.popupRef.close();
   *              this.popupRef = null;
   *              return;
   *         }
   *
   *         this.popupRef = this.popupService.open({
   *           anchor: anchor,
   *           content: template
   *         });
   *     }
   * }
   * ```
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        removeElement(popupElement);
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef
   * @returns {HTMLElement}
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by its type.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` type class.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the inputs on the component.
   *
   * @param {ComponentRef<any>} component
   * @param {*} options
   * @returns {ComponentRef<any>}
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).map((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and the nodes to append from the `content` option.
   *
   * @param {*} content
   * @returns {any}
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
};
PopupService.ɵfac = function PopupService_Factory(t) {
  return new (t || PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
};
PopupService.ɵprov = ɵɵdefineInjectable({
  token: PopupService,
  factory: PopupService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [POPUP_CONTAINER]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var POPUP_DIRECTIVES = [PopupComponent];
var PopupModule = class {
};
PopupModule.ɵfac = function PopupModule_Factory(t) {
  return new (t || PopupModule)();
};
PopupModule.ɵmod = ɵɵdefineNgModule({
  type: PopupModule,
  declarations: [PopupComponent],
  imports: [CommonModule, ResizeSensorModule],
  exports: [PopupComponent]
});
PopupModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService],
  imports: [CommonModule, ResizeSensorModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      declarations: [POPUP_DIRECTIVES],
      entryComponents: [POPUP_DIRECTIVES],
      exports: [POPUP_DIRECTIVES],
      imports: [CommonModule, ResizeSensorModule],
      providers: [PopupService]
    }]
  }], null, null);
})();

export {
  caretAltUpIcon,
  caretAltRightIcon,
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltToRightIcon,
  caretAltToLeftIcon,
  caretAltExpandIcon,
  chevronUpIcon,
  chevronRightIcon,
  chevronDownIcon,
  chevronLeftIcon,
  arrowRightIcon,
  arrowLeftIcon,
  columnsIcon,
  reorderIcon,
  moreVerticalIcon,
  displayInlineFlexIcon,
  dropletSliderIcon,
  maxWidthIcon,
  clockIcon,
  calendarIcon,
  lockIcon,
  unlockIcon,
  cancelIcon,
  checkIcon,
  checkCircleIcon,
  xIcon,
  xCircleIcon,
  plusIcon,
  minusIcon,
  sortAscSmallIcon,
  sortDescSmallIcon,
  filterIcon,
  filterClearIcon,
  hyperlinkOpenIcon,
  windowIcon,
  windowRestoreIcon,
  windowMinimizeIcon,
  searchIcon,
  stickIcon,
  unstickIcon,
  setColumnPositionIcon,
  starOutlineIcon,
  starIcon,
  exclamationCircleIcon,
  paletteIcon,
  slidersIcon,
  dropletSlashIcon,
  insertTopIcon,
  insertMiddleIcon,
  insertBottomIcon,
  document_default,
  windowViewport,
  offset_default,
  scrollPosition,
  position_with_scroll_default,
  POPUP_CONTAINER,
  PopupService,
  PopupModule
};
//# sourceMappingURL=chunk-2G6IB7TQ.js.map
