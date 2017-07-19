import React = require('react');
import Types = require('../common/Types');
export declare class Button extends React.Component<Types.ButtonProps, {}> {
    private _lastMouseDownTime;
    private _lastMouseDownEvent;
    private _ignoreClick;
    private _longPressTimer;
    private _focusDueToMouseEvent;
    private _blurDueToMouseEvent;
    render(): JSX.Element;
    focus(): void;
    blur(): void;
    protected onClick: (e: React.MouseEvent) => void;
    private _getStyles();
    private _onContextMenu;
    private _onMouseDown;
    private _onMouseUp;
    private _onMouseEnter;
    private _onMouseLeave;
    private _onFocus;
    private _onBlur;
}
export default Button;
