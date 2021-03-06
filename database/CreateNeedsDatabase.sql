CREATE TABLE `need_schemas` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `base_needs` (
  `id` int PRIMARY KEY,
  `fk_schema_id` int,
  `category` varchar(255),
  `varchar` need_name,
   FOREIGN KEY(fk_schema_id) REFERENCES need_schemas(id)
);

CREATE TABLE `need_instances` (
  `id` int PRIMARY KEY,
  `fk_base_need_id` int,
  `fk_user_id` int,
  `fk_campaign_id` int,
  `percent_satisfied` float,
  FOREIGN KEY(fk_base_need_id) REFERENCES base_needs(id),
  FOREIGN KEY(fk_user_id) REFERENCES users(id),
  FOREIGN KEY(fk_campaign_id) REFERENCES campaigns(id)
);


CREATE TABLE `base_satisfiers` (
  `id` int PRIMARY KEY,
  `fk_creator_id` int,
  `varchar` need_name,
   FOREIGN KEY(fk_creator_id) REFERENCES users(id)
);


CREATE TABLE `satisfier_instances` (
  `id` int PRIMARY KEY,
  `fk_base_satisfier_id` int,
  `fk_user_id` int,
  `fk_campaign_id` int,
  `financial_cost` float,
  `environmental_cost` float,
  FOREIGN KEY(fk_base_satisfier_id) REFERENCES base_satisfiers(id),
  FOREIGN KEY(fk_user_id) REFERENCES users(id),
  FOREIGN KEY(fk_campaign_id) REFERENCES campaigns(id)
);


CREATE TABLE `links` (
  `fk_need_id` int,
  `fk_satisfier_id` int,
  `category` varchar(255),
  `satisfaction_contribution` float,
  FOREIGN KEY(fk_need_id) REFERENCES need_instances(id),
  FOREIGN KEY(fk_satisfier_id) REFERENCES satisfier_instances(id)
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `email` varchar(255)
);

CREATE TABLE `campaigns` (
  `id` int PRIMARY KEY,
  `fk_user_id` int,
  `fk_schema_id` int,
  FOREIGN KEY(fk_user_id) REFERENCES users(id),
  FOREIGN KEY(fk_schema_id) REFERENCES need_schemas(id)
);


