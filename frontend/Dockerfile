FROM node:18

# Set working directory
WORKDIR /app

# Copy and install only dependencies first (for better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the app (including .env)
COPY . .

COPY .env ./

# Expose port 3000 (optional, for documentation)
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
