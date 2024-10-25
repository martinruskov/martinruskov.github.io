import {
  NzI18nService
} from "./chunk-QHZKOV2N.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-ESP3M4RP.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-36QQ4KSC.js";
import "./chunk-5WAMXR4O.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-32MQFNNS.js";
import "./chunk-5AY537C4.js";
import {
  Directionality
} from "./chunk-FZ4NDQ3T.js";
import "./chunk-AMVX54SL.js";
import "./chunk-YMSJBD4O.js";
import "./chunk-KRAARROL.js";
import {
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-22QNHTYA.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ReplaySubject,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  booleanAttribute,
  debounce,
  distinctUntilChanged,
  inject,
  numberAttribute,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  timer,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RCOFCVN7.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-spin.mjs
var _c0 = ["*"];
function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵelement(1, "i", 3)(2, "i", 3)(3, "i", 3)(4, "i", 3);
    ɵɵelementEnd();
  }
}
function NzSpinComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NzSpinComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTip);
  }
}
function NzSpinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 4);
    ɵɵtemplate(2, NzSpinComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 5)(3, NzSpinComponent_Conditional_2_Conditional_3_Template, 2, 1, "div", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const defaultTemplate_r2 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵclassProp("ant-spin-rtl", ctx_r0.dir === "rtl")("ant-spin-spinning", ctx_r0.isLoading)("ant-spin-lg", ctx_r0.nzSize === "large")("ant-spin-sm", ctx_r0.nzSize === "small")("ant-spin-show-text", ctx_r0.nzTip);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzIndicator || defaultTemplate_r2);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzTip ? 3 : -1);
  }
}
function NzSpinComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-spin-blur", ctx_r0.isLoading);
  }
}
var NZ_CONFIG_MODULE_NAME = "spin";
var NzSpinComponent = class _NzSpinComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzIndicator = null;
    this.nzSize = "default";
    this.nzTip = null;
    this.nzDelay = 0;
    this.nzSimple = false;
    this.nzSpinning = true;
    this.destroy$ = new Subject();
    this.spinning$ = new BehaviorSubject(this.nzSpinning);
    this.delay$ = new ReplaySubject(1);
    this.isLoading = false;
    this.dir = "ltr";
  }
  ngOnInit() {
    const loading$ = this.delay$.pipe(startWith(this.nzDelay), distinctUntilChanged(), switchMap((delay) => {
      if (delay === 0) {
        return this.spinning$;
      }
      return this.spinning$.pipe(debounce((spinning) => timer(spinning ? delay : 0)));
    }), takeUntil(this.destroy$));
    loading$.subscribe((loading) => {
      this.isLoading = loading;
      this.cdr.markForCheck();
    });
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzSpinning,
      nzDelay
    } = changes;
    if (nzSpinning) {
      this.spinning$.next(this.nzSpinning);
    }
    if (nzDelay) {
      this.delay$.next(this.nzDelay);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzSpinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpinComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzSpinComponent,
      selectors: [["nz-spin"]],
      hostVars: 2,
      hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
        }
      },
      inputs: {
        nzIndicator: "nzIndicator",
        nzSize: "nzSize",
        nzTip: "nzTip",
        nzDelay: [2, "nzDelay", "nzDelay", numberAttribute],
        nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
        nzSpinning: [2, "nzSpinning", "nzSpinning", booleanAttribute]
      },
      exportAs: ["nzSpin"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 2,
      consts: [["defaultTemplate", ""], [1, "ant-spin-container", 3, "ant-spin-blur"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
      template: function NzSpinComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzSpinComponent_Conditional_2_Template, 4, 12, "div")(3, NzSpinComponent_Conditional_3_Template, 2, 2, "div", 1);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.isLoading ? 2 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.nzSimple ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2
    });
  }
};
__decorate([WithConfig()], NzSpinComponent.prototype, "nzIndicator", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinComponent, [{
    type: Component,
    args: [{
      selector: "nz-spin",
      exportAs: "nzSpin",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    @if (isLoading) {
      <div>
        <div
          class="ant-spin"
          [class.ant-spin-rtl]="dir === 'rtl'"
          [class.ant-spin-spinning]="isLoading"
          [class.ant-spin-lg]="nzSize === 'large'"
          [class.ant-spin-sm]="nzSize === 'small'"
          [class.ant-spin-show-text]="nzTip"
        >
          <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate"></ng-template>
          @if (nzTip) {
            <div class="ant-spin-text">{{ nzTip }}</div>
          }
        </div>
      </div>
    }
    @if (!nzSimple) {
      <div class="ant-spin-container" [class.ant-spin-blur]="isLoading">
        <ng-content></ng-content>
      </div>
    }
  `,
      host: {
        "[class.ant-spin-nested-loading]": "!nzSimple"
      },
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzIndicator: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTip: [{
      type: Input
    }],
    nzDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSpinning: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSpinModule = class _NzSpinModule {
  static {
    this.ɵfac = function NzSpinModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzSpinModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzSpinModule,
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-qr-code.mjs
var _c02 = ["canvas"];
function NzQRCodeComponent_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-spin");
  }
}
function NzQRCodeComponent_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "p", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 3);
    ɵɵlistener("click", function NzQRCodeComponent_Conditional_0_Case_2_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.reloadQRCode());
    });
    ɵɵelement(4, "span", 4);
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.locale.expired);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r1.locale.refresh);
  }
}
function NzQRCodeComponent_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "p", 2);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.locale.scanned);
  }
}
function NzQRCodeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzQRCodeComponent_Conditional_0_Case_1_Template, 1, 0, "nz-spin")(2, NzQRCodeComponent_Conditional_0_Case_2_Template, 7, 2, "div")(3, NzQRCodeComponent_Conditional_0_Case_3_Template, 3, 1, "div");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_1_0 = ctx_r1.nzStatus) === "loading" ? 1 : tmp_1_0 === "expired" ? 2 : tmp_1_0 === "scanned" ? 3 : -1);
  }
}
function NzQRCodeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "canvas", null, 0);
  }
}
var qrcodegen;
(function(qrcodegen2) {
  class QrCode {
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(text, ecl) {
      const segs = qrcodegen2.QrSegment.makeSegments(text);
      return QrCode.encodeSegments(segs, ecl);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(data, ecl) {
      const seg = qrcodegen2.QrSegment.makeBytes(data);
      return QrCode.encodeSegments([seg], ecl);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) throw new RangeError("Invalid value");
      let version;
      let dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits2 = QrCode.getNumDataCodewords(version, ecl) * 8;
        const usedBits = QrSegment.getTotalBits(segs, version);
        if (usedBits <= dataCapacityBits2) {
          dataUsedBits = usedBits;
          break;
        }
        if (version >= maxVersion)
          throw new RangeError("Data too long");
      }
      for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) {
        if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
      }
      let bb = [];
      for (const seg of segs) {
        appendBits(seg.mode.modeBits, 4, bb);
        appendBits(seg.numChars, seg.mode.numCharCountBits(version), bb);
        for (const b of seg.getData()) bb.push(b);
      }
      assert(bb.length == dataUsedBits);
      const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
      assert(bb.length <= dataCapacityBits);
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      assert(bb.length % 8 == 0);
      for (let padByte = 236; bb.length < dataCapacityBits; padByte ^= 236 ^ 17) appendBits(padByte, 8, bb);
      let dataCodewords = [];
      while (dataCodewords.length * 8 < bb.length) dataCodewords.push(0);
      bb.forEach((b, i) => dataCodewords[i >>> 3] |= b << 7 - (i & 7));
      return new QrCode(version, ecl, dataCodewords, mask);
    }
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(version, errorCorrectionLevel, dataCodewords, msk) {
      this.version = version;
      this.errorCorrectionLevel = errorCorrectionLevel;
      this.modules = [];
      this.isFunction = [];
      if (version < QrCode.MIN_VERSION || version > QrCode.MAX_VERSION) throw new RangeError("Version value out of range");
      if (msk < -1 || msk > 7) throw new RangeError("Mask value out of range");
      this.size = version * 4 + 17;
      let row = [];
      for (let i = 0; i < this.size; i++) row.push(false);
      for (let i = 0; i < this.size; i++) {
        this.modules.push(row.slice());
        this.isFunction.push(row.slice());
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);
      if (msk == -1) {
        let minPenalty = 1e9;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) {
            msk = i;
            minPenalty = penalty;
          }
          this.applyMask(i);
        }
      }
      assert(msk >= 0 && msk <= 7);
      this.mask = msk;
      this.applyMask(msk);
      this.drawFormatBits(msk);
      this.isFunction = [];
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(x, y) {
      return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
    }
    // Modified to expose modules for easy access
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 == 0);
        this.setFunctionModule(i, 6, i % 2 == 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!(i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0)) this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(mask) {
      const data = this.errorCorrectionLevel.formatBits << 3 | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) rem = rem << 1 ^ (rem >>> 9) * 1335;
      const bits = (data << 10 | rem) ^ 21522;
      assert(bits >>> 15 == 0);
      for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, getBit(bits, i));
      for (let i = 0; i < 8; i++) this.setFunctionModule(this.size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++) this.setFunctionModule(8, this.size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, this.size - 8, true);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let rem = this.version;
      for (let i = 0; i < 12; i++) rem = rem << 1 ^ (rem >>> 11) * 7973;
      const bits = this.version << 12 | rem;
      assert(bits >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const color = getBit(bits, i);
        const a = this.size - 11 + i % 3;
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, color);
        this.setFunctionModule(b, a, color);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx;
          const yy = y + dy;
          if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) this.setFunctionModule(xx, yy, dist != 2 && dist != 4);
        }
      }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) != 1);
      }
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(data) {
      const ver = this.version;
      const ecl = this.errorCorrectionLevel;
      if (data.length != QrCode.getNumDataCodewords(ver, ecl)) throw new RangeError("Invalid argument");
      const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = Math.floor(QrCode.getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      let blocks = [];
      const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        let dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
        k += dat.length;
        const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks) dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      let result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
          if (i != shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(block[i]);
        });
      }
      assert(result.length == rawCodewords);
      return result;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(data) {
      if (data.length != Math.floor(QrCode.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right == 6) right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = (right + 1 & 2) == 0;
            const y = upward ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
      assert(i == data.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(mask) {
      if (mask < 0 || mask > 7) throw new RangeError("Mask value out of range");
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0:
              invert = (x + y) % 2 == 0;
              break;
            case 1:
              invert = y % 2 == 0;
              break;
            case 2:
              invert = x % 3 == 0;
              break;
            case 3:
              invert = (x + y) % 3 == 0;
              break;
            case 4:
              invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;
              break;
            case 5:
              invert = x * y % 2 + x * y % 3 == 0;
              break;
            case 6:
              invert = (x * y % 2 + x * y % 3) % 2 == 0;
              break;
            case 7:
              invert = ((x + y) % 2 + x * y % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          if (!this.isFunction[y][x] && invert) this.modules[y][x] = !this.modules[y][x];
        }
      }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let result = 0;
      for (let y = 0; y < this.size; y++) {
        let runColor = false;
        let runX = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x] == runColor) {
            runX++;
            if (runX == 5) result += QrCode.PENALTY_N1;
            else if (runX > 5) result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * QrCode.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let runColor = false;
        let runY = 0;
        let runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++) {
          if (this.modules[y][x] == runColor) {
            runY++;
            if (runY == 5) result += QrCode.PENALTY_N1;
            else if (runY > 5) result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * QrCode.PENALTY_N3;
            runColor = this.modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * QrCode.PENALTY_N3;
      }
      for (let y = 0; y < this.size - 1; y++) {
        for (let x = 0; x < this.size - 1; x++) {
          const color = this.modules[y][x];
          if (color == this.modules[y][x + 1] && color == this.modules[y + 1][x] && color == this.modules[y + 1][x + 1]) result += QrCode.PENALTY_N2;
        }
      }
      let dark = 0;
      for (const row of this.modules) dark = row.reduce((sum, color) => sum + (color ? 1 : 0), dark);
      const total = this.size * this.size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      assert(k >= 0 && k <= 9);
      result += k * QrCode.PENALTY_N4;
      assert(result >= 0 && result <= 2568888);
      return result;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      else {
        const numAlign = Math.floor(this.version / 7) + 2;
        const step = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
        let result = [6];
        for (let pos = this.size - 7; result.length < numAlign; pos -= step) result.splice(1, 0, pos);
        return result;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(ver) {
      if (ver < QrCode.MIN_VERSION || ver > QrCode.MAX_VERSION) throw new RangeError("Version number out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) result -= 36;
      }
      assert(result >= 208 && result <= 29648);
      return result;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(ver, ecl) {
      return Math.floor(QrCode.getNumRawDataModules(ver) / 8) - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(degree) {
      if (degree < 1 || degree > 255) throw new RangeError("Degree out of range");
      let result = [];
      for (let i = 0; i < degree - 1; i++) result.push(0);
      result.push(1);
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = QrCode.reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length) result[j] ^= result[j + 1];
        }
        root = QrCode.reedSolomonMultiply(root, 2);
      }
      return result;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(data, divisor) {
      let result = divisor.map((_) => 0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => result[i] ^= QrCode.reedSolomonMultiply(coef, factor));
      }
      return result;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(x, y) {
      if (x >>> 8 != 0 || y >>> 8 != 0) throw new RangeError("Byte out of range");
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = z << 1 ^ (z >>> 7) * 285;
        z ^= (y >>> i & 1) * x;
      }
      assert(z >>> 8 == 0);
      return z;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      assert(n <= this.size * 3);
      const core = n > 0 && runHistory[2] == n && runHistory[3] == n * 3 && runHistory[4] == n && runHistory[5] == n;
      return (core && runHistory[0] >= n * 4 && runHistory[6] >= n ? 1 : 0) + (core && runHistory[6] >= n * 4 && runHistory[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(currentRunColor, currentRunLength, runHistory) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, runHistory);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, runHistory);
      return this.finderPenaltyCountPatterns(runHistory);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] == 0) currentRunLength += this.size;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
    static {
      this.MIN_VERSION = 1;
    }
    static {
      this.MAX_VERSION = 40;
    }
    static {
      this.PENALTY_N1 = 3;
    }
    static {
      this.PENALTY_N2 = 3;
    }
    static {
      this.PENALTY_N3 = 40;
    }
    static {
      this.PENALTY_N4 = 10;
    }
    static {
      this.ECC_CODEWORDS_PER_BLOCK = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        // Low
        [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
        // Medium
        [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        // Quartile
        [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
        // High
      ];
    }
    static {
      this.NUM_ERROR_CORRECTION_BLOCKS = [
        // Version: (note that index 0 is for padding, and is set to an illegal value)
        //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
        [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
        // Low
        [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
        // Medium
        [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
        // Quartile
        [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
        // High
      ];
    }
  }
  qrcodegen2.QrCode = QrCode;
  function appendBits(val, len, bb) {
    if (len < 0 || len > 31 || val >>> len != 0) throw new RangeError("Value out of range");
    for (let i = len - 1; i >= 0; i--) bb.push(val >>> i & 1);
  }
  function getBit(x, i) {
    return (x >>> i & 1) != 0;
  }
  function assert(cond) {
    if (!cond) throw new Error("Assertion error");
  }
  class QrSegment {
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(data) {
      let bb = [];
      for (const b of data) appendBits(b, 8, bb);
      return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(digits) {
      if (!QrSegment.isNumeric(digits)) throw new RangeError("String contains non-numeric characters");
      let bb = [];
      for (let i = 0; i < digits.length; ) {
        const n = Math.min(digits.length - i, 3);
        appendBits(parseInt(digits.substring(i, i + n), 10), n * 3 + 1, bb);
        i += n;
      }
      return new QrSegment(QrSegment.Mode.NUMERIC, digits.length, bb);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(text) {
      if (!QrSegment.isAlphanumeric(text)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let bb = [];
      let i;
      for (i = 0; i + 2 <= text.length; i += 2) {
        let temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
        temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
        appendBits(temp, 11, bb);
      }
      if (i < text.length)
        appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6, bb);
      return new QrSegment(QrSegment.Mode.ALPHANUMERIC, text.length, bb);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(text) {
      if (text == "") return [];
      else if (QrSegment.isNumeric(text)) return [QrSegment.makeNumeric(text)];
      else if (QrSegment.isAlphanumeric(text)) return [QrSegment.makeAlphanumeric(text)];
      else return [QrSegment.makeBytes(QrSegment.toUtf8ByteArray(text))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(assignVal) {
      let bb = [];
      if (assignVal < 0) throw new RangeError("ECI assignment value out of range");
      else if (assignVal < 1 << 7) appendBits(assignVal, 8, bb);
      else if (assignVal < 1 << 14) {
        appendBits(2, 2, bb);
        appendBits(assignVal, 14, bb);
      } else if (assignVal < 1e6) {
        appendBits(6, 3, bb);
        appendBits(assignVal, 21, bb);
      } else throw new RangeError("ECI assignment value out of range");
      return new QrSegment(QrSegment.Mode.ECI, 0, bb);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(text) {
      return QrSegment.NUMERIC_REGEX.test(text);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(text) {
      return QrSegment.ALPHANUMERIC_REGEX.test(text);
    }
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(mode, numChars, bitData) {
      this.mode = mode;
      this.numChars = numChars;
      this.bitData = bitData;
      if (numChars < 0) throw new RangeError("Invalid argument");
      this.bitData = bitData.slice();
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(segs, version) {
      let result = 0;
      for (const seg of segs) {
        const ccbits = seg.mode.numCharCountBits(version);
        if (seg.numChars >= 1 << ccbits) return Infinity;
        result += 4 + ccbits + seg.bitData.length;
      }
      return result;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(str) {
      str = encodeURI(str);
      let result = [];
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != "%") result.push(str.charCodeAt(i));
        else {
          result.push(parseInt(str.substring(i + 1, i + 3), 16));
          i += 2;
        }
      }
      return result;
    }
    static {
      this.NUMERIC_REGEX = /^[0-9]*$/;
    }
    static {
      this.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    }
    static {
      this.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
    }
  }
  qrcodegen2.QrSegment = QrSegment;
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  var QrCode;
  (function(QrCode2) {
    class Ecc {
      static {
        this.LOW = new Ecc(0, 1);
      }
      static {
        this.MEDIUM = new Ecc(1, 0);
      }
      static {
        this.QUARTILE = new Ecc(2, 3);
      }
      static {
        this.HIGH = new Ecc(3, 2);
      }
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(ordinal, formatBits) {
        this.ordinal = ordinal;
        this.formatBits = formatBits;
      }
    }
    QrCode2.Ecc = Ecc;
  })(QrCode = qrcodegen2.QrCode || (qrcodegen2.QrCode = {}));
})(qrcodegen || (qrcodegen = {}));
(function(qrcodegen2) {
  var QrSegment;
  (function(QrSegment2) {
    class Mode {
      static {
        this.NUMERIC = new Mode(1, [10, 12, 14]);
      }
      static {
        this.ALPHANUMERIC = new Mode(2, [9, 11, 13]);
      }
      static {
        this.BYTE = new Mode(4, [8, 16, 16]);
      }
      static {
        this.KANJI = new Mode(8, [8, 10, 12]);
      }
      static {
        this.ECI = new Mode(7, [0, 0, 0]);
      }
      /*-- Constructor and fields --*/
      constructor(modeBits, numBitsCharCount) {
        this.modeBits = modeBits;
        this.numBitsCharCount = numBitsCharCount;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(ver) {
        return this.numBitsCharCount[Math.floor((ver + 7) / 17)];
      }
    }
    QrSegment2.Mode = Mode;
  })(QrSegment = qrcodegen2.QrSegment || (qrcodegen2.QrSegment = {}));
})(qrcodegen || (qrcodegen = {}));
var qrcodegen$1 = qrcodegen;
var ERROR_LEVEL_MAP = {
  L: qrcodegen$1.QrCode.Ecc.LOW,
  M: qrcodegen$1.QrCode.Ecc.MEDIUM,
  Q: qrcodegen$1.QrCode.Ecc.QUARTILE,
  H: qrcodegen$1.QrCode.Ecc.HIGH
};
var DEFAULT_SIZE = 160;
var DEFAULT_SCALE = 10;
var DEFAULT_PADDING = 10;
var DEFAULT_COLOR = "#000000";
var DEFAULT_BACKGROUND_COLOR = "#FFFFFF";
var DEFAULT_ICONSIZE = 40;
var DEFAULT_LEVEL = "M";
var plotQRCodeData = (value, level = DEFAULT_LEVEL) => {
  if (!value) {
    return null;
  }
  return qrcodegen$1.QrCode.encodeText(value, ERROR_LEVEL_MAP[level]);
};
function drawCanvas(canvas, value, size = DEFAULT_SIZE, scale = DEFAULT_SCALE, padding = DEFAULT_PADDING, color = DEFAULT_COLOR, backgroundColor = DEFAULT_BACKGROUND_COLOR, iconSize = DEFAULT_ICONSIZE, icon) {
  const ctx = canvas.getContext("2d");
  const formattedPadding = formatPadding(padding);
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  if (!value) {
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }
  canvas.width = value.size * scale + formattedPadding[1] + formattedPadding[3];
  canvas.height = value.size * scale + formattedPadding[0] + formattedPadding[2];
  if (!icon) {
    drawCanvasBackground(ctx, canvas.width, canvas.height, scale, backgroundColor);
    drawCanvasColor(ctx, value, scale, formattedPadding, backgroundColor, color);
  } else {
    const iconImg = new Image();
    iconImg.src = icon;
    iconImg.crossOrigin = "anonymous";
    iconImg.width = iconSize * (canvas.width / size);
    iconImg.height = iconSize * (canvas.width / size);
    iconImg.onload = () => {
      drawCanvasBackground(ctx, canvas.width, canvas.height, scale, backgroundColor);
      drawCanvasColor(ctx, value, scale, formattedPadding, backgroundColor, color);
      const iconCoordinate = canvas.width / 2 - iconSize * (canvas.width / size) / 2;
      ctx.fillRect(iconCoordinate, iconCoordinate, iconSize * (canvas.width / size), iconSize * (canvas.width / size));
      ctx.drawImage(iconImg, iconCoordinate, iconCoordinate, iconSize * (canvas.width / size), iconSize * (canvas.width / size));
    };
    iconImg.onerror = () => {
      drawCanvasBackground(ctx, canvas.width, canvas.height, scale, backgroundColor);
      drawCanvasColor(ctx, value, scale, formattedPadding, backgroundColor, color);
    };
  }
}
function drawCanvasColor(ctx, value, scale, padding, backgroundColor, color) {
  for (let y = 0; y < value.size; y++) {
    for (let x = 0; x < value.size; x++) {
      ctx.fillStyle = value.getModule(x, y) ? color : backgroundColor;
      ctx.fillRect(padding[3] + x * scale, padding[0] + y * scale, scale, scale);
    }
  }
}
function drawCanvasBackground(ctx, width, height, scale, backgroundColor) {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width * scale, height * scale);
}
function formatPadding(padding) {
  if (Array.isArray(padding)) {
    return Array(4).fill(0).map((_, index) => padding[index % padding.length]);
  } else {
    return [padding, padding, padding, padding];
  }
}
var NzQRCodeComponent = class _NzQRCodeComponent {
  constructor(i18n, el, cdr) {
    this.i18n = i18n;
    this.el = el;
    this.cdr = cdr;
    this.nzValue = "";
    this.nzPadding = 0;
    this.nzColor = "#000000";
    this.nzBgColor = "#FFFFFF";
    this.nzSize = 160;
    this.nzIcon = "";
    this.nzIconSize = 40;
    this.nzBordered = true;
    this.nzStatus = "active";
    this.nzLevel = "M";
    this.nzRefresh = new EventEmitter();
    this.isBrowser = true;
    this.destroy$ = new Subject();
    this.platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.cdr.markForCheck();
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.nzBgColor;
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("QRCode");
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzValue,
      nzIcon,
      nzLevel,
      nzSize,
      nzIconSize,
      nzColor,
      nzPadding,
      nzBgColor
    } = changes;
    if ((nzValue || nzIcon || nzLevel || nzSize || nzIconSize || nzColor || nzPadding || nzBgColor) && this.canvas) {
      this.drawCanvasQRCode();
    }
    if (nzBgColor) {
      this.el.nativeElement.style.backgroundColor = this.nzBgColor;
    }
  }
  ngAfterViewInit() {
    this.drawCanvasQRCode();
  }
  reloadQRCode() {
    this.drawCanvasQRCode();
    this.nzRefresh.emit("refresh");
  }
  drawCanvasQRCode() {
    if (this.canvas) {
      drawCanvas(this.canvas.nativeElement, plotQRCodeData(this.nzValue, this.nzLevel), this.nzSize, 10, this.nzPadding, this.nzColor, this.nzBgColor, this.nzIconSize, this.nzIcon);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.ɵfac = function NzQRCodeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzQRCodeComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NzQRCodeComponent,
      selectors: [["nz-qrcode"]],
      viewQuery: function NzQRCodeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c02, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.canvas = _t.first);
        }
      },
      hostAttrs: [1, "ant-qrcode"],
      hostVars: 2,
      hostBindings: function NzQRCodeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ant-qrcode-border", ctx.nzBordered);
        }
      },
      inputs: {
        nzValue: "nzValue",
        nzPadding: "nzPadding",
        nzColor: "nzColor",
        nzBgColor: "nzBgColor",
        nzSize: [2, "nzSize", "nzSize", numberAttribute],
        nzIcon: "nzIcon",
        nzIconSize: [2, "nzIconSize", "nzIconSize", numberAttribute],
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
        nzStatus: "nzStatus",
        nzLevel: "nzLevel"
      },
      outputs: {
        nzRefresh: "nzRefresh"
      },
      exportAs: ["nzQRCode"],
      standalone: true,
      features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 2,
      consts: [["canvas", ""], [1, "ant-qrcode-mask"], [1, "ant-qrcode-expired"], ["nz-button", "", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"]],
      template: function NzQRCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NzQRCodeComponent_Conditional_0_Template, 4, 1, "div", 1)(1, NzQRCodeComponent_Conditional_1_Template, 2, 0, "canvas");
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzStatus !== "active" ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.isBrowser ? 1 : -1);
        }
      },
      dependencies: [NzSpinModule, NzSpinComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzIconModule, NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzQRCodeComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-qrcode",
      exportAs: "nzQRCode",
      template: `
    @if (nzStatus !== 'active') {
      <div class="ant-qrcode-mask">
        @switch (nzStatus) {
          @case ('loading') {
            <nz-spin />
          }
          @case ('expired') {
            <div>
              <p class="ant-qrcode-expired">{{ locale.expired }}</p>
              <button nz-button nzType="link" (click)="reloadQRCode()">
                <span nz-icon nzType="reload" nzTheme="outline"></span>
                <span>{{ locale.refresh }}</span>
              </button>
            </div>
          }
          @case ('scanned') {
            <div>
              <p class="ant-qrcode-expired">{{ locale.scanned }}</p>
            </div>
          }
        }
      </div>
    }

    @if (isBrowser) {
      <canvas #canvas></canvas>
    }
  `,
      host: {
        class: "ant-qrcode",
        "[class.ant-qrcode-border]": `nzBordered`
      },
      imports: [NzSpinModule, NzButtonModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    canvas: [{
      type: ViewChild,
      args: ["canvas", {
        static: false
      }]
    }],
    nzValue: [{
      type: Input
    }],
    nzPadding: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzBgColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzIcon: [{
      type: Input
    }],
    nzIconSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzLevel: [{
      type: Input
    }],
    nzRefresh: [{
      type: Output
    }]
  });
})();
var NzQRCodeModule = class _NzQRCodeModule {
  static {
    this.ɵfac = function NzQRCodeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzQRCodeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzQRCodeModule,
      imports: [NzQRCodeComponent],
      exports: [NzQRCodeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NzQRCodeComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzQRCodeModule, [{
    type: NgModule,
    args: [{
      imports: [NzQRCodeComponent],
      exports: [NzQRCodeComponent]
    }]
  }], null, null);
})();
export {
  NzQRCodeComponent,
  NzQRCodeModule
};
//# sourceMappingURL=ng-zorro-antd_qr-code.js.map
