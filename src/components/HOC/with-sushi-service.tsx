import React from "react";
import {SushiShopServiceConsumer} from "../sushi-shop-service-contex";
import { TypeRequestService } from "../../types";


export const withSushiShopService = () => (Wrapped: React.FC) => {
  return (props: any) => {
    return (
      <SushiShopServiceConsumer>
        {
          (sushiShopService: TypeRequestService) => {
            return (
              <Wrapped
                {...props}
                sushiShopService={sushiShopService} />
            )
          }
        }
      </SushiShopServiceConsumer>
    )
  }
}

