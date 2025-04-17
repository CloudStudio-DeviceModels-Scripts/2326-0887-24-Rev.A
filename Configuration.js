function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  //endpoints.addEndpoint("1", "Location", endpointType.locationTracker);
  endpoints.addEndpoint("1", "[Gimnasio]Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "[Gimnasio]Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "[Gimnasio]Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "[Gimnasio]Temperatura Salida Grifos", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "[Vestuarios]Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "[Vestuarios]Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "[Vestuarios]Temperatura Agua Fría", endpointType.temperatureSensor);

  
  //var e = endpoints.addEndpoint("4", "Battery", endpointType.genericSensor);
  //e.variableTypeId = 1308;

}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}