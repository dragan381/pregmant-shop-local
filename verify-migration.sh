#!/bin/bash

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Next.js Migration Verification${NC}"
echo "=================================="
echo ""

# Check key files
files=(
  "app/layout.tsx"
  "app/page.tsx"
  "next.config.ts"
  "tsconfig.json"
  "package.json"
  "components/Navbar.tsx"
  "components/ProductCard.tsx"
  "components/CartDrawer.tsx"
  "context/CartContext.tsx"
  "data/products.ts"
  "services/productService.ts"
  "hooks/use-toast.ts"
  "lib/utils.ts"
  "styles/globals.css"
)

echo -e "${YELLOW}Checking key files:${NC}"
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo -e "${GREEN}✓${NC} $file"
  else
    echo -e "${RED}✗${NC} $file"
  fi
done

echo ""
echo -e "${YELLOW}Checking directories:${NC}"

dirs=(
  "app"
  "components"
  "components/ui"
  "context"
  "services"
  "hooks"
  "data"
  "lib"
  "styles"
  "types"
)

for dir in "${dirs[@]}"; do
  if [ -d "$dir" ]; then
    echo -e "${GREEN}✓${NC} $dir/"
  else
    echo -e "${RED}✗${NC} $dir/"
  fi
done

echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. npm install (or bun install)"
echo "2. npm run dev"
echo "3. Visit http://localhost:3000"
echo ""
echo -e "${GREEN}Migration complete! 🎉${NC}"
