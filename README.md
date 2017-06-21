## 大宗商品国贸易运营管理平台 Ver 0.0.1
#####Commodity International Trade Operation Management Platform Ver 0.0.1

####系统技术架构
|框架|名称|版本|描述|备注|
|--|--|--|--|--|
|Node.js|系统的主框架|v6.11.0|系统主要的技术堆栈|可以升级到LTS最新版|
|Restify|RESTful API框架|v3.4.0|RESTful API的基本框架|||
|MySQL|关系数据存储|v5.7.0|主要的配置数据和业务模型的结构数据包含字段的定义等|UTF8MP4作为字符集|
|MongoDB|文档化存储|v 3.4.0|订单数据，申报数据|||
|Redis|KV存储|v3.2.9|认证Token|Master-Slave架构|

####系统的数据模型

|表名称|中文名称|描述|备注|
|--|--|--|--|--|
|BusinessMode|业务模式定义|定义5种业务模式|对大宗商品国际贸易的业务模式进行定义 e.g 内贸采购+FOB销售|
|Category|分类定义|大宗商品分类|大宗商品分类，支持无限层级分类 液体散化&大宗散货|
|Commodity|大宗商品的定义|大宗商品定义|定义单位名称和分类等信息|
|CommoditySpec|大宗商品规格|大宗商品规格定义|大宗商品规格|
|Declaration|大宗商申报信息|定义一个完整的大宗商品申报信息||
|Dictionary|字典定义|整个系统的所有用到的字典表的定义|比如货到付款等付款方式的定义|
|FieldDefinition|对申报各字段Schema定义|定义申报字段的schema||
|ProcessDefinition|定义生成订单后的台账操作的流程|台账的操作流程|定义系统的台账和操作的流程|
|ProcessDefinition|台账流程定义|定义生成订单后的台账操作的流程|台账的操作流程|定义系统的台账操作的流程，步骤，所需的附件等信息|
|RuleLibarary|定义规则库|各种业务模式项下的规则库的定义|参见数据库表的定义|
|Supplier|供应商和客户信息|供应商和客户对客户评级|500强、大型上市公司、央企|
|User|用户信息|用于系统的登录的用户信息|可以设置用户名和密码|

####代码&数据库
|代码|位置|描述|
|--|--|--|--|
|后台系统|/usr/local/declarationServer|云主机IP106.14.4.47|
|数据库|commodityDB|IP106.14.4.47 Port 3306||

#### 阿里云主机账号信息
|用户名|密码|描述|
|--|--|--|--|
|root|commodityTrade&|云主机|
|root|commodityTrade&|数据库||


