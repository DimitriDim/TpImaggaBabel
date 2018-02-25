import { Color } from "./components/color/color.component";
import { Hydrator } from "./hydrator/api/colorImagga.api.hydrator";
import { Client } from "./network/client.network";


new Color(new Client, new Hydrator).initialize();