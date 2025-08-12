#!/bin/bash

# Google API Test Script
# Tests which APIs are enabled for API Key: AIzaSyA6jEunHgDAKraOYvHyNXQ4JL9MyN7Z2YU

API_KEY="AIzaSyA6jEunHgDAKraOYvHyNXQ4JL9MyN7Z2YU"

echo "🔍 Testing Google APIs for Pyramid Aftercare Portal"
echo "=================================================="
echo "API Key: $API_KEY"
echo ""

# Test Google Calendar API
echo "📅 Testing Google Calendar API..."
CALENDAR_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://www.googleapis.com/calendar/v3/users/me/calendarList?key=$API_KEY")
echo "   Status: $CALENDAR_RESPONSE"
if [ "$CALENDAR_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Google Calendar API is working"
elif [ "$CALENDAR_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or expired"
elif [ "$CALENDAR_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Google Calendar API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $CALENDAR_RESPONSE"
fi
echo ""

# Test Google Tasks API
echo "📋 Testing Google Tasks API..."
TASKS_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://www.googleapis.com/tasks/v1/users/@me/lists?key=$API_KEY")
echo "   Status: $TASKS_RESPONSE"
if [ "$TASKS_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Google Tasks API is working"
elif [ "$TASKS_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or expired"
elif [ "$TASKS_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Google Tasks API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $TASKS_RESPONSE"
fi
echo ""

# Test Google People API (Contacts)
echo "👥 Testing Google People API..."
PEOPLE_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://people.googleapis.com/v1/people/me?personFields=names&key=$API_KEY")
echo "   Status: $PEOPLE_RESPONSE"
if [ "$PEOPLE_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Google People API is working"
elif [ "$PEOPLE_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or expired"
elif [ "$PEOPLE_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Google People API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $PEOPLE_RESPONSE"
fi
echo ""

# Test Google Drive API
echo "💾 Testing Google Drive API..."
DRIVE_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://www.googleapis.com/drive/v3/files?key=$API_KEY")
echo "   Status: $DRIVE_RESPONSE"
if [ "$DRIVE_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Google Drive API is working"
elif [ "$DRIVE_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or expired"
elif [ "$DRIVE_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Google Drive API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $DRIVE_RESPONSE"
fi
echo ""

# Test Gmail API
echo "📧 Testing Gmail API..."
GMAIL_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://www.googleapis.com/gmail/v1/users/me/labels?key=$API_KEY")
echo "   Status: $GMAIL_RESPONSE"
if [ "$GMAIL_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Gmail API is working"
elif [ "$GMAIL_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or expired"
elif [ "$GMAIL_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Gmail API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $GMAIL_RESPONSE"
fi
echo ""

# Test Google Sheets API
echo "📊 Testing Google Sheets API..."
SHEETS_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://sheets.googleapis.com/v4/spreadsheets?key=$API_KEY")
echo "   Status: $SHEETS_RESPONSE"
if [ "$SHEETS_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Google Sheets API is working"
elif [ "$SHEETS_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or expired"
elif [ "$SHEETS_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Google Sheets API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $SHEETS_RESPONSE"
fi
echo ""

# Test Google Meet API (this one requires OAuth, so we'll test if it's enabled)
echo "🎥 Testing Google Meet API..."
MEET_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://meet.googleapis.com/v2/spaces?key=$API_KEY")
echo "   Status: $MEET_RESPONSE"
if [ "$MEET_RESPONSE" = "200" ]; then
    echo "   ✅ ENABLED - Google Meet API is working"
elif [ "$MEET_RESPONSE" = "401" ]; then
    echo "   ❌ UNAUTHORIZED - API Key invalid or requires OAuth"
elif [ "$MEET_RESPONSE" = "403" ]; then
    echo "   ❌ DISABLED - Google Meet API not enabled"
else
    echo "   ⚠️  UNKNOWN - Status code $MEET_RESPONSE"
fi
echo ""

echo "=================================================="
echo "🔧 RECOMMENDED ACTIONS:"
echo ""

# Count enabled APIs
enabled_count=0
total_count=6

if [ "$CALENDAR_RESPONSE" = "200" ]; then enabled_count=$((enabled_count + 1)); fi
if [ "$TASKS_RESPONSE" = "200" ]; then enabled_count=$((enabled_count + 1)); fi
if [ "$PEOPLE_RESPONSE" = "200" ]; then enabled_count=$((enabled_count + 1)); fi
if [ "$DRIVE_RESPONSE" = "200" ]; then enabled_count=$((enabled_count + 1)); fi
if [ "$GMAIL_RESPONSE" = "200" ]; then enabled_count=$((enabled_count + 1)); fi
if [ "$SHEETS_RESPONSE" = "200" ]; then enabled_count=$((enabled_count + 1)); fi

echo "📊 APIs Enabled: $enabled_count/$total_count"
echo ""

if [ "$enabled_count" -lt "$total_count" ]; then
    echo "🚨 MISSING APIs - Enable these in Google Cloud Console:"
    echo "   https://console.cloud.google.com/apis/library"
    echo ""
    
    if [ "$CALENDAR_RESPONSE" != "200" ]; then
        echo "   - Google Calendar API"
    fi
    if [ "$TASKS_RESPONSE" != "200" ]; then
        echo "   - Google Tasks API"
    fi
    if [ "$PEOPLE_RESPONSE" != "200" ]; then
        echo "   - Google People API (Contacts)"
    fi
    if [ "$DRIVE_RESPONSE" != "200" ]; then
        echo "   - Google Drive API"
    fi
    if [ "$GMAIL_RESPONSE" != "200" ]; then
        echo "   - Gmail API"
    fi
    if [ "$SHEETS_RESPONSE" != "200" ]; then
        echo "   - Google Sheets API"
    fi
    if [ "$MEET_RESPONSE" != "200" ]; then
        echo "   - Google Meet API"
    fi
else
    echo "🎉 All APIs are enabled! Your portal should work perfectly."
fi
echo ""
echo "=================================================="
