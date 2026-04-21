import type { OrderData } from "@/types";

export const submitOrder = async (
  orderData: OrderData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulate API call to backend
    // In production, replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Order submitted:", orderData);

    return {
      success: true,
      message: "Porudžbina je uspešno poslata!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Greška pri slanju porudžbine. Pokušajte ponovo.",
    };
  }
};
