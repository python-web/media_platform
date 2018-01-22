pipeline{
		agent none	
		stages{
				stage('build')
				{
						agent{
								docker{
										image 'yuetianle/mediaplatform'
								}
						}
						steps {
								sh 'pwd'
						}
				}
		}
}
