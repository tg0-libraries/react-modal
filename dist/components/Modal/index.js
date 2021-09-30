var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ModalGlobalStyled } from '../../styles/global';
import { Container, Content } from "./styles";
export function Modal(_a) {
    var children = _a.children, isOpen = _a.isOpen, styles = _a.styles, classeNames = _a.classeNames, ids = _a.ids;
    return (
    // Verify if state is true to show modal
    _jsx(_Fragment, { children: isOpen && (_jsxs(_Fragment, { children: [_jsx(Container, __assign({ className: classeNames === null || classeNames === void 0 ? void 0 : classeNames.container, id: ids === null || ids === void 0 ? void 0 : ids.container, style: styles === null || styles === void 0 ? void 0 : styles.container }, { children: _jsx(Content, __assign({ className: classeNames === null || classeNames === void 0 ? void 0 : classeNames.content, id: ids === null || ids === void 0 ? void 0 : ids.content, style: styles === null || styles === void 0 ? void 0 : styles.content }, { children: _jsx(_Fragment, { children: children }, void 0) }), void 0) }), void 0), _jsx(ModalGlobalStyled, {}, void 0)] }, void 0)) }, void 0));
}
