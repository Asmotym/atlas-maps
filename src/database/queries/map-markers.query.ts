import type { MapMarker } from "../../../netlify/core/database/types";
import { DatabaseClient } from "../client";

export async function getMapMarkers(): Promise<Record<string, any>> {
    return await DatabaseClient.request('map_markers', { action: 'getAll' });
}

export async function insertMapMarker(marker: MapMarker): Promise<Record<string, any>> {
    return await DatabaseClient.request('map_markers', { action: 'insert', marker });
}

export async function deleteMapMarker(marker: MapMarker): Promise<Record<string, any>> {
    return await DatabaseClient.request('map_markers', { action: 'delete', marker });
}

export async function updateMapMarker(marker: MapMarker): Promise<Record<string, any>> {
    return await DatabaseClient.request('map_markers', { action: 'update', marker });
}