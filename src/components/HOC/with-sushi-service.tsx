import React from "react";
import {SushiShopServiceConsumer} from "../sushi-shop-service-contex";

export const withSushiShopService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <SushiShopServiceConsumer>
        {
          (sushiShopService: any) => {
            return <Wrapped {...props}
                            sushiShopService={sushiShopService} />
          }
        }
      </SushiShopServiceConsumer>
    )
  }
}

