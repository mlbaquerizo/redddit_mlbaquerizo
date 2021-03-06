import React from 'react';
import { shallow } from 'enzyme';
import Article from '../articles';

it('renders without crashing', () => {
	const articles = [{
	"domain":"variety.com",
	"approved_at_utc":null,
	"banned_by":null,
	"media_embed":{},
	"thumbnail_width":140,
	"subreddit":"movies",
	"selftext_html":null,
	"selftext":"",
	"likes":null,
	"suggested_sort":null,
	"user_reports":[],
	"secure_media":null,
	"is_reddit_media_domain":false,
	"link_flair_text":null,
	"id":"7bpytv",
	"banned_at_utc":null,
	"view_count":null,
	"archived":false,
	"clicked":false,
	"report_reasons":null,
	"title":"Terry Crews Files Police Report After Alleging He Was Groped",
	"num_crossposts":0,
	"saved":false,
	"mod_reports":[],
	"can_mod_post":false,
	"is_crosspostable":true,
	"pinned":false,
	"score":11119,
	"approved_by":null,
	"over_18":false,
	"hidden":false,
	"preview":{
		"images":[
			{
				"source":{
					"url":"https://i.redditmedia.com/q78IXdE3VVhFc4dKrv0AkgmI-B67yj9pbx7jMFsdYag.jpg?s=20defd4d654f886c31ae9746670953e4",
					"width":700,
					"height":393
				},
				"resolutions":[
					{
						"url":"https://i.redditmedia.com/q78IXdE3VVhFc4dKrv0AkgmI-B67yj9pbx7jMFsdYag.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=108&s=0d9650de4e8c8e18880eaee06b2c8b85",
						"width":108,
						"height":60
					},
					{
						"url":"https://i.redditmedia.com/q78IXdE3VVhFc4dKrv0AkgmI-B67yj9pbx7jMFsdYag.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=216&s=e16d664991cdba8a7f41a01b598d5128",
						"width":216,
						"height":121
					},
					{
						"url":"https://i.redditmedia.com/q78IXdE3VVhFc4dKrv0AkgmI-B67yj9pbx7jMFsdYag.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=320&s=5b95226662052cc604ae876ae8177508",
						"width":320,
						"height":179
					},
					{
						"url":"https://i.redditmedia.com/q78IXdE3VVhFc4dKrv0AkgmI-B67yj9pbx7jMFsdYag.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f27eb026b2fedcd71e12073bcae95038",
						"width":640,
						"height":359
					}
				],
				"variants":{},
				"id":"UimtXTCD7EyQst6NNdf-RoaBty4eSTJlNi4TUtcy8zM"
			}
		],
		"enabled":false
	},
	"thumbnail":"https://b.thumbs.redditmedia.com/nUuyavwAFyxPjba0ahdYLApudPbXVxOFDIGQajkoJAg.jpg",
	"subreddit_id":"t5_2qh3s",
	"edited":false,
	"link_flair_css_class":null,
	"author_flair_css_class":null,
	"contest_mode":false,
	"gilded":0,
	"downs":0,
	"brand_safe":true,
	"secure_media_embed":{},
	"removal_reason":null,
	"post_hint":"link",
	"author_flair_text":null,
	"stickied":false,
	"can_gild":true,
	"thumbnail_height":78,
	"parent_whitelist_status":"all_ads",
	"name":"t3_7bpytv",
	"spoiler":false,
	"permalink":"/r/movies/comments/7bpytv/terry_crews_files_police_report_after_alleging_he/",
	"subreddit_type":"public",
	"locked":false,
	"hide_score":false,
	"created":1510218781,
	"url":"http://variety.com/2017/biz/news/terry-crews-police-report-sexual-assault-1202610397/",
	"whitelist_status":"all_ads",
	"quarantine":false,
	"author":"buzzkillington99",
	"created_utc":1510189981,
	"subreddit_name_prefixed":"r/movies",
	"ups":11119,
	"media":null,
	"num_comments":713,
	"is_self":false,
	"visited":false,
	"num_reports":null,
	"is_video":false,
	"distinguished":null,
	"comments":[]
}]
  shallow(<Article articles={articles}/>);
});