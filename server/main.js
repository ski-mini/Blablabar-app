export const GMAPS_API_KEY = "AIzaSyAQWIK2OaEcv_9sZf3bO2P92YzWt3HKl70";

Meteor.methods({
    'gmaps.dataByPlace'(placeId){
        result = Meteor.http.call("GET", "https://maps.googleapis.com/maps/api/place/details/json?language=fr&placeid="+placeId+"&key="+GMAPS_API_KEY);
        if(result.statusCode == '200' && result.content){
            return result.content;
        }
    }
});