﻿create table stores(
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR(255) NOT NULL,
	WECHAT_GROUP_ID VARCHAR(255),
	WECHAT_OWNER_ID VARCHAR(255),
	WECHAT_MANAGER_ID VARCHAR(255)[] DEFAULT '{}',
	LOCATION VARCHAR(255),
	IS_PRIVATE BOOLEAN,
	CATALOG VARCHAR(255)[] DEFAULT '{}',
	TAGS VARCHAR(255)[] DEFAULT '{}',
	IS_PAUSED BOOLEAN,
	PAUSED_UNTIL DATE,
	CREATION_DATE DATE,
	RATING NUMERIC(3)
)
