// MUI
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function FullPageSkeleton() {
    return (
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>

            {/* Header */}
            <Box
                sx={{
                    height: 64,
                    px: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                }}
            >
                <Skeleton variant="text" width={160} height={32} />
                <Skeleton variant="circular" width={40} height={40} />
            </Box>

            {/* Body */}
            <Box sx={{ flex: 1, display: "flex" }}>

                {/* Sidebar */}
                <Box
                    sx={{
                        width: 240,
                        p: 2,
                        borderRight: "1px solid rgba(0,0,0,0.1)",
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Skeleton variant="text" height={28} width="80%" />
                    <Skeleton variant="text" height={28} width="70%" />
                    <Skeleton variant="text" height={28} width="85%" />
                    <Skeleton variant="text" height={28} width="60%" />
                </Box>

                {/* Content */}
                <Box
                    sx={{
                        flex: 1,
                        p: 4,
                        display: "flex",
                        gap: 3,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* Box 1 */}
                    <Skeleton
                        variant="rectangular"
                        height={260}
                        width={420}
                        sx={{ borderRadius: 2 }}
                    />

                    {/* Box 2 */}
                    <Skeleton
                        variant="rectangular"
                        height={260}
                        width={420}
                        sx={{ borderRadius: 2 }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
