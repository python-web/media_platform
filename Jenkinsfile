pipeline{
		agent none	
		stages{
				stage('build')
				{
						agent{
								docker{
										image 'yuetianle/mediaplatform:2.1.0'
								}
						}
						steps {
								sh 'pwd'
						}
				}
		}
}
