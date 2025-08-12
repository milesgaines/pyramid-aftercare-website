#!/bin/bash

# Enhanced Google API Test with detailed debugging
API_KEY="AIzaSyA6jEunHgDAKraOYvHyNXQ4JL9MyN7Z2YU"
CLIENT_ID="829344807033-171kn0fgod5li4viovbl7msk5t3ass3b.apps.googleusercontent.com"

echo "🔍 ENHANCED Google API Diagnostics"
echo "=================================================="
echo "API Key: $API_KEY"
echo "Client ID: $CLIENT_ID"
echo ""

# Test 1: Simple API Key validation
echo "🔑 Testing API Key validity..."
echo "Endpoint: https://www.googleapis.com/calendar/v3/users/me/calendarList"
echo ""

# Get full response details for Calendar API
echo "📅 Detailed Calendar API Test:"
curl -v "https://www.googleapis.com/calendar/v3/users/me/calendarList?key=$API_KEY" 2>&1 | head -20
echo ""
echo "----------------------------------------"

# Test if API key works with a simpler endpoint
echo "🌐 Testing API Key with YouTube API (often enabled by default):"
YOUTUBE_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://www.googleapis.com/youtube/v3/search?part=snippet&q=test&key=$API_KEY")
echo "YouTube API Status: $YOUTUBE_RESPONSE"
if [ "$YOUTUBE_RESPONSE" = "200" ]; then
    echo "✅ API Key is VALID - The key works!"
    echo "❌ Issue: Specific APIs not enabled for this key"
elif [ "$YOUTUBE_RESPONSE" = "403" ]; then
    echo "⚠️  API Key valid but YouTube API not enabled"
    echo "❌ Issue: APIs not enabled for this project"
elif [ "$YOUTUBE_RESPONSE" = "401" ]; then
    echo "❌ API Key is INVALID or has restrictions"
else
    echo "⚠️  Unknown response: $YOUTUBE_RESPONSE"
fi
echo ""

# Test OAuth endpoints
echo "🔐 Testing OAuth Configuration:"
echo "Checking if Client ID is valid format..."
if [[ $CLIENT_ID == *".apps.googleusercontent.com" ]]; then
    echo "✅ Client ID format is correct"
else
    echo "❌ Client ID format is incorrect"
fi
echo ""

# Check Google Cloud Project
echo "📋 TROUBLESHOOTING STEPS:"
echo "========================================="
echo ""
echo "1. 🔍 CHECK GOOGLE CLOUD CONSOLE:"
echo "   Go to: https://console.cloud.google.com/"
echo "   - Verify you're in the correct project"
echo "   - Check if API key exists and is active"
echo ""
echo "2. 🛡️ CHECK API KEY RESTRICTIONS:"
echo "   Go to: APIs & Services → Credentials"
echo "   - Remove any HTTP referrer restrictions"
echo "   - Remove any IP address restrictions"
echo "   - Enable for all websites temporarily"
echo ""
echo "3. ⚡ ENABLE REQUIRED APIS:"
echo "   Go to: APIs & Services → Library"
echo "   Enable these APIs:"
echo "   - Google Calendar API"
echo "   - Google Tasks API"
echo "   - People API"
echo "   - Google Drive API"
echo "   - Gmail API"
echo ""
echo "4. 🔄 REGENERATE API KEY:"
echo "   If above steps don't work:"
echo "   - Delete current API key"
echo "   - Create new API key"
echo "   - Update .env file"
echo ""
echo "5. 📞 OAUTH CONSENT SCREEN:"
echo "   Go to: APIs & Services → OAuth consent screen"
echo "   - Configure for external users"
echo "   - Add required scopes"
echo "   - Publish the app"
echo ""

echo "🎯 NEXT STEPS:"
echo "=============="
echo "1. Complete steps 1-3 above"
echo "2. Wait 5-10 minutes for changes to propagate"
echo "3. Run this test again: ./test-google-apis-detailed.sh"
echo "4. If still failing, try step 4 (regenerate API key)"
