import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Box className="mb-8 gap-3">
        <Typography variant="h1-34" className="text-brand-text-1">
          Design System
        </Typography>
      </Box>

      {/* Typography Section */}
      <Box className="mb-8 gap-4">
        <Typography variant="h2-28" className="text-brand-text-1 mb-2">
          Typography
        </Typography>

        <Box className="gap-3">
          <Typography variant="h1-34" className="text-brand-text-1">
            H1-34 Stolzl Bold
          </Typography>
          <Typography variant="h1-32" className="text-brand-text-1">
            H1-32 Stolzl Bold
          </Typography>
          <Typography variant="h2-28" className="text-brand-text-1">
            H2-28 Stolzl Medium
          </Typography>
          <Typography variant="h2-24" className="text-brand-text-1">
            H2-24 Stolzl Medium
          </Typography>
          <Typography variant="h3-24" className="text-brand-text-1">
            H3-24 Stolzl Medium
          </Typography>
          <Typography variant="h3-20" className="text-brand-text-1">
            H3-20 Stolzl Medium
          </Typography>
          <Typography variant="h4-18-bold" className="text-brand-text-1">
            H4-18 Bold Stolzl
          </Typography>
          <Typography variant="h4-18" className="text-brand-text-1">
            H4-18 Regular Stolzl
          </Typography>
          <Typography variant="h4-16" className="text-brand-text-1">
            H4-16 Medium Stolzl
          </Typography>
          <Typography variant="body-16" className="text-brand-text-1">
            Body-16 Inter Regular
          </Typography>
          <Typography variant="body-16-bold" className="text-brand-text-1">
            Body-16 Bold Inter
          </Typography>
          <Typography variant="small-14" className="text-brand-text-1">
            Small-14 Inter Regular
          </Typography>
          <Typography variant="small-14-bold" className="text-brand-text-1">
            Small-14 Bold Inter
          </Typography>
        </Box>
      </Box>

      {/* Brand Colors Section */}
      <Box className="mb-8 gap-4">
        <Typography variant="h2-28" className="text-brand-text-1 mb-2">
          Brand Colors
        </Typography>

        {/* Label Colors */}
        <Box className="gap-3">
          <Typography variant="h4-18-bold" className="text-brand-text-1">
            Label
          </Typography>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-label-help rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Label/Help #3498db
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-label-danger rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Label/Danger #e74c3c
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-label-success rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Label/Success #27ae60
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-label-warning rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Label/Warning #f39c12
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-label-reward rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Label/Reward #ff69b4
            </Typography>
          </Box>
        </Box>

        {/* Text Colors */}
        <Box className="gap-3 mt-4">
          <Typography variant="h4-18-bold" className="text-brand-text-1">
            Text/Background
          </Typography>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-1 rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Text 1 / BG Primary #222222
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-2 rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Text 2 / BG Secondary #444444
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-3 rounded-md border border-brand-text-border" />
            <Typography variant="small-14" className="text-brand-text-2">
              Text 3 / White #ffffff
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-4 rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Text 4 / Neutral #555555
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-black rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Black #111111
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-disable rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Disable #cbcbcb
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-border rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Border #e0e0e0
            </Typography>
          </Box>
        </Box>

        {/* CTA Colors */}
        <Box className="gap-3 mt-4">
          <Typography variant="h4-18-bold" className="text-brand-text-1">
            CTA
          </Typography>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-cta-1 rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              CTA 1 #ffb800
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-cta-hovered1 rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              CTA Hovered #e6a600
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-cta-price rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Price #1adbcf
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-cta-priceHovered rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Price Hovered #05b7ac
            </Typography>
          </Box>
        </Box>

        {/* Input Field Colors */}
        <Box className="gap-3 mt-4">
          <Typography variant="h4-18-bold" className="text-brand-text-1">
            Input Field
          </Typography>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-inputField-onText2 rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Input Field BG #555555
            </Typography>
          </Box>
          <Box className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-brand-text-placeholder rounded-md" />
            <Typography variant="small-14" className="text-brand-text-2">
              Placeholder #959595
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Button Examples */}
      <Box className="mb-8 gap-4">
        <Typography variant="h2-28" className="text-brand-text-1 mb-2">
          Mobile Buttons
        </Typography>

        <Box className="gap-3">
          <Typography variant="body-16" className="text-brand-text-2">
            Primary - Yellow with Black Text
          </Typography>
          <Button
            variant="primary"
            onPress={() => alert("Primary button pressed!")}
          >
            <Typography variant="small-14-bold">Add to cart</Typography>
          </Button>
        </Box>

        <Box className="gap-3">
          <Typography variant="body-16" className="text-brand-text-2">
            Quick Add - Yellow with Price
          </Typography>
          <Button variant="quickAdd" onPress={() => alert("Quick add pressed!")}>
            <Typography variant="small-14-bold">Quick Add | £29.16</Typography>
          </Button>
        </Box>

        <Box className="gap-3">
          <Typography variant="body-16" className="text-brand-text-2">
            Black - Black Background with White Text
          </Typography>
          <Button variant="black" onPress={() => alert("Black button pressed!")}>
            <Typography variant="small-14-bold">Add to cart</Typography>
          </Button>
        </Box>

        <Box className="gap-3">
          <Typography variant="body-16" className="text-brand-text-2">
            Gray - Dark Gray with Yellow Text
          </Typography>
          <Button variant="gray" onPress={() => alert("Gray button pressed!")}>
            <Typography variant="small-14-bold">Add to cart</Typography>
          </Button>
        </Box>

        <Box className="gap-3">
          <Typography variant="body-16" className="text-brand-text-2">
            Success - Green with Check Icon
          </Typography>
          <Button
            variant="success"
            onPress={() => alert("Success!")}
          >
            <Typography variant="small-14-bold">Ticket Added ✓</Typography>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
}
