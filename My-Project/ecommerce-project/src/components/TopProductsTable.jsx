import {
    Box,
    Typography,
    LinearProgress,
    Stack,
    Paper,
} from "@mui/material";

const TopProductsTable = () => {
    const products = [
        { name: "Wireless Headphones", sales: 1234, revenue: 49360, color: "#3b82f6" },
        { name: "Smart Watch", sales: 987, revenue: 39480, color: "#a855f7" },
        { name: "Laptop Stand", sales: 756, revenue: 22680, color: "#10b981" },
        { name: "USB-C Hub", sales: 543, revenue: 16290, color: "#f59e0b" },
        { name: "Phone Case", sales: 432, revenue: 8640, color: "#ec4899" },
    ];
    const maxSales = Math.max(...products.map(p => p.sales));

  return (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 3, width: 400}}>
                            <Typography variant="h6" fontWeight={600}>
                                Top Products
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                Best performing items this month
                            </Typography>

                            <Stack spacing={4}>
                                {products.map((p, i) => (
                                    <Box key={i}>
                                        {/* Row header */}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mb: 1,
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                {/* Rank Circle */}
                                                <Box
                                                    sx={{
                                                        width: 32,
                                                        height: 32,
                                                        borderRadius: "50%",
                                                        backgroundColor: "#e5e7eb",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#4b5563",
                                                        fontSize: 14,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {i + 1}
                                                </Box>

                                                <Box>
                                                    <Typography fontWeight={600}>{p.name}</Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {p.sales} sales
                                                    </Typography>
                                                </Box>
                                            </Box>

                                            <Typography fontWeight={600}>
                                                ${p.revenue.toLocaleString()}
                                            </Typography>
                                        </Box>

                                        {/* Progress bar */}
                                        <LinearProgress
                                            variant="determinate"
                                            value={(p.sales / maxSales) * 100}
                                            sx={{
                                                height: 8,
                                                borderRadius: 5,
                                                backgroundColor: "#e5e7eb",
                                                "& .MuiLinearProgress-bar": {
                                                    backgroundColor: p.color,
                                                    borderRadius: 5,
                                                },
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Stack>

                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 3,
                                    color: "primary.main",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                View all products →
                            </Typography>
                        </Paper>
  )
}

export default TopProductsTable