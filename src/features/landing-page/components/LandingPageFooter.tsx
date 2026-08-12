import { Box } from "@mantine/core";
import Copyright from "@/components/core/Copyright";

const LandingPageFooter = () => {
  return (
    <footer>
      <Box component="footer" py="md" ta="center" bg={"primary.1"}>
        <Copyright />
      </Box>
    </footer>
  );
};

export default LandingPageFooter;
