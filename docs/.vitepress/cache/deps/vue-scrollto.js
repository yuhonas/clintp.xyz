import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/vue-scrollto/vue-scrollto.js
var require_vue_scrollto = __commonJS({
  "node_modules/vue-scrollto/vue-scrollto.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["vue-scrollto"] = factory());
    })(exports, function() {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      var NEWTON_ITERATIONS = 4;
      var NEWTON_MIN_SLOPE = 1e-3;
      var SUBDIVISION_PRECISION = 1e-7;
      var SUBDIVISION_MAX_ITERATIONS = 10;
      var kSplineTableSize = 11;
      var kSampleStepSize = 1 / (kSplineTableSize - 1);
      var float32ArraySupported = typeof Float32Array === "function";
      function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
      }
      function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
      }
      function C(aA1) {
        return 3 * aA1;
      }
      function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
      }
      function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
      }
      function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
          currentT = aA + (aB - aA) / 2;
          currentX = calcBezier(currentT, mX1, mX2) - aX;
          if (currentX > 0) {
            aB = currentT;
          } else {
            aA = currentT;
          }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
      }
      function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
          var currentSlope = getSlope(aGuessT, mX1, mX2);
          if (currentSlope === 0) {
            return aGuessT;
          }
          var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
          aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
      }
      function LinearEasing(x) {
        return x;
      }
      var src = function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
          throw new Error("bezier x values must be in [0, 1] range");
        }
        if (mX1 === mY1 && mX2 === mY2) {
          return LinearEasing;
        }
        var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        for (var i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
        function getTForX(aX) {
          var intervalStart = 0;
          var currentSample = 1;
          var lastSample = kSplineTableSize - 1;
          for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
          }
          --currentSample;
          var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
          var guessForT = intervalStart + dist * kSampleStepSize;
          var initialSlope = getSlope(guessForT, mX1, mX2);
          if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
          } else if (initialSlope === 0) {
            return guessForT;
          } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
          }
        }
        return function BezierEasing(x) {
          if (x === 0) {
            return 0;
          }
          if (x === 1) {
            return 1;
          }
          return calcBezier(getTForX(x), mY1, mY2);
        };
      };
      var easings = {
        ease: [0.25, 0.1, 0.25, 1],
        linear: [0, 0, 1, 1],
        "ease-in": [0.42, 0, 1, 1],
        "ease-out": [0, 0, 0.58, 1],
        "ease-in-out": [0.42, 0, 0.58, 1]
      };
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {
      }
      var _ = {
        $: function $(selector) {
          if (typeof selector !== "string") {
            return selector;
          }
          return document.querySelector(selector);
        },
        on: function on(element, events, handler) {
          var opts2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            passive: false
          };
          if (!(events instanceof Array)) {
            events = [events];
          }
          for (var i = 0; i < events.length; i++) {
            element.addEventListener(events[i], handler, supportsPassive ? opts2 : false);
          }
        },
        off: function off(element, events, handler) {
          if (!(events instanceof Array)) {
            events = [events];
          }
          for (var i = 0; i < events.length; i++) {
            element.removeEventListener(events[i], handler);
          }
        },
        cumulativeOffset: function cumulativeOffset(element) {
          var top = 0;
          var left = 0;
          do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
          } while (element);
          return {
            top,
            left
          };
        }
      };
      var abortEvents = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];
      var defaults = {
        container: "body",
        duration: 500,
        lazy: true,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      };
      function setDefaults(options) {
        defaults = _extends({}, defaults, options);
      }
      var scroller = function scroller2() {
        var element;
        var container;
        var duration;
        var easing;
        var lazy;
        var offset;
        var force;
        var cancelable;
        var onStart;
        var onDone;
        var onCancel;
        var x;
        var y;
        var initialX;
        var targetX;
        var initialY;
        var targetY;
        var diffX;
        var diffY;
        var abort;
        var cumulativeOffsetContainer;
        var cumulativeOffsetElement;
        var abortEv;
        var abortFn = function abortFn2(e) {
          if (!cancelable)
            return;
          abortEv = e;
          abort = true;
        };
        var easingFn;
        var timeStart;
        var timeElapsed;
        var progress;
        function scrollTop(container2) {
          var scrollTop2 = container2.scrollTop;
          if (container2.tagName.toLowerCase() === "body") {
            scrollTop2 = scrollTop2 || document.documentElement.scrollTop;
          }
          return scrollTop2;
        }
        function scrollLeft(container2) {
          var scrollLeft2 = container2.scrollLeft;
          if (container2.tagName.toLowerCase() === "body") {
            scrollLeft2 = scrollLeft2 || document.documentElement.scrollLeft;
          }
          return scrollLeft2;
        }
        function recalculateTargets() {
          cumulativeOffsetContainer = _.cumulativeOffset(container);
          cumulativeOffsetElement = _.cumulativeOffset(element);
          if (x) {
            targetX = cumulativeOffsetElement.left - cumulativeOffsetContainer.left + offset;
            diffX = targetX - initialX;
          }
          if (y) {
            targetY = cumulativeOffsetElement.top - cumulativeOffsetContainer.top + offset;
            diffY = targetY - initialY;
          }
        }
        function step(timestamp) {
          if (abort)
            return done();
          if (!timeStart)
            timeStart = timestamp;
          if (!lazy) {
            recalculateTargets();
          }
          timeElapsed = timestamp - timeStart;
          progress = Math.min(timeElapsed / duration, 1);
          progress = easingFn(progress);
          topLeft(container, initialY + diffY * progress, initialX + diffX * progress);
          timeElapsed < duration ? window.requestAnimationFrame(step) : done();
        }
        function done() {
          if (!abort)
            topLeft(container, targetY, targetX);
          timeStart = false;
          _.off(container, abortEvents, abortFn);
          if (abort && onCancel)
            onCancel(abortEv, element);
          if (!abort && onDone)
            onDone(element);
        }
        function topLeft(element2, top, left) {
          if (y)
            element2.scrollTop = top;
          if (x)
            element2.scrollLeft = left;
          if (element2.tagName.toLowerCase() === "body") {
            if (y)
              document.documentElement.scrollTop = top;
            if (x)
              document.documentElement.scrollLeft = left;
          }
        }
        function scrollTo(target, _duration) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (_typeof(_duration) === "object") {
            options = _duration;
          } else if (typeof _duration === "number") {
            options.duration = _duration;
          }
          element = _.$(target);
          if (!element) {
            return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + target);
          }
          container = _.$(options.container || defaults.container);
          duration = options.hasOwnProperty("duration") ? options.duration : defaults.duration;
          lazy = options.hasOwnProperty("lazy") ? options.lazy : defaults.lazy;
          easing = options.easing || defaults.easing;
          offset = options.hasOwnProperty("offset") ? options.offset : defaults.offset;
          force = options.hasOwnProperty("force") ? options.force !== false : defaults.force;
          cancelable = options.hasOwnProperty("cancelable") ? options.cancelable !== false : defaults.cancelable;
          onStart = options.onStart || defaults.onStart;
          onDone = options.onDone || defaults.onDone;
          onCancel = options.onCancel || defaults.onCancel;
          x = options.x === void 0 ? defaults.x : options.x;
          y = options.y === void 0 ? defaults.y : options.y;
          if (typeof offset === "function") {
            offset = offset(element, container);
          }
          initialX = scrollLeft(container);
          initialY = scrollTop(container);
          recalculateTargets();
          abort = false;
          if (!force) {
            var containerHeight = container.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : container.offsetHeight;
            var containerTop = initialY;
            var containerBottom = containerTop + containerHeight;
            var elementTop = targetY - offset;
            var elementBottom = elementTop + element.offsetHeight;
            if (elementTop >= containerTop && elementBottom <= containerBottom) {
              if (onDone)
                onDone(element);
              return;
            }
          }
          if (onStart)
            onStart(element);
          if (!diffY && !diffX) {
            if (onDone)
              onDone(element);
            return;
          }
          if (typeof easing === "string") {
            easing = easings[easing] || easings["ease"];
          }
          easingFn = src.apply(src, easing);
          _.on(container, abortEvents, abortFn, {
            passive: true
          });
          window.requestAnimationFrame(step);
          return function() {
            abortEv = null;
            abort = true;
          };
        }
        return scrollTo;
      };
      var _scroller = scroller();
      var bindings = [];
      function deleteBinding(el) {
        for (var i = 0; i < bindings.length; ++i) {
          if (bindings[i].el === el) {
            bindings.splice(i, 1);
            return true;
          }
        }
        return false;
      }
      function findBinding(el) {
        for (var i = 0; i < bindings.length; ++i) {
          if (bindings[i].el === el) {
            return bindings[i];
          }
        }
      }
      function getBinding(el) {
        var binding = findBinding(el);
        if (binding) {
          return binding;
        }
        bindings.push(binding = {
          el,
          binding: {}
        });
        return binding;
      }
      function handleClick(e) {
        var ctx = getBinding(this).binding;
        if (!ctx.value)
          return;
        e.preventDefault();
        if (typeof ctx.value === "string") {
          return _scroller(ctx.value);
        }
        _scroller(ctx.value.el || ctx.value.element, ctx.value);
      }
      var directiveHooks = {
        bind: function bind(el, binding) {
          getBinding(el).binding = binding;
          _.on(el, "click", handleClick);
        },
        unbind: function unbind(el) {
          deleteBinding(el);
          _.off(el, "click", handleClick);
        },
        update: function update(el, binding) {
          getBinding(el).binding = binding;
        }
      };
      var VueScrollTo = {
        bind: directiveHooks.bind,
        unbind: directiveHooks.unbind,
        update: directiveHooks.update,
        beforeMount: directiveHooks.bind,
        unmounted: directiveHooks.unbind,
        updated: directiveHooks.update,
        scrollTo: _scroller,
        bindings
      };
      var install = function install2(Vue, options) {
        if (options)
          setDefaults(options);
        Vue.directive("scroll-to", VueScrollTo);
        var properties = Vue.config.globalProperties || Vue.prototype;
        properties.$scrollTo = VueScrollTo.scrollTo;
      };
      if (typeof window !== "undefined" && window.Vue) {
        window.VueScrollTo = VueScrollTo;
        window.VueScrollTo.setDefaults = setDefaults;
        window.VueScrollTo.scroller = scroller;
        if (window.Vue.use)
          window.Vue.use(install);
      }
      VueScrollTo.install = install;
      return VueScrollTo;
    });
  }
});
export default require_vue_scrollto();
/*! Bundled license information:

vue-scrollto/vue-scrollto.js:
  (*!
    * vue-scrollto v2.20.0
    * (c) 2019 Randjelovic Igor
    * @license MIT
    *)
*/
//# sourceMappingURL=vue-scrollto.js.map
