import { H1, H2, H3, H4, H5, H6 } from "@expo/html-elements";
import { cssInterop } from "nativewind";
import React from "react";
import { Platform, Text as RNText } from "react-native";

// 配置 cssInterop 让 HTML 元素和 Text 支持 className
cssInterop(H1, { className: "style" });
cssInterop(H2, { className: "style" });
cssInterop(H3, { className: "style" });
cssInterop(H4, { className: "style" });
cssInterop(H5, { className: "style" });
cssInterop(H6, { className: "style" });
cssInterop(RNText, { className: "style" });

type TypographyVariant =
  | "h1-34" | "h1-32"
  | "h2-28" | "h2-24"
  | "h3-24" | "h3-20"
  | "h4-18-bold" | "h4-18" | "h4-16"
  | "body-16" | "body-16-bold"
  | "small-14" | "small-14-bold";

type SemanticTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface TypographyProps extends React.ComponentProps<typeof RNText> {
  variant?: TypographyVariant;
  as?: SemanticTag;
  children?: React.ReactNode;
}

// Web 上的组件映射
const WEB_COMPONENT_MAP = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: RNText,
  span: RNText,
};

export const Typography = React.forwardRef<RNText, TypographyProps>(
  ({ className, variant = "body", as, children, ...props }, ref) => {
    const variantClass = `text-${variant}`;
    const combinedClassName = `${variantClass} ${className || ""}`.trim();

    // 确定使用的组件
    let Component: any = RNText;

    if (Platform.OS === "web" && as) {
      Component = WEB_COMPONENT_MAP[as] || RNText;
    }

    return (
      <Component className={combinedClassName} {...props} ref={ref as any}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
