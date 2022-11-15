import { ModalOpacity } from "./config/SysDefine";

export class ModalType {
    public opacity: ModalOpacity = ModalOpacity.OpacityHalf;
    public clickMaskClose = false;      // 点击阴影关闭
    public isEasing = true;             // 缓动实现
    public easingTime = 0.2;            // 缓动时间
    public dualBlur = false;            // 模糊
    

    constructor(opacity = ModalOpacity.OpacityHalf, ClickMaskClose=false, IsEasing=true, EasingTime=0.2) {
        this.opacity = opacity;
        this.clickMaskClose = ClickMaskClose;
        this.isEasing = IsEasing;
        this.easingTime = EasingTime;
    }

    useBlur() {
        this.dualBlur = true;
        return this;
    }
}

export interface IFormConfig {
    prefabUrl: string;
    type: string;
}

export interface IFormData {
    loadingForm?: IFormConfig;
    onClose?: Function;
    // window类型的form才有
    priority?: EPriority;       // 当前有已经显示的window时, 会放等待列表里, 知道 当前没有正在显示的window时才被显示
    showWait?: boolean;         // 优先级(会影响弹窗的层级, 先判断优先级, 在判断添加顺序)
    uniqueId?: string;
}

export enum EPriority {
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
}

export enum ECloseType {
    CloseAndHide,           // 关闭后隐藏
    CloseAndDestory,        // 关闭后销毁
    LRU,                    // 使用LRU控制其销毁时机
}